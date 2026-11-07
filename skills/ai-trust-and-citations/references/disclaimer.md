# Disclaimer

Say what the AI may get wrong, once, in the right place, in plain words.

- ID: AX-TRU-03
- Moment: 6 Trust - "Can I rely on it?"
- Maturity: established
- Also called: AI can make mistakes, Legal notice
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/disclaimer
- Licence: CC BY 4.0 (text and figures)

## Story

> When an AI answer could lead me into a costly mistake, I want 1 plain warning about this answer, where I am reading, so I know what to check before I act.

- **Setting:** Rosa asks if her landlord can keep her whole deposit for a small stain.
- **Trigger:** The answer sounds sure. But the rules depend on where she lives.
- **Without it:** The only warning is a grey "AI can make mistakes" under every answer. She has stopped seeing it.
- **With it:** The answer ends with 1 line: general information, not legal advice, rules differ by city. And where to get help.
- **Outcome:** She calls a free tenant help line before she writes to her landlord.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asked | The question. | Starts. | 0 s | - |
| Pop-up (avoid) | A dialog before every answer. People tap I understand without reading. | Waits. | every time | Dialog: AI can make mistakes |
| Answer | The answer streams in. The quiet line under the composer is always there. | Writes. | - | Generating a response |
| Caveat | For high-stakes topics only: 1 line in amber at the end of the answer, about this answer, with a next step. | Writes. | end of the answer | - |
| Done | The caveat stays with the answer, so it is there when people come back or share it. | Idle. | when done | Response complete |

## On each device

- **Phone:** The caveat is part of the answer, so it scrolls with it. The quiet line under the composer may wrap to 2 lines - keep it short.
- **Tablet:** As on desktop.
- **Desktop:** The quiet line sits centred under the composer. The caveat sits at the end of the answer, with its link.

## Use when

- Answers can be wrong in ways that cost people money, health, or legal trouble.
- The answer depends on things the AI may not know - where people live, their contract, their history.
- People may act on the answer without checking anything else.

## Don't use when

- People need to know which content the AI made, not what it may get wrong. Use AI label and disclosure instead.
- The AI cannot or should not answer at all - say so, and offer a way on. Use Error, refusal and limits instead.
- People need to see how sure the AI is about each part. Use Confidence display instead.

## Anatomy

- **A. Caveat in the answer:** About this answer and this topic, in 1 line, in amber. Only when the stakes are high.
- **B. Next step:** Where to check or get help. A warning with no next step only worries people.
- **C. Quiet line:** 1 short, general line under the composer. Always there, never in the way.

## Do and Avoid

- **Do:** About this answer, where people are reading, with what differs. (Often not. A landlord can usually keep money only for…⚠ General information, not legal advice. Rules differ by city.)
- **Avoid:** The same grey line under every answer. After a day, people stop seeing it. (Often not. A landlord can usually keep money only for…AI can make mistakes.)
- **Do:** Gives a next step people can take. (⚠ General information, not legal advice.Find free tenant help near you)
- **Avoid:** A pop-up before every answer. People tap through it without reading and learn to ignore it. (Before you continueAI can make mistakes. Our terms apply.I understand)

## Writing

- Say what may be wrong and why: "Deposit rules differ by city and state." Not only "AI can make mistakes".
- Give 1 next step: "Find free tenant help near you", "Check with your pharmacist".
- Keep the quiet line under 8 words: "AI can make mistakes. Check important info."
- Write it for people, not for lawyers. Put the legal text behind a link.

## Accessibility

- Do not rely on amber alone. Start the caveat with a warning icon that has a text name, like "Caution".
- Keep the caveat inside the answer's text, so it is read in order with the answer.
- The quiet line must pass 4.5:1 contrast, even though it is quiet.
- Never trap focus in a pop-up that blocks every answer. If a 1-time notice is needed, it can be dismissed and not shown again.

## Seen in

- **Microsoft 365 Copilot Chat** (Microsoft 365 app, checked Nov 2025): The line "AI-generated content may be incorrect" under the compose box was hidden by default, "based on customer feedback". Admins can turn on a bolder version with a link to their own policy. [Windows Latest, 2 Nov 2025](https://www.windowslatest.com/2025/11/02/microsoft-365-copilot-drops-ai-can-make-mistakes-alert-by-default)
- **SAP Fiori** (Design system, checked Nov 2026): A general line - "AI can make mistakes. Check for accuracy." - goes below AI prompt inputs. Content-specific lines say "Generated with AI" or "Predicted with AI", then "Verify before use." [SAP Fiori: AI Notice Base Concept](https://www.sap.com/design-system/fiori-design-web/v1-139/foundations/best-practices/global-patterns/ai-notice-base-concept)
- **AWS Cloudscape** (Design system, checked Nov 2026): A disclaimer is an optional part of the chat, for legal or other important information. Teams decide with their product team whether they need one. [Cloudscape: Generative AI chat](https://cloudscape.design/patterns/genai/generative-AI-chat/)

## Related patterns

- Often combined with AI label and disclosure: The label marks which part is AI; the disclaimer says what may be wrong.
- Often combined with Citations and sources: Sources let people check the answer the disclaimer warns about.
- Alternative to Confidence display: Shows how sure the AI is, part by part, instead of 1 general warning.
- Often combined with Capability disclosure: Say what the AI cannot do before the first ask, not after every answer.

## Sources

- [Apple HIG - Generative AI, raise awareness about hallucinations (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Microsoft HAX Toolkit - G2 Make clear how well the system can do what it can do](https://www.microsoft.com/en-us/haxtoolkit/guideline/make-clear-how-well-the-system-can-do-what-it-can-do/)
- [Shape of AI - Caveat](https://www.shapeof.ai/patterns/caveat)
- [Apple WWDC26 - Principles of great design](https://developer.apple.com/videos/play/wwdc2026/250/)
- [Apple WWDC25 - Explore prompt design & safety for on-device foundation models](https://developer.apple.com/videos/play/wwdc2025/248/)
