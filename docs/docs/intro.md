---
sidebar_position: 1
---

# Introduction

> Seriously? You want **another** monorepo tool?!

So you've broken your monolithic codebase into a monorepo separating concerns into separate packages. You're able to take advantage of shared code, tooling and reuse it across your monorepo. But you had to break your monorepo up further due to different teams wanting to use different tools, move at a faster pace and you just don't have the bandwidth to build out tooling and infrastructure to easily support them all. Now you're consistently working across multiple (mono)repos and there are multiple packages shared across them. It's a pain to manually run `npm link` for each and every package. Wouldn't it be convenient if you could have a massive monorepo linking them all together? Here's where `CoSpace` comes in.

<!-- For example lets say you have a monorepo with an SDK from your Platfrom team, and you're working on an app from one of the Product teams.  -->

`CoSpace` is by no means perfect, but it's super helpful.
