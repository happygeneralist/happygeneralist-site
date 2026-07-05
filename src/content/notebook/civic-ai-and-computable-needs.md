---
title: Civic AI and computable needs
description: A working argument that civic AI systems need a stronger model of human, civic and institutional needs than correlation, sentiment or delivery efficiency alone can provide.
date: 2026-07-05
status: rough
maturity: draft
themes:
  - civic design intelligence
  - AI-assisted design
  - civic needs
  - user needs
  - public service
tags:
  - civic AI
  - computable needs
  - civic needs
  - user needs
  - AI-assisted design
  - public service
entry_type: essay
source_note: Working Happygeneralist theory note. Claims should be treated as provisional and reviewed before being used as formal argumentation.
related:
  - llm-training-and-user-needs
  - user-needs-patterns
  - user-needs-drift
  - user-needs-erasure
  - civic-design-intelligence
---

## Working argument

Many current “Civic AI” initiatives are at risk of being too thin because they treat human needs mainly as inferred patterns in language, behaviour or service data.

That may be useful for summarisation, triage, pattern detection or operational support. But it is not enough for civic design, public accountability or rights-sensitive service work.

The stronger claim to test is this: civic AI systems need a formal, machine-readable model of needs if they are going to do more than accelerate existing institutional processes.

Without that model, AI may help institutions move faster while still failing to understand what people need, what the system is obliged to protect, or when harm should trigger explanation, review or redress.

## The architecture gap

Institutional AI is often framed around productivity: faster drafting, faster analysis, faster routing, faster summarisation, faster case handling.

That is not inherently bad. Public services are often overloaded, and better tools can reduce avoidable burden.

The problem is that speed is not the same as legitimacy.

A civic system does not only need to process more information. It needs to preserve the relationship between:

- evidence
- user needs
- civic needs
- institutional obligations
- decisions
- outcomes
- redress

If AI improves throughput while weakening that relationship, it can create a more efficient version of the same underlying failure.

## Semantic detection is not civic reasoning

A language model may be able to detect that someone sounds upset, confused or frustrated.

That is semantic detection.

But civic reasoning needs a different question:

```text
Has this person been blocked from something the institution has a responsibility to make possible, protect or repair?
```

That question cannot be answered by sentiment alone. It requires a model of the need at stake, the evidence for that need, the relevant obligation, the barrier or burden involved, and the consequence of failure.

This is where a civic AI architecture may need needs to become first-class objects rather than loose text fragments.

## What “computable needs” might mean

“Computable needs” does not mean reducing human experience to a simplistic score.

It means making needs explicit enough that a system can reason about them, trace them, test them and expose when they are being ignored or distorted.

A computable need might carry attributes such as:

- who the need affects
- what the person must be able to accomplish, understand, decide, access, maintain or resolve
- what evidence supports the need
- what civic obligation or capability is implicated
- what barriers or burdens block the need
- what outcomes would indicate the need is being met
- what thresholds should trigger review, escalation or redress
- what decisions or artefacts currently depend on the need

This is not a claim that every need can be perfectly formalised. It is a claim that civic AI needs more structure than latent pattern detection if it is going to support accountable public-service work.

## Why first-class needs matter

If needs are not first-class objects, they are easy to lose.

They can disappear into summaries, user stories, content tasks, case notes, dashboards, policy aims or model outputs. They may still be present in language, but no longer govern the work.

If needs are first-class objects, they can become part of the system’s reasoning layer.

That could make it possible to ask better questions:

- Which need is this decision serving?
- What evidence supports that need?
- Has the need drifted from the original research?
- Has a civic need been collapsed into a service task?
- What burden has been shifted onto the person?
- Should this pattern trigger review or redress?
- Which outcomes show capability restoration rather than only task completion?

## Risks if the substrate is missing

The risk is not that civic AI simply “fails”. The risk is that it appears to work while deepening existing institutional weaknesses.

Possible failure modes include:

### Faster user needs drift

AI can generate more delivery artefacts, summaries and recommendations while moving further away from the underlying need.

### Efficiency theatre

Institutions may gain visible productivity while quality, trust, dignity or outcomes do not improve.

### Context loss

Long-running AI-supported analysis can lose the civic anchors established early in the work, especially when the system does not preserve those anchors as explicit objects.

### Weak contestability

If the system cannot explain which need, obligation or evidence shaped a decision, people cannot meaningfully challenge the decision.

### Shifted human debt

Hidden burden may move from the institution onto the public, practitioners or downstream services, while the formal system records apparent efficiency.

## A more careful version of the claim

The strong version of this argument would be:

```text
Civic AI must treat needs as computable first-class objects or it will collapse into faster institutional optimisation.
```

That may be directionally useful, but it is too absolute for now.

A more careful working version is:

```text
Civic AI systems are unlikely to support legitimate, rights-sensitive or needs-led public-service work unless they can represent needs, obligations, evidence and redress triggers as explicit objects in the system.
```

That is the argument this entry should develop.

## Link to Civic Design Intelligence

This is one of the theoretical underpinnings of Civic Design Intelligence.

The design intelligence system is partly an attempt to make civic knowledge objects more explicit: not only as documentation, but as reusable structures that could eventually support better reasoning, review and accountability.

The immediate goal is not to automate civic judgement. The goal is to make the evidence, needs, assumptions, blockers and decisions visible enough that human judgement has something better to work with.

## Questions to develop later

- What attributes does a need require before it can be treated as a computable object?
- Which kinds of needs should remain qualitative, contestable or deliberately non-automated?
- How should civic needs, user needs and internal operational needs relate?
- What would a redress trigger look like in a needs ontology?
- How can AI support capability restoration without pretending to measure dignity directly?
- How can context rot be reduced by preserving civic anchors as explicit objects?
- What should remain human judgement even if the system can compute a signal?
