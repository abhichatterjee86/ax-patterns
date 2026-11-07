# Prompt enhancer

Offer to improve the ask before it is sent, and show the change.

- ID: AX-ASK-06
- Moment: 2 Ask - "How do I tell it what I want?"
- Maturity: emerging
- Also called: Improve prompt, Rewrite prompt, Magic prompt
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/prompt-enhancer
- Licence: CC BY 4.0 (text and figures)

## Story

> When my ask is short and I don't know what else to say, I want the AI to suggest a fuller ask that I can see and undo, so I get a better result without losing my own words.

- **Setting:** Mei types a short ask: "Poster for my cake shop".
- **Trigger:** She doesn't know what else to say, so she taps Enhance.
- **Without it:** The tool rewrites her ask in secret. The poster comes back neon, at night, and she can't see why.
- **With it:** The fuller ask appears in her box, with the added words marked and an Undo.
- **Outcome:** She keeps the strawberry cakes and the morning light. The poster works first time.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Short ask | Her own words in the box, with Enhance and Generate below. | Idle. | 0 s | - |
| Enhancing | "Improving your prompt" in the box. Nothing is generated yet. | Rewrites the ask. | on tap, about 1 s | Improving your prompt |
| Change shown | The fuller ask replaces hers in the box. Added words are underlined. "Enhanced · 2 additions" and Undo sit below. | Idle - waits for her. | - | Prompt enhanced. 2 additions |
| Keep or undo | She edits it, keeps it, or taps Undo and sees "Back to your words". | Idle. | on tap | "Back to your prompt" after Undo |
| Generate | She taps Generate. The ask on screen is the ask that is used. | Generates. | on tap | Generating an image |
| Result | The poster, with a line saying what it was made from: "Made from the enhanced prompt". | Idle. | when done | Image ready |

## On each device

- **Phone:** Enhance sits in the tool row of the box. The rewrite fills the box and grows it. Undo sits right under the text, by the thumb.
- **Tablet:** As on the phone. In landscape there is room to show the original above the rewrite.
- **Desktop:** As on the phone, with room for a "Show original" link beside Undo, so people can compare before they choose.

## Use when

- Short asks give weak results and people don't know what to add - common for images and video.
- A fuller ask works better, and seeing it teaches people to write better asks.
- People can check the rewrite quickly, before anything runs or costs credits.

## Don't use when

- The AI needs a few exact values. Ask for them with fields instead of guessing them. Use Structured prompt instead.
- The exact words matter, like a quote, a name or a line of code. A rewrite can break them.
- People want to change the result, not the ask - shorter, warmer, more formal. Use Adjust length and tone instead.

## Anatomy

- **A. Enhance:** 1 button in the box. It runs only when tapped, never in secret.
- **B. Marked additions:** The words the AI added are underlined, so people see what changed and what stayed.
- **C. What changed, and Undo:** "Enhanced · 2 additions" in 1 line. Undo brings back her exact words.
- **D. Generate:** Still her tap. The rewrite never runs by itself.

## Do and Avoid

- **Do:** The rewrite is in the box. Added words are marked and Undo is 1 tap away. (A bright poster for my cake shop: 3 strawberry cakes, soft morning lightEnhanced · 2 additions · UndoGenerate)
- **Avoid:** The rewrite runs in the background. When the result is odd, people can't see why or go back. (Poster for my cake shopEnhance: always onResult: neon sign, night street)
- **Do:** Keeps her words and adds detail she can check at a glance. (Hers: Poster for my cake shopRewrite: poster for my cake shop, space at the top for the shop name)
- **Avoid:** Adds a fact she never gave - a sale. If she misses it, a wrong offer goes in the window. (Hers: Poster for my cake shopRewrite: poster for my cake shop, 50% off all cakes this week)

## Writing

- Name the button for what it does: "Enhance" or "Improve prompt". Not "Magic".
- Say what changed in 1 line: "Enhanced · 2 additions".
- Keep the person's words and their order. Add detail, but never new facts like prices, names or dates.
- Use the same plain name for the way back every time: "Undo" or "Show original".

## Accessibility

- Announce "Improving your prompt" when it starts and "Prompt enhanced. 2 additions" when it ends.
- Mark added words with an underline as well as colour, and tell screen readers they are added text.
- Keep focus in the prompt box after the rewrite, so people can read and edit it with the keyboard.
- Undo is a real button, and the usual undo keys work too.

## Seen in

- **Adobe Firefly** (Web, checked Nov 2026): Prompt enhancement is on by default. After generating, "Show enhanced" shows the fuller prompt, which can be edited, and "Show original" shows the words as typed. [Adobe Help: Enhance prompts to generate images (updated Aug 2026)](https://helpx.adobe.com/firefly/web/work-with-images/generate-images/enhance-prompts-to-generate-images.html)
- **Ideogram** (Web, checked Nov 2026): Magic Prompt rewrites the prompt for more variety and detail, and can translate it into English. It starts on; people turn it off to keep their exact wording. [Ideogram Docs: Magic prompt](https://docs.ideogram.ai/using-ideogram/generation-settings/magic-prompt)
- **Anthropic Console** (Web, checked Oct 2024): The prompt improver rewrites a developer's prompt with clearer structure and examples. People then test it and give feedback to refine it. [Claude blog: Prompt improver (14 Oct 2024)](https://claude.com/blog/prompt-improver)

## Related patterns

- Alternative to Structured prompt: Ask for the details up front, instead of adding them after.
- Part of Prompt composer: Enhance lives in the tool row of the box.
- Often combined with Suggested prompts: Good examples teach the same thing: what a strong ask looks like.

## Sources

- [Shape of AI - Prompt enhancer](https://www.shapeof.ai/patterns/prompt-enhancer)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
