# Adjust length and tone

Change how long or how formal an answer is with 1 control, not a new ask.

- ID: AX-REF-03
- Moment: 5 Refine - "Can I change it?"
- Maturity: established
- Also called: Tone picker, Shorter / longer, Rewrite as
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/adjust-length-tone
- Licence: CC BY 4.0 (text and figures)

## Story

> When an answer says the right thing but is too long or sounds wrong, I want to change its length or tone with 1 tap and keep every fact, so I can send it without checking it all again.

- **Setting:** Ifeoma asks for a reply to Ada, whose bag strap broke.
- **Trigger:** The draft is right, but too long for a phone message.
- **Without it:** She types "make it shorter". A second version appears below, and she re-reads it to check the refund is still there.
- **With it:** She taps Shorter. The same reply is rewritten in place.
- **Outcome:** 45 → 26 words, with the repair, the ₦18,000 and the courier marked as kept. She sends it.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Draft | The reply streams in. | Writes. | 0-2 s | Generating a response |
| Controls | Shorter, Longer, More formal and More friendly sit under the reply. | Idle. | when done | Response complete |
| Press | The pressed control fills in; the others fade. | Idle. | on tap | - |
| Rewrite in place | The new version writes over the old one, in the same place. | Rewrites. | - | Rewriting |
| Changed | Facts that stayed are marked. "45 → 26 words" and Undo sit under the reply. | Idle. | when done | Shorter. 26 words |

## On each device

- **Phone:** The controls sit in 1 row under the answer and scroll sideways if needed, each 44 px tall. Undo sits next to the word count.
- **Tablet:** As on the phone, with all controls visible.
- **Desktop:** A row under the answer, or on the selection toolbar to change only part of a text. A slider suits length when people want fine steps.

## Use when

- The content is right, but the size or voice is not - too long, too stiff, too casual.
- People make the same kind of change often - shorter for a phone, formal for a client.
- The facts must stay the same while the wording changes.

## Don't use when

- The content is wrong. A new tone will not fix it. Use Regenerate, edit and branches instead.
- People want to fix 1 word or 1 number. Use Edit output and revert to AI instead.
- People do not know yet how it should sound. Use Variations instead.

## Anatomy

- **A. Controls:** 1 tap each, named by the result: Shorter, Longer, More formal, More friendly.
- **B. In place:** The new version replaces the old one where it was. No second message.
- **C. Kept facts:** Amounts, names and promises that stayed are marked, so nobody has to re-check.
- **D. Change and Undo:** "45 → 26 words" shows what happened. Undo brings the old version back.

## Do and Avoid

- **Do:** 1 tap, rewritten in place, with the change in numbers and Undo. (Hello Ada, I’m sorry your strap broke…45 → 26 words · UndoShorter More formal)
- **Avoid:** Typing the change makes a second near-copy. The thread grows, and there is no Undo. (Hello Ada, I’m so sorry your strap broke after…Make it shorterHello Ada, I’m sorry your strap broke…)
- **Do:** Shorter, but every fact stays, and the kept facts are marked. (We’ll repair it for free or refund the full ₦18,000.)
- **Avoid:** Shorter by dropping the offer. The refund is gone, and nothing says so. (Sorry about the strap. We’ll sort it out.)

## Writing

- Name controls by the result: "Shorter", "Longer", "More formal", "More friendly", so people know what they get before they tap.
- Show the change in numbers: "45 → 26 words".
- Keep names, amounts, dates and promises the same in every version, and mark them.
- Offer "Undo" right after a change, in the same place.

## Accessibility

- Controls are real buttons with clear names. The one just used says it is pressed.
- Announce the result once, politely: "Shorter. 26 words." Do not read the new text out.
- Keep focus on the control after a change, so people can press it again or press Undo.
- Mark kept facts with more than colour: a background, and the word "kept" for screen readers.

## Seen in

- **ChatGPT canvas** (Web, Windows and macOS, checked Nov 2026): Shortcuts include "Adjust the length", a slider from shortest to longest, and "Change reading level", from Kindergarten to Graduate School. [OpenAI Help: Canvas](https://help-lb.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it)
- **Apple Writing Tools** (macOS, checked Nov 2026): Rewrite, then Friendly, Professional or Concise, changes the tone of selected text. [Mac User Guide: Use Writing Tools](https://support.apple.com/guide/mac-help/mchldcd6c260/mac)
- **Gemini** (Computer, Android and iPhone, checked Nov 2026): Gemini Help says you can modify a response: adjust the length, simplify the language or change the tone. [Gemini Apps Help: Regenerate or modify responses](https://support.google.com/gemini/answer/14262426)

## Related patterns

- Alternative to Regenerate, edit and branches: A whole new try, when the content itself is wrong.
- Alternative to Variations: Several tones at once, side by side, when people are not sure.
- Often combined with Edit output and revert to AI: Fix 1 word by hand after changing the tone.
- Often combined with Version history and checkpoints: Every change kept, for long documents.

## Sources

- [Apple HIG - Generative AI: refine or revert results (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Shape of AI - Voice and tone](https://www.shapeof.ai/patterns/voice-and-tone)
- [Apple WWDC25 - Dive deeper into Writing Tools](https://developer.apple.com/videos/play/wwdc2025/265/)
- [Apple WWDC24 - Get started with Writing Tools](https://developer.apple.com/videos/play/wwdc2024/10168/)
