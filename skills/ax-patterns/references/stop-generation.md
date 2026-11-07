# Stop generation

Let people stop the AI and keep what is already there.

- ID: AX-REF-01
- Moment: 5 Refine - "Can I change it?"
- Maturity: established
- Also called: Stop button, Cancel, Halt
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/stop-generation
- Licence: CC BY 4.0 (text and figures)

## Story

> When the AI is going the wrong way, or I already have what I need, I want to stop it at once and keep what it wrote, so I do not wait or lose the useful part.

- **Setting:** Sam asks for 5 names for her coffee cart.
- **Trigger:** Name 2 is the one. She does not need the rest.
- **Without it:** She waits for all 5, or leaves the page and loses the answer.
- **With it:** Stop sits where Send was. 1 tap, and the answer ends where it is - every word kept.
- **Outcome:** She copies name 2. If she changes her mind, Continue picks up from the same word.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Sent | Send turns into Stop at once - before the first word arrives. | Starts work. | 0 s | - |
| Streaming | The answer streams in (arrives word by word). Stop stays in the same place. | Writes. | - | Generating a response |
| Stop pressed | Stop shows it was pressed. | Stops writing. | under 100 ms | - |
| Stopped | Every word written so far stays, with a short note and Continue or Try again. | Idle. | at once | Response stopped |
| Continued | The answer picks up from the last word - not from the start. | Writes again. | on tap | Generating a response |
| Done | The full answer, and Send is back. | Idle. | - | Response complete |

## On each device

- **Phone:** Stop replaces Send in the same spot, at least 44 px, so the thumb is already there. Never hide it behind a menu.
- **Tablet:** As on the phone. With a keyboard, Escape stops too.
- **Desktop:** Stop replaces Send. Escape stops too. The composer (the box where you type) stays editable, so people can type the next ask while it finishes.

## Use when

- Answers take more than a couple of seconds to finish.
- People often find what they need part-way through.
- The AI can head the wrong way, and waiting for the end wastes time and money.

## Don't use when

- The AI is doing things, not only writing. Stopping must also say what it already did. Use Watch mode and takeover instead.
- People want to change the direction, not end it. Use Update mid-run instead.
- Answers are always instant - there is nothing to stop. Use Streaming response instead.

## Anatomy

- **A. Stop button:** Where Send was, with a word and a square. Works from the very first moment.
- **B. The partial answer:** Stays on screen exactly as written. Nothing is thrown away.
- **C. The caret:** The blinking mark at the end of the text. It shows the AI is still writing, and it goes the moment Stop is pressed.
- **D. The composer:** Stays usable, so people can type the next ask straight away.

## Do and Avoid

- **Do:** Stopping keeps every word, so the useful part is still there. (1. Daily Grind - simple, and easy to say. 2. Pour Decisions…You stopped this answer. What is written is kept.)
- **Avoid:** Stopping wipes the answer. People learn never to press Stop. (Response cancelled.)
- **Do:** Stop takes Send's place, so the finger is already on it. (Reply…■ Stop)
- **Avoid:** A small link at the top of the answer, far from the thumb, while a dead Send stays in the corner. (Stop generatingReply…Send)

## Writing

- Label it "Stop", with a square icon. Not "Cancel", which sounds like the answer will be thrown away.
- After stopping, say what happened in 1 line: "You stopped this answer. What is written is kept."
- Offer 2 ways on: "Continue" picks up where it ended; "Try again" starts fresh.

## Accessibility

- Stop is a real button with the name "Stop generating", and it takes the focus Send had.
- Escape stops on a keyboard, from anywhere in the conversation.
- Announce "Response stopped" once in the polite status region (the part of the page a screen reader reads out on its own). Do not read the partial text out again.
- Stop is at least 44 by 44 px on touch screens.

## Seen in

- **Gemini** (Web and apps, checked Oct 2026): For agent Tasks, "Stop" in the text box cancels the whole task. [Gemini Help: Tasks](https://support.google.com/gemini/answer/16596215)
- **ChatGPT** (Web and apps, checked Nov 2025): "Update" lets people add context while GPT-5 Pro or Deep Research is still working, without stopping and restarting. [TechRadar, Nov 2025](https://www.techradar.com/ai-platforms-assistants/chatgpt/you-can-now-interrupt-chatgpt-as-it-learns-to-take-feedback-on-the-fly)
- **Claude** (Web and desktop, checked Oct 2026): In voice mode, a "Stop" button sits bottom right, and people can also speak to interrupt. [Claude Help: Voice mode](https://support.claude.com/en/articles/11101966-use-voice-mode.md)

## Related patterns

- Part of Streaming response: Stop is the way out of a streaming answer.
- Alternative to Update mid-run: Change the direction without stopping.
- Often combined with Regenerate, edit and branches: "Try again" after a stop starts a new version.
- Often combined with Thinking and processing steps: Stop should work while the AI is still thinking, too.

## Sources

- [AWS Cloudscape - Generative AI chat](https://cloudscape.design/gen-ai/patterns/generative-ai-chat/)
- [AWS Cloudscape - Gen AI loading states](https://cloudscape.design/patterns/genai/genai-loading-states/)
- [W3C - Understanding 2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Apple WWDC26 - Build agentic app experiences with the Foundation Models framework](https://developer.apple.com/videos/play/wwdc2026/242/)
