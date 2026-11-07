# Activity log and undo

Record every action an agent took, and let people undo the ones they can.

- ID: AX-DEL-05
- Moment: 7 Delegate - "Can it act for me?"
- Maturity: emerging
- Also called: Audit log, Action history, Undo
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/activity-log
- Licence: CC BY 4.0 (text and figures)

## Story

> When an AI agent has changed things for me, I want a list of each thing it did and a way to undo the ones I don't want, so I can trust it with real work.

- **Setting:** Oliver asks the agent to clear Thursday afternoon for a big wedding order.
- **Trigger:** The agent is done. Then he remembers: the design review with Ama is about his new boxes.
- **Without it:** The agent says only "I tidied your week". He has to search his calendar, and the agent can't put it back.
- **With it:** A log lists 5 actions with times. He finds "Declined Design review with Ama" and taps Undo.
- **Outcome:** The meeting is back, and the log adds a line: "You accepted Design review again".

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Report | A header with the count, the time span and how long undo works. Then 1 line per action. | Idle. | when the task ends | Task complete |
| Find it | Each line has a time, a past-tense verb and the target. Safe reads say "Nothing changed". | Idle. | - | - |
| Undo | The person taps Undo on 1 line. Lines that can't be undone say so, and offer a fix instead. | Reverses that 1 action. | on tap | - |
| Undone | The line is struck through, "Undone by you", and a new line records the undo. | Idle. | about 1 s | Action undone |

## On each device

- **Phone:** The log sits in the thread under the result, newest action last. Each Undo is a 44 px target at the end of its line.
- **Tablet:** As on desktop.
- **Desktop:** The chat on the left, the log in a pane on the right, with times in a fixed column so the eye can scan them.

## Use when

- The agent changes more than 1 thing - files, meetings, emails, records.
- Some of its actions can be reversed, and people will want to reverse 1 without losing the rest.
- People need to check later what happened - for a manager, a client or themselves.

## Don't use when

- The action can't be undone and matters - ask before it, not only log after it. Use Approval gate instead.
- The agent only reads and answers. There is nothing to undo - show its steps instead. Use Thinking and processing steps instead.
- People want to go back to a whole earlier version of 1 document. Use Version history and checkpoints instead.

## Anatomy

- **A. Header:** How many actions, when, and how long undo works.
- **B. 1 line per action:** Time, past-tense verb and target. Reads are listed too, marked "Nothing changed".
- **C. Undo:** On each line that can be reversed. Undoes that line only.
- **D. Can't undo:** Said in words on lines that can't be reversed, like a sent email.

## Do and Avoid

- **Do:** 1 line per action, each with its own undo. (09:02 Read 34 emails09:04 Declined Design review · Undo09:05 Moved 1:1 with Sipho · Undo09:06 Emailed Ama · can’t undo)
- **Avoid:** "Undo all" throws away the 2 changes he wanted to keep, and still can't unsend the email. (I tidied your week: declined 2 meetings, moved 1 and emailed Ama.Undo all)
- **Do:** Says it can't be undone and offers the next best thing. (09:06 Emailed AmaSent · can’t undo · Draft a correction)
- **Avoid:** An Undo that can't really unsend the email. People think it's fixed when it isn't. (09:06 Emailed AmaUndo)

## Writing

- Write each line as a past-tense verb and its target: "Declined Design review with Ama".
- Say how long undo works, once, in the header: "Undo works for 24 hours".
- For actions that can't be reversed, say so: "Sent · can't undo". Offer a fix if there is one.
- Record the undo as a new line, starting with "You": "You accepted Design review again".

## Accessibility

- Mark the log up as an ordered list, oldest first, with the time in each item's text.
- Each Undo button names its action: "Undo: Declined Design review with Ama".
- Announce "Action undone" politely after an undo, and keep focus on that line.
- Struck-through text also says "Undone by you" in words, for people who can't see the line.

## Seen in

- **Cursor** (Desktop, checked Nov 2026): Checkpoints save the agent's edits automatically. "Restore Checkpoint" on an earlier request rolls them back. They cover only agent changes and are kept apart from Git. [Cursor docs: Checkpoints](https://docs.cursor.com/agent/chat/checkpoints)
- **Gemini Task** (Web and apps, checked Nov 2026): The work panel has a "Files" list of the files Gemini read or updated during the task. [Gemini Help: Tasks](https://support.google.com/gemini/answer/16596215)
- **Windows Copilot Actions** (Windows, checked Nov 2025): The Agent Workspace is described as "auditable". People can review what actions have been taken. [Windows Insider Blog (17 Nov 2025)](https://blogs.windows.com/windows-insider/2025/11/17/copilot-on-windows-copilot-actions-begins-rolling-out-to-windows-insiders/)

## Related patterns

- Often combined with Approval gate: Ask before what can't be undone. The log records the answer.
- Often combined with Autonomy dial: The more the agent does alone, the more people need the log.
- Alternative to Version history and checkpoints: Go back to a whole earlier version, instead of undoing 1 action.
- Often combined with Scheduled and background agents: Agents that ran while you were away report back with a log.

## Sources

- [Smashing Magazine - Designing agentic AI: practical UX patterns (Feb 2026)](https://smashingmagazine.com/2026/02/designing-agentic-ai-practical-ux-patterns/)
- [AWS Cloudscape - Timeline overview](https://cloudscape.design/gen-ai/patterns/timeline-overview/)
- [Apple Human Interface Guidelines - Generative AI](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Apple WWDC25 - What’s new in Xcode 26](https://developer.apple.com/videos/play/wwdc2025/247/)
