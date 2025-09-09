---
title: What Happens When You Stop Trying to Fix AI and Start Designing Around It
slug: designing-around-ai-limitations
description: '  Reflections from my first panel at École 42 on AI reliability – what I learned from deploying three AI systems, killing one startup, and why I''m now exploring what happens when you work with AI''s limitations instead of against them'
tags:
  - musings
  - technical
  - events
  - work
added: 2025-09-09T06:57:57.982Z
---

Reflections from my first speaking panel and three years of building with imperfect models

Thursday night at École 42, sitting on my first panel discussing AI reliability, I found myself articulating something I've been discovering through painful iteration: we're solving the wrong problem.

## The Reliability Trap

Four speakers, four perspectives, but in a sense we all seemed to agree: AI components need to become more reliable. Better models, stricter validation, tighter controls. The entire industry seems locked in this pursuit of deterministic behavior from fundamentally stochastic systems.

I tried to offer a different framing: monolithic precision versus redundant resilience. The German engineering approach of over-building everything versus the Japanese philosophy of multiple failsafes. But even these frameworks assume we're trying to "solve" AI's unpredictability.

What if unpredictability isn't the bug but the feature we haven't learned to use?

## Three Systems, One Evolution

Over three years, I've built three different AI systems, each teaching me to embrace more of what AI actually is rather than fighting what it isn't.

GAMA started with the dream of perfect orchestration - DSPy routers, enforced transitions, deterministic paths through multi-agent conversations. We achieved 95% routing accuracy. It worked. It was also fighting the fundamental nature of language models with every constraint.

Koïnè went further, wrapping AI in layers of protection - guardrails at ingress, sandboxed execution, human approval gates. We had 50 French product managers testing it, building real prototypes. Then Figma launched native AI and killed our market overnight. Perfect technical reliability meant nothing against bad timing.

The lesson wasn't that we failed, but rather that  we were optimizing for the wrong thing.

## The Third Way

My current work takes this philosophy to its logical extreme. Instead of adding more constraints when models degrade, what if degradation itself becomes the design material? Instead of preventing context overflow, what if forgetting becomes meaningful? Instead of fighting temporal limitations, what if those exact boundaries create the experience?

I can't share specifics - yet - but imagine products where:

* Technical limitations define the creative space rather than constrain it
* The model's breaking point isn't hidden but celebrated
* Users navigate the chaos rather than being protected from it
* The unreliability creates emotions that perfect systems never could

This isn't about making excuses for bad AI. It's about recognizing that some of the most profound human experiences come from imperfection, transience, and loss of control.

## Variable Geometry Design

Creative sectors have an inherent advantage here - we can reshape experiences around what technology actually does rather than forcing it to meet rigid specifications. When models hallucinate, that becomes the surprising element users didn't know they wanted. When context windows overflow, episodic experiences feel more natural than forced continuity.

Gaming particularly becomes the perfect laboratory. Not because the stakes are lower (though they are), but because players already expect to navigate systems, learn their quirks, master their limitations. Every great game is built around constraints - limited lives, finite resources, countdown timers. Why should AI be different?

## Beyond Language Models

This philosophy becomes even more radical when you move beyond text to world models - AI that generates entire realities rather than just words. Here, degradation isn't a minor inconvenience; it's spectacular. Worlds that can't maintain coherence for more than a minute. Physics that forget their own rules. Spaces that dissolve into dream logic.

Most see this as proof the technology isn't ready. I see it as the most honest creative medium we've ever discovered.

## The Phenomenology of Degradation

Working with these world models whose output often deteriorates after 60 seconds has taught me something profound: there's honesty in admitting failure rather than hiding it. When you design assuming perfection, every crack becomes a crisis. When you design assuming degradation, every moment of coherence becomes precious.

The technical details don't matter as much as the philosophical shift. We're moving from:

* "How do we make this reliable?" to "What does unreliability enable?"
* "How do we prevent failure?" to "How does failure create meaning?"
* "How do we maintain state?" to "What does forgetting allow?"

## Software That IS AI

We're approaching a fundamental shift in what software can be. Not applications that use AI, but software that is AI - where the unpredictability isn't wrapped in safety layers but becomes the core material developers work with.

Imagine development environments where:

* You don't write code to prevent edge cases but to make them meaningful
* The engine's limitations become your creative constraints
* Degradation patterns become as important as feature lists
* The infrastructure assumes chaos and builds beauty from it

This isn't about making AI tools. It's about making tools for AI - infrastructure that lets creators work with these models exactly as they are, broken and beautiful, to build things we haven't imagined yet.

## The Infrastructure Question

The real challenge isn't making world models reliable. It's building the scaffolding that lets creators turn unreliable world models into experiences people want. Not hiding the seams but making the seams part of the aesthetic. Not preventing degradation but giving creators the tools to choreograph it.

Think of it like the early days of sampling in music. The technology was "broken" - low bit rates, obvious artifacts, clear limitations. But artists didn't wait for perfect sampling. They made those artifacts part of the sound. Lo-fi became an aesthetic choice. Degradation became desirable.

We need the same shift for AI-native software. Infrastructure that doesn't apologize for AI's nature but amplifies it. Engines that treat temporal limitations as design boundaries. Frameworks where forgetting is a first-class feature.

## A Different Future

What excites me isn't the promise of AGI or perfect reasoning or models that never hallucinate. It's the possibility that we're discovering an entirely new medium - one where:

* Permanence is impossible
* Control is an illusion
* Degradation is guaranteed
* And somehow, because of all this, not despite it, we can create experiences that move people

The teams building this future won't be the ones with the most compute or the best benchmarks. They'll be the ones who stopped waiting for AI to get better and started building for AI as it actually is.

## The Invitation

I'm building something in this space. Not fixing world models but creating infrastructure for those who want to work with them as they are. Tools for creators who see temporal limitations as creative constraints. Engines for developers who understand that sometimes the most profound experiences come from systems on the edge of collapse.

This changes how we build, not just what we build.

***

If this resonates, I'm looking for collaborators who understand that the most interesting territory isn't in making AI reliable but in making unreliability beautiful. Who see infrastructure not as safety nets but as amplifiers for chaos. Who want to build tools that let others create with AI's actual nature, not its promised future.

Thursday's panel asked how to make AI agents reliable. I'm asking: what if we built infrastructure that achieves reliability through design rather than constraints?
