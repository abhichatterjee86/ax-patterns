# Error, refusal and limits

Say no clearly, say why, and offer a way on.

- ID: AX-TRU-04
- Moment: 6 Trust - "Can I rely on it?"
- Maturity: established
- Also called: Refusal, Rate limit, Content policy, Error state
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/errors-and-refusals
- Licence: CC BY 4.0 (text and figures)

## Story

> When the AI cannot give me what I asked for, I want to know what happened, why, and what I can do now, so I am not stuck or left guessing.

- **Setting:** Ana asks for deep research on e-bikes under £1,500.
- **Trigger:** She has used today's deep research.
- **Without it:** "Something went wrong." She tries 3 times, then gives up.
- **With it:** It says what happened, when it resets, and that quick answers still work - with a button for 1.
- **Outcome:** She gets 3 bikes to look at now, and a full report tomorrow.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Sent | The ask. | Starts work. | 0 s | - |
| Working | Dots, or the first words of the answer. | Works. | - | Generating a response |
| Partial answer | For a dropped connection: the words written so far stay on screen. | Writes, then fails. | - | - |
| The problem | 1 line on what happened, 1 on why, what still works, and 1 main way on. | Stopped. | at once | The problem's title |
| Way on | The person picks the way on. It is a real action, not a link to help. | Idle. | on tap | - |
| Answer | A useful answer, in the same thread. | Writes. | - | Generating a response |
| Done | The thread goes on as normal. | Idle. | - | Response complete |

## On each device

- **Phone:** The message sits in the thread where the answer would be - not a pop-up. Buttons are full-width or side by side at 44 px.
- **Tablet:** As on the phone.
- **Desktop:** The same message in the thread. A limit that affects the whole app can also show once in the composer (the box people type in), near Send.

## Use when

- Any AI feature. Errors, refusals and limits will happen. The only choice is how they look.
- The AI can refuse some asks for safety or policy reasons.
- There are usage limits, quotas or modes that run out.

## Don't use when

- The AI could answer, but is unsure - show how sure it is instead. Use Confidence display instead.
- The AI needs more detail to answer - ask a question, not an error. Use Escalation and human handoff instead.
- An agent (an AI that can take actions for you) is about to do something risky - ask first, before anything fails. Use Approval gate instead.

## Anatomy

- **A. What happened:** 1 plain line, in the first person or about the thing - never a code.
- **B. Why:** 1 short reason: a dropped connection, a safety reason, a limit and when it resets.
- **C. What still works:** Kept words, or what the person can still do now.
- **D. Main way on:** 1 real action: try again, a different mode, a safer version of the ask.
- **E. Second way on:** A quieter option - copy what is here, report, or a reminder.

## Do and Avoid

- **Do:** Says what happened, when it changes, and gives 1 way on that works now. (You’ve used today’s deep researchIt resets at 5:30 am. Quick answers still work.Get a quick answer)
- **Avoid:** A code and a vague retry. People try again, hit the same wall, and leave. (Something went wrong. (Error 429)Please try again later.)
- **Do:** A short, plain no, and a safe way to get what the person really needs. (I can’t help find where a private person lives.Contact them through the app)
- **Avoid:** A long apology that blames policy and gives no way on. (I’m sorry, but as an AI I am unable to assist with that request as it may violate our usage policies and guidelines…)

## Writing

- Lead with what happened, in plain words: "The answer stopped part-way", "You've used today's deep research".
- Give the reason in 1 line. For limits, give the reset time, not only "later".
- Refuse once, briefly, without a lecture. Then offer what you can do.
- Never show an error code as the main message. Put it in a details row if support needs it.

## Accessibility

- Announce the title once in the polite status region (the part of the page a screen reader reads out when it is not busy) - not the whole message.
- Do not move focus to the error. Make the main way on the next thing in tab order (the order the Tab key moves through).
- Do not rely on colour: the alert icon and the words carry the meaning.
- Partial answers stay as text, so people using screen readers do not lose them.

## Seen in

- **Claude** (Web, checked Oct 2026): Extended thinking can be cut short when safety systems flag it, with a note that the rest of the thinking is unavailable. [Claude Help: Extended thinking (14 Jan 2026)](https://support.claude.com/en/articles/10574485)
- **Gemini** (Web and apps, checked Oct 2026): Deep Research warns people when they are near the daily limit, before they run out. [Gemini Help: Deep Research](https://support.google.com/gemini/answer/15719111)
- **Microsoft 365 Copilot apps** (Web and desktop, checked Jun 2026): App guidelines ask for explicit loading, disabled, success and error states, with recovery in the app itself - not in the model's text. [Microsoft Learn: MCP Apps UI guidelines](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/plugin-mcp-apps-ui-guidelines)

## Related patterns

- Often combined with Stop generation: A stopped answer keeps its words, like a dropped one.
- Often combined with Regenerate, edit and branches: Try again is the main way on after most errors.
- Alternative to Confidence display: When the AI can answer but is not sure.
- Often combined with Suggested prompts: After a refusal, examples of what the AI can do help people ask again.

## Sources

- [AWS Cloudscape - Generative AI chat](https://cloudscape.design/gen-ai/patterns/generative-ai-chat/)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Microsoft Learn - MCP Apps UI guidelines](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/plugin-mcp-apps-ui-guidelines)
- [Apple WWDC25 - Explore prompt design & safety for on-device foundation models](https://developer.apple.com/videos/play/wwdc2025/248/)
- [Apple WWDC26 - Build with the new Apple Foundation Model on Private Cloud Compute](https://developer.apple.com/videos/play/wwdc2026/319/)
