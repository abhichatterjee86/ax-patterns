# Templates and example gallery

Show finished examples people can start from, instead of a blank box.

- ID: AX-DIS-04
- Moment: 1 Discover - "What can it do?"
- Maturity: established
- Also called: Prompt library, Gallery, Use cases
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/templates-gallery
- Licence: CC BY 4.0 (text and figures)

## Story

> When I want to make something but don't know how to ask for it, I want to start from a finished example and change only my details, so I get a good result without learning to write prompts.

- **Setting:** Grace wants a flyer for a Saturday offer. She opens the design helper.
- **Trigger:** She taps Flyers and sees 2 finished ones.
- **Without it:** A blank box. She types "make a flyer for my bakery" and gets "Bakery Sale!" with no name, offer or date.
- **With it:** She taps Use this. The ask behind the example opens with 3 blue blanks: shop, deal, day.
- **Outcome:** She fills the blanks and gets a flyer with her shop, her offer and her date.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Gallery | Finished results, each with the short ask that made it. | Idle. | on open | - |
| By task | Chips filter by task: Flyers, Menus, Posts. | Idle. | on tap | - |
| Picks 1 | The card lifts. Use this is the 1 action. | Idle. | - | - |
| Ask opens | The example's ask goes into the box, with its details as blanks to fill. | Idle. | on tap | Example ask added to the box |
| Fills the blanks | Each blank turns into her words. Make it lights up when all are filled. | Idle. | - | - |
| Making | "Making your flyer", with a note of which example it came from. | Works. | - | Making your flyer |
| Her flyer | The same layout as the example, with only her details. | Idle. | when done | Flyer ready |

## On each device

- **Phone:** 2 small cards per row. Filter chips scroll sideways. Use this opens the ask full width, above the keyboard.
- **Tablet:** 2 or 3 cards per row. The ask opens at the bottom, with the example still visible.
- **Desktop:** 3 or 4 cards per row with search. Hover shows the full ask. Use this opens it beside the gallery.

## Use when

- The result is visual or has a set shape - flyers, menus, slides, apps, reports.
- People don't know what a good ask looks like for this tool.
- Seeing the result first helps people choose faster than reading a description.

## Don't use when

- Most asks are short questions - a few example asks are enough. Use Suggested prompts instead.
- Every ask needs the same few fields - give people a form. Use Structured prompt instead.
- People need to see the limits first, not examples. Use Capability disclosure instead.

## Anatomy

- **A. Finished result:** What people will get. They pick by look, not by words.
- **B. The ask behind it:** The short ask that made it, with its details as blanks. It teaches how to ask.
- **C. Use this:** Opens the ask with blanks to fill. It does not copy the example's details.
- **D. Task filters:** Chips by task, in people's words: Flyers, Menus, Posts.

## Do and Avoid

- **Do:** Use this opens blanks. Nothing from the example can slip through. (Fresh Bread SaturdayFlyer for shop, offer deal, on dayFill the blue blanks, then make it.)
- **Avoid:** Use this copies the example. People fix what they see, and a detail they miss goes out. (Fresh Bread SaturdayMama Grace’s Bakery · Sat 19 AprSunrise Café · sunrisecafe.com)
- **Do:** Each card shows the ask that made it. People learn how to ask by browsing. (Fresh Bread SaturdayFlyer for [shop], offer [deal], on [day]Use this)
- **Avoid:** Only likes and badges. People copy results but never learn what made them. (Fresh Bread Saturday♥ 2.4k · FeaturedUse this)

## Writing

- Name examples by what they are for: "Fresh Bread Saturday", not "Template 12".
- Write the ask on each card in plain words, with the parts to change as blanks.
- Name the blanks by what goes in them: "shop", "deal", "day".
- Say where a result came from: "From the example Fresh Bread Saturday".

## Accessibility

- Each card is 1 list item with a heading (its title) and 1 button named "Use this: Fresh Bread Saturday".
- Thumbnails have alt text (the words a screen reader reads for an image) that describes the result, not "template image".
- Blanks in the ask are real form fields with labels, so Tab moves from 1 to the next.
- Filter chips are toggle buttons that tell screen readers whether they are on (with aria-pressed). The result count is announced without interrupting.

## Seen in

- **Claude** (Web and mobile, checked Nov 2026): An Inspiration tab in the artifacts space shows curated artifacts by category, such as "Learn something". Customize starts a new chat with the artifact's content to change. [Claude Help: Discovering, publishing, customizing and sharing artifacts](https://support.claude.com/en/articles/9547008-discovering-publishing-customizing-and-sharing-artifacts)
- **Microsoft 365 Copilot** (Copilot and Copilot Chat, checked Oct 2026): Prompt Gallery holds Microsoft prompts, prompts people save, and prompts shared with their team. Each prompt comes with tips to make it your own. [Microsoft Learn: Copilot Prompt Gallery](https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-prompt-gallery)
- **Gemini Gems** (Web, checked Sep 2024): Premade Gems such as Brainstormer and Writing editor sit in the side panel. People can copy some of them and rewrite the instructions. [Google blog: 5 tips on getting started with Gems (5 Sep 2024)](https://blog.google/products/gemini/google-gems-tips/)

## Related patterns

- Alternative to Suggested prompts: Example asks in words, for short questions.
- Often combined with Structured prompt: The blanks in the ask become a small form.
- Often combined with Variations: After the first result, show a few to choose from.
- Often combined with Capability disclosure: The gallery shows the cans. The card says the can'ts.

## Sources

- [Shape of AI - Example gallery](https://www.shapeof.ai/patterns/gallery)
- [Microsoft HAX Toolkit - Pattern 1E: Show a set of system outputs](https://www.microsoft.com/en-us/haxtoolkit/pattern/g1-e-show-a-set-of-system-outputs/)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
