# Agent workspace and management

Give people 1 place to see, start and manage the agents working for them.

- ID: AX-DEL-07
- Moment: 7 Delegate - "Can it act for me?"
- Maturity: speculative
- Also called: Agent dashboard, Fleet view, Task board
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/agent-workspace
- Licence: CC BY 4.0 (text and figures)

## Story

> When several AI agents (AIs that can take actions for me) are working for me at once, I want 1 place that shows which ones need me. Then I can unblock them first and leave the rest alone.

- **Setting:** Siobhán has 4 agents running: invoices, a weekly report, travel and a supplier check.
- **Trigger:** The supplier check has been waiting for her yes since 07:15.
- **Without it:** Each agent lives in its own chat. She opens 4 threads to find the 1 that is stuck.
- **With it:** The list puts "Needs you" at the top, in words. She opens it beside the list.
- **Outcome:** She approves Kente Ltd. The agent is running again, and "None need you" shows at the top.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Workspace | A count by status, then 1 row per agent: name, what it is doing, time, status. | Agents keep working. | on open | - |
| Needs you | The agent waiting for a person sits first and says so in words. | That agent is paused. | while it waits | 1 agent needs you |
| Hunt for it | With newest first, the waiting agent is at the bottom - on a phone, off the bottom of the screen. | Still paused. | - | - |
| Open it | The agent's work so far and its question. Pause and Stop are always there. | Paused. | on tap | - |
| Answer | The person approves. The row changes to Running. | Resumes. | on tap | - |
| Back to list | The count updates: "None need you". | Agents keep working. | - | Supplier check is running again |

## On each device

- **Phone:** A list, with agents that need you first. Opening 1 fills the screen, with a back link to the list. Waiting agents also send a notification.
- **Tablet:** As on desktop.
- **Desktop:** The list on the left, the open agent on the right. People can work down the list without losing their place.

## Use when

- People run 3 or more agents, or the same agent many times, and lose track of them in chat.
- Agents wait for people, and a waiting agent costs time.
- People need to start, pause or stop agents, not only read what they did.

## Don't use when

- People run 1 task at a time. Keep its status in the chat. Use Long-running tasks and notifications instead.
- The only thing to do is say yes to 1 action. Send the question to the person, not to a dashboard. Use Approval gate instead.
- Agents run on a timetable and people only want the results. Use Scheduled and background agents instead.

## Anatomy

- **A. Count:** How many agents are in each status, needs-you first.
- **B. Status in words:** Needs you, Stopped, Running, Done - with an icon, not colour alone.
- **C. Needs you first:** Agents waiting for a person sort to the top.
- **D. What it is doing:** A line of progress: "Step 3 of 5 · drafting reminders".
- **E. New agent:** Start an agent from the same place you manage them.

## Do and Avoid

- **Do:** Sorted by what needs a person. The waiting agent is the first thing seen. (Supplier check · Needs youTravel booking · StoppedInvoice chaser · RunningWeekly report · Done)
- **Avoid:** Newest first. The agent that has waited longest sinks to the bottom. (Invoice chaser · RunningWeekly report · DoneTravel booking · StoppedSupplier check · Needs you)
- **Do:** Status in words and an icon. It reads the same in any colour. (Supplier check⚠ Needs you)
- **Avoid:** A dot alone. Needs you and Stopped are both warm colours and look alike. (Supplier check●)

## Writing

- Name agents by their job, not a model name: "Invoice chaser", "Supplier check".
- Use the same 4 status words everywhere: "Needs you", "Stopped", "Running", "Done".
- Write progress as step and action: "Step 3 of 5 · drafting reminders".
- Say why an agent stopped, in 1 line: "Card declined at checkout".

## Accessibility

- Status is a word in each row's name, not only a colour or icon.
- Announce "1 agent needs you" politely when an agent starts waiting, not on every progress change.
- Each row is 1 link or button, at least 44 px tall, named by the agent and its status.
- When an agent opens beside the list, move focus to its heading, and back to the row on close.

## Seen in

- **Gemini Task** (Web and apps, checked Nov 2026): Task threads sit in the sidebar, and up to 15 can run at once. A progress chip opens each task's work panel. A Scheduled page lists schedules to pause or resume. [Gemini Help: Tasks](https://support.google.com/gemini/answer/16596215)
- **Microsoft 365 Copilot** (Web and desktop, checked May 2026): The redesigned app puts agents, conversations and history in a rail on the left side. [Help Net Security (29 May 2026)](https://www.helpnetsecurity.com/2026/05/29/microsoft-365-copilot-redesign/)

## Related patterns

- Often combined with Approval gate: What people see when they open an agent that "Needs you".
- Often combined with Scheduled and background agents: Scheduled agents show up here between runs.
- Often combined with Activity log and undo: Open an agent to see each thing it did.
- Alternative to Long-running tasks and notifications: For 1 long task, a status in the chat is enough.

## Sources

- [AWS Cloudscape - Agent management](https://cloudscape.design/gen-ai/patterns/agent-management/)
- [Microsoft Design - Designs for the frontier future (May 2025)](https://microsoft.design/articles/designs-for-the-frontier-future/)
- [Apple WWDC26 - Inside Apple Intelligence and Xcode: Special Presentation](https://developer.apple.com/videos/play/wwdc2026/382/)
- [Apple WWDC26 - Xcode, agents, and you](https://developer.apple.com/videos/play/wwdc2026/259/)
