---
name: lock-design-system
description: Write a locked design system file (DESIGN.md) for a product before or while an AI coding tool builds it - tokens, type, components, hard rules, a "Done when" list and a "Never" list - so every screen looks like the same product. Use when the user starts a new app or site, says the screens look inconsistent, the AI keeps inventing colours or sizes, or asks for a design system, style guide, tokens or design rules. Also use to audit an existing build against its system. Not for choosing a visual direction from scratch - pick the direction first, then lock it here.
license: MIT
metadata:
  source: "https://axpatterns.design"
  repo: "https://github.com/abhichatterjee86/ax-patterns"
  version: "2026-11-24"
  author: "Abhi Chatterjee"
---

# Lock a design system before you build

An AI coding tool invents a new grey, a new radius and a new button every time it is not told exactly what to use. The fix is 1 file, written once, that the tool reads before every screen: the values, the rules and the tests. "Locked" means nothing outside the file may be used.

## Procedure

0. **If something is already built, audit first and change nothing.** List every colour, font, size, radius, shadow and component in use, screen by screen. Mark each: matches, close, or different. Show the list and wait for the person to agree before changing code.
1. **Name the reference.** 1 screen or 1 build is the source of truth. Write down which wins when the file and the build disagree, and keep it that way.
2. **Write 5 to 8 hard rules** at the top - the things that must never break. Examples: 1 colour for human action; 1 treatment for AI output; status is never colour alone; minimum text size; target size; light or dark only.
3. **Tokens**, each with a name, a value and a use:
   - Surfaces and borders. Borders on inputs reach 3:1 against their background.
   - Text colours, each with its measured contrast. Reading text aims for 7:1; nothing under 4.5:1.
   - Brand: what the brand colour _means_ (for example "a commitment the person makes"), and where it is not allowed.
   - Status: map every status in the product onto a fixed set of 4 or 5 tints (neutral, waiting, done, stopped, retired). A new status never gets a new colour.
   - Type scale as a table: role, size, weight, colour, notes. Sizes in rem. Say the minimum.
   - Spacing scale, radius list, elevation, motion (with the reduced-motion rule).
4. **Components**, as tables of exact values, not descriptions: button variants, inputs, cards, list rows, dialogs, notices, empty states, toasts, dates. Say how many primary buttons an area may have (usually 1: the person's next expected action).
5. **The AI layer** (if the product has AI). 1 visual treatment reserved for output a machine made and no person has accepted yet, with a text label. Accept, edit and reject on every output. A short table of actions the AI never takes.
6. **Writing rules**: case, numbers, punctuation, button verbs, date format, how empty and error states read.
7. **Accessibility target**: the WCAG level, plus any AAA criteria you choose, and the zoom levels every screen is checked at.
8. **"Done when"**: a checklist a screen must pass before it is finished. **"Never"**: the list of things that are always wrong in this product.
9. **A decisions log** beside the file: every deviation, with the date and the reason. A deviation that is not logged is a bug.

## Rules for the AI tool reading the file

- Read the whole file before writing any screen, token or prompt.
- Use only values from the file. Never hard-code a value in a component; map every token into the styling system by name.
- When the request and the file disagree, stop and list the conflict. Do not silently pick 1.
- After each step of a large change, commit and stop for review.

## The file, as a skeleton

```markdown
# <Product> design system

Reference build: <url or screen>. Where this file and the build disagree, <which> wins.

## 1. Hard rules

## 2. Colour (surfaces, text with contrast, brand, status, semantic, AI)

## 3. Typography (table)

## 4. Layout, spacing, shape, motion

## 5. Components (tables)

## 6. AI layer (if any) and the human-only table

## 7. Writing

## 8. Accessibility

## 9. Done when

## 10. Never
```

## Done when

- Every value on screen can be traced to a token in the file.
- Every status in the product maps to 1 of the fixed tints, and carries a word as well as a colour.
- Side by side, any 2 screens read as the same product.
- The contrast of every text pair in the file has been measured, not guessed.
- The "Done when" and "Never" lists exist, and the decisions log has an entry for every exception.
