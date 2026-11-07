---
name: review-ai-ux
description: Audit an existing AI feature, chat flow, assistant, copilot or agent against the AX Patterns library and return a scored, prioritised review. Use when the user asks to review, critique, audit, heuristic-evaluate or improve an AI interaction, pastes screens or code of an AI feature, or asks "what is wrong with this AI flow". Not for designing something new from scratch - use ax-patterns for that.
license: MIT (skill) / CC BY 4.0 (pattern text)
metadata:
  source: { { SITE } }
  repo: { { REPO } }
  version: { { DATE } }
---

# Review an AI interaction against AX Patterns

Walk the flow in the order a person lives it - the 7 moments - and check each moment against the pattern that should be there. Report what is missing, what is the wrong pattern for the place, and what breaks a rule. Be concrete: quote the copy, name the state, name the fix and the pattern (name + ID). Full pattern text is in `references/<slug>.md`.

## Procedure

1. **Map the flow to moments.** From the screens, code or description, write the sequence: which moments the person passes through, in order. Note moments that are skipped (a common finding: no Discover, no Trust).
2. **For each moment, check 3 things:**
   - Is there a pattern here at all, or a gap?
   - Is it the right pattern for this place? Read the "Don't use when" list below - each line names the pattern to use instead.
   - Does it follow the pattern's Do / Avoid, writing and accessibility rules?
3. **Run the cross-cutting checklist** (below) on the whole flow.
4. **Score and prioritise.** Each finding gets a severity: **Blocker** (the person can lose work, money, data or trust - e.g. Stop discards text, an agent sends without a yes, no way to stop), **Major** (the moment is missing or the wrong pattern - e.g. "Processing…" for 8 s, citations as 1 list at the end), **Minor** (copy, polish, consistency).
5. **Write the review** in this shape:
   - 1 paragraph: what the flow does well, honestly.
   - Findings, Blockers first. Each: moment → what you saw (quote it) → why it hurts → the fix → pattern name and ID → reference file.
   - A short "do next week" list: the 3 to 5 changes with the best return.

## Cross-cutting checklist

**Waiting**

- Under 1 s: nothing shown. 1-3 s: 1 specific line (verb + real noun). 3-60 s: steps people can open. Minutes: person can leave and is told when done or when needed.
- "Processing…", "Thinking…", spinners with no words, fake progress bars → Major.
- No Stop during generation → Blocker. Stop that discards the partial answer → Blocker. "Cancel" instead of "Stop" → Minor.
- Text streams word by word under reduced motion → Minor.

**Reading**

- Long output (>10 lines, or editable) inside the chat column → Major (side pane / artifacts).
- A comparison of several items as a paragraph → Major (table / generative UI).
- Every change re-prints the whole output → Major.
- Several versions that differ by 1 word → Minor.

**Refining**

- Regenerate overwrites the previous answer → Major. No edit on a sent message → Minor.
- Tone / length change drops a fact (a price, a date, a promise) → Blocker.
- Feedback is thumbs only, or a required empty text box → Minor.

**Trust**

- Facts the person will act on, with no sources → Major. Sources as 1 list at the end, not per claim → Major. Invented links → Blocker.
- "AI can make mistakes" under every answer, or a pop-up before every answer → Minor (it stops being read).
- AI text mixed with human text and not labelled → Major. Label stays "AI" after a person edited it → Minor.
- Memory used silently → Major. Delete all only, no per-memory edit → Major.
- Error shown as a code, or a refusal with no way on → Major.

**Delegating**

- Agent sends, buys, deletes, publishes or changes shared things without asking → Blocker.
- Approve button says "OK" / "Continue" / "Yes" → Major. A gate on every step, including safe ones → Major (approval fatigue).
- No record of what the agent did, or no undo for undoable actions → Major.
- No way to take over without stopping and losing the work → Major.
- Plan shown as tool calls instead of plain steps with real numbers → Major.

**Asking and discovering**

- A sparkle with no name, or a sparkle on every control → Major.
- "Ask me anything" as the only guidance → Minor. Suggested prompts that are categories, not real asks → Minor.
- Fixed 1-line input that scrolls sideways → Minor. Enter sends on a phone → Major.
- Model names where a mode name belongs → Minor.

**Accessibility (every moment)**

- Streaming text in an aria-live region → Blocker (it is re-read or dropped token by token).
- Icon-only buttons, controls only on hover, colour alone for state → Major.
- Focus not moved into an opened pane / form, or not returned on close → Major.
- Touch targets under 44 px → Minor. No reduced-motion path → Minor.

## Don't use when - the alternative for every pattern

Every pattern's "Don't use when" list, each line naming the pattern to use instead, is in [references/dont-use-when.md](references/dont-use-when.md). Open it when you check whether a pattern is the right one for its place.
