# Suggested prompts

Offer 3 or 4 example asks, so people know what to type and what the AI can do.

- ID: AX-DIS-03
- Moment: 1 Discover - "What can it do?"
- Maturity: established
- Also called: Starter prompts, Conversation starters, Prompt chips
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/suggested-prompts
- Licence: CC BY 4.0 (text and figures)

## Story

> When I open an AI tool for the first time, I want a few real examples of what it can do, so I can start without guessing what to type.

- **Setting:** Priya opens the assistant. The box is empty and the cursor blinks.
- **Trigger:** She does not know what it is good at, or how much to write.
- **Without it:** She types "hi", gets a generic reply, and closes the app.
- **With it:** 4 specific examples sit above the box. She taps 1, changes the city and the month, and sends.
- **Outcome:** Her first answer is useful - and now she knows how to ask the next one.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Empty state | A greeting, 1 line on what the AI can do, 3 or 4 examples, and the box. | Idle. | on open | - |
| Focus | The example under the finger or the mouse lifts. | Idle. | on hover or focus | - |
| Picked | The chosen example is marked. | Idle. | on tap | - |
| Filled the box | An editable example lands in the box with its changeable parts ready to edit. | Idle. | at once | Prompt added to the message box |
| Edited | The person changes the parts that are theirs, then sends. | Idle. | as typed | - |
| Sent | A ready-to-go example sends straight away, like any message. | Starts answering. | on tap | Message sent |
| Answering | The examples are gone; the conversation has started. | Answers. | after send | Generating a response |

## On each device

- **Phone:** 3 or 4 pills just above the box, where the thumb already is. They scroll sideways if they do not fit - never 2 rows of tiny chips.
- **Tablet:** Cards with 1 line of detail fit 2 to a row, above the box.
- **Desktop:** Cards in a row of 3 or 4 above the box, or beside a greeting. Each card can carry a short line on what you will get.

## Use when

- New people meet an empty box and do not know what the AI is good at.
- The AI can do things people would not think to ask for.
- Asks work better with a certain shape - a place, a date, a goal - and an example teaches it.

## Don't use when

- The person is already mid-task - suggest the next step instead. Use Follow-up suggestions instead.
- The examples would be generic, like "Ask me anything" - say what the AI can do instead. Use Capability disclosure instead.
- People need whole finished starting points, not 1-line asks. Use Templates and example gallery instead.

## Anatomy

- **A. Greeting and scope:** 1 line on what the AI can do, so the examples make sense.
- **B. A suggestion:** A specific, real ask - a place, a goal, a format - not a category.
- **C. What a tap does:** A pencil means it fills the box to edit; an arrow means it sends at once.
- **D. The box:** Right below, so the examples read as "things you could type here".
- **E. More ideas:** A shuffle for people the first 4 did not fit.

## Do and Avoid

- **Do:** Specific asks show both what the AI can do and how to ask. (Plan a 3-day trip to Kyoto in AprilExplain this phone bill)
- **Avoid:** Categories. They say nothing a person could not have guessed, and teach no shape. (Help me writeBrainstormLearn)
- **Do:** An example with a place and a date fills the box, so the person makes it theirs. (Plan a 3-day trip to Kyoto in MayChange the parts in the box, then send.)
- **Avoid:** The same example sends at once, so she gets a plan for the wrong month. (Planning a trip to Kyoto in April…Sent before she could change the month.)

## Writing

- Write each example as a whole ask a real person would type, in their words - not a feature name.
- Keep pills to about 6 words. Put detail on a second line of a card, not in the pill.
- Mark the parts people should change - "[Kyoto]", "[April]" - when the example fills the box.
- No exclamation marks, no "please". Sentence case.

## Accessibility

- Each suggestion is a real button whose name is the whole ask, not just the short label.
- Say in the name what a tap does: "Fill the message box with: Plan a 3-day trip…".
- After filling the box, move focus into it, so a keyboard or screen reader user can edit at once.
- Suggestions are reachable by Tab in reading order, before the box.

## Seen in

- **ChatGPT** (Web, signed out, checked Jun 2025): Short pill suggestions such as "Analyze data", "Summarize text" and "Help me write" sit near the box for people who are not signed in. [Nielsen Norman Group, 27 Jun 2025](https://www.nngroup.com/articles/designing-use-case-prompt-suggestions/)
- **Claude** (Web, before sign-in, checked Jun 2025): A carousel of use cases shows example conversations. NN/g notes the simplified examples can understate how complex real conversations get. [Nielsen Norman Group, 27 Jun 2025](https://www.nngroup.com/articles/designing-use-case-prompt-suggestions/)
- **Amazon Rufus** (Shopping app, checked Jun 2025): Suggested questions change with the product on screen, so a shopper who does not know the category still knows what to ask. [Nielsen Norman Group, 27 Jun 2025](https://www.nngroup.com/articles/designing-use-case-prompt-suggestions/)
- **Microsoft 365 Copilot** (Web and apps, checked Oct 2026): The Prompt Lab holds Microsoft-curated prompts alongside "Your saved prompts" - a prompt is saved with the bookmark that appears after it runs. [Microsoft Support, updated 30 Oct 2026](https://support.microsoft.com/en-US/Microsoft-365-Copilot/save-your-favorite-prompts-to-use-again)

## Related patterns

- Often combined with Capability disclosure: The 1 line above the examples that says what the AI can do.
- Alternative to Follow-up suggestions: The same idea later in the conversation: the next 2 or 3 asks.
- Alternative to Templates and example gallery: Whole finished starting points, for bigger jobs.
- Often combined with Prompt composer: The box the examples fill.

## Sources

- [Nielsen Norman Group - Designing use-case prompt suggestions (Jun 2025)](https://www.nngroup.com/articles/designing-use-case-prompt-suggestions/)
- [AWS Cloudscape - Support prompts](https://cloudscape.design/gen-ai/patterns/support-prompts/)
- [Microsoft HAX Toolkit - Make clear what the system can do](https://www.microsoft.com/en-us/haxtoolkit/)
- [Apple WWDC21 - Discoverable design](https://developer.apple.com/videos/play/wwdc2021/10126/)
- [Apple WWDC22 - Implement App Shortcuts with App Intents](https://developer.apple.com/videos/play/wwdc2022/10170/)
