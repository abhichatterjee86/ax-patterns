# Explanation

Say why the AI did this, in words a person can act on.

- ID: AX-TRU-08
- Moment: 6 Trust - "Can I rely on it?"
- Maturity: emerging
- Also called: Why this?, Reasoning, Explainability
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/explanation
- Licence: CC BY 4.0 (text and figures)

## Story

> When the AI flags, ranks or changes something of mine, I want to know why in plain words, so I can fix it or push back on the first try.

- **Setting:** Wanjiru adds a taxi receipt from the airport, late at night.
- **Trigger:** The AI check marks it "Needs review".
- **Without it:** No reason, or only a model score (a raw number from the AI). She sends it again unchanged, and the AI flags it again.
- **With it:** She taps Why? and sees 2 reasons with the numbers, the rule they come from, and what she can do.
- **Outcome:** She adds 1 line about the late flight. It goes to her manager on the first try.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Checking | "Checking" with dots on the new expense. | Checks. | 0-1 s | Checking your expense |
| Flagged | "Needs review" in amber, with a Why? button beside it. | Done. | when done | 1 expense needs review |
| Why | Each reason with its numbers, the rule it comes from, and what to do next. | - | on tap | Explanation opened |
| Acts | People do what the explanation said - here, add a reason. | - | - | - |
| Resolved | The expense moves on, or - without a usable reason - comes back flagged again. | - | - | Sent for approval |

## On each device

- **Phone:** Why? sits next to the flag. The explanation opens in place under the item, so the numbers and the fix are on 1 screen.
- **Tablet:** As on desktop.
- **Desktop:** Why? opens a popover (a small card that floats over the page) next to the item. Longer detail - the full rule, past cases - sits behind a link in the popover.

## Use when

- The AI makes a decision about people's things - flags, ranks, rejects, recommends, changes.
- People can do something about the reason - fix the input, add context, appeal.
- A wrong decision costs people time or money.

## Don't use when

- People want to see the AI's steps while it works, not the reason for a result. Use Thinking and processing steps instead.
- People need to check where facts came from. Use Citations and sources instead.
- People need to know how sure the AI is, more than why. Use Confidence display instead.

## Anatomy

- **A. The decision:** "Needs review" - what the AI decided, in amber, in words.
- **B. Why?:** 1 tap from the decision. Always there when the AI decides something.
- **C. Reasons:** 2 or 3, in plain words, with the real numbers: KSh 4,200 against a KSh 3,000 limit.
- **D. Where it comes from:** The rule or data behind the reason, linked, so people can check it.
- **E. What to do:** The next step, and who makes the final decision.

## Do and Avoid

- **Do:** The reason, with the numbers and the rule. People know what is wrong. (Needs reviewKSh 4,200 is over the KSh 3,000 taxi limit.From Travel policy 4.2)
- **Avoid:** A model score says how sure the AI is, not why. People cannot act on it. (Needs reviewRisk score 0.82 (limit 0.75))
- **Do:** Ends with what people can do, and who makes the final decision. (23:40 is outside work hours.To send it, add a reason. Your manager decides.)
- **Avoid:** A reason with no way on. People feel judged by a machine and stop trusting it. (23:40 is outside work hours.This decision is final.)

## Writing

- Start each reason with the fact, then the rule: "KSh 4,200 is over the KSh 3,000 limit."
- Use the person's numbers and names, not model terms like score, feature or weight.
- Give 2 or 3 reasons at most. Put the rest behind a link.
- End with the next step: "To send it, add a reason."

## Accessibility

- Name the button with the item: "Why does Taxi, KSh 4,200 need review?".
- Announce "Explanation opened", and move focus to the first reason.
- Write reasons as a real list, so screen readers say how many there are.
- Do not use amber alone for the decision - always say it in words.

## Seen in

- **IBM Carbon** (Design system, checked Nov 2026): The AI label opens an explainability popover - the first layer of explanation. The template has Overview, Supporting details, Artifacts and resources, and Additional actions. [Carbon: AI label usage](https://carbondesignsystem.com/components/ai-label/usage/)
- **ChatGPT** (Web and apps, checked Nov 2026): Sources can appear below a response, to review the past chats, memories, instructions or files used. The help page says Sources may not show every factor that shaped a response. [OpenAI Help: Memory FAQ](https://help-lb.openai.com/en/articles/8590148)

## Related patterns

- Often combined with AI label and disclosure: The label is often the door to the explanation.
- Often combined with Citations and sources: Link each reason to the rule or data it comes from.
- Alternative to Confidence display: Shows how sure the AI is. Use it with reasons, not instead of them.
- Often combined with Escalation and human handoff: When people disagree with the reason, let them reach a person.

## Sources

- [Microsoft HAX Toolkit - G11 Make clear why the system did what it did](https://www.microsoft.com/en-us/haxtoolkit/guideline/make-clear-why-the-system-did-what-it-did/)
- [Google PAIR Guidebook - Explainability + Trust](https://pair.withgoogle.com/chapter/explainability-trust/)
- [Carbon for AI - explainability](https://carbondesignsystem.com/guidelines/carbon-for-ai/)
- [Apple WWDC21 - Discoverable design](https://developer.apple.com/videos/play/wwdc2021/10126/)
- [Apple WWDC26 - What’s new in Shortcuts](https://developer.apple.com/videos/play/wwdc2026/310/)
