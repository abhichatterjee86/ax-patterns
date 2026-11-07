# Scheduled and background agents

Let an agent run on a schedule or in the background, and report back briefly.

- ID: AX-DEL-08
- Moment: 7 Delegate - "Can it act for me?"
- Maturity: emerging
- Also called: Scheduled tasks, Routines, Background jobs
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/scheduled-agents
- Licence: CC BY 4.0 (text and figures)

## Story

> When I need the same check done every day, I want an agent to run it on a schedule while I am away and tell me only what changed, so I can act on it in a minute.

- **Setting:** Mei asks the agent to check 3 job boards every weekday at 8:00.
- **Trigger:** On Tuesday it runs at 8:00 while she makes breakfast.
- **Without it:** She checks 3 boards by hand each morning - or gets a long log and misses the 1 good job in line 6.
- **With it:** A notification says "3 new jobs · 1 fits your rate", and names the job.
- **Outcome:** She opens the contract review and replies. The card shows the next run: Wed 8:00.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Schedule set | 1 card: the name, when it runs, what it does, the next run, Pause and Edit. | Waits for the time. | once | - |
| Running | If the person looks: "Running now · board 2 of 3". Usually nobody is looking. | Works in the background. | at 8:00 | - |
| Reports back | 1 notification with what changed, not what it did. | Idle until the next run. | when the run ends | Daily job check finished |
| Needs you | The run stopped at a step only the person can do. It says which step, and what is already done. | Paused. Keeps the work so far. | as soon as it is stuck | Daily job check needs you |
| Opens it | The short report in the chat, with the 1 item that matters marked and an action on it. | Idle. | on tap | - |
| Next run | The card shows when it runs next, with Pause and Edit. | Waits. | - | - |

## On each device

- **Phone:** The report arrives as a notification, often on the lock screen, so the first line must carry the news. Tapping it opens the report in the chat.
- **Tablet:** As on desktop.
- **Desktop:** A notice appears in the corner of the app, and the report sits in the chat. A list of schedules lets people pause or edit each one.

## Use when

- The same check or task repeats - daily, weekly, or when something happens.
- The result matters only when something changed.
- The work can finish without the person - it reads, collects or drafts.

## Don't use when

- The person needs the answer now. Run it while they wait. Use Long-running tasks and notifications instead.
- Each run sends, pays or deletes, and nobody is there to stop it. Ask first. Use Approval gate instead.
- Nothing changes from day to day. A daily note would only be noise.

## Anatomy

- **A. Which run:** The agent's name, when it ran, and how much it covered.
- **B. What changed:** 1 line with the news and the numbers.
- **C. The 1 that matters:** Marked in the list, with the reason: fits your rate.
- **D. Schedule controls:** Next run, Pause and Edit, always 1 tap away.

## Do and Avoid

- **Do:** The first line is the news. It works on a lock screen. (Assistant · nowDaily job check3 new jobs · 1 fits your rate: contract review, due Fri)
- **Avoid:** The first line is the log. The good job is cut off after 2 lines. (Assistant · nowDaily job checkFinished. 8:00 Opened board 1. 8:00 Searched…)
- **Do:** Says which step needs the person, and that the rest is kept. (Daily job check needs youBoard 3 asks you to sign in. 2 of 3 boards are done.)
- **Avoid:** "Task failed" - she can't tell why, or whether to start again. (Daily job checkTask failed.)

## Writing

- Name the agent by its job: "Daily job check", not "Task 3".
- Put the news first, with numbers: "3 new jobs · 1 fits your rate".
- When it is stuck, say the step and what is done: "Board 3 asks you to sign in. 2 of 3 boards are done."
- Show the next run as a day and time: "Next run: Wed 8:00".

## Accessibility

- The notification's first line makes sense alone - it is what screen readers and watches read first.
- Announce a finished run only if the app is open: "Daily job check finished".
- Pause and Edit are real buttons with the agent's name in them.
- Give times as words and numbers, not only a clock icon: "Every weekday at 8:00".

## Seen in

- **ChatGPT Work** (Web, apps and desktop, checked Jul 2026): Scheduled Tasks repeat a task on a schedule or when an event happens, or watch for changes over time - for example, checking dashboards each morning and sending a report. [OpenAI: ChatGPT for your most ambitious work (9 Jul 2026)](https://openai.com/index/chatgpt-for-your-most-ambitious-work/)
- **Gemini Task** (Web and apps, checked Nov 2026): People tell Gemini when to run a task, such as a daily 8AM update. "More options" on the task chip pauses or resumes it. Schedules do not run if the device is off. [Gemini Help: Tasks](https://support.google.com/gemini/answer/16596215)
- **Claude Dispatch** (Phone and desktop, checked Nov 2026): People assign a task from their phone and the desktop does the work. A push notification arrives when it is done or needs approval. A cloud session keeps working when the computer is off. [Claude Help: Dispatch](https://support.claude.com/en/articles/13947068-assign-tasks-to-claude-from-anywhere-in-cowork)

## Related patterns

- Often combined with Autonomy dial: Decide in advance what the agent may do while nobody is watching.
- Often combined with Activity log and undo: The full record of a run, behind the short report.
- Often combined with Agent workspace and management: 1 place to see every schedule and pause it.
- Alternative to Long-running tasks and notifications: 1 long task the person starts and waits for, instead of a repeating one.

## Sources

- [Apple Human Interface Guidelines - Generative AI](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Smashing Magazine - Designing agentic AI: practical UX patterns (Feb 2026)](https://smashingmagazine.com/2026/02/designing-agentic-ai-practical-ux-patterns/)
- [Apple WWDC26 - What’s new in Shortcuts](https://developer.apple.com/videos/play/wwdc2026/310/)
