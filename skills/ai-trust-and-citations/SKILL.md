---
name: ai-trust-and-citations
description: Design and implement how an AI earns trust - citations and sources per claim, AI labels and disclosure, disclaimers that get read, errors and refusals with a way on, confidence display, explanations of AI decisions, memory controls, consent and data controls, temporary chats. Use when adding sources or references to AI answers, labelling AI-generated content, writing AI error or refusal messages, showing confidence or uncertainty, explaining why the AI did something, or building memory, privacy and data settings for an AI feature.
license: MIT (skill) / CC BY 4.0 (pattern text)
metadata:
  source: https://axpatterns.design
  repo: https://github.com/abhichatterjee86/ax-patterns
  version: 2026-11-07
---

# Trust: "Can I rely on it?"

Trust is not a disclaimer. It is the AI showing its sources, its limits, its mistakes and what it remembers - in the place where each matters, once. Full text in `references/`.

## Pick the pattern by the question the person has

| The person wants to know | Pattern |
|---|---|
| Where did this fact come from? | **Citations and sources** (AX-TRU-01) |
| Did a person or the AI write this? | **AI label and disclosure** (AX-TRU-02) |
| What might this answer get wrong? | **Disclaimer** (AX-TRU-03) |
| Why didn't it answer / what went wrong? | **Error, refusal and limits** (AX-TRU-04) |
| How sure is it, where should I check? | **Confidence display** (AX-REA-05) |
| Why did it decide this about my thing? | **Explanation** (AX-TRU-08) |
| What does it remember about me? | **Memory controls** (AX-TRU-05) |
| Is my data used to train it or shared? | **Consent and data controls** (AX-TRU-06) |
| Can I ask this without it being saved? | **Temporary chat** (AX-TRU-07) |

## Citations

- 1 numbered marker per claim, right where the claim is. Never 1 list at the end - nobody can tell which source backs which sentence.
- Numbers 1, 2, 3 in reading order. Never "[source]" or a bare link icon.
- Label the list "Sources" - the word people search for. Show site name and date next to every title; an undated source is half a source.
- Flag the sentence the AI could not ground. When nothing was found: "No sources found - check this before you use it". Never invent a link to look grounded.
- No citations for creative or personal output (a poem, a birthday message) - there is nothing to cite.
- Each marker is a real button named "Source 1: Nielsen Norman Group", at least 24 by 24 px; opening a source moves focus into the sheet and closing returns it. Never show a source only on hover.

## AI label

- Name the action: "Summarised with AI", "Drafted with AI", "Translated with AI". Not a bare sparkle, not just "AI".
- When everything on screen is AI (a chat), 1 label on the area is enough - not 1 per line.
- The label opens 3 short lines: what the AI used, what nobody checked, what can be wrong.
- Once a person edits it, the label changes: "Edited by Priya". Never let AI text pass as a person's, and never keep calling edited text "AI".
- The label is a button with a full name; the AI area is a region named "AI summary"; popover opens on Enter/Space, closes on Escape, returns focus.

## Disclaimer

- Say what may be wrong and why, where it applies: "Deposit rules differ by city and state." Give 1 next step: "Find free tenant help near you".
- The quiet line, if any, under 8 words: "AI can make mistakes. Check important info." Must still pass 4.5:1 contrast.
- Never a pop-up before every answer, never the same grey line under every answer - people stop seeing it in a day. A 1-time notice can be dismissed and not shown again.
- Start a caveat with a warning icon that has a text name; keep it inside the answer's text so it is read in order.

## Errors, refusals and limits

- Lead with what happened, in plain words: "The answer stopped part-way", "You've used today's deep research".
- The reason in 1 line. For limits, the reset time, not "later".
- Refuse once, briefly, without a lecture. Then offer what you can do.
- 1 way on that works now, as the next thing in tab order. Partial answers stay as text.
- Never an error code as the main message; put it in a details row. Never a long apology that blames policy.
- Announce the title once, politely; do not move focus to the error; icon + words, not colour alone.

## Confidence and explanation

- Flag only what needs a look; if everything is flagged, nothing is. Count first: "4 fields read · 1 to check".
- Say what to do and why: "Check this - the scan is blurry here", not "Low confidence" and not a percent (unless experts need it, then say what the number means).
- Explanations start with the fact, then the rule: "KSh 4,200 is over the KSh 3,000 limit." The person's numbers and names, never "score", "feature", "weight". 2 or 3 reasons, then the next step and who really decides.
- Flags live in the field's accessible name; icon + words, never colour alone; "Show on scan" is a real button with a text alternative.

## Memory, consent, temporary chat

- Memory: each memory is 1 plain sentence about the person ("Runs before work, around 6:00"), editable and deletable on its own. Show when memory was used, right under the answer: "Used 2 memories". Pause means "Nothing new is saved or used. Your memories are kept." Before Delete all, say what goes and that it cannot be undone. "Memory deleted" comes with an Undo that stays until focus moves.
- Consent: name the use ("train our AI", "share with our partners"), never "improve our services". 2 lines: what is used, what never is. 2 equal buttons: "Allow" / "Don't allow", same size and contrast, neither focused by default. Say where to change it and that it applies to new chats. Show it again where it matters (on upload).
- Temporary chat: call it "Temporary chat", not "Incognito" alone. 1 line of rules: "Not saved to your history or memory, and not used for training." State the exception honestly with the number of days. The whole chat looks different top to bottom, with the words in the header and the composer - not a notice that scrolls away.

## Don't

- Invent sources. Cite per answer instead of per claim. Show a marker on every sentence even when the source doesn't support it.
- Mark AI text by a glow or colour alone. Leave "AI" on text a person has rewritten.
- Pop up a disclaimer before every answer. Use "AI can make mistakes" as the only caveat where the stakes are money, health or law.
- Show a percent on every field. Show a model score as an explanation.
- Use memory silently. Bury the choice 4 levels deep. Pre-tick "help us improve".
