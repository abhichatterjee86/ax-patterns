# Generative UI and structured output

Answer with the right widget - a table, a chart, a card - not only prose.

- ID: AX-REA-02
- Moment: 4 Read - "What did it make?"
- Maturity: emerging
- Also called: Rich responses, Widgets, Structured output, Tool UI
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/generative-ui
- Licence: CC BY 4.0 (text and figures)

## Story

> When I ask the AI to compare or sort things, I want the answer laid out as a table or cards I can scan and change, so I can decide without reading a long paragraph twice.

- **Setting:** Lerato asks to compare 3 data plans. She uses about 10 GB a month.
- **Trigger:** The answer has 3 plans and 4 facts each to weigh.
- **Without it:** She gets 1 long paragraph and scrolls up and down to compare the prices.
- **With it:** The answer is 1 line plus a table: 1 plan per row, the prices in 1 column.
- **Outcome:** She switches to yearly prices with 1 tap and chooses Flex.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asked | The ask. | Starts work. | 0 s | - |
| Skeleton | A grey outline in the shape of the widget, so the layout does not jump later. | Builds the data. | 0.5-2 s | Generating a response |
| Widget ready | 1 line that answers, then the table or cards, with at most 2 actions. | Idle. | when done | Response complete |
| Change it in place | A switch inside the widget (Monthly / Yearly) changes the numbers. No new message. | Idle - the widget does it. | on tap | - |
| Act | The person taps "Choose Flex"; the card shows what was done. | Records the choice. | on tap | Flex chosen |

## On each device

- **Phone:** A 4-column table does not fit. Show the same data as a row of cards to swipe, with the next card peeking in. Keep actions at the bottom, by the thumb, and at least 44 px tall.
- **Tablet:** The table fits inline. Open full screen only for big tables, maps or editing.
- **Desktop:** The widget sits inline in the thread. A big or long-lived widget can open side by side; the inline card then shrinks to a small chip so the chat keeps its place.

## Use when

- The answer compares several items on the same facts - plans, flights, products, options.
- People will act on the answer at once: choose, book, confirm, sort or filter.
- The data has a natural shape - rows and columns, a list of places, a chart over time.

## Don't use when

- The answer is 1 fact or 1 sentence. A sentence is faster to read than a card.
- The output is long writing or code that people will edit. Use Side pane and artifacts instead.
- People want to change the wording, not the data - that is a request for the chat. Use Adjust length and tone instead.

## Anatomy

- **A. Lead line:** 1 sentence that answers the question. The widget holds the detail.
- **B. The widget:** A table, cards or a chart, shaped by the content. No inner scroll.
- **C. Direct control:** A switch, sort or filter that changes what is already on screen, without a new ask.
- **D. Action:** At most 2, at the bottom. The main one names the verb and the thing.
- **E. The chat:** Stays below. Follow-ups and changes to the request still go here.

## Do and Avoid

- **Do:** 1 line answers. The table puts each fact in 1 column, so the eye compares down. (Flex covers your 10 GB for the least money.PlanDataPer monthLite5 GBR99Flex12 GBR179Max30 GBR349)
- **Avoid:** The same facts as a paragraph. People hold 9 numbers in their head, or read it twice. (Lite gives you 5 GB for R99 a month and does not roll over. Flex gives you 12 GB for R179 and rolls over for 1 month. Max gives you 30 GB for R349 and also rolls over…)
- **Do:** 4 facts and 2 actions. The main action names what happens. (Flex · 12 GB · R179Rollover: 1 monthChoose FlexFull screen)
- **Avoid:** A mini app inside the chat: 6 buttons, a menu and a retry that copies the chat's own. Menus also get clipped in the thread. (Flex · 12 GB · R179 ▾Rollover · Speed · Hotspot · Roaming · Contract…Choose · Compare · Share · Save · Retry · More ▾)

## Writing

- Start with 1 sentence that answers. Do not repeat the numbers that are in the widget.
- Label columns with what people compare: "Per month", not "Cost".
- Name the action with a verb and the thing: "Choose Flex", not "Submit".
- Keep inline cards to 4 or 5 facts. Put the rest in full screen.

## Accessibility

- Use a real table with header cells, so a screen reader reads each value with its column name.
- Hide the skeleton from screen readers. Announce "Generating a response" when it appears and "Response complete" when the widget is filled.
- Every control in the widget is a real button or switch, reachable by keyboard, at least 44 px on touch.
- In a swipeable row, give each card a name like "Flex, 2 of 3", and make the row readable in order without swiping.

## Seen in

- **Gemini app** (Web and apps, checked Nov 2025): Google is rolling out generative UI as "dynamic view": the model builds a custom interactive page for the prompt. Google says it can take a minute or more. [Google Research blog, 18 Nov 2025](https://research.google/blog/generative-ui-a-rich-custom-visual-interactive-user-experience-for-any-prompt/)
- **ChatGPT apps** (Web and apps, checked Nov 2026): Apps answer with an inline card (at most 2 actions, no inner scroll), a carousel of 3-8 items, full screen with the chat box still there, or picture-in-picture. [OpenAI Apps SDK: UI guidelines](https://developers.openai.com/apps-sdk/concepts/ui-guidelines)
- **Claude (MCP Apps)** (Web, desktop and mobile, checked Nov 2026): Inline cards have at most 2 actions and 4-5 data points. On mobile the next carousel card peeks in. Sorting and filtering stay in the app; follow-ups go through the chat. [Claude Docs: MCP Apps design guidelines](https://claude.com/docs/connectors/building/mcp-apps/design-guidelines.md)
- **Microsoft 365 Copilot** (Web and desktop, checked Jun 2026): Inline widgets are required; side-by-side is optional, and the inline widget then collapses into a small chip. Widgets must not copy Copilot's own prompt box, retry or reasoning. [Microsoft Learn: MCP Apps UI guidelines (18 Jun 2026)](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/plugin-mcp-apps-ui-guidelines)

## Related patterns

- Often combined with Side pane and artifacts: Where a big widget goes when inline is too small.
- Often combined with Specific loading messages: The skeleton and status while the widget is built.
- Often combined with Follow-up suggestions: Next asks under the widget, sent through the chat.
- Alternative to Streaming response: Plain text, word by word - right when the answer is words, not data.

## Sources

- [OpenAI Apps SDK - UI guidelines](https://developers.openai.com/apps-sdk/concepts/ui-guidelines)
- [Claude Docs - MCP Apps design guidelines](https://claude.com/docs/connectors/building/mcp-apps/design-guidelines.md)
- [Google Research - Generative UI (18 Nov 2025)](https://research.google/blog/generative-ui-a-rich-custom-visual-interactive-user-experience-for-any-prompt/)
- [Apple WWDC25 - Meet the Foundation Models framework](https://developer.apple.com/videos/play/wwdc2025/286/)
- [Apple WWDC25 - Design interactive snippets](https://developer.apple.com/videos/play/wwdc2025/281/)
