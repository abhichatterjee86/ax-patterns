# Temporary chat

Let people talk without it being saved, and show that it is not.

- ID: AX-TRU-07
- Moment: 6 Trust - "Can I rely on it?"
- Maturity: established
- Also called: Incognito chat, Private mode, Ephemeral
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/temporary-chat
- Licence: CC BY 4.0 (text and figures)

## Story

> When I want to ask something I do not want kept, I want a chat that is clearly not saved, so I can ask freely and nothing shows up later.

- **Setting:** Noor wants party ideas. Sam uses the same tablet every evening.
- **Trigger:** She taps the ghost icon before she types.
- **Without it:** "Sam's surprise 40th" sits at the top of the chat history, and the AI saves it to memory.
- **With it:** The chat looks different the whole time, and says once what is and is not kept. She gets her ideas.
- **Outcome:** She closes it. The history list is the same as before. The surprise is safe.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| New chat | An empty chat with a ghost icon in the top bar. | Idle. | 0 s | - |
| Temporary on | "Temporary chat" in the header, the rules in 1 line, and a composer that says "not saved". | Idle. | before the first message | Temporary chat. Not saved to history or memory |
| Asks | The ask, as in any chat. | Starts. | - | - |
| Answer | The answer. The chat still looks temporary. Nothing new appears in history. | Writes. | - | Generating a response |
| Leave | Closing asks once: Close, or Save to history. Saving makes it a normal chat. | Idle. | on close | Chat saved to history, if saved |
| History | The history list, with nothing from the temporary chat - unless people saved it. | - | later | - |

## On each device

- **Phone:** The ghost icon sits in the top bar of a new chat. The header and composer change for the whole chat, because the history list is out of sight.
- **Tablet:** As on desktop. On a shared tablet, the empty history list is the proof.
- **Desktop:** The history list beside the chat stays as it was while people talk. The header and composer still change, in case the list is closed.

## Use when

- People ask about private things - health, money, gifts, job hunting.
- Devices or accounts are shared with family or colleagues.
- People want a fresh answer without their memory or past chats shaping it.

## Don't use when

- People want to keep the chat but fix what the AI remembers. Use Memory controls instead.
- The worry is training on all chats, not 1 chat - give a setting for that. Use Consent and data controls instead.
- The work needs to last - a project, a long document. A temporary chat would lose it.

## Anatomy

- **A. Temporary header:** Says it is temporary for the whole chat, not only at the start.
- **B. The rules:** 1 line: what is not kept, and the honest exception - a safety copy for up to 30 days.
- **C. Composer:** "Temporary chat - not saved" where people type, so they never forget.
- **D. Close:** Ends the chat. Asks once whether to save it, so nothing is lost by accident.

## Do and Avoid

- **Do:** The chat looks different from top to bottom, for as long as it lasts. (Temporary chatIdeas for Sam’s surprise 40thTemporary chat - not saved)
- **Avoid:** A small notice at the start that scrolls away. 20 messages later, people forget they are in "private mode". (Private mode onIdeas for Sam’s surprise 40thAsk a follow-up)
- **Do:** Says exactly what is not kept, and the 1 exception. (Not saved to history or memory. A copy may be kept for up to 30 days for safety.)
- **Avoid:** Promises more than is true. If a safety copy exists, people will feel lied to. (Nothing you say here is ever stored.)

## Writing

- Call it what it does: "Temporary chat". Avoid "Incognito" alone - not everyone knows the word.
- Say the rules in 1 line: "Not saved to your history or memory, and not used for training."
- Say the exception honestly, with the number of days.
- When people save it, say what changes: "Saved to your history as a normal chat."

## Accessibility

- Announce "Temporary chat. Not saved to history or memory" when it turns on.
- The ghost button has a name and a pressed state: "Temporary chat, on".
- Do not use colour alone to show the mode - keep the words "Temporary chat" in the header and the composer.
- The close question is a dialog with 2 clear buttons. Escape keeps the chat open.

## Seen in

- **ChatGPT** (Web and apps, checked Nov 2026): Temporary chats do not appear in the chat list, do not create memories, and are not used for training. A copy may be kept for up to 30 days for safety. Custom instructions still apply. [OpenAI Help: Temporary Chat FAQ](https://help.openai.com/en/articles/8914046-temporary-chat-faq)
- **Claude** (Web, desktop and mobile, checked Nov 2026): A ghost icon at the top right of a new chat starts an incognito chat. It is not saved to chat history or to memory. It is available on all plans. [Claude Help: How does Claude's memory work](https://support.claude.com/en/articles/11817273-how-does-claude-s-memory-work)

## Related patterns

- Alternative to Memory controls: Keep the chat, and fix what the AI remembers instead.
- Often combined with Consent and data controls: Temporary chats are never used for training, whatever the setting says.
- Often combined with Mode and model selection: Temporary is a mode people choose before the first message.

## Sources

- [Shape of AI - Incognito Mode](https://www.shapeof.ai/patterns/incognito-mode)
- [Shape of AI - Memory](https://www.shapeof.ai/patterns/memory)
- [Apple HIG - Generative AI, Privacy (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
