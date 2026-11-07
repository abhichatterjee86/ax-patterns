# Accessibility check for an AI feature

Paste this, then paste your screens, code or description.

---

Check the AI feature below against the accessibility rules in the AX Patterns library (https://axpatterns.design - every pattern page has an "Accessibility" section; whole library in 1 file: https://axpatterns.design/llms-full.txt) and WCAG 2.2 AA.

Check at least:

- Streaming text is not an aria-live region; 1 polite, atomic status region announces only "Generating a response", "Response complete", "Response stopped", "Response failed".
- Every control is a real button with a full name ("Stop generating", "Source 1: Nielsen Norman Group", "Undo: Declined Design review with Ama", "Use the Warm version"); icon-only and hover-only controls fail.
- Focus moves into opened panes, menus and forms, and returns on close; errors and nudges never steal focus.
- Nothing by colour alone: AI labels, flags, statuses, diffs and "needs you" have words or icons with names.
- Touch targets at least 44 px (citation markers at least 24 px).
- Reduced motion: text streams in sentence chunks, carets don't blink, pulses stop.
- Enter does not send on phones; no auto-send on silence in voice input; no timeouts on questions.
- Voice output shows every spoken word as text; approve is never pre-selected; the composer stays focusable while the AI works.

Report: a table of checks with pass / fail / can't tell, the evidence (quote the code or copy), the fix, and the pattern name and ID. Put fails first. Say what you could not verify from what I gave you.

My AI feature:

[paste here]
