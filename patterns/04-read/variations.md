# Variations

Offer 2 to 4 versions to pick from, side by side.

- ID: AX-REA-03
- Moment: 4 Read - "What did it make?"
- Maturity: established
- Also called: Options, Alternatives, Drafts
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/variations
- Licence: CC BY 4.0 (text and figures)

## Story

> When I am not sure what I want the AI to make, I want to see a few clearly different versions at once, so I can point at the one that feels right instead of describing it.

- **Setting:** Wanjiru asks for a note about Saturday's street party.
- **Trigger:** She is not sure how it should sound - short, warm, or full of details.
- **Without it:** She gets 1 note, tries again 4 times, and loses track of the one she liked.
- **With it:** 3 versions arrive together, each labelled by how it is different.
- **Outcome:** She picks Warm and posts it. The other 2 stay 1 tap away.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asked | The ask. | Starts work. | 0 s | - |
| Writing | "Writing 3 versions", with all 3 filling in at once. | Writes 3 versions. | 0.5-3 s | Generating a response |
| Pick 1 | "3 versions - pick 1 to use." Each has a label, the text and "Use this". "3 more" sits below. | Idle. | when all are done | 3 versions ready |
| Picking | The chosen version lifts; the others fade. | Idle. | on tap | - |
| Kept | The pick becomes the answer. "2 other versions" opens the rest again. | Idle. | after the tap | Version 2 chosen |

## On each device

- **Phone:** Versions stack in 1 column, 2 lines each, with the label on top. 3 fit on 1 screen; 6 do not, and people stop comparing.
- **Tablet:** 2 or 3 side by side. Images sit in a 2 x 2 grid.
- **Desktop:** 3 or 4 side by side, so the eye moves across and compares. Hover shows the full text of a long version.

## Use when

- Taste matters more than correctness - wording, names, images, layouts.
- People find it easier to point at what they like than to describe it.
- 1 version at a time would mean many retries and lost good ones.

## Don't use when

- There is 1 right answer - a fact, a sum, a date. Several versions only cause doubt.
- People want 1 more try, not a set to compare. Use Regenerate, edit and branches instead.
- People already know the change they want - shorter, more formal. Use Adjust length and tone instead.

## Anatomy

- **A. Label:** Says how this version is different: "Short", "Warm", "With details".
- **B. The set:** 2 to 4 versions, side by side or stacked, all the same size.
- **C. Use this:** Picks 1. The others fold away but are kept.
- **D. More:** A new set from the same ask, when none of these fits.

## Do and Avoid

- **Do:** Each version is really different, and its label says how. Choosing is quick. (ShortStreet party Sat, 2 pm. Bring a dish!WarmHello neighbours! Games, music and food…With detailsRoad closes 1 pm, please move cars…)
- **Avoid:** 3 versions that differ by 1 word. People cannot see the difference and pick at random. (Hello neighbours! Join our street party…Hi neighbours! Join our street party…Hello neighbours! Come to our street party…)
- **Do:** The pick becomes the answer. The others are folded, not gone. (Hello neighbours! Street party on Saturday…✓ Using “Warm” · › 2 other versions)
- **Avoid:** Picking deletes the rest. If the pick was wrong, people must ask again. (Hello neighbours! Street party on Saturday…The other versions were removed.)

## Writing

- Label each version by how it differs: "Short", "Warm", "With details" - not "Option 1".
- Say the count and the job at the top: "3 versions - pick 1 to use."
- Name the buttons for what they do: "Use this", "3 more".

## Accessibility

- Mark up the set as a list. Each version's name starts with its label and place: "Warm, 2 of 3".
- Announce "3 versions ready" once, when all are done - not each version as it finishes.
- "Use this" is a real button named with the label: "Use the Warm version".
- After a pick, move focus to the kept version. "2 other versions" is a button that says if it is open or closed.

## Seen in

- **Midjourney** (Image generator, checked Nov 2026): From the image grid, V1-V4 buttons make variations of 1 image. "Vary (Subtle)" makes small changes; "Vary (Strong)" changes more but keeps the main idea. [Midjourney Docs: Variations](https://docs.midjourney.com/docs/variations)
- **Adobe Firefly** (Image generator, checked Nov 2026): Firefly Image 3 and Image 4 make 4 image variations per prompt; Image 4 Ultra and Image 5 make 1. "Generate more" makes a new set from the same prompt and settings. [Adobe Help: Create images from text prompts (updated 4 Nov 2026)](https://helpx.adobe.com/firefly/generate-images-with-text-to-image/generate-images-using-text-prompts/create-images-from-text-prompts.html)
- **Image Playground** (iOS, iPadOS and macOS, checked Jun 2026): Apple's guidelines say Image Playground can make several images of a person, so someone can pick the one they prefer. [Apple HIG: Generative AI (updated 8 Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)

## Related patterns

- Alternative to Regenerate, edit and branches: 1 new answer at a time, with arrows between them.
- Alternative to Adjust length and tone: When people know the change they want, 1 control beats a set to compare.
- Often combined with Edit output and revert to AI: Pick the closest version, then fix the last words by hand.
- Often combined with Generative UI and structured output: Versions of a layout or image shown as a grid of cards.

## Sources

- [Apple HIG - Generative AI: offer alternate versions (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Shape of AI - Variations](https://www.shapeof.ai/patterns/variations)
- [AI UX Patterns - Result variations](https://www.aiuxpatterns.com/pattern-result-variations.html)
- [Apple WWDC26 - Create UI prototypes using agents in Xcode](https://developer.apple.com/videos/play/wwdc2026/227/)
