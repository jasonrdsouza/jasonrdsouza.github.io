---
title: "Homelab Server Setup"
tags: ['homelab', 'caddy']
date: '2020-01-11'
template: post.mustache
---

## Background
I recently decided to set up a new server for my [homelab](https://www.reddit.com/r/homelab/). Unlike my other home servers, which are only accessible over the local network, I wanted this one to be available to the wider internet, with specific services visible on subdomains of a domain I own (`dsouza.io`). I knew this required a reverse proxy like [Nginx](https://www.nginx.com/) or [Caddy](https://caddyserver.com/), but wasn't sure of the exact steps needed. What follows is a lightly edited version of the notes I took along the way to figuring it out.

## Dynamic DNS
Since I use a residential ISP, my home IP address is subject to change over time, so to ensure that a domain name continues to resolve to my home server, I needed to set up [Dynamic DNS](https://en.wikipedia.org/wiki/Dynamic_DNS). This basically involves installing software on your server that communicates with your domain name provider and periodically refreshes the IP address that the domain name provides associates with your domain name.

Most providers make it relatively easy to enable Dynamic DNS. In my case, I use [Google Domains](https://domains.google.com/registrar), and they provide [simple instructions](https://support.google.com/domains/answer/6147083?hl=en) for enabling it.

I chose to set up [`home.dsouza.io`](https://home.dsouza.io) to dynamically point to my residential IP.

## CNAMEs
Since I host most of my services on AppEngine, Google Cloud, or Github, I've only ever had to follow their instructions and create DNS records to point to their servers, and never really spent the time to understand how things work under the hood. Doing it myself made me realize that a [CNAME record](https://en.wikipedia.org/wiki/CNAME_record) simply allows you to point one (sub)domain name to another, allowing you to redirect requests for multiple domains all to the same IP address (and subsequently the same server).

This is useful if you have multiple distinct services running on a single server (or really, behind a single IP address), and want them to each have their own subdomain. In my case, for example, I have a personal wiki service running on the same box as the webserver serving [`home.dsouza.io`](https://home.dsouza.io), but wanted the wiki accessible from [`wiki.dsouza.io`](https://wiki.dsouza.io). CNAME records make this possible.

Once you have the records set up, you can check that the domain names are resolving as expected with the [dig](https://en.wikipedia.org/wiki/Dig_(command)) command line tool. For example:

```bash
jason@dsouza-laptop ~> dig wiki.dsouza.io

; <<>> DiG 9.10.6 <<>> wiki.dsouza.io
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 8343
;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 512
;; QUESTION SECTION:
;wiki.dsouza.io.			IN	A

;; ANSWER SECTION:
wiki.dsouza.io.		3599	IN	CNAME	home.dsouza.io.
home.dsouza.io.		59	IN	A	108.20.205.69

;; Query time: 177 msec
;; SERVER: 192.168.86.1#53(192.168.86.1)
;; WHEN: Mon Jan 11 21:08:26 EST 2021
;; MSG SIZE  rcvd: 78
```

In this case, you can see that [`wiki.dsouza.io`](https://wiki.dsouza.io) points to [`home.dsouza.io`](https://home.dsouza.io), which in turn points to my home server.

## Port Forwarding
With Dynamic DNS enabled, requests to your domain name will resolve to your IP address, but that doesn't mean that they will automatically be able to hit your home server. Most routers have a firewall to disallow incoming traffic. This is a good thing, since the majority of users don't intend to expose any services to the wider internet, but in our case, we need to enable incoming traffic to hit our server. To do that, we can open up specific ports on the routers' firewall and send the traffic that reaches them to a chosen machine running on our local network. This process is colloquially referred to as "[port forwarding](https://en.wikipedia.org/wiki/Port_forwarding)".

Unless you need to expose services on non-standard ports, you likely only want to forward the standard http ports (`80` for regular traffic, and `443` for TLS traffic). They should be forwarded to the local IP address of the machine you're running your reverse proxy on, with any further routing decisions performed by the reverse proxy itself.

*Note that some routers can themselves run a reverse proxy, allowing you to contain all the routing logic to the router itself.*

## Local Firewall
In addition to the router firewall, your server itself may be running a firewall. [UFW](https://wiki.ubuntu.com/UncomplicatedFirewall) is a common firewall frontend for Ubuntu installs, but depending on what OS you're running, something else may be used. Regardless, you'll have to ensure that (at the very least) ports `80` and `443` are unblocked here as well. If you plan to SSH into your server, you'll want to unblock the port you use for that as well.

A minimal sample of useful UFW commands:

```bash
jason@dsouza-server:~$ sudo ufw status # show which ports are currently open
jason@dsouza-server:~$ sudo ufw allow http # allow http traffic
jason@dsouza-server:~$ sudo ufw allow https # allow https traffic
jason@dsouza-server:~$ sudo ufw disable # if things aren't working, you can try temporarily disabling the firewall
jason@dsouza-server:~$ sudo ufw enable # just make sure to enable it again once you figure out the issue
```

## Reverse Proxying
With that in place, requests from both [`wiki.dsouza.io`](https://wiki.dsouza.io) and [`home.dsouza.io`](https://home.dsouza.io) (and any other domains I wish to set up CNAME records for) will reach my server. Then, with a reverse proxy, I can direct those requests to the appropriate local services. The services will be running on the local loopback address of my server, each with a distinct associated port. The reverse proxy is what knows how to translate a given domain into a local port so that the appropriate service handles a request.

### Caddy Example
On my server, I'm using Caddy, and the relevant sections of the Caddyfile look as follows:

```caddy
home.dsouza.io {
  # Set this path to your site's directory.
  root * /var/www/html

  # Enable the static file server.
  file_server

  # Other directives omitted for brevity
  ...
}

perf.dsouza.io {
  reverse_proxy localhost:61208

  # Other directives omitted for brevity
  ...
}

wiki.dsouza.io {
  reverse_proxy localhost:4567

  # Other directives omitted for brevity
  ...
}
```

### NGINX Example
A friend of mine has a more extensive homelab, with many more services running, and uses NGINX. His config file looks something like:

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /var/www/html;

    # Add index.php to the list if you are using PHP
    index index.html index.htm index.nginx-debian.html;

    server_name _;

    location / {
        # First attempt to serve request as file, then
        # as directory, then fall back to displaying a 404.
        try_files $uri $uri/ =404;
    }
}

# WWW
server {
    if ($host = www.mattwilliams.cloud) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;
    server_name www.mattwilliams.cloud;
    location / {
        proxy_set_header Host $host;
        proxy_pass http://127.0.0.1:80;
        proxy_redirect off;
    }
}
server {
    listen 443;
    server_name www.mattwilliams.cloud;
    ssl_certificate /etc/letsencrypt/live/books.mattwilliams.cloud/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/books.mattwilliams.cloud/privkey.pem; # managed by Certbot

    root /var/www/html;
    index index.html index.htm index.nginx-debian.html;
    location / {
    # First attempt to serve request as file, then
    # as directory, then fall back to displaying a 404.
    try_files $uri $uri/ =404;
    }

}

# NextCloud
server {
    listen 80;
    server_name next.mattwilliams.cloud;
    location / {
        proxy_set_header Host $host;
        proxy_pass http://127.0.0.1:81;
        proxy_redirect off;
    }
}
server {
    listen 443;
    server_name next.mattwilliams.cloud;
    location / {
        proxy_set_header Host $host;
        proxy_pass https://127.0.0.1:444;
        proxy_redirect off;
    }
}

# Calibre
server {
    if ($host = books.mattwilliams.cloud) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;
    server_name books.mattwilliams.cloud;
    location / {
        proxy_set_header Host $host;
        proxy_pass http://127.0.0.1:8080;
        proxy_redirect off;
    }
}
server {
    listen 443;
    server_name books.mattwilliams.cloud;
    location / {
        proxy_set_header Host $host;
        proxy_pass http://127.0.0.1:8080;
        proxy_redirect off;
    }
    ssl_certificate /etc/letsencrypt/live/books.mattwilliams.cloud/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/books.mattwilliams.cloud/privkey.pem; # managed by Certbot

}

# Glances System Monitor
server {
    if ($host = perf.mattwilliams.cloud) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;
    server_name perf.mattwilliams.cloud;

    auth_basic           "Administrator's Area";
    auth_basic_user_file /etc/apache2/.htpasswd;

    location / {
        proxy_set_header Host $host;
        proxy_pass http://127.0.0.1:61208;
        proxy_redirect off;
    }
}
server {
    listen 443;
    server_name perf.mattwilliams.cloud;

    auth_basic           "Administrator's Area";
    auth_basic_user_file /etc/apache2/.htpasswd;

    location / {
        proxy_set_header Host $host;
        proxy_pass http://127.0.0.1:61208;
        proxy_redirect off;
    }
    ssl_certificate /etc/letsencrypt/live/books.mattwilliams.cloud/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/books.mattwilliams.cloud/privkey.pem; # managed by Certbot

}

... many more services omitted
```

Both follow a similar pattern of redirecting a subdomain request to a locally running service. This is where the "reverse proxy" name comes from, because unlike a "regular" proxy, which a user goes through in order to access the wider internet, a reverse proxy fronts web accessible resources, serving them at a clients request.

## Success
And with that, navigating to [`home.dsouza.io`](https://home.dsouza.io) resolves to the new box in my house and displays a landing page served by Caddy, and [`wiki.dsouza.io`](https://wiki.dsouza.io) directs clients to the wiki software I have running!
