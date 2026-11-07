# Regenerate, edit and branches

Try again, or change the ask, without losing the last try.

- ID: AX-REF-02
- Moment: 5 Refine - "Can I change it?"
- Maturity: established
- Also called: Regenerate, Edit message, Versions 1/2, Branch
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/regenerate-and-branches
- Licence: CC BY 4.0 (text and figures)

## Story

> When an answer is close but not right, I want to try again or change my ask without losing what I had, so I can compare and keep the best one.

- **Setting:** Tom asks for a 1-line tagline for his shop.
- **Trigger:** It is fine, but he wants to see another.
- **Without it:** He taps Try again, and the first line is gone. He liked it more.
- **With it:** The new line arrives as version 2. Arrows let him go back to version 1.
- **Outcome:** He picks version 1, edits 1 word, and prints the sign.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| First answer | The answer streams in (arrives word by word). | Writes. | 0-1 s | Generating a response |
| Actions | Try again and Copy appear under the answer; a pencil sits by the ask. | Idle. | when done | Response complete |
| Try again or edit | Try again replays the same ask. Edit opens the ask in place, with Cancel and Send. | Idle. | on tap | - |
| New version | A new answer streams in the same place. | Writes again. | - | Generating a response |
| 2 of 2 | Arrows and "2 / 2" under the answer. Both versions are kept. | Idle. | when done | Version 2 of 2 |
| Back to 1 | The first answer, unchanged. Anything after it follows the version on screen. | Idle. | on tap | Version 1 of 2 |

## On each device

- **Phone:** Try again sits in a row under the answer, 44 px tall. The pencil appears under the ask on tap or long press. Version arrows sit at the end of the row.
- **Tablet:** As on the phone, with the actions always visible rather than on tap.
- **Desktop:** Actions appear on hover and stay for the latest answer. Arrows show "2 / 2". A "Branch in new chat" option suits long chats.

## Use when

- The same ask can give different good answers - names, taglines, drafts, images.
- People often want to change 1 detail of what they asked, not start again.
- Earlier versions might be the best ones, so throwing them away costs people.

## Don't use when

- People want to change a part of the answer, not all of it. Use Edit output and revert to AI instead.
- People want shorter, longer or a different tone - give them those as 1 tap. Use Adjust length and tone instead.
- People need to compare several options side by side at once. Use Variations instead.

## Anatomy

- **A. Try again:** Replays the same ask for a fresh answer. 1 tap, under every answer.
- **B. Edit the ask:** Opens the ask in place, so 1 detail can change without retyping.
- **C. Version switch:** "2 / 2" with arrows. Every try is kept and 1 tap away.
- **D. The new version:** Arrives in the same place as the old one, so comparing is easy.

## Do and Avoid

- **Do:** Every try is kept. People can go back to the one they liked. (Your bike, back on the road by Friday.↻ Try again ‹ 2 / 2 ›)
- **Avoid:** The new answer replaces the old one. People stop trying again, in case they lose a good one. (Your bike, back on the road by Friday.↻ Try againThe first tagline is gone.)
- **Do:** Editing the ask changes 1 detail and keeps the old answer as a version. (…a bike repair shop in LeedsEdit the ask in place, then send.)
- **Avoid:** There is no edit, so people retype the whole ask. The thread fills with near-copies. (Write a 1-line tagline for a bike repair shopTo change it, type the whole ask again below.)

## Writing

- Say "Try again", not "Regenerate". It says what people get.
- Show versions as "2 / 2" with arrows. No version names to learn.
- If trying again will remove later messages in a branch (a side path of the chat), say so before it happens: "Messages after this will move to version 1."

## Accessibility

- Try again is a button named "Try again"; the arrows are named "Previous version" and "Next version".
- Announce the version on change: "Version 1 of 2".
- The edit field takes focus when it opens; Escape cancels and returns focus to the pencil.
- Actions that only show on hover also show on focus, and are always visible on touch screens.

## Seen in

- **ChatGPT** (Web, checked Sep 2025): "Branch in new chat" makes a new chat with everything up to the chosen message, so a side idea does not change the main thread. [BleepingComputer, Sep 2025](https://bleepingcomputer.com/news/artificial-intelligence/chatgpt-makes-projects-feature-free-adds-a-toggle-to-split-chat)
- **ChatGPT canvas** (Web, Windows and macOS, checked Oct 2026): Canvas has version arrows, Restore, and "Show changes" to see what moved between versions. [OpenAI Help: Canvas](https://help-lb.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it)
- **Perplexity** (Web, checked Jun 2026): "Rewrite" sits in the action bar under each answer, beside share and copy. [AI UX Playground teardown, Jun 2026](https://aiuxplayground.com/teardowns/perplexity/citations)

## Related patterns

- Often combined with Stop generation: After a stop, "Try again" starts a new version.
- Alternative to Variations: Several answers at once, side by side, instead of 1 at a time.
- Alternative to Adjust length and tone: Change 1 quality of the answer without a full retry.
- Often combined with Version history and checkpoints: The same idea for long documents: every version, with restore.
- Often combined with Edit output and revert to AI: Change a part by hand instead of asking again.

## Sources

- [AWS Cloudscape - Response regeneration](https://cloudscape.design/gen-ai/patterns/response-regeneration/)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
