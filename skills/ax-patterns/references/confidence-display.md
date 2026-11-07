# Confidence display

Show how sure the AI is, so people know when to check.

- ID: AX-REA-05
- Moment: 4 Read - "What did it make?"
- Maturity: emerging
- Also called: Confidence score, Uncertainty, Hedging
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/confidence-display
- Licence: CC BY 4.0 (text and figures)

## Story

> When the AI reads or decides something for me, I want it to point at the parts it is not sure about, so I check those and trust the rest.

- **Setting:** Nomvula adds a scanned invoice. The AI reads 4 fields from it.
- **Trigger:** The total on the scan is blurry.
- **Without it:** All 4 fields look equally sure. She saves, and the supplier is paid R 500 short.
- **With it:** Only the total is flagged: "Check this - the scan is blurry here."
- **Outcome:** She checks 1 field on the scan, fixes 1 digit, and saves the rest without worry.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Added | The scan. | Starts. | 0 s | - |
| Reading | "Reading the scan" with moving dots. | Reads the fields. | 1-3 s | Reading the invoice |
| Read, 1 to check | "4 fields read · 1 to check". The weak field has an amber icon, a reason, and "Show on scan". The rest look plain. | Idle. | when done | 4 fields read, 1 to check |
| Check | The part of the scan beside the field, so the person compares and fixes it. | Idle. | on tap | - |
| Saved | "Saved · 1 field checked by you". Without the flag, the wrong total is saved and found days later. | Idle. | on save | Saved |

## On each device

- **Phone:** Fields stack. The flag sits on the field with its reason under it. "Show on scan" opens the crop (the cut-out part of the scan) full width above the field.
- **Tablet:** The scan sits beside the fields, as on desktop.
- **Desktop:** The scan sits beside the fields. Focus on a flagged field highlights the matching place on the scan.

## Use when

- The AI can be wrong in ways people cannot see - read text, numbers taken from documents, matches, translations.
- Checking everything is slow, so people need to know where to look.
- A wrong value costs money, health or trust once it goes through.

## Don't use when

- The display would not change what people do. If they check everything anyway, a score is noise.
- The question is where a claim came from, not how sure the AI is. Use Citations and sources instead.
- The AI cannot do the task at all. Say so plainly instead of showing a low score. Use Error, refusal and limits instead.

## Anatomy

- **A. Count:** "4 fields read · 1 to check" - how much needs a look, before any detail.
- **B. Flag:** An icon and amber text on the 1 weak field. The rest stay plain.
- **C. Reason:** Why it may be wrong, and what to do: the scan is blurry here.
- **D. Show on scan:** Opens the source next to the value, so checking takes seconds.

## Do and Avoid

- **Do:** Only the field to check stands out. The count says how much work is left. (4 fields read · 1 to checkDate · 14 Oct 2026⚠ Total · R 4,370.00)
- **Avoid:** A percent on every field. Is 81% low? People cannot tell, so most read it as fine. (Supplier · 99%Invoice no. · 97%Date · 96%Total · 81%)
- **Do:** Says why and what to do, with the source 1 tap away. (Total · R 4,370.00Check this - the scan is blurry here.Show on scan)
- **Avoid:** "Low confidence" warns but does not help. People do not know what to check. (Total · R 4,370.00Low confidence)

## Writing

- Say what to do and why: "Check this - the scan is blurry here", not "Low confidence".
- Flag only what needs a look. If everything is flagged, nothing is.
- Give the count first: "4 fields read · 1 to check".
- Avoid percents for most people. If experts need them, say what the number means.

## Accessibility

- Never use colour alone. The flag has an icon and words.
- Put the flag in the field's name: "Total, R 4,370, check this, the scan is blurry".
- Announce the count once, politely: "4 fields read, 1 to check".
- "Show on scan" is a real button, and the scan crop has a text alternative with what the AI read.

## Seen in

- **Gemini** (Chat app, checked Nov 2026): Microsoft's HAX Toolkit shows a Gemini double-check that searches Google, then marks statements green, orange or not at all. A pop-up explains the colours. Gemini's own help page on sources no longer describes it. [Microsoft HAX Toolkit: Gemini example for Guideline 2](https://www.microsoft.com/en-us/haxtoolkit/?p=11760)
- **Azure Document Intelligence** (Web studio and API, checked Apr 2026): Each value read from a document gets a confidence from 0 to 1. Microsoft suggests using it to accept a value at once or send it to a person to review. [Microsoft Learn: Accuracy and confidence scores (8 Apr 2026)](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/concept/accuracy-confidence)

## Related patterns

- Often combined with Citations and sources: Where a claim came from, next to how sure the AI is.
- Often combined with Edit output and revert to AI: Fix the flagged value in place.
- Often combined with Explanation: Why the AI is unsure, in more detail.
- Alternative to Error, refusal and limits: When the AI cannot do it at all, say so instead of showing a low score.

## Sources

- [Google PAIR - Explainability + Trust](https://pair.withgoogle.com/chapter/explainability-trust/)
- [Smashing Magazine - Designing agentic AI: practical UX patterns (Feb 2026)](https://smashingmagazine.com/2026/02/designing-agentic-ai-practical-ux-patterns/)
