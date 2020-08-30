---
date: '2013-10-19'
template: post.mustache
draft: false
title: "On Technical Debt"
tags: ['engineering']
description: "Technical debt is not universally bad, in the same way that regular debt is not universally bad. This post is a summary of my thoughts on how to think about and deal with technical debt in an intelligent manner."
---


Technical debt as a software development concept is important to fully understand and quantify. In practice, however, many developers only understand it at a very high level. It is certainly stressed in school and the workplace that clean design is important, and most people have a notion of debt being a bad thing, but fundamentally, it is not that simple. Just as businesses take on debt strategically, so to should programmers.

## Definition

The term "technical debt" was first coined by [Ward Cunningham](http://en.wikipedia.org/wiki/Ward_Cunningham) to describe the future time investment that software developers take on to enable quicker immediate results. Essentially, he was describing taking shortcuts in the short term writing of software to produce results quickly, at the expense of longer development time in the future. In a software setting, debt equates to time, similar to how debt equates to money in finance. There are two general types of technical debt: unintentional debt and deliberate debt. Unintentional debt is typically due to lack of experience, and can mostly be mitigated through code reviews, pair programming with a more senior developer, and the general oversight of experienced software engineers. Intentional debt is the purposeful accumulation of debt in order to achieve a goal (speed of delivery, meeting a deadline, etc.). This is the interesting type, and the one I want to focus on.


## Intentional Debt

Intentional technical debt, as [Steve McConnell](http://www.stevemcconnell.com/) puts it, is

> "Optimizing for the present instead of the future."

Examples of such debt can include:

- Putting off writing tests
- Releasing code without proper comments & [self description](http://en.wikipedia.org/wiki/Self-documenting)
- Duct taping a change onto an existing codebase instead of properly refactoring
- Avoiding properly fixing a legacy system due to its expected retirement

The thing is, in some cases, doing the above makes sense. Technical debt is not something to be avoided like the plague, one must simply be judicious in their accumulation of it. Always ensure that the benefit of taking on the debt outweighs the perceived interest payments down the road (exactly like financial debt). As noted earlier, interest payments in this case refer to the time spent performing maintenance, and debugging issues that occur down the road due to the debt. Taking on too much debt leads to a team or individual spending most of their time paying off interest, and very little adding new value.

An example of a situation where taking on technical debt may make sense is an important approaching deadline. In that case, the benefit from shipping on time may outweigh the cost of the debt. Getting the product shipped, and paying down the debt after the deadline could likely yield a net positive outcome. Sometimes, it also makes sense to take on a little debt here and there in the interest of moving fast ("speed wins" mentality). If the accumulated interest "payments" from such debt are small, they may never even need to be re-payed. It is, however, important to be smart about this, and keep the overall debt manageable. If the time spent paying back technical debt starts to overshadow pushing out new features, it's time to re-prioritize (the financial concept of a [debt ratio](http://www.investopedia.com/terms/d/debtratio.asp) works well to put this in perspective).

[Seb Rose](https://twitter.com/sebrose) once said,

> "There are times when you must incur technical debt to meet a deadline or implement a thin slice of a feature.
> Try not to be in this position, but if the situation absolutely demands it, then go ahead.
> But (and this is a big BUT) you must track technical debt and pay it back quickly or things go rapidly downhill.
> As soon as you make the decision to compromise, write a task card or log it in your issue tracking system to
> ensure that it does not get forgotten.
>
> If you schedule repayment of the debt in the next iteration, the cost will be minimal. Leaving the debt unpaid
> will accrue interest and that interest should be tracked to make the cost visible. This will emphasize the effect
> on business value of the project's technical debt and enables appropriate prioritization of the repayment.
> The choice of how to calculate and track the interest will depend on the particular project, but track it you must.

> Pay off technical debt as soon as possible. It would be imprudent to do otherwise."


## Borrowing Intelligently

The main thing to keep in mind is that developing software comes with unexpected problems and constraints, and sometimes it is necessary to "get it done" at the expense of "doing it right". Without a proper understanding of technical debt, these situations can compound and [rot](http://en.wikipedia.org/wiki/Software_rot) your project from the inside out. Then, when it finally gets too bad to further put off, the investment necessary to pay off the accumulated debt is far greater than anticipated or acceptable. Understanding when it makes sense to take on debt, and when it is necessary to bite the bullet and invest the extra time up front is an important trait of any skilled software engineer. When adding debt does make sense, tracking it and ensuring it is paid back as soon as possible is crucial. Anything less is gambling with productivity.
