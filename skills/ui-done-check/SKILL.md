---
name: ui-done-check
description: The last check before a screen, page or flow is called finished - accessibility, actions, states and copy - returning findings marked Blocker, Major or Minor and a pass or fail list. Use when the user asks "is this done", "check this screen", "ready to ship?", wants a design QA, accessibility pass or polish pass on something an AI tool built, or before a demo or launch. For the AI parts of a product, also run review-ai-ux.
license: MIT
metadata:
  source: "https://axpatterns.design"
  repo: "https://github.com/abhichatterjee86/ax-patterns"
  version: "2026-11-21"
  author: "Abhi Chatterjee"
---

# Is this screen done?

AI tools finish a screen when it renders. A designer finishes it when a person who is tired, on a small laptop, using only a keyboard, can still do the job. This is that check.

## Procedure

1. **Look at it rendered**, not in code: at a laptop width, a wide monitor, the narrowest width it supports, and at 200% and 400% browser zoom.
2. **Use it with the keyboard only**, start to finish.
3. **Run an automated check** (axe or the browser's own) if you can. It catches only part of the problems; the list below covers the rest.
4. **Walk the checklist.** Mark each finding:
   - **Blocker** - a person cannot finish the task, or can lose work, money or data.
   - **Major** - a person can finish, but only with effort, guessing or help.
   - **Minor** - polish, consistency, copy.
5. **Report**: 1 line on what works, then findings with Blockers first. For each: where, what you saw (quote it), why it hurts, the fix. End with the pass or fail list below.

## Checklist

**Seeing**

- Body text has at least 4.5:1 contrast; large text 3:1; input borders and icons that carry meaning 3:1. Reading text aims for 7:1.
- No text under the product's minimum size (14px is a good floor).
- Status, errors and required fields are never shown by colour alone.

**Acting**

- Every target is at least 24 by 24px with space around it; main controls are 44 by 44px.
- 1 primary button per area, and it is the person's next expected action.
- Destructive actions look different and ask before they act, or can be undone.
- Buttons are verbs that name the result ("Save draft", not "OK").

**Keyboard and zoom**

- Focus is always visible, never removed, and never hidden behind a sticky bar.
- Focus order follows the reading order; dialogs take focus in and give it back.
- At 400% zoom (320px wide) nothing is cut off and no function disappears.

**States**

- Every list has an empty state that says why it is empty and how to fill it.
- Loading shows what is happening, not only a spinner.
- Errors say what went wrong and what to do, next to the field, and keep what the person typed.
- Every form field has a visible label above it - never a placeholder alone.

**Words and structure**

- 1 h1 per page, headings in order, landmarks present.
- Copy is in sentence case, uses numerals, and says what happens next.
- Dates cannot be misread ("7 Sep 2026", not "07/09").
- Motion respects reduced motion.

**AI on the screen**

- AI output is labelled as AI until a person accepts it, and can be accepted, edited or rejected.
- The AI never presses a button whose result is hard to undo; a person does.

## Pass or fail list

End the report with these, each marked pass or fail: contrast, colour-only meaning, target size, 1 primary action, keyboard only, visible focus, 400% zoom, empty states, error states, labels, headings, copy, reduced motion, AI labelling.
