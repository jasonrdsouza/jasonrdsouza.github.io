---
date: '2015-07-11'
template: post.mustache
title: "Caesar Cipher Decryption"
tags: ['crypto', 'programming']
description: "The ability to manipulate a computer to perform tedious tasks on your behalf is an incredibly valuable, and increasingly necessary skill to have. Lots of software engineering deals with large programs, and high level architectural challenges. This post explores the other side of programming... small, one-of scripts designed to solve a specific problem. I'll walk through how I solved a small cryptographic puzzle posed online, and try to explain the process of problem solving via code at a micro-level."
---


Recently, Google ran a [contest](https://plus.google.com/+GoogleforWork/posts/cftsomhu6H4)
to promote their new [Security Key](http://googleonlinesecurity.blogspot.com/2014/10/strengthening-2-step-verification-with.html).
The contest had 5 parts, each of which was a simple [cryptography](https://en.wikipedia.org/wiki/Cryptography)
challenge. They provided an encrypted message, and the first
100 people to submit the decrypted version of the message
received a security key for free. The puzzles provided an easy,
approachable example of the benefits of knowing how to program.
None of the puzzles were terribly difficult, and all could be
done manually in one fashion or another, but with a little
scripting knowledge, you could explain the puzzle to a computer,
and have it do most of the tedious work for you.

As an example, take puzzle #3:

![Google Security Key Challenge #3](/static/posts/google-security-key-challenge-3.png)

Accompanying this puzzle is the hint "Caesar". At first, this text
looks like gibberish, but we know it is in fact
[ciphertext](https://en.wikipedia.org/wiki/Ciphertext). Armed
with our hint, we can begin trying to decode it.

### Thinking it Through

With a little research, we come across something called the
[Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).
A [cipher](https://en.wikipedia.org/wiki/Cipher) is just a set
of instructions for how to encrypt/ decrypt data, and this
particular one is what is known as a
[substitution cipher](https://en.wikipedia.org/wiki/Substitution_cipher).
Wikipedia does a good job explaining how it works:

> A Caesar cipher, also known as Caesar's cipher, the shift cipher,
> Caesar's code or Caesar shift, is one of the simplest and most widely
> known encryption techniques. It is a type of substitution cipher in
> which each letter in the plaintext is replaced by a letter some fixed
> number of positions down the alphabet.

So, to perform encryption via a caesar cipher, you pick a
number (`N`) and a direction (`D`), and shift each letter in
your input text by that many letters in the chosen direction.
In the example pictured below, the number is 3 (`N = 3`), and
the direction is Left (`D = <-`), causing the input letter `E`
to be encrypted to the letter `B`. Notice also how the shifting
"wraps around".

![Caesar Cipher Example](/static/posts/caesar-cipher.png)

This cipher seems like a pretty good candidate to decrypt our
ciphertext. Now, we just have to figure out what `N` and `D` are! First,
a few things to note. The ciphertext includes punctuation, which we are
going to assume is ignored by the cipher. It also includes both upper
and lower case letters, but we'll assume that the cipher is
case-insensitive. Finally, while the caesar cipher is defined in
terms of `N` and `D`, since the shifts "wrap around" (if you
have to shift past the last letter, you wrap around to the first
one), any `(N,D)` pair has an equivalent pair with it's
direction reversed.

More formally, for a given alphabet with `M` letters, a caesar
cipher defined by `(N = n, D = d)` is equivalent to the caesar
cipher defined by `(N = M - n, D = -d)`, keeping in mind that
for any `N`, `N == N % M`. If this is still unclear, I've found
drawing out a picture of equivalent ciphers with their directions
swapped to be illustrative.

Knowing that means we can drop `D` from our list of unknowns,
since there exists a correct value for `N` regardless of the
value of `D`! Furthermore, since we are dealing with the
[english alphabet](https://en.wikipedia.org/wiki/English_alphabet) for
this particular puzzle, we know that there are only 26 possible
values for `N`. This is called the [key space](https://en.wikipedia.org/wiki/Key_space_(cryptography)),
and all we have to do is try each key before 100 other people do,
to find the answer and win a prize! Unfortunately, doing that
manually is rather tedious. Now that we know how to solve the
problem, we need to write a script so that a computer can do
the boring part.

### Scripting and Decrypting

My current scripting language of choice is
[Python](https://www.python.org/), so I'll use that, but
the general concepts are the same regardless of language.

Lets start with the alphabet:

```python
ALPHABET = "abcdefghijklmnopqrstuvwxyz"
```

Now, we need some way to represent the caesar cipher. We know
from earlier that the only initialization parameter the cipher
needs is `N`, and that it should take in a letter, and spit out
the encrypted form of that letter. We can represent the cipher
as a [hash map](https://en.wikipedia.org/wiki/Hash_table), and
write a function that creates the cipher for a given value for `N`:

```python
KEY_SPACE = len(ALPHABET)

def create_caesar_cipher(N):
  # we use the mod operator here to perform the wrap-around mentioned above
  cipher = {ALPHABET[i]: ALPHABET[(i+N) % KEY_SPACE] for i, _ in enumerate(ALPHABET)}
  return cipher
```

With this function to generate a cipher, we can now write a
decryption function that takes in ciphertext, runs it through
a given cipher, and outputs the decrypted text.

```python
from string import punctuation

def decrypt(cipher, ciphertext):
  # remember we need to ignore letter case and punctuation
  decrypted = [letter if letter in punctuation + " " else cipher[letter] for letter in ciphertext.lower()]
  return "".join(decrypted)
```

With those pieces in place, lets try to crack the code with
[brute force](https://en.wikipedia.org/wiki/Brute-force_attack),
aka trying every possible combination. This is the same approach
we were going to take if we did it manually, but it makes sense
now because of how small this cipher's
[key space](https://en.wikipedia.org/wiki/Key_space_(cryptography))
is relative to the speed of our computer. (Remember that the key
space in this case is the amount of possible values for `N`,
which we determined earlier was 26).

The brute force approach can be accomplished like this:

```python
CIPHER_TEXT = "Wuhdw brxu sdvvzrug olnh brxu wrrwkeuxvk. Grq'w ohw dqbergb hovh xvh lw, dqg jhw d qhz rqh hyhub vla prqwkv. Foliirug Vwroo"

for n in range(KEY_SPACE):
  cipher = create_caesar_cipher(n)
  plaintext = decrypt(cipher, CIPHER_TEXT)
  print("{}:\t{}".format(n, plaintext))
```

After running that code, all that's left to do is read through each of
the [plaintext](https://en.wikipedia.org/wiki/Plaintext) entries,
and find the one that makes sense. Here's the output I get... can
you spot the correctly decrypted value?

```text
0:	wuhdw brxu sdvvzrug olnh brxu wrrwkeuxvk. grq'w ohw dqbergb hovh xvh lw, dqg jhw d qhz rqh hyhub vla prqwkv. foliirug vwroo
1:	xviex csyv tewwasvh pmoi csyv xssxlfvywl. hsr'x pix ercfshc ipwi ywi mx, erh kix e ria sri izivc wmb qsrxlw. gpmjjsvh wxspp
2:	ywjfy dtzw ufxxbtwi qnpj dtzw yttymgwzxm. its'y qjy fsdgtid jqxj zxj ny, fsi ljy f sjb tsj jajwd xnc rtsymx. hqnkktwi xytqq
3:	zxkgz euax vgyycuxj roqk euax zuuznhxayn. jut'z rkz gtehuje kryk ayk oz, gtj mkz g tkc utk kbkxe yod sutzny. irolluxj yzurr
4:	aylha fvby whzzdvyk sprl fvby avvaoiybzo. kvu'a sla hufivkf lszl bzl pa, huk nla h uld vul lclyf zpe tvuaoz. jspmmvyk zavss
5:	bzmib gwcz xiaaewzl tqsm gwcz bwwbpjzcap. lwv'b tmb ivgjwlg mtam cam qb, ivl omb i vme wvm mdmzg aqf uwvbpa. ktqnnwzl abwtt
6:	canjc hxda yjbbfxam urtn hxda cxxcqkadbq. mxw'c unc jwhkxmh nubn dbn rc, jwm pnc j wnf xwn nenah brg vxwcqb. lurooxam bcxuu
7:	dbokd iyeb zkccgybn vsuo iyeb dyydrlbecr. nyx'd vod kxilyni ovco eco sd, kxn qod k xog yxo ofobi csh wyxdrc. mvsppybn cdyvv
8:	ecple jzfc alddhzco wtvp jzfc ezzesmcfds. ozy'e wpe lyjmzoj pwdp fdp te, lyo rpe l yph zyp pgpcj dti xzyesd. nwtqqzco dezww
9:	fdqmf kagd bmeeiadp xuwq kagd faaftndget. paz'f xqf mzknapk qxeq geq uf, mzp sqf m zqi azq qhqdk euj yazfte. oxurradp efaxx
10:	gerng lbhe cnffjbeq yvxr lbhe gbbguoehfu. qba'g yrg nalobql ryfr hfr vg, naq trg n arj bar rirel fvk zbaguf. pyvssbeq fgbyy
11:	hfsoh mcif doggkcfr zwys mcif hcchvpfigv. rcb'h zsh obmpcrm szgs igs wh, obr ush o bsk cbs sjsfm gwl acbhvg. qzwttcfr ghczz
12:	igtpi ndjg ephhldgs axzt ndjg iddiwqgjhw. sdc'i ati pcnqdsn taht jht xi, pcs vti p ctl dct tktgn hxm bdciwh. raxuudgs hidaa
13:	jhuqj oekh fqiimeht byau oekh jeejxrhkix. ted'j buj qdoreto ubiu kiu yj, qdt wuj q dum edu uluho iyn cedjxi. sbyvveht ijebb
14:	kivrk pfli grjjnfiu czbv pfli kffkysiljy. ufe'k cvk repsfup vcjv ljv zk, reu xvk r evn fev vmvip jzo dfekyj. tczwwfiu jkfcc
15:	ljwsl qgmj hskkogjv dacw qgmj lgglztjmkz. vgf'l dwl sfqtgvq wdkw mkw al, sfv ywl s fwo gfw wnwjq kap egflzk. udaxxgjv klgdd
16:	mkxtm rhnk itllphkw ebdx rhnk mhhmauknla. whg'm exm tgruhwr xelx nlx bm, tgw zxm t gxp hgx xoxkr lbq fhgmal. vebyyhkw lmhee
17:	nlyun siol jummqilx fcey siol niinbvlomb. xih'n fyn uhsvixs yfmy omy cn, uhx ayn u hyq ihy ypyls mcr gihnbm. wfczzilx mniff
18:	omzvo tjpm kvnnrjmy gdfz tjpm ojjocwmpnc. yji'o gzo vitwjyt zgnz pnz do, viy bzo v izr jiz zqzmt nds hjiocn. xgdaajmy nojgg
19:	pnawp ukqn lwoosknz hega ukqn pkkpdxnqod. zkj'p hap wjuxkzu ahoa qoa ep, wjz cap w jas kja aranu oet ikjpdo. yhebbknz opkhh
20:	qobxq vlro mxpptloa ifhb vlro qllqeyorpe. alk'q ibq xkvylav bipb rpb fq, xka dbq x kbt lkb bsbov pfu jlkqep. zifccloa pqlii
21:	rpcyr wmsp nyqqumpb jgic wmsp rmmrfzpsqf. bml'r jcr ylwzmbw cjqc sqc gr, ylb ecr y lcu mlc ctcpw qgv kmlrfq. ajgddmpb qrmjj
22:	sqdzs xntq ozrrvnqc khjd xntq snnsgaqtrg. cnm's kds zmxancx dkrd trd hs, zmc fds z mdv nmd dudqx rhw lnmsgr. bkheenqc rsnkk
23:	treat your password like your toothbrush. don't let anybody else use it, and get a new one every six months. clifford stoll
24:	usfbu zpvs qbttxpse mjlf zpvs uppuicsvti. epo'u mfu bozcpez fmtf vtf ju, boe hfu b ofx pof fwfsz tjy npouit. dmjggpse tupmm
25:	vtgcv aqwt rcuuyqtf nkmg aqwt vqqvjdtwuj. fqp'v ngv cpadqfa gnug wug kv, cpf igv c pgy qpg gxgta ukz oqpvju. enkhhqtf uvqnn
```

### Closing Thoughts

Writing software is fundamentally about teaching computers to
solve problems for you, and this cryptography challenge is a
quintessential example of how useful a little knowledge of
programming can be. We took a "real world" problem, came up with
an approach to solve it, and implemented that approach in a few
lines of code. Obviously the cryptographic methods used
in this case are toy examples, and the solution is fairly
trivial, but the underlying techniques are useful nonetheless.

The source code to accompany this post can be found in its entirety
[here](https://gist.github.com/jasonrdsouza/a3f2657822f98ef48587).
