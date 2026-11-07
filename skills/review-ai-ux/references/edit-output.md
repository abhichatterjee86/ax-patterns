# Edit output and revert to AI

Let people edit what the AI made directly, and get the AI's version back.

- ID: AX-REF-04
- Moment: 5 Refine - "Can I change it?"
- Maturity: emerging
- Also called: Inline edit, Revert, Accept and edit
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/edit-output
- Licence: CC BY 4.0 (text and figures)

## Story

> When the AI's text is nearly right, I want to fix it by hand and have the AI respect my fix, with its own version 1 tap away, so I stay the author without losing the AI's help.

- **Setting:** Marta asks for a note about sports day.
- **Trigger:** The date is wrong - it moved to Thursday. She clicks it and types the right one.
- **Without it:** She asks the AI to add a line about lunch, and the date quietly goes back to Friday. 200 parents get the wrong day.
- **With it:** Her change is marked as hers. The AI adds lunch and says it kept her date.
- **Outcome:** The note goes out with the right date. The AI version is still 1 tap away.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Draft | The AI's note streams in, with "Click to edit". | Writes. | 0-2 s | Generating a response |
| Editing | She types over the date, in place, with a caret. | Idle. | on click | - |
| Marked as hers | Her change is underlined. "1 edit by you" and "Revert to AI version" sit under the text. | Idle. | when she stops typing | 1 edit saved |
| Ask for more | "Add a line about lunch". | Starts. | - | - |
| AI changes the text | The new line writes in. Her date stays as she wrote it. | Writes around her edit. | - | Generating a response |
| Revert | If she changes her mind, "Revert to AI version" brings the AI's words back. | Idle. | on tap | - |
| Done | "Your edit is kept" and "I kept your date change" - or "AI version restored · Undo". | Idle. | when done | Response complete, or AI version restored |

## On each device

- **Phone:** Tap a sentence to edit it in place, with the keyboard up. "Revert to AI version" sits under the text, not in a menu.
- **Tablet:** As on the phone. With a keyboard attached, undo works from the keyboard too.
- **Desktop:** Click anywhere to type. Edited parts are marked; hover or focus on 1 shows "Edited by you" and Revert for that part.

## Use when

- The AI's text is nearly right, and a small fix is faster by hand.
- The text belongs to the person - it goes out in their name.
- The AI will keep working on the same text after the person edits it.

## Don't use when

- The whole answer is wrong. Ask again. Use Regenerate, edit and branches instead.
- The change is about the whole text - shorter, more formal. Use Adjust length and tone instead.
- People need every version of a long document, not only the AI's and theirs. Use Version history and checkpoints instead.

## Anatomy

- **A. Her edit:** Marked with an underline, so she and the AI both know it is hers.
- **B. Edit count:** "1 edit by you" - and later, "Your edit is kept".
- **C. Revert to AI version:** Brings back the AI's words for that part. 1 tap, with Undo after it.
- **D. Click to edit:** Says the text is editable in place. No copy and paste to another app.

## Do and Avoid

- **Do:** The AI works around her edit and says so. (Sports day is on Thursday 11 June… Lunch is a picnic…I kept your date change.)
- **Avoid:** The AI rewrote from its own version. Her fix is gone, and nothing said so. (Sports day is on Friday 12 June… Lunch is a picnic…Added a line about lunch.)
- **Do:** The way back is next to the edit and brings back exactly what the AI wrote. (Sports day is on Thursday 11 June…1 edit by you · ↺ Revert to AI version)
- **Avoid:** Asking again writes a new text, not the old one. The AI's version is lost. (Sports day is on Thursday 11 June…To get the AI’s text back, ask again.)

## Writing

- Mark the person's edits in words: "1 edit by you".
- When the AI changes edited text, say what it kept: "I kept your date change."
- Name the way back exactly: "Revert to AI version", then offer "Undo".

## Accessibility

- The editable text is a real text field with a name, so screen readers say it can be edited.
- Mark edited parts with more than colour: an underline, and "edited by you" for screen readers.
- "Revert to AI version" is a real button. After it, announce "AI version restored" and keep focus on the text.
- Undo works from the keyboard, as in any text field.

## Seen in

- **ChatGPT canvas** (Web, Windows and macOS, checked Nov 2026): People click into the canvas and type to edit. Arrows in the top toolbar move between versions, an older one can be restored, and "Show changes" shows what was added and removed. [OpenAI Help: Canvas](https://help-lb.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it)
- **Cursor** (Desktop code editor, checked Oct 2026): The agent's edits make checkpoints automatically. "Restore Checkpoint" on an earlier request takes the code back. Checkpoints are kept apart from Git. [Cursor Docs: Checkpoints](https://docs.cursor.com/agent/chat/checkpoints)

## Related patterns

- Alternative to Regenerate, edit and branches: A whole new answer, when a hand fix is not enough.
- Often combined with Adjust length and tone: Change the whole text's length or tone, then fix 1 word by hand.
- Often combined with Version history and checkpoints: Every version of a long document, with restore.
- Often combined with Side pane and artifacts: Long text is edited in a pane beside the chat.

## Sources

- [Apple HIG - Generative AI: refine or revert results (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Microsoft HAX Toolkit - Guideline 9: Support efficient correction](https://www.microsoft.com/en-us/haxtoolkit/guideline/support-efficient-correction/)
