# Long-running tasks and notifications

Let people leave a long task and be told when it is done.

- ID: AX-WAI-04
- Moment: 3 Wait - "Is it still working?"
- Maturity: emerging
- Also called: Background task, Notify me, Task queue
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/long-running-tasks
- Licence: CC BY 4.0 (text and figures)

## Story

> When I start a task that takes many minutes, I want to leave and be told when it is done or needs me, so I can get on with my day without checking back.

- **Setting:** Thandi asks for 10 suppliers of recycled boxes near Johannesburg, with prices.
- **Trigger:** It will take about 10 minutes, and her meeting starts in 2.
- **Without it:** She leaves and forgets. 2 hours later she finds the task stuck on 1 question since 9:51.
- **With it:** She taps Start and goes to her meeting. The task keeps going, with a small live status.
- **Outcome:** At 9:53 a notification says it is ready. 1 tap opens the supplier table.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asks | Her ask in the chat. | Plans the work. | 0 s | - |
| Says how long | "This takes about 10 minutes. It keeps going if you close the app." A Notify me switch is on. Start. | Waits for Start. | before it starts | - |
| Running | "Searching supplier sites · 4 of 10", a bar, "You can leave", and Stop. | Works in the cloud. | minutes | Research started. About 10 minutes |
| She leaves | Another app. A small live status at the top: "Research · 6 of 10". | Keeps working. | - | - |
| Told | A notification: "Supplier research is ready" with the result in 1 line - or "needs you" with the question. | Done, or paused for 1 answer. | when it ends or needs her | Supplier research is ready |
| Opens | The result, "Done in 9 min", with the table - or the question with Allow once and Skip this site. | Idle, or goes on after her answer. | on tap | - |
| No notice | Without a notification she comes back by chance at 11:40: "Waiting for you since 9:51 - 2 hours". | Stuck, or long done. | hours later | - |

## On each device

- **Phone:** The phone starts the task, follows it and answers it. The work runs in the cloud. A notification, also on the lock screen, opens straight to the result or the question.
- **Tablet:** As on the phone.
- **Desktop:** The task keeps running in its tab or a task list. A system notification appears when it ends, and the result shows next to the chat.

## Use when

- The work takes minutes or more - research, long reports, agent tasks.
- People have other things to do and shouldn't have to watch.
- The task may stop to ask a question, so people need to know when it is waiting on them.

## Don't use when

- The answer comes within about 10 seconds. People will wait for it. Use Specific loading messages instead.
- People want to watch each step and step in. Use Watch mode and takeover instead.
- The task should run again and again on a schedule. Use Scheduled and background agents instead.

## Anatomy

- **A. Name and time:** "Supplier research · about 10 min". A time people can plan around.
- **B. Live progress:** "4 of 10", with a bar. Real progress, so a glance says how far it got.
- **C. Leave and be told:** Says leaving is safe and that a notification will come when it ends or needs her.
- **D. Stop:** Always there while it runs. Stopping says what was kept.

## Do and Avoid

- **Do:** Names the task and its state, with the result in 1 line. She knows before she taps. (Assistant · nowSupplier research is ready10 suppliers compared. Cheapest: GreenBox, R4.20 a box.)
- **Avoid:** "An update" could mean done, failed or waiting. She has to open the app to find out. (Assistant · nowYour task has an update)
- **Do:** A question is news too. The notification asks it, so the task waits minutes, not hours. (Assistant · 9:51Supplier research needs youCan I sign in to Boxit Trade to see their prices?)
- **Avoid:** The task stopped for 1 answer and told no one. 2 hours were lost. (Opened by chance at 11:40Waiting for you since 9:51 - 2 hours)

## Writing

- Give the time before it starts, as people would say it: "about 10 minutes".
- Say plainly that leaving is safe: "It keeps going if you close the app."
- Title the notification with the task and its state: "Supplier research is ready", "Supplier research needs you". Put the result or the question in the body.
- Send 1 notification when it ends or needs an answer - not 1 per step.

## Accessibility

- Announce the start with the time: "Research started. About 10 minutes".
- Tapping the notification opens the result or the question with focus on its title, not at the top of the chat.
- Progress has a text count ("4 of 10") as well as a bar.
- Never rely on sound alone. The notification text and the chat both carry the news.

## Seen in

- **Gemini Deep Research** (Web and mobile, checked Oct 2026): Takes about 5-10 minutes and people can leave the chat. On the web the report appears next to the thread; on mobile a device notification says it is ready. [Gemini Help: Deep Research](https://support.google.com/gemini/answer/15719111)
- **Claude Dispatch** (Phone and desktop, checked Oct 2026): People assign a task from their phone and their computer does the work. A push notification comes when it is done or when it needs approval. [Claude Help: Assign tasks to Claude from anywhere in Cowork](https://support.claude.com/en/articles/13947068-assign-tasks-to-claude-from-anywhere-in-cowork)
- **ChatGPT agent** (Web and apps, checked Jul 2025): Sent a phone notification when a task was done. The agent has since been replaced by ChatGPT Work. [OpenAI: Introducing ChatGPT agent (17 Jul 2025)](https://openai.com/index/introducing-chatgpt-agent/)

## Related patterns

- Alternative to Thinking and processing steps: For work under a minute, while people watch.
- Often combined with Approval gate: When the task needs a yes, the notification brings people to the gate.
- Often combined with Agent workspace and management: Where people follow and manage running tasks.
- Often combined with Scheduled and background agents: Tasks that run again on a schedule, with the same notifications.

## Sources

- [NN/g - Response times: the 3 important limits](https://www.nngroup.com/articles/response-times-3-important-limits/)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Apple HIG - Notifications](https://developer.apple.com/design/human-interface-guidelines/notifications)
- [Apple WWDC25 - Finish tasks in the background](https://developer.apple.com/videos/play/wwdc2025/227/)
- [Apple WWDC23 - Design dynamic Live Activities](https://developer.apple.com/videos/play/wwdc2023/10194/)
