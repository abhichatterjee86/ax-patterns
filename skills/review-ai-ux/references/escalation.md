# Escalation and human handoff

Hand over to a person cleanly when the AI should not go on.

- ID: AX-DEL-06
- Moment: 7 Delegate - "Can it act for me?"
- Maturity: established
- Also called: Talk to a human, Handoff, Escalate
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/escalation
- Licence: CC BY 4.0 (text and figures)

## Story

> When an AI assistant can't solve my problem, I want it to pass me to a person who already knows the story, so I don't have to explain it all again.

- **Setting:** Wanjiru opens the help chat: she was charged twice for October.
- **Trigger:** The assistant finds the 2 payments, but it is not allowed to refund.
- **Without it:** A person joins and asks "How can I help you today?" She types the whole story again.
- **With it:** The assistant says who it is passing her to, the wait, and what they will see.
- **Outcome:** Otieno from Billing joins, names the 2 payments, and starts the refund.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asked | The problem. | Reads it. | 0 s | - |
| AI tries | The assistant, marked AI, finds what it can: 2 payments, 4 minutes apart. | Answers. | - | Generating a response |
| Can't go on | Either the person asks for a human, or the AI says what it can't do and offers a person: "Shall I pass this to them?" | Stops trying. | as soon as it knows | - |
| Handoff | Who it goes to, that it is a person, the wait, and what they will see. | Hands over the chat and a short summary. | - | Connecting you to a person |
| Person joins | A clear change of voice: "Otieno · Billing team". The first message uses the facts. | Silent. | after the wait | Otieno from Billing joined |
| Solved | What the person did, in 1 past-tense line. | Silent. | - | - |

## On each device

- **Phone:** The handoff happens in the same thread. The person can leave the app - the reply arrives as a notification, with the chat kept.
- **Tablet:** As on the phone.
- **Desktop:** As on the phone. If the wait is long, offer another way in the same card - "Email me when Billing replies".

## Use when

- The AI can't finish the job - it is not allowed to refund, decide or change the thing.
- The topic is risky or upsetting - money, health, safety, a complaint.
- The person asks for a human, in any words - "agent", "a real person", "someone".

## Don't use when

- The AI only needs 1 more detail to go on. Ask 1 clear question instead.
- The AI can do it, but the action is risky. Ask the person for a yes instead. Use Approval gate instead.
- Nobody is on hand to pick it up. Don't promise a person - say what they can do next. Use Error, refusal and limits instead.

## Anatomy

- **A. Where it goes:** The team, and that it is a person. While waiting, the wait time.
- **B. What they will see:** The facts the AI found, and the chat so far. The person can check it is right.
- **C. Who is talking:** The person's name and team, clearly not the AI.
- **D. First message:** Uses the facts, so the person never repeats the story.
- **E. AI label:** The assistant is marked AI from the start.

## Do and Avoid

- **Do:** Says who, how long, and what is passed on. (Passing you to BillingA person will reply here · usual wait 3 minWhat Billing will see: 2 payments on 3 Oct)
- **Avoid:** "An agent" could be another bot. No wait time, and no sign the story goes with her. (Connecting you to an agentPlease wait…)
- **Do:** The AI says what it can't do and offers a person straight away. (AI · AssistantI can’t refund payments. A person in Billing can. Shall I pass this to them?Yes, pass it on)
- **Avoid:** The AI loops. The person has to guess the magic words to reach a human. (AI · AssistantSorry, I didn’t get that. Could you rephrase?Sorry, I didn’t get that…)

## Writing

- Say what the AI can't do, then offer a person: "I can't refund payments. A person in Billing can."
- Name the team and say it is a person: "Passing you to Billing - a person will reply here."
- Give the wait in minutes or place in line, not "shortly".
- The human's first message uses the facts already found, so it is clear they read them.

## Accessibility

- Announce "Connecting you to a person" and then who joined, in the polite status region.
- Name every speaker in text, not only with an avatar or colour.
- Keep focus in the composer through the handoff, so people can keep typing.
- Don't time people out while they wait. If the chat must close, say so and offer another way.

## Seen in

- **Microsoft Copilot Studio** (Agent builder, checked Nov 2026): People can ask for a live agent at any point, for example "talk to agent". The live agent can get the full conversation history and the details collected so far. [Microsoft Learn: Hand off to a live agent](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-hand-off)
- **Intercom Fin** (Customer support, checked Nov 2026): Fin always hands off when that is the safest option, for example for self-harm or high-risk medical, legal or financial advice. It escalates into the team's usual inbox and rules. [Intercom Help: Fin AI Agent explained](https://www.intercom.com/help/en/articles/7120684-fin-chatbot-explained)

## Related patterns

- Often combined with Error, refusal and limits: When the AI can't help, a person is 1 of the ways forward.
- Often combined with Summary: The short summary that goes with the chat to the person.
- Alternative to Approval gate: The AI can act, but asks the user for a yes first.
- Often combined with AI label and disclosure: Marks which messages come from the AI and which from a person.

## Sources

- [Smashing Magazine - Designing agentic AI: practical UX patterns (Feb 2026)](https://smashingmagazine.com/2026/02/designing-agentic-ai-practical-ux-patterns/)
- [Google PAIR - Errors + Graceful Failure](https://pair.withgoogle.com/chapter/errors-failing/)
