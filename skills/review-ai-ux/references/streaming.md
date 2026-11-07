# Streaming response

Show the answer as it is written, so waiting feels like reading.

- ID: AX-WAI-02
- Moment: 3 Wait - "Is it still working?"
- Maturity: established
- Also called: Token streaming, Typewriter, Live response
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/streaming
- Licence: CC BY 4.0 (text and figures)

## Story

> When I ask the AI for something long, I want to start reading before it has finished, so the wait feels like progress and I can stop it if it goes the wrong way.

- **Setting:** Arjun asks the assistant for a 3-step plan for next week's launch.
- **Trigger:** A long answer takes the AI 5 seconds to write.
- **Without it:** A spinner for 5 seconds, then a wall of text. He cannot tell if it is stuck, and step 1 is already wrong.
- **With it:** The first words land in under a second. By step 2 he sees it misread the date, and presses Stop.
- **Outcome:** He keeps what was right, fixes the date in 1 line, and asks again.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Message sent | His message, and the composer (the box where he types) locked to a Stop button. | Receives the ask. | 0 s | - |
| Waiting | 3 quiet dots where the answer will be. Stop is already there. | Thinks before the first word. | 0 to 1.2 s | Generating a response |
| Still working | Only on a slow answer: "Still working - long answers take a moment." | Still thinking. | after 4 s | - |
| First words | The answer starts in place, with a caret (a blinking line) at its end. | Sends the first tokens (pieces of words). | 1.2 s | - |
| Streaming | Text grows in whole words. The page does not jump; it follows only if he has not scrolled away. | Writes the rest. | 1.2 to 5 s | - |
| Done | The caret goes, Stop becomes the composer again, and Copy, Retry and feedback appear. | Finished. | 5 s | Response complete |
| Stopped | Everything written so far stays, with a note that he stopped it and a Continue button. | Stops at once. | on Stop | Response stopped |
| Error | What was written stays. A plain line says the connection was lost, with Retry. | The stream broke. | any time | Response failed |

## On each device

- **Phone:** The Stop button replaces Send in the same spot, at least 44 px. The keyboard closes when the answer starts, so more of it is visible.
- **Tablet:** Same as the phone in portrait. In landscape the answer column keeps its reading width rather than stretching edge to edge.
- **Desktop:** Text streams into a column of about 70 characters. Esc stops the answer, and Stop stays visible even when the answer scrolls past the window.

## Use when

- An answer takes more than about 1 second to write.
- The output is text people read in order: answers, drafts, code, plans.
- People may want to stop early once they see where the answer is going.

## Don't use when

- The output is a table, chart or form that only makes sense when complete. Show a skeleton (a grey outline of the shape to come), then the whole thing. Use Generative UI and structured output instead.
- The AI is working for minutes on a task, not writing - show steps instead of text. Use Thinking and processing steps instead.
- The answer is under 1 second. Streaming then only adds flicker.

## Anatomy

- **A. The ask:** Stays on screen, so the answer is read against what was asked.
- **B. Status line:** Says what is happening and for how long: "Generating · 2.1 s".
- **C. Growing answer:** Text lands in whole words, in its final position - no jumping.
- **D. Caret:** Shows where new text will appear, and that it is still coming.
- **E. Stop:** Always visible while the answer is written. Keeps what is there.
- **F. Composer:** Comes back the moment the answer ends, ready for a follow-up.

## Do and Avoid

- **Do:** A Stop button for the whole time the answer is written. (Plan my launch week in 3 steps1. Lock the build on Monday, so the rest of the week is…Generating · 1.8 sStop)
- **Avoid:** No way to stop. If step 1 is wrong, the person has to wait for all 3. (Plan my launch week in 3 steps1. Lock the build on Monday, so the rest of the week is…Generating…)
- **Do:** Stopping keeps every word already written, and says so. (1. Lock the build on Monday.2. Brief support with the top 5…You stopped this answer · Continue)
- **Avoid:** Stopping throws the partial answer away, so Stop feels like losing work. (Response cancelled.)

## Writing

- Name the wait honestly: "Generating", then the time. Never a fake progress bar.
- After a few seconds of silence, say something specific: "Reading your 3 files", not "Processing…".
- Label the button "Stop", not "Cancel" - nothing is cancelled, the text stays.
- On an error, keep the text and say what broke in 1 line: "Connection lost after 2.1 s. What was written is kept."

## Accessibility

- The chat history is a log with aria-live off. The streaming text is never a live region (the part of the page a screen reader announces on its own). Screen readers would re-read it or drop it, token by token.
- A hidden status region, set to polite (it waits for a pause) and atomic (it reads the whole message), announces only 4 things: "Generating a response", "Response complete", "Response stopped" and "Response failed".
- Stop is a real button. Focus stays in the composer while the answer streams and returns there when Stop goes away.
- Under reduced motion (a device setting that turns off animation), text appears in sentence chunks, not word by word. The caret does not blink.
- Do not auto-scroll if the person has scrolled up to read - offer a "Jump to latest" button instead.

## Seen in

- **OpenAI Apps SDK** (ChatGPT, fullscreen apps, checked Oct 2026): While a reply streams, the overlaid system composer shimmers; afterwards a short snippet sits above the composer and opens the chat sheet. [OpenAI Apps SDK UI guidelines](https://developers.openai.com/apps-sdk/concepts/ui-guidelines)
- **ChatGPT** (Web and apps, checked Nov 2025): "Update" lets you add context while a Pro or Deep Research answer is still being written, without starting again. [TechRadar, 8 Nov 2025](https://www.techradar.com/ai-platforms-assistants/chatgpt/you-can-now-interrupt-chatgpt-as-it-learns-to-take-feedback-on-the-fly)
- **Gemini** (Web and apps, checked Oct 2026): For agent Tasks, "Stop" sits in the text box itself and cancels the whole task, not only the current reply. [Gemini Help: Tasks](https://support.google.com/gemini/answer/16596215)

## Related patterns

- Part of Stop generation: Stop is the other half of streaming - never ship 1 without the other.
- Alternative to Thinking and processing steps: For long work that is not text, show steps instead.
- Often combined with Citations and sources: Source markers appear as each sentence lands.
- Often combined with Update mid-run: Let people steer an answer while it is still being written.
- Conflicts with Generative UI and structured output: Tables and charts should appear whole, not stream cell by cell.

## Sources

- [azukiazusa - Accessible streaming chat UI (Aug 2026)](https://azukiazusa.dev/en/blog/accessible-streaming-chat-ui)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [AI UX Playground - Streaming](https://aiuxplayground.com/pattern/streaming)
- [W3C - WCAG 2.2, 4.1.3 Status messages](https://www.w3.org/TR/WCAG22/#status-messages)
- [Apple WWDC25 - Meet the Foundation Models framework](https://developer.apple.com/videos/play/wwdc2025/286/)
- [Apple WWDC25 - Code-along: Bring on-device AI to your app using the Foundation Models framework](https://developer.apple.com/videos/play/wwdc2025/259/)
