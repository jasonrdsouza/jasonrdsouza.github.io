+++
date = 2013-10-14T21:13:58Z
draft = false
title = "The Ruby Environment"
description = "An introduction to the ruby environment, and the tools necessary to successfully interact with and work in its ecosystem."
+++

Already familiar with programming, and trying to pick up Ruby? Here's a quick intro to the environment.


### Overview
Ruby is a powerful, enjoyable programming language. It is a useful skill to have in your toolbox, and allows quick iteration and results. I use it primarily for scripting and automation, but it can be used for everything from one-off hacks to production websites. Most of the standard and third party libraries have easy to use, well thought out API's, which is a big part of the language design as a whole. Ruby is optimized for programmer happiness and productivity, not performance and scalability. As its creator "Matz" emphasizes:

> Often people, especially computer engineers, focus on the machines. They think, "By doing this, the machine will run faster.
> By doing this, the machine will run more effectively. By doing this, the machine will something something something."
> They are focusing on machines. But in fact we need to focus on humans, on how humans care about doing programming or operating
> the application of the machines. We are the masters. They are the slaves.


### Installation
#### [RVM](https://rvm.io/)

The best way to install Ruby is through a version management tool. The point of one of these is to allow you to have separate versions of the language and libraries installed without interfering with one another. This is especially important if you work with multiple code bases using different implementations of ruby (see below). The most well known ruby version management tool is called RVM. Another popular choice is called [rbenv](http://rbenv.org/).


### Experimentation
#### [PRY](http://pryrepl.org/)

Once you have Ruby installed, the best way to get a feel for it is to experiment with the language and write some code. Ruby comes with a default [REPL](http://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) called IRB, that allows you to write code and see its effect interactively. IRB is pretty decent, but PRY is a better, more powerful ruby REPL with nice features like syntax highlighting and interactive source browsing.


### Libraries
#### [RubyGems](http://rubygems.org/)

The ruby standard library is already pretty full featured, but additional functionality can be acquired through the installation of prepackaged ruby programs and libraries called Gems. Gems are installed using the gem program which comes with ruby. In addition to libraries you can make use of in your code, lots of standalone programs written in ruby are distributed as gems. In fact, the preferred method of installing the aforementioned PRY is through gem.

Installing a gem is done on the command line like so:
```bash
gem install pry
```


### Rails
#### [RubyOnRails](http://rubyonrails.org/)

A good number of the people who program in Ruby first heard about it because of Rails. Rails is a web framework written in Ruby that allows very quick development of webapps. Some people think that Rails is Ruby, but in fact Rails is just one of many web frameworks that exist for the Ruby language (another popular one is [Sinatra](http://www.sinatrarb.com/)). In order to use these frameworks effectively, it is essential to have a good understanding of Ruby.


### Dependency Management
#### [Bundler](http://bundler.io/)

Ruby applications can depend on different gems, and specific versions of those gems to work correctly. Keeping track of all those dependencies can be a pain. To maintain consistency and ease of deployment, it is nice to bundle all the gems and libraries needed for a specific application together and allow installation of the entire bundle. This is the functionality that Bundler provides. It allows a programmatic way of keeping track of dependencies at the application level, and "one-click" installs. Bundler, like most ruby tools, is distributed as a gem.


### Implementations
Ruby is technically a specification of a programming language. Many different implementations of that specification exist, each with slightly different goals. Using RVM, it is easy to install these different implementation side by side, and use whichever one is best suited for the task at hand.

#### [MRI/ YARV](http://www.ruby-lang.org/)

This is the standard Ruby implementation as designed and developed by its creator [Yukihiro "Matz" Matsumoto](http://en.wikipedia.org/wiki/Yukihiro_Matsumoto). When most people think of programming in Ruby, this is the implementation they are talking about. MRI stands for Matz's Ruby Interpreter, which has been the default Ruby implementation since 1995. Recently, the YARV (Yet Another Ruby VM) interpreter was merged in to become the new default interpreter, boasting large speed improvements.

#### [Jruby](http://jruby.org/)

This implementation of Ruby is written in Java, and runs on the [JVM](http://en.wikipedia.org/wiki/Java_virtual_machine). It's main advantage is interoperability with other JVM languages. It also boasts better performance and threading support than MRI, but lacks support for some gems.

#### [IronRuby](http://en.wikipedia.org/wiki/IronRuby)

IronRuby is similar to Jruby, except written in C#, and targeting the [.NET Framework](http://en.wikipedia.org/wiki/.NET_framework). This makes it an ideal candidate for ".NET shops". Unfortunately, it seems as though it is no longer actively maintained.

#### [Rubinius](http://rubini.us/)

Rubinius is an implementation designed for speed and concurrency. The biggest complaint with Ruby currently is that it is slow, and Rubinius aims to fix that. It is itself written in Ruby.


### Other Useful Tidbits
- Ruby files typically end in .rb
- [Rake](http://rake.rubyforge.org/) is a ruby equivalent of Make, frequently used in Ruby/ Rails projects
