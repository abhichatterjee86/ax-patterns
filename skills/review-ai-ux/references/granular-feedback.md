# Granular feedback

Let people say what was wrong, not only thumbs up or down.

- ID: AX-REF-06
- Moment: 5 Refine - "Can I change it?"
- Maturity: established
- Also called: Thumbs up / down, Rate response, Report
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/granular-feedback
- Licence: CC BY 4.0 (text and figures)

## Story

> When an AI answer is wrong, I want to say what was wrong in 1 or 2 taps, so the people who build it can fix that kind of mistake.

- **Setting:** Sipho asks how much VAT to add to a R2,000 invoice.
- **Trigger:** The answer uses 14%. The rate has been 15% since 2018.
- **Without it:** He taps thumbs down. The team sees 1 unhappy person, but not why.
- **With it:** The thumb opens a few reasons. He picks "Out of date" and adds 1 line.
- **Outcome:** The feedback names the problem. He is back to his invoice in 10 seconds.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Answer | The answer, with copy and 2 thumbs under it. | Idle. | when done | Response complete |
| Rated | The thumb fills. A small form opens below the answer, not over it. | Idle. | on tap | Feedback form opened |
| Reason | 4 or 5 reasons as chips (small pill-shaped buttons). 1 tap picks 1. | Idle. | on tap | - |
| Note | An optional note, and "Send this chat with my feedback", off until ticked. | Idle. | optional | - |
| Sent | The form closes. 1 line says what was sent. | Idle. | on Send | Feedback sent |

## On each device

- **Phone:** The form opens in place under the answer, or as a short bottom sheet (a panel that slides up from the bottom). Chips wrap to 2 rows. The keyboard opens only if people tap the note.
- **Tablet:** As on the phone.
- **Desktop:** The thumbs show on hover and focus, and always on the latest answer. The form opens under the answer, never as a full-page modal (a box that blocks the rest of the page).

## Use when

- People can tell when an answer is wrong, and the team can act on what they say.
- Answers fail in a few common ways - wrong, out of date, off the ask, too long.
- A thumb alone is not enough to tell 1 kind of failure from another.

## Don't use when

- People want to fix this answer now, not report it. Use Regenerate, edit and branches instead.
- The answer was blocked or failed - say why and offer a way on first. Use Error, refusal and limits instead.
- People judge many small items in a row, like 20 suggestions. A form on each one slows them down. A thumb is enough there.

## Anatomy

- **A. Thumbs:** 1 tap for good or bad. Always there, never in the way.
- **B. Reasons:** A short list of the common failures, in plain words. 1 tap.
- **C. Note:** Optional. For the detail no chip can hold.
- **D. Share this chat:** Off until people tick it. Says what else goes with the feedback.
- **E. Send:** Works with a reason alone. The note is never required.

## Do and Avoid

- **Do:** 1 tap names the problem. The note is there for those who want it. (What was wrong?Wrong factOut of dateToo longAdd a note (optional))
- **Avoid:** An empty, required text box. Most people close it, so the team learns nothing. (Tell us moreDescribe the problem (required)Submit)
- **Do:** Sharing the chat is a separate choice, off until people tick it. (Out of date · VAT is 15% since 2018☐ Send this chat with my feedback)
- **Avoid:** Pre-ticked. People send private chats and files without meaning to, and stop giving feedback once they notice. (Out of date · VAT is 15% since 2018☑ Include chat history and files)

## Writing

- Ask a short question that matches the thumb: "What was wrong?" or "What was good?".
- Name reasons by what people saw: "Out of date", "Not what I asked". Not "Hallucination" or "Low quality".
- Say what else is sent, in 1 line, next to the choice: "Send this chat with my feedback".
- Thank people in 1 line and say what was sent. Do not promise a fix you cannot make.

## Accessibility

- Name the buttons "Good answer" and "Bad answer", and show their pressed state with aria-pressed (the code that tells a screen reader a button is on).
- Move focus into the form when it opens, and back to the thumb when it closes. Escape closes it.
- Reason chips are a group of toggle buttons with a visible label, not colour alone.
- Announce "Feedback sent" in the polite status region (the part of the page a screen reader reads out on its own). Do not use a toast (a small message that pops up and fades) that disappears before people read it.

## Seen in

- **Microsoft 365 Copilot** (Microsoft 365 apps, checked Nov 2026): Feedback starts with thumbs up or down. People can then say more. The pane asks permission before it adds the prompt, the response or files, and people can preview them first. [Microsoft Support: Providing feedback about Microsoft Copilot](https://support.microsoft.com/privacy/providing-feedback-about-microsoft-copilot-with-microsoft-365-apps)
- **AWS Cloudscape** (Design system, checked Nov 2026): Thumbs down can open a dialog: "What did you dislike about the response?" with Harmful, Incomplete, Inaccurate and Other, plus notes. The dialog can be dismissed. [Cloudscape: Generative AI chat](https://cloudscape.design/patterns/genai/generative-AI-chat/)

## Related patterns

- Often combined with Regenerate, edit and branches: After a thumbs down, Try again gets a better answer now.
- Often combined with Consent and data controls: Sending the chat with feedback is a data choice. Ask first.
- Often combined with Error, refusal and limits: A wrong refusal is a common reason to report.
- Often combined with Explanation: Knowing why the AI answered helps people say what was wrong.

## Sources

- [Apple HIG - Generative AI, Let people share feedback (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Microsoft HAX Toolkit - G15 Encourage granular feedback](https://www.microsoft.com/en-us/haxtoolkit/guideline/encourage-granular-feedback/)
- [Google PAIR Guidebook - Feedback + Control](https://pair.withgoogle.com/chapter/feedback-controls/)
- [Apple WWDC21 - Discoverable design](https://developer.apple.com/videos/play/wwdc2021/10126/)
- [Apple WWDC25 - Explore prompt design & safety for on-device foundation models](https://developer.apple.com/videos/play/wwdc2025/248/)
