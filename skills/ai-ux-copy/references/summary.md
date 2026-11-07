# Summary

Give the short version first, with a way into the long one.

- ID: AX-REA-04
- Moment: 4 Read - "What did it make?"
- Maturity: established
- Also called: TL;DR, Key points, Overview
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/summary
- Licence: CC BY 4.0 (text and figures)

## Story

> When I come back to a long thread or document, I want the short version first, with each point linked to where it came from, so I can catch up in a minute and still check the details.

- **Setting:** Vikram opens a 40-message thread about Thursday's concrete pour.
- **Trigger:** He has 2 minutes before the site meeting.
- **Without it:** He skims the last 5 messages and misses that the pour moved to Thursday.
- **With it:** 3 points sit on top: what changed, who did what, and what is still open.
- **Outcome:** He checks 1 point at its source. Later a reply settles the open question, and the summary updates.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Summarising | The thread opens with a grey placeholder where the summary will be. | Reads the thread. | 0-2 s | Summarising 40 messages |
| Summary | An "AI" label, 3 points with a link to their message, the open question in amber, and "From 40 messages · just now". | Idle. | when ready | Summary ready |
| Check the source | Tapping a point opens its message, highlighted, with a way back. | Idle. | on tap | - |
| Back | The summary, as it was. | Idle. | on tap | - |
| Updated | A new reply arrives. The changed point is highlighted and the card says "Updated · 1 new reply". | Reads the new reply. | when a reply arrives | Summary updated |

## On each device

- **Phone:** A card at the top of the thread with 3 to 5 points. It can be collapsed, and stays collapsed for that thread.
- **Tablet:** As on the phone. In split view the card stays above the list of messages.
- **Desktop:** A Summarize button or a card above the first message. Each point can open its source without losing the summary.

## Use when

- The source is long and people need the short version before deciding to read it - threads, meetings, reports.
- People come back to something that changed while they were away.
- Several people need the same short picture - a handover, a stand-up.

## Don't use when

- The source is short. A summary of 3 lines adds reading instead of saving it.
- Every word matters - a contract, a dose, a legal notice. Show the key passages as they are written.
- People asked a question and want the answer with its sources. Use Citations and sources instead.

## Anatomy

- **A. AI label:** Says in words that the AI wrote this.
- **B. Key points:** 3 to 5 facts: what changed, who does what. The most important first.
- **C. Link to source:** Each point opens the message it came from, so people can check.
- **D. Still open:** What is not decided yet, in amber. Summaries often hide this.
- **E. Scope and time:** "From 40 messages · just now", and a way to read all of it.

## Do and Avoid

- **Do:** Each point links to its message. Checking 1 fact takes 1 tap. (Summary · AIPour moved to Thursday 7 am. › 31Anil booked the pump. › 36)
- **Avoid:** The same facts with no links. To check 1, people search all 40 messages. (Summary · AIThe pour moved to Thursday 7 am because of rain. Anil booked the pump truck…)
- **Do:** Facts, and what is not decided yet. People know what to act on. (Pour moved to Thursday 7 am.Still open: who signs off the rebar check?)
- **Avoid:** "Discussed" and "talked about" hide the result. Nobody can tell that sign-off is still open. (The team discussed the pour date.They also talked about sign-off.)

## Writing

- Put what changed or was decided first, then who does what, then what is still open.
- Write the facts, not the talk: "Pour moved to Thursday 7 am", not "The team discussed the date".
- Say what was summarised and when: "From 40 messages · just now".
- Label it in words: "Summary · AI".

## Accessibility

- Give the summary a heading ("Summary, made by AI") and put it before the thread in reading order.
- Name each source link by its target: "Message 31, from Priya".
- Announce "Summary updated" when it changes. Use the polite status region (the part of the page a screen reader reads out when it is next free). Do not move focus.
- Collapse is a real button that says if the summary is open or closed, and the choice is remembered.

## Seen in

- **Gmail** (Android and iOS, checked May 2025): On longer threads a Gemini summary card sits at the top of the email. It updates when new replies arrive, and people can collapse it. English only at launch. [Google Workspace Updates, 29 May 2025](https://workspaceupdates.googleblog.com/2025/05/gemini-summary-cards-gmail-app.html)
- **Gmail** (Web, checked Nov 2026): "Summarize this email" at the top of a thread gives the key points and replies. "Minimize" hides it. [Gmail Help: AI Overview conversation summaries](https://support.google.com/mail/answer/16561387)
- **Apple Writing Tools** (macOS, checked Nov 2026): For selected text, "Summarize" or "Key Points" gives only the most important points. [Mac User Guide: Use Writing Tools](https://support.apple.com/guide/mac-help/mchldcd6c260/mac)

## Related patterns

- Often combined with Citations and sources: Each point links back to where it came from.
- Often combined with Adjust length and tone: Shorter or more detailed, with 1 control.
- Often combined with Follow-up suggestions: Next asks after a summary: "What do I need to do?"
- Often combined with Generative UI and structured output: A summary card inline, with the full view 1 tap away.

## Sources

- [Shape of AI - Summary](https://www.shapeof.ai/patterns/summary)
- [Nielsen Norman Group - Inverted pyramid: writing for comprehension (2018)](https://www.nngroup.com/articles/inverted-pyramid/)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Apple WWDC25 - What’s new in App Store Connect](https://developer.apple.com/videos/play/wwdc2025/328/)
- [Apple WWDC24 - Get started with Writing Tools](https://developer.apple.com/videos/play/wwdc2024/10168/)
