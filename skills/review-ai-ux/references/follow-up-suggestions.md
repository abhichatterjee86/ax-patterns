# Follow-up suggestions

Offer the next 2 or 3 asks, so the conversation keeps moving.

- ID: AX-REA-06
- Moment: 4 Read - "What did it make?"
- Maturity: established
- Also called: Related questions, Next steps, Suggested replies
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/follow-up-suggestions
- Licence: CC BY 4.0 (text and figures)

## Story

> When I have read an answer and am not sure what to ask next, I want 2 or 3 good next questions I can tap, so I keep learning without having to think up the words.

- **Setting:** Kwame asks how insulin works, in simple words.
- **Trigger:** He understands it, but does not know what to ask next.
- **Without it:** He types "more" and gets the same answer again, only longer.
- **With it:** 3 next asks sit under the answer: type 1 or type 2, too little insulin, and a quiz.
- **Outcome:** He taps 1, gets a clear answer, and new suggestions lead him on.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Answer | The answer streams in (arrives word by word). No suggestions yet. | Writes. | 0-2 s | Generating a response |
| Suggestions | "Ask next" and 3 short asks under the answer, about this answer. | Idle. | when the answer is done | Response complete |
| Tap | The tapped suggestion fills in. | Idle. | on tap | - |
| Add to it | If a tap fills the box, the person can add words before sending. | Idle. | optional | - |
| Next answer | The suggestion becomes the person's ask. The old suggestions are gone. | Writes. | - | Generating a response |
| New suggestions | 3 new asks under the new answer only. | Idle. | when done | Response complete |

## On each device

- **Phone:** Suggestions stack as full-width rows under the answer, each at least 44 px tall, so they are easy to tap with a thumb.
- **Tablet:** A wrapping row of pills (small rounded buttons) under the answer.
- **Desktop:** A wrapping row of pills under the latest answer. A long suggestion shows in full on hover and focus.

## Use when

- People are learning or exploring and may not know what to ask next.
- The answer has clear next steps - go deeper, compare, apply, test yourself.
- Typing is slow, as on a phone or on the move.

## Don't use when

- The person is deep in a focused task, like writing. Suggestions pull them away.
- No answer has been given yet - help people start instead. Use Suggested prompts instead.
- People want to change this answer, not ask a new question. Use Adjust length and tone instead.

## Anatomy

- **A. Label:** "Ask next" - says these are questions to send, not part of the answer.
- **B. Specific ask:** Comes from this answer, in the person's own words, ready to send.
- **C. Something to do:** Not only questions: "Quiz me on this", "Make a checklist".
- **D. The box:** Always there. Suggestions help. They never replace typing.

## Do and Avoid

- **Do:** Each suggestion comes from this answer and goes somewhere new. (Insulin lets sugar move from your blood into your cells…Ask nextHow is type 1 different from type 2?Quiz me on this)
- **Avoid:** "Tell me more" fits any answer, so it teaches nothing and gets a longer copy. (Insulin lets sugar move from your blood into your cells…Ask nextTell me moreAnything else?)
- **Do:** Only the latest answer has suggestions. Old ones go once 1 is used. (In type 1, the body makes almost no insulin…Which type is more common?)
- **Avoid:** Suggestions stay under every old answer. The thread fills with buttons that no longer fit. (Insulin lets sugar move…Tell me more · Anything else?In type 1, the body makes…Tell me more · Give an example)

## Writing

- Write each one as the person would ask it: "How is type 1 different from type 2?"
- Give 3 at most. Mix a deeper ask, a wider ask, and something to do: "Quiz me on this".
- Never "Tell me more" or "Anything else?" - they fit every answer, so they help with none.
- If a suggestion is paid for, label it "Sponsored".

## Accessibility

- Make suggestions a list of real buttons named by their text, after the answer in reading order, under the heading "Ask next".
- Do not read each suggestion aloud when it appears. "Response complete" is enough; people find them by moving on.
- When a tap fills the box, move focus to the box with the caret (the typing cursor) at the end.
- When old suggestions are removed, keep focus on the new message, not the top of the page.

## Seen in

- **Perplexity** (Answer engine, checked Nov 2024): Perplexity said its ads would appear as sponsored follow-up questions, labelled "sponsored". Answers to them are still written by Perplexity, not by the brand. [Perplexity blog, 12 Nov 2024](https://www.perplexity.ai/hub/blog/why-we-re-experimenting-with-advertising)
- **Copilot in Teams meetings** (Microsoft Teams, checked Nov 2024): When Copilot answers a prompt in a meeting, it also suggests follow-ups to keep the conversation going (roadmap item 325858, planned for January 2025). [M365 Admin: roadmap item summary, 26 Nov 2024](https://m365admin.handsontek.net/microsoft-teams-copilot-in-meetings-will-suggest-follow-up-questions-to-ask-it/)

## Related patterns

- Alternative to Suggested prompts: The same idea before the first ask, to help people start.
- Often combined with Prompt composer: Where a suggestion lands when a tap fills the box.
- Alternative to Adjust length and tone: Change this answer instead of asking a new question.
- Often combined with Summary: After a summary: "What do I need to do?"

## Sources

- [AWS Cloudscape - Support prompts](https://cloudscape.design/gen-ai/patterns/support-prompts/)
- [Shape of AI - Follow up](https://www.shapeof.ai/patterns/follow-up)
