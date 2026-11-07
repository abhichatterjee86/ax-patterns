# Quick actions

1-tap asks for the common jobs: summarise, rewrite, translate, explain.

- ID: AX-ASK-08
- Moment: 2 Ask - "How do I tell it what I want?"
- Maturity: established
- Also called: AI actions, Smart actions, Summarise button
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/quick-actions
- Licence: CC BY 4.0 (text and figures)

## Story

> When I need a common job done on what I'm looking at, I want 1 tap to do it, so I don't have to type out the ask every time.

- **Setting:** A supplier thread about late cement has 14 replies.
- **Trigger:** Ravi has 2 minutes before the next truck and needs to know what was agreed.
- **Without it:** He opens the assistant and types the ask with 1 thumb. By the time it answers, the truck is at the gate.
- **With it:** 1 tap on Summarise. 3 lines say what went wrong, what is offered, and the deadline.
- **Outcome:** He taps Draft a reply, checks it, and sends it himself.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Item with actions | The thread, with Summarise, Draft a reply and Translate as chips under the subject. | Idle. | 0 s | - |
| 1 tap | The chip he tapped turns dark. A sheet opens at the bottom. | Starts work on this thread. | on tap | - |
| Working | "Summarising 14 replies" in the sheet. | Reads the thread. | 1-3 s | Summarising 14 replies |
| Result | "Summary of 14 replies" and 3 short points. A draft is marked "Not sent". | Writes. | - | - |
| Next actions | Copy and Draft a reply under a summary. Shorter and Review and send under a draft. | Idle. | when done | Done |

## On each device

- **Phone:** 2 or 3 actions sit as chips under the subject, by the thumb. The result opens in a sheet at the bottom, with the thread still above it.
- **Tablet:** As on desktop in landscape, as on the phone in portrait.
- **Desktop:** The actions sit at the top of the item. The result opens in a side panel, so the original stays in view to check against.

## Use when

- A few jobs cover most of what people want from this kind of item. For example: summarise an email, translate a message, explain an error.
- Typing the ask is slow, like on a phone, or people type the same ask again and again.
- The job is about the whole item on screen, so the AI already knows what "this" is.

## Don't use when

- The job is about 1 part of the item, like 1 sentence. Use Inline action on selection instead.
- The jobs vary too much to name in 1 or 2 words. Use Prompt composer instead.
- The action would send, post or delete something. That needs a check first. Use Approval gate instead.

## Anatomy

- **A. Action chips:** 2 to 4 named jobs, on the item they act on. 1 tap each.
- **B. Result title:** What it is and what it came from: "Summary of 14 replies".
- **C. Result:** Short and easy to scan. Points for a summary, a draft for a reply.
- **D. Next actions:** The likely next jobs, like Draft a reply. A draft is never sent by itself.

## Do and Avoid

- **Do:** Each action names the job in 1 or 2 words, right on the item. (Cement delivery - new dateSummarise · Draft a reply · TranslateHi Ravi, sorry, the truck broke down…)
- **Avoid:** 1 sparkle with no label. People can't tell what it does until they tap, so most never do. (Cement delivery - new date ✦Hi Ravi, sorry, the truck broke down…)
- **Do:** The action makes a draft. Sending is still his own tap. (Reply draftHi Suresh, Friday morning works if…Not sent · Review and send)
- **Avoid:** 1 tap wrote and sent a reply in his name. A quick action should never send. (ReplyReply sent to Suresh)

## Writing

- Name each action with a plain verb: "Summarise", "Draft a reply", "Translate".
- Title the result with what it is and what it came from: "Summary of 14 replies".
- Say plainly when nothing went out: "Not sent".
- Show 2 to 4 actions. Put the rest behind More, not in the row.

## Accessibility

- Actions are real buttons with text labels. An icon alone is not enough.
- Announce the work and the end: "Summarising 14 replies", then "Done".
- Move focus to the result's title when it opens, and back to the action when it closes.
- On phones, each action is at least 44 px tall, with space between them.

## Seen in

- **Gmail** (Android and iOS, checked Jun 2024): A "Summarize this email" button sits under the subject of longer threads. Tapping it opens a sheet with a bullet summary. [9to5Google, 24 Jun 2024 (updated 4 Jul 2024)](https://9to5google.com/2024/06/24/gmail-gemini-summarize-android-ios)
- **Outlook (Copilot)** (Windows, Mac, web, Android and iOS, checked Nov 2026): "Summary by Copilot" sits at the top of an email thread. The summary appears above the email and can include numbered citations that open the message they came from. [Microsoft Support: Summarize an email thread with Copilot in Outlook](https://support.microsoft.com/office/summarize-an-email-thread-with-copilot-a79873f2-396b-46dc-b852-7fe5947ab640)

## Related patterns

- Alternative to Inline action on selection: For 1 selected part, not the whole item.
- Alternative to Suggested prompts: Example asks in a chat, instead of buttons on an item.
- Often combined with Summary: What a good summary looks like once it arrives.
- Often combined with Follow-up suggestions: The next jobs after a result, like Draft a reply.

## Sources

- [NN/g - Prompt controls in GenAI chatbots (Aug 2024)](https://www.nngroup.com/articles/prompt-controls-genai/)
- [AWS Cloudscape - Support prompts](https://cloudscape.design/gen-ai/patterns/support-prompts/)
- [Apple WWDC24 - Get started with Writing Tools](https://developer.apple.com/videos/play/wwdc2024/10168/)
- [Apple WWDC25 - What’s new in Xcode 26](https://developer.apple.com/videos/play/wwdc2025/247/)
