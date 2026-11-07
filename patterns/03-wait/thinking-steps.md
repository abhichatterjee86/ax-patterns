# Thinking and processing steps

Make 1 to 60 seconds of silence feel like progress, with steps people can open.

- ID: AX-WAI-01
- Moment: 3 Wait - "Is it still working?"
- Maturity: established
- Also called: Stream of thought, Reasoning trace, Thought for 8s, Processing steps
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/thinking-steps
- Licence: CC BY 4.0 (text and figures)

## Story

> When the AI takes more than a few seconds before it answers, I want to see what it is doing right now, so I know it is working on the right thing and can decide whether to wait.

- **Setting:** Dev attaches 3 files and asks for a launch-week plan.
- **Trigger:** The AI needs 10 seconds or more before it can write anything.
- **Without it:** A spinner with no words. After 6 seconds Dev wonders if it is stuck, and asks again.
- **With it:** Each step names what is happening - reading the files, checking the dates - with a timer beside it.
- **Outcome:** The steps fold into 1 line when the answer starts. Dev trusts the plan because he saw the date check.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Sent | The ask, and nothing else yet. | Starts work. | 0 s | - |
| First step | A Thinking header, a timer and the first step in plain words. | Reads the input. | within 1 s | Thinking |
| Next steps | Done steps get a tick; the current one pulses; the next one is faint. | Works step by step. | every 1-3 s | - |
| Last step | The last step runs. The timer keeps counting. | Checks its work. | - | - |
| Answer starts | The steps fold into 1 line - or stay open if set. The answer streams (arrives word by word) below. | Writes the answer. | on the first word | - |
| Done | 1 line, "Thought for 8 s · 5 steps", that opens the steps again. | Idle. | - | Response complete |

## On each device

- **Phone:** Show only the current step, on 1 line, with the timer. The full list opens in a sheet (a panel that slides up from the bottom). When the answer starts, fold to 1 line so the answer gets the screen.
- **Tablet:** The full list fits above the answer. Fold it when the answer starts.
- **Desktop:** The list sits above the answer. For a long run by an agent (an AI that can take actions for you), it sits in a side panel. Each done step can open to show what it found.

## Use when

- The AI regularly takes more than about 3 seconds before the first word.
- The work has real stages people would recognise: reading, searching, checking, drafting.
- Seeing the steps helps people judge the answer - for example, which files or sites it used.

## Don't use when

- Answers start in under a second - streaming alone is enough. Use Streaming response instead.
- There is only 1 stage. Say what it is instead of inventing steps. Use Specific loading messages instead.
- The work runs for minutes while people do something else. Use Long-running tasks and notifications instead.

## Anatomy

- **A. Timer:** Proves time is passing and sets an expectation for next time.
- **B. Current step:** Names what is happening now, in plain words, and pulses gently.
- **C. Done step:** A tick, so progress is visible at a glance.
- **D. Next step:** Faint, so people see what is still to come.
- **E. Open a step:** Shows what the step found - files, dates, sources.

## Do and Avoid

- **Do:** Each step names the real thing it is doing, so people can spot a wrong turn early. (✓ Reading the 3 files you attachedChecking the dates against the calendar)
- **Avoid:** Generic verbs. They look busy but tell people nothing they can check. (✓ ProcessingAnalysing)
- **Do:** The steps fold to 1 line when the answer starts. They are still 1 tap away. (› Thought for 8 s · 5 stepsHere is your launch week: lock the build Monday…)
- **Avoid:** The full list stays open on a phone, and pushes the answer off the screen. (✓ Reading the files✓ Checking the dates✓ Comparing… (+3 more)The answer is below the fold.)

## Writing

- Start each step with a verb and name the thing: "Reading the 3 files you attached", not "Processing".
- Use the person's own nouns - their file names, their dates, the sites it is searching.
- When done, say how long it took: "Thought for 8 s". People learn what to expect.
- Never claim the steps are the AI's full reasoning. If they are a summary, say so.

## Accessibility

- Announce only the start ("Thinking") and the end ("Response complete") - not every step.
- The folded line is a real button with aria-expanded (the code that tells a screen reader if it is open or closed), so people can open the steps again.
- Under reduced motion (a device setting that turns off animation), the pulse on the current step stops. The tick and the words carry the meaning.
- Screen readers do not read the timer every second. It is on screen only.

## Seen in

- **Claude** (Web, checked Oct 2026): A timer and a collapsible thinking section sit above the answer. Opening it shows a summary, not the full chain, and thinking can stop early when safety flags it. [Claude Help: Extended thinking (14 Jan 2026)](https://support.claude.com/en/articles/10574485)
- **Gemini** (Web and apps, checked Oct 2026): A Task opens a work panel listing completed, current and planned steps, with a progress chip that reopens it. [Gemini Help: Tasks](https://support.google.com/gemini/answer/16596215)
- **Perplexity** (Web, checked Jun 2026): A collapsed "Completed N steps" row opens into plain-language steps such as "Searching the web". [AI UX Playground teardown, Jun 2026](https://aiuxplayground.com/teardowns/perplexity/citations)
- **ChatGPT** (Web first, checked Sep 2025): Thinking time can be set to Standard or Extended (Light and Heavy on Pro). It launched on the web, with mobile to follow. [TechRadar, 18 Sep 2025](https://www.techradar.com/ai-platforms-assistants/chatgpt/you-can-now-toggle-gpt-5s-thinking-time-for-faster-or-smarter-answers-heres-how-to-do-it)

## Related patterns

- Alternative to Specific loading messages: 1 specific line instead of a list, for short single-stage waits.
- Often combined with Streaming response: What happens after the steps fold: the answer arrives word by word.
- Often combined with Stop generation: Stop should work during thinking too, not only while writing.
- Alternative to Long-running tasks and notifications: For work that runs for minutes while people leave.
- Often combined with Explanation: Opening a step is the start of showing why the answer came out this way.

## Sources

- [AWS Cloudscape - Thinking](https://cloudscape.design/gen-ai/patterns/thinking/)
- [Shape of AI - Stream of Thought](https://www.shapeof.ai/patterns/stream-of-thought)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [W3C - Understanding 2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)
