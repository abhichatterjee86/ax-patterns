---
name: ai-wait-states
description: Design and implement everything a person sees while an AI is working - loading messages, thinking and processing steps, streaming responses, stop generation, long-running tasks with notifications, and updating a task mid-run. Use when building or reviewing the waiting, loading, streaming, "thinking", progress or stop states of any AI feature, chat or agent, or when the user asks how to show that the AI is still working.
license: MIT (skill) / CC BY 4.0 (pattern text)
metadata:
  source: { { SITE } }
  repo: { { REPO } }
  version: { { DATE } }
---

# Waiting: "Is it still working?"

The wait is where AI products lose people. The rule: waiting is made of real work, and the screen says which work. Pick the pattern by how long the wait is and what kind of work it is. Full text in `references/`.

## Pick by duration

| Wait                               | Pattern                                       | What the person sees                                                                                               |
| ---------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Under 1 s                          | nothing                                       | The answer itself. A message here only flickers.                                                                   |
| 1-3 s, 1 stage                     | **Specific loading messages** (AX-WAI-03)     | 1 line: verb + the real thing. "Reading lease.pdf", "Searching 3 sites".                                           |
| 3-60 s, several stages             | **Thinking and processing steps** (AX-WAI-01) | Steps that name real things, open-able, folding to 1 line when the answer starts: "Thought for 8 s".               |
| Answer takes >1 s to write         | **Streaming response** (AX-WAI-02)            | Words as they are written, with Stop the whole time.                                                               |
| Minutes or more                    | **Long-running tasks** (AX-WAI-04)            | Time estimate before start, "it keeps going if you close the app", 1 notification when done or when it needs them. |
| Person thinks of something mid-run | **Update mid-run** (AX-WAI-05)                | Composer stays open: "Add to the task". The change joins the work; what's done is kept.                            |
| Any wait over 2 s                  | **Stop generation** (AX-REF-01)               | Stop replaces Send. Stopping keeps every word.                                                                     |

Combine them: steps → first word → streaming → done, with Stop throughout.

## Timing to build to

- 0 s: message sent, composer clears, Send becomes Stop.
- 0-1.2 s: quiet. No spinner words yet.
- After about 1 s: the first specific line or step.
- After 4 s of silence: say something specific ("Still reading your 3 files"), never "Almost done" unless it is.
- First word: steps fold to 1 line with the time taken.
- Done: "Response complete" once. Stop becomes Send again, focus stays in the composer.
- Stopped: partial text stays, 1 line: "You stopped this answer. What is written is kept." Offer Continue and Try again.
- Error: partial text stays, 1 line with what broke and when: "Connection lost after 2.1 s. What was written is kept."

## Copy rules

- Verb + real noun, in the person's own words: their file names, their dates, the sites being searched. Never "Processing…", "Thinking…", "Working on it…".
- Add a count when there is a real one: "page 20 of 40", "4 of 10".
- No end punctuation, no "please wait", no exclamation marks.
- Say how long it took when done: "Thought for 8 s". People learn what to expect.
- Never claim steps are the model's full reasoning. If they are a summary, say so.
- Label the button "Stop" with a square icon. Not "Cancel" - nothing is cancelled, the text stays.
- Long tasks: give the time as people say it ("about 10 minutes"); title notifications with the task and its state ("Supplier research is ready" / "...needs you"); 1 notification at the end or when stuck, never 1 per step.

## Implementation rules

- Streaming text is **never** an aria-live region. The chat log has aria-live off.
- 1 hidden polite, atomic status region announces only: "Generating a response", "Response complete", "Response stopped", "Response failed". Not every step, not every token, not the timer.
- Steps: the folded line is a real button with aria-expanded. The pulse on the current step stops under reduced motion; tick + words carry the meaning.
- Under reduced motion, stream in sentence chunks, not word by word; caret does not blink.
- Do not auto-scroll if the person has scrolled up; show "Jump to latest".
- Stop is a real button named "Stop generating", at least 44 px, takes the focus Send had; Escape stops from anywhere in the conversation.
- Long tasks: tapping the notification opens the result with focus on its title, not the top of the chat. Progress has a text count as well as a bar.
- Mid-run updates: Stop and Update are separate buttons; announce "Update added to the task" or "Message queued"; queued messages are a keyboard-reachable list with Edit and Remove.

## Don't

- Show a fake progress bar or a percentage you don't have.
- Keep the full step list open on a phone when the answer starts - it pushes the answer off screen.
- Make Stop discard the partial answer. People learn never to press it.
- Put Stop as a small link at the top of the answer while a dead Send stays in the corner.
- Send a notification per step, or an "update" that could mean done, failed or waiting.
