# Inline action on selection

Act on the text or object a person has selected, right where it is.

- ID: AX-ASK-07
- Moment: 2 Ask - "How do I tell it what I want?"
- Maturity: established
- Also called: Selection toolbar, Floating AI menu, Ask AI on selection
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/inline-action
- Licence: CC BY 4.0 (text and figures)

## Story

> When 1 part of my text needs work, I want to select it and ask the AI right there, so I can fix only that part and see the change before it goes in.

- **Setting:** Daniel is writing a cover letter for a new nursing job.
- **Trigger:** 1 sentence is long and flat. He selects it.
- **Without it:** He copies the sentence into a chat and asks for a shorter one. Then he copies the answer back and fixes the spacing.
- **With it:** A small menu appears by the selection. He taps Shorter and sees the new sentence before it goes in.
- **Outcome:** He taps Replace. Only that sentence changes, and Undo is there if he wants it back.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Reading | His letter. No AI on screen. | Idle. | 0 s | - |
| Selects | 1 sentence highlighted. | Idle. | - | - |
| Menu by the text | A small menu: "Ask about this text", then Shorter, Friendlier, Fix spelling. | Idle. | on selection, or on a shortcut | AI actions available |
| Picks | He taps Shorter, or types his own ask: "Sound more confident". "Rewriting 1 sentence" shows. | Rewrites only the selection. | on tap | - |
| Preview | The new sentence under the actions, with Replace, Insert below, Try again and Discard. His text is unchanged. | Idle - waits for him. | about 1 s | Suggestion ready |
| Replaced | The new sentence is in, briefly highlighted. "1 sentence replaced · Undo". | Idle. | on tap | Text replaced |

## On each device

- **Phone:** The menu opens as a sheet at the bottom, by the thumb. The preview shows in the sheet, so the text stays in view above it.
- **Tablet:** As on desktop, kept clear of the system's own copy and paste menu.
- **Desktop:** A small floating menu appears by the selection. The preview opens in the same menu, so the eye never leaves the text.

## Use when

- People work on content already on screen - a document, an email, a sheet, a canvas.
- The job is about 1 part, not the whole: 1 sentence, 1 cell, 1 shape.
- A few common jobs cover most needs, like shorter, friendlier or fix spelling.

## Don't use when

- The job is about the whole thing, like summarising a long email. Use Quick actions instead.
- People start from nothing - there is no text to select yet. Use Prompt composer instead.
- People want to change the AI's answer by hand, word by word. Use Edit output and revert to AI instead.

## Anatomy

- **A. Selection:** What the AI will work on, and nothing else. The rest of the text stays as it is.
- **B. Preset actions:** 3 or 4 short actions that fit the selection. 1 tap each.
- **C. Ask about this text:** A field for anything the presets don't cover. It already works on the selection only.
- **D. Preview:** The new version, shown beside the old one. Nothing changes until he chooses.
- **E. Result actions:** Replace, Insert below, Try again, Discard. Each says what it does to his text.

## Do and Avoid

- **Do:** A preview first. He chooses to replace, add below, or throw it away. (I have worked on a busy ward for 6 years…For 6 years I have cared for patients before and after surgery.Replace · Insert below · Discard)
- **Avoid:** The text swaps at once. He never read the new sentence before it went in. (For 6 years I have cared for patients before and after surgery.Replaced. The old sentence is gone.)
- **Do:** A few actions that fit 1 sentence, and a field for anything else. (Ask about this textShorter · Friendlier · Fix spelling)
- **Avoid:** Every AI action in the product. People scan, give up, or pick one that makes no sense for 1 sentence. (Summarise · Translate · Make table · Brainstorm · Write poem · Continue · Explain · Outline · Action items · Find quotes · Make tweet · …)

## Writing

- Name presets with short words: "Shorter", "Friendlier", "Fix spelling".
- Say what the field acts on: "Ask about this text", not "Ask AI".
- Name result buttons by what they do to the text: "Replace", "Insert below", "Discard".
- After a change, say what changed in 1 line: "1 sentence replaced · Undo".

## Accessibility

- The menu opens from the keyboard on a selection too, not only when the mouse button is released.
- When the menu opens, focus moves into it. Escape closes it and puts focus back on the selection.
- Announce "Suggestion ready" when the preview appears, and read the new text before the buttons.
- On touch screens, buttons in the sheet are at least 44 px. The menu never covers the system's copy and paste menu.

## Seen in

- **Microsoft Word (Copilot)** (Microsoft 365, checked Nov 2026): Select text, then open Copilot from the mini toolbar. Pick a preset like Auto Rewrite or type your own ask. The result offers Replace, Insert below or Regenerate. [Microsoft Support: Rewrite text with Copilot in Word](https://support.microsoft.com/en-US/word/copilot/rewrite-text-with-copilot-in-word)
- **Apple Writing Tools** (macOS, checked Nov 2026): Control-click selected text and choose Writing Tools: Proofread, Rewrite (Friendly, Professional, Concise), Summary, Key Points, or "Describe a change" in your own words. [Apple Support: Mac User Guide, Writing Tools](https://support.apple.com/en-gb/guide/mac-help/mchldcd6c260/mac)
- **Perplexity** (Web, checked Jun 2026): "Check sources" appears when you select text in an answer. [AI UX Playground teardown, Jun 2026](https://aiuxplayground.com/teardowns/perplexity/citations)

## Related patterns

- Alternative to Quick actions: Buttons for the whole item, not a selected part.
- Often combined with Adjust length and tone: The same jobs - shorter, friendlier - offered on a whole answer.
- Often combined with Edit output and revert to AI: Change the result by hand after the AI's pass.
- Often combined with Regenerate, edit and branches: Try again gives another version of the same sentence.

## Sources

- [Shape of AI - Inline Action](https://www.shapeof.ai/patterns/inline-action)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Apple WWDC24 - Get started with Writing Tools](https://developer.apple.com/videos/play/wwdc2024/10168/)
- [Apple WWDC25 - Dive deeper into Writing Tools](https://developer.apple.com/videos/play/wwdc2025/265/)
