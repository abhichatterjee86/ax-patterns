# Draft mode and review

Hold AI changes as a draft until a person reviews and accepts them.

- ID: AX-REF-05
- Moment: 5 Refine - "Can I change it?"
- Maturity: emerging
- Also called: Review changes, Suggested edits, Accept all
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/draft-mode
- Licence: CC BY 4.0 (text and figures)

## Story

> When the AI changes something I wrote, I want each change held as a draft that I can accept or reject, so nothing goes out that I did not see.

- **Setting:** Priya asks the AI to fix the grammar in her newsletter.
- **Trigger:** The AI finds 3 things to change. 1 of them changes the date by mistake.
- **Without it:** The 3 changes go straight into the text. The wrong date goes out to 28 parents.
- **With it:** Each change is marked and waits. She rejects the date change.
- **Outcome:** 2 changes accepted, 1 rejected. The newsletter has the right day.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asked | The ask, and the text as it is. | Starts. | 0 s | - |
| Suggesting | "Suggesting changes" with dots. The text does not move. | Works. | - | Suggesting changes |
| Draft | Each change marked in place - old text crossed out, new text underlined - and "3 to review · nothing is changed yet". | Waits. | when ready | Draft ready. 3 changes to review |
| Accept | The change becomes plain text. The review moves to the next change. | Idle. | on tap | - |
| Reject | The old text comes back. A line records what was rejected. | Idle. | on tap | - |
| Reviewed | The draft is gone. A past-tense line: "2 accepted · 1 rejected". | Idle. | after the last change | Changes applied |

## On each device

- **Phone:** Changes are marked in the text. A review card at the bottom shows 1 change at a time, with Reject and Accept by the thumb.
- **Tablet:** As on the phone, or as on desktop when the keyboard is attached.
- **Desktop:** Changes are marked in the text, and each has its own Accept and Reject on hover and focus. Accept all and Reject all sit at the top of the draft.

## Use when

- The AI edits something a person wrote, and the person is responsible for it.
- 1 wrong change can do harm - a date, a number, a name, a line of code.
- The AI makes several changes at once, and people need to keep some and drop others.

## Don't use when

- The AI writes something new from nothing - there is nothing to compare with. Use Side pane and artifacts instead.
- The change is small, safe and easy to undo, like a tone tweak on a chat answer. Use Adjust length and tone instead.
- People need to go back to an older whole version, not judge single changes. Use Version history and checkpoints instead.

## Anatomy

- **A. Draft status:** Says it is a draft, how many changes are left, and that "nothing is changed yet".
- **B. Marked change:** Old text crossed out, new text underlined, in place. The change under review has a ring.
- **C. Reject and Accept:** 1 decision per change. Reject is as easy to reach as Accept.
- **D. Accept all:** A quiet shortcut for when every change is fine. Not the main button.

## Do and Avoid

- **Do:** Each change is marked where it happens, so a wrong date stands out. (Sports day is on Friday 14 15 March.Change 2 of 3 · Reject · Accept)
- **Avoid:** It is a draft, but the changes are not marked. People cannot see the date moved, so they accept all. (Sports day is on Friday 15 March.Draft ready · Discard · Accept all)
- **Do:** Each change can be kept or dropped on its own. (“14 March” to “15 March”RejectAccept)
- **Avoid:** Only all or nothing. To drop 1 bad change, people lose the 2 good ones, or keep the bad one. (“14 March” to “15 March”Accept all 3or undo everything)

## Writing

- Say it is a draft and that nothing has changed yet: "Draft · 3 to review · nothing is changed yet".
- Name each change in a few words: "14 March to 15 March", not "Edit 2".
- Use the plain verbs Accept and Reject. Keep "Accept all" smaller than the per-change buttons.
- Record the result in the past tense: "2 accepted · 1 rejected".

## Accessibility

- Do not rely on colour or strike-through alone. Give each change a text name, like "Suggested: 15, was 14".
- Accept and Reject are real buttons, at least 44 px, named with the change they act on.
- Announce "Draft ready. 3 changes to review" when the draft appears, and the count as it goes down.
- After a decision, move focus to the next change, not back to the top of the page.

## Seen in

- **GitHub Copilot in VS Code** (Desktop editor, checked Nov 2026): Agent edits wait as pending changes. People choose Keep or Undo for each change, each file, or all at once. The docs say pending edits are already saved to disk, so tests run on them. [VS Code docs: Review AI-generated code edits](https://code.visualstudio.com/docs/copilot/chat/review-code-edits)
- **ChatGPT canvas** (Web, Windows and macOS, checked Nov 2026): Suggest edits adds comment bubbles to the text. People can make the change themselves, or select Apply to have ChatGPT do it. [OpenAI Help: Canvas](https://help-lb.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it)

## Related patterns

- Often combined with Version history and checkpoints: Every accepted draft becomes a version people can go back to.
- Alternative to Edit output and revert to AI: People change the text by hand instead of judging AI changes.
- Often combined with Side pane and artifacts: Long drafts are reviewed in a pane beside the chat.
- Often combined with Approval gate: The same idea for actions: nothing happens until a person says yes.

## Sources

- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Microsoft HAX Toolkit - G9 Support efficient correction](https://www.microsoft.com/en-us/haxtoolkit/guideline/support-efficient-correction/)
- [Carbon for AI - AI and default variants, revert to AI](https://carbondesignsystem.com/guidelines/carbon-for-ai/)
- [Apple WWDC24 - Get started with Writing Tools](https://developer.apple.com/videos/play/wwdc2024/10168/)
- [Apple WWDC25 - What’s new in Xcode 26](https://developer.apple.com/videos/play/wwdc2025/247/)
