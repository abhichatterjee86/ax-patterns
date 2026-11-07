# Mode and model selection

Let people pick how the AI should work, in plain words, not model names.

- ID: AX-ASK-09
- Moment: 2 Ask - "How do I tell it what I want?"
- Maturity: established
- Also called: Model picker, Mode switch, Deep research toggle
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/mode-and-model
- Licence: CC BY 4.0 (text and figures)

## Story

> When a question needs more than a quick answer, I want to choose how the AI works in words I understand, so I know what I'll get and how long it will take.

- **Setting:** Joseph wants to stock solar lamps that won't come back broken.
- **Trigger:** The question needs real tests and prices, not a quick guess. He opens the picker.
- **Without it:** The picker lists atlas-2-lite, atlas-2 and atlas-2-deep-r. He guesses, gets a quick general answer, and never knows Research was there.
- **With it:** Each mode says what it does, how long it takes, and how many runs are left today. He picks Research.
- **Outcome:** 5 minutes later he has 3 lamps with sources, marked "Answered with Research".

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Ask typed | His ask in the composer, with a "Fast" chip beside the + button. | Idle. | 0 s | - |
| Picker open | Fast, Thinking and Research, each with 1 line on what it does and how long it takes. Research shows 3 left today. | Idle. | on tap | - |
| Picked | The check moves to Research, and the chip now reads "Research". | Idle. | on tap | Research selected |
| Working | "Researching · reading site 6 of 14 · about 5 min". A quick mode only shows it is writing. | Works in the chosen mode. | seconds to minutes | Researching |
| Answer | The answer streams in (arrives word by word). | Writes. | - | - |
| Labelled | "Answered with Research · 14 sources" under the answer. | Idle. | when done | Response complete |

## On each device

- **Phone:** The mode chip sits in the composer. The picker opens as a sheet from the bottom, 1 row per mode. Rare options go under More.
- **Tablet:** As on desktop: the picker opens as a menu above the chip.
- **Desktop:** The picker opens as a menu above the chip, with room for the description and the time on 1 row.

## Use when

- The AI can work in ways that differ a lot in time, cost or output - a quick answer, careful thinking, long research.
- The right choice depends on the task, and people can judge it once they know what each choice does.
- Some modes have limits, like runs per day, that people should see before they pick.

## Don't use when

- The product can pick well on its own. Offer Auto as the default, and keep the picker for people who want to change it.
- The difference is only how long or formal the answer is. Use Adjust length and tone instead.
- The ask needs exact values, not a way of working. Use Structured prompt instead.

## Anatomy

- **A. Mode chip:** Shows the current mode in the composer, and opens the picker.
- **B. Mode name:** A plain word for how it works: "Research". Not a model name (the name of the AI engine underneath).
- **C. What it does and how long:** 1 line in everyday words, with the time: "Reads many websites and cites them · about 5 min".
- **D. Limit:** "3 left today", in amber, before the pick - not after the run fails.
- **E. Current mode:** A check on the mode in use, so it is clear what sending will do.

## Do and Avoid

- **Do:** Each mode says what it does and how long it takes, in everyday words. (FastQuick answers · secondsResearchReads many websites and cites them · about 5 min)
- **Avoid:** Model names only. People can't tell which one fits, so they guess or never switch. (atlas-2-liteatlas-2atlas-2-deep-r)
- **Do:** The slow mode says what it is doing and how long is left. (Which solar lamps last longest?Researching · site 6 of 14 · about 5 min)
- **Avoid:** A 5-minute mode with no time shown. People think it is stuck and leave. (Which solar lamps last longest?Working…)

## Writing

- Name modes by how they work: "Fast", "Thinking", "Research". If model names appear, put them in a details line.
- Give each mode 1 line in everyday words, with the time: "Reads many websites and cites them · about 5 min".
- Show limits before the pick: "3 left today".
- Label the answer with the mode that made it: "Answered with Research".

## Accessibility

- The chip's name includes the current mode: "Mode: Research".
- The picker is a group of radio options (a set where only 1 can be picked). Each option's description is part of its name, so a screen reader reads them together.
- Announce the change: "Research selected".
- Escape closes the picker and puts focus back on the chip.

## Seen in

- **ChatGPT** (Web first, checked Sep 2025): Thinking time can be set to Standard or Extended (Light and Heavy on Pro). It launched on the web, with mobile to follow. [TechRadar, 18 Sep 2025](https://www.techradar.com/ai-platforms-assistants/chatgpt/you-can-now-toggle-gpt-5s-thinking-time-for-faster-or-smarter-answers-heres-how-to-do-it)
- **Perplexity** (Web and mobile, checked Jun 2025): A mode selector offers Search, Research and Labs. It came to web and mobile before the desktop apps. [InfoQ, Jun 2025](https://www.infoq.com/news/2025/06/perplexity-labs)
- **Claude** (Web, checked Jan 2026): Extended thinking is a toggle in the "Search and tools" menu. Turning it on mid-chat starts a new chat. [Claude Help: Extended thinking (14 Jan 2026)](https://support.claude.com/en/articles/10574485)
- **Gemini** (Gemini app, checked Nov 2025): "Thinking" is an option in the model picker of the Gemini 3 app. [9to5Google, 18 Nov 2025](https://9to5google.com/2025/11/18/gemini-3-pro-app/)

## Related patterns

- Part of Prompt composer: The mode chip lives in the composer.
- Often combined with Specific loading messages: Say what the chosen mode is doing while it works.
- Often combined with Long-running tasks and notifications: Slow modes like Research need a way to leave and be told.
- Often combined with Thinking and processing steps: What a Thinking mode shows while it works.

## Sources

- [Shape of AI - Modes](https://www.shapeof.ai/patterns/modes)
- [Shape of AI - Model management](https://www.shapeof.ai/patterns/model-management)
- [Apple WWDC26 - Create high-quality images using Image Playground](https://developer.apple.com/videos/play/wwdc2026/375/)
