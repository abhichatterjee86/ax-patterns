# Intent preview and plan

Show the plan before the agent starts, so people can fix it early.

- ID: AX-DEL-01
- Moment: 7 Delegate - "Can it act for me?"
- Maturity: emerging
- Also called: Plan preview, Steps to take, Task breakdown
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/intent-preview
- Licence: CC BY 4.0 (text and figures)

## Story

> When I hand a task with several steps to an AI agent, I want to see its plan in plain words before it starts, so I can fix a wrong step while it costs nothing.

- **Setting:** Grace asks the agent to book the coach and museum tickets for Friday's trip.
- **Trigger:** The agent has worked out 4 steps and is ready to use the school card.
- **Without it:** It starts at once and books 32 pupil tickets. The 4 adults have none, and a change costs £40.
- **With it:** The plan lists 4 steps in plain words. Grace sees "32 pupil tickets" and changes it to 36.
- **Outcome:** She taps Start. The plan turns into the progress list, and all 4 steps finish.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asked | The ask. | Works out the steps. | 0 s | - |
| Plan shown | The goal, numbered steps in plain words, and what the agent will use. Nothing has started. | Waits. | before any action | Plan ready for review |
| Fix a step | The person edits 1 step in place. It is marked "Edited by you". | Waits. | on tap | - |
| Start | The person taps "Start · 4 steps" or "I'll do it myself". | Waits. | on tap | - |
| Running | The same list now shows progress: done, now, next. "Working · step 2 of 4". | Follows the plan. | - | Working |
| Done | Every step ticked, and 1 past-tense line of what happened. | Idle. | when done | Done |

## On each device

- **Phone:** The plan is a card in the thread. Each step is 1 line, with its detail under it. Edit opens the step in place, not a new screen.
- **Tablet:** As on desktop.
- **Desktop:** The plan card is wider, so each step and its detail sit on 1 row. Long plans can fold into groups, with the first group open.

## Use when

- The task has 3 or more steps, and a wrong step early on spoils the rest.
- The agent will spend money, time or a booking that is costly to change.
- The ask is open to more than 1 reading - "the class", "Friday", "the team".

## Don't use when

- The task is 1 quick step - a plan for it is just an extra tap.
- Only 1 step is risky. Ask at that step instead of showing the whole plan. Use Approval gate instead.
- People want to watch and steer while it works, not agree a plan first. Use Watch mode and takeover instead.

## Anatomy

- **A. Goal:** The task said back in 1 line, with the date and place filled in.
- **B. Steps:** Numbered, in plain words and real numbers - not tool names or code.
- **C. What it uses:** The accounts, files and people the agent will touch.
- **D. Edit a step:** Fix 1 step in place, without asking for a whole new plan.
- **E. Start:** Names the size of the job. Beside it, a way to do it yourself.

## Do and Avoid

- **Do:** Plain words and real numbers. The mistake - 32, not 36 - is easy to spot. (Year 6 trip · Fri 14 Nov1 Read the class list2 Book a coach for 363 Book 32 pupil tickets4 Email parents the times)
- **Avoid:** The same plan as tool calls. The mistake is in there, but nobody will see it. (Plan1 class_list.read()2 transport.book(n)3 tickets.book(n_pupils)4 notify(parents))
- **Do:** The approved plan becomes the progress list, so people see where the work is. (Working · step 3 of 4✓ Read the class list✓ Booked a coach for 36● Book 36 tickets4 Email parents)
- **Avoid:** Once approved, the plan vanishes. Nobody can tell if the agent is still following it. (Plan approved ✓Working…)

## Writing

- Write each step as a verb and real numbers: "Book a coach for 36", not "Handle transport".
- Say the goal back with the details filled in - date, place, how many.
- Name what the agent will use: "school card", "parent emails".
- Label the start button with the size of the job: "Start · 4 steps", not "OK".

## Accessibility

- Announce "Plan ready for review" in the polite status region. Do not move focus.
- Mark the plan up as an ordered list, so screen readers say "3 of 4".
- Each edit button names its step: "Edit step 3, Book 32 pupil tickets".
- During the run, show done, now and next with icons and words, not colour alone.

## Seen in

- **Claude in Chrome** (Chrome extension, checked Nov 2026): In Manual mode the classic side panel shows a plan of the sites and approach first, with "Approve plan" or "Make changes". Claude will not use sites outside the plan without asking. [Claude Help: Chrome permissions guide](https://support.claude.com/en/articles/12902446-claude-in-chrome-permissions-guide)
- **Gemini Deep Research** (Web and apps, checked Nov 2026): Gemini makes a research plan before it starts. People can "Edit plan" or "Start research". [Gemini Help: Deep Research](https://support.google.com/gemini/answer/15719111)
- **Gemini Task** (Web and apps, checked Nov 2026): A work panel shows each step as "Completed step", "Current step" or "Planned step", so the plan stays visible while it runs. [Gemini Help: Tasks](https://support.google.com/gemini/answer/16596215)

## Related patterns

- Alternative to Approval gate: Ask at the 1 risky step, instead of agreeing the whole plan first.
- Often combined with Thinking and processing steps: The plan's steps can become the steps shown while it works.
- Often combined with Watch mode and takeover: After the plan, watch the work and step in if it goes off plan.
- Often combined with Activity log and undo: What actually happened, step by step, after the run.

## Sources

- [Shape of AI - Action plan](https://www.shapeof.ai/patterns/action-plan)
- [Smashing Magazine - Designing agentic AI: practical UX patterns (Feb 2026)](https://smashingmagazine.com/2026/02/designing-agentic-ai-practical-ux-patterns/)
- [Apple WWDC26 - Xcode, agents, and you](https://developer.apple.com/videos/play/wwdc2026/259/)
- [Apple WWDC26 - Inside Apple Intelligence and Xcode: Special Presentation](https://developer.apple.com/videos/play/wwdc2026/382/)
