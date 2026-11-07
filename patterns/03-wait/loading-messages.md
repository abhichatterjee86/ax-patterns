# Specific loading messages

Say what the AI is doing right now, not just that it is busy.

- ID: AX-WAI-03
- Moment: 3 Wait - "Is it still working?"
- Maturity: established
- Also called: Status messages, Progress copy, Loading states
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/loading-messages
- Licence: CC BY 4.0 (text and figures)

## Story

> When the AI takes a few seconds before it answers, I want to see what it is doing right now, so I know it is working on the right thing and not stuck.

- **Setting:** Nadia sends her 40-page lease with 1 question: "Can I keep a cat?"
- **Trigger:** The answer takes about 8 seconds - long enough to wonder if anything is happening.
- **Without it:** A spinner and "Processing…" for 8 seconds. She can't tell if it read her file or if it is stuck.
- **With it:** 1 line says what is happening now: reading page 20 of 40, then finding the parts about pets.
- **Outcome:** The answer names clause 14.2. She trusts it - she saw it read the right file.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Sent | Her question and the file name in the ask bubble. Send has turned into Stop. | Starts work. | 0 s | - |
| Reading | "Reading lease.pdf · page 20 of 40", with the count going up. | Reads the file. | after about 1 s | Reading lease.pdf |
| Finding | The line changes: "Finding the parts about pets". | Searches the file. | - | Finding the parts about pets |
| Checking | "Checking clause 14.2 and 3 others". | Checks the matches. | - | Checking 4 clauses |
| Answer | The line goes away. The answer streams (arrives word by word) in its place. | Writes. | about 8 s | Generating a response |
| Done | The answer, naming the clause it came from. | Idle. | when done | Response complete |

## On each device

- **Phone:** 1 line under the ask. Long file names are cut in the middle (lease-2026…final.pdf), so the end stays readable.
- **Tablet:** As on the phone.
- **Desktop:** As on the phone, with room for the count on the same line.

## Use when

- The wait is longer than about 1 second, so people notice it.
- The AI does work people would recognise - reading a file, searching, checking. Naming it shows it is on track.
- There is 1 stage at a time, so 1 line is enough.

## Don't use when

- The answer starts in under 1 second. A message would only flicker. Use Streaming response instead.
- The work has several stages people may want to check afterwards. Use Thinking and processing steps instead.
- The work takes minutes. People should be free to leave. Use Long-running tasks and notifications instead.

## Anatomy

- **A. Moving indicator:** Small dots that show the AI is still working. They stop when motion is reduced.
- **B. Verb and object:** "Reading lease.pdf". What it is doing, to what - in her words, with her file name.
- **C. Count:** "page 20 of 40". A real count when there is one. Never a made-up percent.
- **D. Stop:** Send turns into Stop for the whole wait.

## Do and Avoid

- **Do:** Names the work and her file. She can see it is on the right track. (Can I keep a cat?Reading lease.pdf · page 20 of 40)
- **Avoid:** "Processing…" for 8 seconds. It could be reading, stuck, or doing the wrong thing. (Can I keep a cat?Processing…)
- **Do:** Under 1 second, skip the message. The answer itself shows it is working. (0.4 sYes, with written consent. Clause 14.2…)
- **Avoid:** A message that shows for a blink reads as a glitch, not a status. (0.4 sLoading…then the answer, a blink later)

## Writing

- Use a verb and the real thing: "Reading lease.pdf", "Searching 3 sites". Not "Processing…" or "Thinking…".
- Add a count when there is a real one: "page 20 of 40".
- No end punctuation and no "please wait": "Finding the parts about pets".
- Don't promise what you don't know. Avoid "Almost done" unless it is.

## Accessibility

- Put the line in a polite status region (a part of the page a screen reader announces on its own, when there is a pause). Announce when the stage changes, not every page count.
- Don't move focus to the message. People keep their place.
- With reduced motion (a device setting that turns off animation), the dots stand still. The words still change.
- Stop stays a real button named "Stop" for the whole wait.

## Seen in

- **Perplexity** (Web, checked Jun 2026): "Completed N steps" opens to plain-language steps such as "Searching the web". [AI UX Playground teardown, Jun 2026](https://aiuxplayground.com/teardowns/perplexity/citations)
- **Comet** (Android, checked Nov 2025): The Android browser shows what action the assistant is taking while it works. [TechCrunch, 20 Nov 2025](https://www.techcrunch.com/2025/11/20/perplexity-brings-its-ai-browser-comet-to-android/)

## Related patterns

- Alternative to Thinking and processing steps: A list of steps, for longer work with several stages.
- Often combined with Streaming response: What comes after the message: the answer, word by word.
- Often combined with Stop generation: Stop should work during the wait too.
- Alternative to Long-running tasks and notifications: For work that takes minutes, when people should be free to leave.

## Sources

- [AWS Cloudscape - Gen AI loading states](https://cloudscape.design/patterns/genai/genai-loading-states/)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [W3C - Understanding 4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
