# Citations and sources

Link every claim in an AI answer to the source it came from.

- ID: AX-TRU-01
- Moment: 6 Trust - "Can I rely on it?"
- Maturity: established
- Also called: Sources, References, Footnotes, Grounding
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/citations
- Licence: CC BY 4.0 (text and figures)

## Story

> When I ask the AI a factual question, I want to see where each part of the answer comes from, so I can decide in seconds whether to trust it.

- **Setting:** Priya needs 1 number for a slide: how much of a web page people actually read.
- **Trigger:** She asks the assistant. It answers in 3 confident sentences.
- **Without it:** Nothing says where the number came from. She cannot put it on a slide, so she searches again herself.
- **With it:** Each sentence ends in a small number. She taps 1 and the source opens in a sheet, with the line it came from.
- **Outcome:** She copies the number and the source together. 20 seconds, and she can defend it.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Question sent | Her question, and the composer clears. | Reads the question and decides it needs sources. | 0 s | - |
| Searching | "Searching 6 sources" with the site icons appearing 1 by 1. | Finds and reads pages. | 0 to 1.5 s | Searching |
| Answering | The answer streams in. A number appears at the end of each sentence as it lands. | Writes the answer and links each claim to the passage behind it. | 1.5 to 4.5 s | Generating a response |
| Sources shown | On a phone, a "3 sources" row under the answer. On desktop, the list beside it. | Done writing; the full list is now fixed. | 4.5 s | - |
| Previewing a source | The title, the site, the date, and the exact passage, highlighted. | Nothing - this is the person checking. | on tap | Source 1 of 3, Nielsen Norman Group |
| Done | The answer with its markers, and the sources 1 tap away. | Waits for the next question. | 7 s | Response complete, 3 sources |

## On each device

- **Phone:** Markers are tap targets of at least 24 px. The source opens in a bottom sheet, not a hover card, and the answer stays where it was.
- **Tablet:** In landscape there is room for a narrow source column; in portrait, use the phone's sheet. Perplexity's Apr 2026 iPad redesign added richer citation displays.
- **Desktop:** Sources sit in a column beside the answer, open by default. Hovering a marker highlights its source; clicking keeps it open.

## Use when

- The answer states facts someone may repeat, decide on or put in front of others.
- The AI read pages, files or records the person could open themselves.
- Being wrong costs something: health, money, law, a client deliverable.
- People need to compare what different sources say.

## Don't use when

- The output is creative or personal, like a poem or a birthday message - there is nothing to cite.
- The AI did not use any source. Do not invent links to look grounded - say so plainly. Use Error, refusal and limits instead.
- The person wants to know why the AI decided something, not where a fact came from. Use Explanation instead.

## Anatomy

- **A. Inline marker:** Ties 1 claim to 1 source, at the end of the sentence it supports.
- **B. The claim:** The sentence the marker belongs to - highlighted when its source is open.
- **C. Source list:** Every source in 1 place, numbered the same as the markers.
- **D. Source preview:** Title, site and date, so the person can judge the source before opening it.
- **E. Quoted passage:** The exact lines the claim came from - the fastest way to check.
- **F. No-source flag:** Marks a sentence the AI could not ground, instead of hiding the gap.

## Do and Avoid

- **Do:** 1 marker per claim, right where the claim is. (Do people read every word of a page?No - about 20 to 28% of the words. They scan for what they came for.)
- **Avoid:** A single list at the end. Nobody can tell which of the 5 sources backs which sentence. (Do people read every word of a page?No - about 20 to 28% of the words. They scan for what they came for.Sources (5))
- **Do:** Flag the sentence the AI could not ground. (People scan web pages. Older readers scan lessno source found)
- **Avoid:** A marker on every sentence, even when the source does not support it. (People scan web pages. Older readers scan less[2] links to a page that does not say this.)

## Writing

- Number markers 1, 2, 3 in reading order. Never "[source]" or a bare link icon.
- Label the list "Sources", not "References" or "Citations" - it is the word people search for.
- Show the site name and the date next to every title. An undated source is half a source.
- When nothing was found, say "No sources found - check this before you use it", not nothing.

## Accessibility

- Each marker is a real button with a name like "Source 1: Nielsen Norman Group", not just "1".
- Markers are at least 24 by 24 px, so they pass the WCAG 2.2 target-size rule on a phone.
- Opening a source moves focus into the sheet; closing it returns focus to the marker.
- The answer is not a live region. Announce only that the response is complete and how many sources it has.
- Do not show the source only on hover - keyboard and touch users never see a hover.

## Seen in

- **Perplexity** (Web, checked Jun 2026): Inline site chips with "+N". A popover pages through sources with "1/N". A stack of site icons labelled "N sources" opens a sidebar, and "Check sources" appears when you select text. The sidebar narrows the answer column. [AI UX Playground teardown, updated 15 Jun 2026](https://aiuxplayground.com/teardowns/perplexity/citations)
- **Perplexity** (iPad, checked Apr 2026): The iPad redesign replaced a scaled-up phone layout with a persistent sidebar, Split View and richer citations - the only tablet-specific citation work found for a major AI product. [Business Today, 29 Apr 2026](https://www.businesstoday.in/technology/story/perplexitys-new-ipad-app-528049-2026-04-29)
- **ChatGPT** (Web, checked Jun 2026): A book icon under a reply shows which saved memories informed it - sources for what the AI remembers about you, not only for the web. Mobile was marked as coming soon. [OpenAI Help: Memory FAQ (screenshots dated 4 Jun 2026)](https://help-lb.openai.com/en/articles/8590148)

## Related patterns

- Often combined with Streaming response: Markers appear as each sentence streams in.
- Often combined with Confidence display: Say how sure the AI is when sources disagree.
- Alternative to Explanation: For why the AI decided, not where a fact came from.
- Part of Side pane and artifacts: Long research reports keep their sources in the side pane.
- Conflicts with Summary: A summary that drops the markers loses the grounding.

## Sources

- [Nielsen Norman Group - How little do users read?](https://www.nngroup.com/articles/how-little-do-users-read/)
- [Google PAIR Guidebook - Explainability and trust](https://pair.withgoogle.com/guidebook/)
- [Microsoft HAX Toolkit - Guidelines for human-AI interaction](https://www.microsoft.com/en-us/haxtoolkit/)
- [W3C - WCAG 2.2, 2.5.8 Target size (minimum)](https://www.w3.org/TR/WCAG22/#target-size-minimum)
