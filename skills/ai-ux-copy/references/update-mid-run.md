# Update mid-run

Let people add to or correct the ask while the AI is still working.

- ID: AX-WAI-05
- Moment: 3 Wait - "Is it still working?"
- Maturity: emerging
- Also called: Steer mid-generation, Interject, Add instruction
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/update-mid-run
- Licence: CC BY 4.0 (text and figures)

## Story

> When I remember something important while the AI is still working, I want to add it without stopping, so the work done so far is kept and the result includes my change.

- **Setting:** Leila asks for 5 wedding venues for 60 people, under 80,000 dirhams.
- **Trigger:** While it is still checking venues, she remembers: her grandmother uses a wheelchair.
- **Without it:** She has to stop the research and start again. The 7 venues it already checked are lost.
- **With it:** She types the change and taps Update. It says "Got it" and keeps the 7 it already checked.
- **Outcome:** The answer lists 5 step-free venues and says it includes her update.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asks | Her ask in the chat. | Starts work. | 0 s | - |
| Working | "Checking venues · 3 of 12" with a bar. The composer (the box where she types) says "Add to the task", with Stop beside it. | Works. | minutes | Researching |
| Types a change | Her change in the composer. Update appears next to Stop. | Keeps working. | - | - |
| Update sent | Her message in the thread, "Added while working". In the work card: "Got it - only step-free venues. Keeping the 7 already checked." | Takes it in without stopping. | on tap | Update added to the task |
| Uses it | "Checking step-free access". The count keeps going from where it was. | Works with the change. | - | - |
| Queued | If it can't be used now: her message in a drawer (a small panel that slides open), "Queued · runs after this task", with Edit and Remove. | Finishes the run first. | on tap | Message queued |
| Starts again | The old way: "Sending stops the work". The count drops to 0 and 7 checked venues are lost. | Starts over. | on tap | Stopped. Starting again |
| Answer | 5 venues, marked "Includes your update · step-free only". | Idle. | when done | Response complete |

## On each device

- **Phone:** The composer stays open while the AI works, with Stop and Update side by side, each at least 44 px. The update shows in the thread right under the ask.
- **Tablet:** As on the phone.
- **Desktop:** As on the phone. Enter sends the update into the running work; a second shortcut can queue it instead.

## Use when

- The work runs long enough that people think of something while it runs - research, reports, tasks for an agent (an AI that can take actions for you).
- Most of the work done so far is still useful after the change.
- People often add a limit or a detail, rather than change the whole ask.

## Don't use when

- The answer takes a few seconds. Stopping and asking again costs little. Use Stop generation instead.
- The change throws out the whole ask. Start a new version instead. Use Regenerate, edit and branches instead.
- People should agree the plan before any work starts. Use Intent preview and plan instead.

## Anatomy

- **A. The update:** Her message in the thread, marked "Added while working".
- **B. Got it:** 1 line that says what was taken in and what was kept.
- **C. Progress that keeps going:** The count carries on from where it was. Nothing resets.
- **D. Stop:** Still there. Updating and stopping are 2 different buttons.
- **E. Add to the task:** The composer's placeholder (the grey hint text in the box) while it works, so people know they can add to it.

## Do and Avoid

- **Do:** The change joins the running work. What was done is kept, and it says so. (Only step-free venuesChecking venues · 8 of 12Got it. Keeping the 7 already checked.)
- **Avoid:** The only way to add a detail is to stop. Minutes of work are thrown away. (Only step-free venuesChecking venues · 0 of 12Stopped and started again. 7 venues lost.)
- **Do:** If the update can't be used now, say so and show where it waits. (Checking venues · 11 of 12Queued · runs after this task: Only step-free venues)
- **Avoid:** The message was sent mid-run and quietly ignored. The answer misses it. (Only step-free venues5 venues: Dar Amira, Riad Zitoun…2 have steps at the door. Nothing says why.)

## Writing

- Change the composer's placeholder while it works: "Add to the task".
- Name the button for what will happen: "Update" when it joins the work, "Queue" when it waits.
- Confirm in 1 line what was taken in and what was kept: "Got it - only step-free venues. Keeping the 7 already checked."
- Mark the answer: "Includes your update".

## Accessibility

- People can still move keyboard focus to the composer while the AI works. Stop and Update are separate buttons with their own names.
- Announce "Update added to the task" or "Message queued" when it is sent.
- Don't move focus to the work card when the update is taken in.
- Queued messages are a list people can reach by keyboard, with Edit and Remove on each.

## Seen in

- **ChatGPT** (Web and apps, checked Nov 2025): "Update" lets people add context while GPT-5 Pro or Deep Research is still working, without stopping and restarting. [TechRadar, Nov 2025](https://www.techradar.com/ai-platforms-assistants/chatgpt/you-can-now-interrupt-chatgpt-as-it-learns-to-take-feedback-on-the-fly)
- **ChatGPT Work** (Desktop and mobile, checked Jul 2026): While a task runs, people can follow progress, answer its questions and redirect it. [OpenAI: ChatGPT for your most ambitious work (9 Jul 2026)](https://openai.com/index/chatgpt-for-your-most-ambitious-work/)
- **Replit Agent** (Web and mobile, checked Nov 2026): "Steer" sends a follow-up into the running turn; "Queue" saves it for the next turn. Queued messages wait in a drawer above the input, where they can be edited, reordered, deleted or steered now. [Replit Docs: Steer and queue messages](https://docs.repl.it/features/agent/steer-and-queue-messages)

## Related patterns

- Alternative to Stop generation: End the run instead of changing it.
- Alternative to Regenerate, edit and branches: Start a new version when the change is big.
- Often combined with Thinking and processing steps: Where the update shows up in the work.
- Often combined with Long-running tasks and notifications: Long runs are where updates matter most.

## Sources

- [Shape of AI - Controls](https://www.shapeof.ai/patterns/controls)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Apple WWDC26 - Xcode, agents, and you](https://developer.apple.com/videos/play/wwdc2026/259/)
