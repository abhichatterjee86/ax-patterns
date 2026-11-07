# Prompt composer

A box that grows with the ask and keeps its tools within reach.

- ID: AX-ASK-01
- Moment: 2 Ask - "How do I tell it what I want?"
- Maturity: established
- Also called: Chat input, Message box, Composer
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/prompt-composer
- Licence: CC BY 4.0 (text and figures)

## Story

> When I need the AI to do something specific, I want 1 box that takes my words, my files and my choice of mode, so I can say it all at once and send it with confidence.

- **Setting:** Meera wants the top 5 support problems from last week, with an example of each.
- **Trigger:** Her ask is 2 sentences long, and the tickets are in a file.
- **Without it:** A 1-line box hides half of what she typed, and the file has to go in a separate message.
- **With it:** The box grows as she types, the file sits in it as a chip, and Send lights up when it is ready.
- **Outcome:** 1 message, everything in it. The answer is right the first time.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Empty | A short hint, the tools on the left, the mic and a greyed Send on the right. | Idle. | 0 s | - |
| Focused | The box lifts slightly; on a phone the keyboard opens. | Idle. | on tap | - |
| Typing | Words appear; Send turns on with the first character. | Idle. | as typed | - |
| Grows | The box grows to about 6 lines, then scrolls inside itself. | Idle. | after line 1 | - |
| File added | The file appears as a chip with its name, size and an x to remove it. | Reads the file in the background. | on drop or pick | tickets.csv attached |
| Ready | Send is fully on. Enter sends on desktop; on a phone, only the button does. | Idle. | - | - |
| Sent | The box clears into the conversation and Send becomes Stop. | Starts working. | on send | Message sent |

## On each device

- **Phone:** Tools and modes go behind the + button as a sheet. Send is at least 44 px and sits by the thumb. Return makes a new line - only the button sends.
- **Tablet:** Like the phone in portrait. With a hardware keyboard, Enter sends and Shift+Enter makes a new line, as on desktop.
- **Desktop:** Mode and model can sit as chips in the box. Enter sends, Shift+Enter makes a new line, and files can be dropped anywhere on the page.

## Use when

- People talk to the AI in their own words - chat, search, assistants.
- An ask often comes with context: a file, an image, a selection, a mode.
- The same box is used for the first ask and every follow-up.

## Don't use when

- The AI needs 3 or 4 exact values, like dates and a budget - give it fields. Use Structured prompt instead.
- The ask is always 1 of a few jobs, like summarise or translate - give it buttons. Use Quick actions instead.
- People act on something already on screen - put the action where the selection is. Use Inline action on selection instead.

## Anatomy

- **A. Tools button:** Files, images and modes in 1 place, so the box stays clean.
- **B. The input:** Grows with the ask up to about 6 lines, then scrolls inside itself.
- **C. Context chip:** Shows what is attached - name and size - and lets people remove it.
- **D. Mode chip:** Says how the AI will work in plain words, not a model name.
- **E. Voice:** Speaking is 1 tap away, for when typing is slow.
- **F. Send:** Off until there is something to send. Becomes Stop while the AI works.

## Do and Avoid

- **Do:** The box grows, so people can read and fix what they wrote before sending. (Summarise this week’s support tickets into the 5 problems people hit most, with 1 example ticket for each↕ grows)
- **Avoid:** A fixed 1-line box. Long asks scroll sideways and mistakes go out unseen. (…hit most, with 1 example ticket for each)
- **Do:** Send is clearly off until there is something to send. (Ask anythingSend)
- **Avoid:** Send always looks ready, so an accidental tap sends nothing and wastes a turn. (Ask anythingSendSends an empty message, and the AI answers it.)

## Writing

- Make the hint an invitation, not an instruction: "Ask anything" or "What should we work on?" - never "Enter your prompt".
- Name modes by what they do - "Fast", "Thinking", "Research" - not by model names people have to learn.
- Show the file name and size on the chip, so people can see they attached the right thing.
- Keep the hint short enough that it never wraps on a phone.

## Accessibility

- The input is a real textarea with a visible label or an aria-label that names it, like "Message".
- Send and the tools button are real buttons with names; the disabled Send uses aria-disabled so it can still be found.
- Announce attached files and errors in a polite status region: "tickets.csv attached".
- Never send on Enter on a phone - people use Return for new lines and lose half-written asks.
- Keep focus in the input after sending, so a follow-up can be typed at once.

## Seen in

- **ChatGPT** (Web and apps, checked Oct 2026): A "+" tools menu in the composer holds tools and modes; the agent could be picked there or typed as the /agent command. [OpenAI Help: ChatGPT agent](https://help-lb.openai.com/en/articles/11752874-chatgpt-agent)
- **Claude** (Web, desktop and apps, checked Oct 2026): The "+" menu holds per-chat switches - for example, turning memory off before the first message is sent. [Claude Help: How memory works](https://support.claude.com/en/articles/11817273-how-does-claude-s-memory-work)
- **Perplexity** (Web and mobile, checked Jun 2025): A Search / Research / Labs mode selector sits with the input. It shipped on web and mobile before the desktop apps. [InfoQ, Jun 2025](https://www.infoq.com/news/2025/06/perplexity-labs)
- **Copilot on Windows** (Windows, checked Nov 2025): "Take Action" lives in a dropdown in the composer, and "+" attaches a file or a whole folder. [Windows Insider Blog, 17 Nov 2025](https://blogs.windows.com/windows-insider/2025/11/17/copilot-on-windows-copilot-actions-begins-rolling-out-to-windows-insiders/)

## Related patterns

- Part of Attachments and context chips: The chips that carry files and context into the ask.
- Often combined with Mode and model selection: How the AI should work, chosen from the box.
- Often combined with Voice input: The mic in the box, for speaking the ask.
- Alternative to Structured prompt: Fields instead of a box, when the AI needs exact values.
- Often combined with Suggested prompts: Examples above the empty box, so the first ask is easy.

## Sources

- [AWS Cloudscape - Prompt input](https://cloudscape.design/components/prompt-input/)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [W3C - WCAG 2.2, 2.5.8 Target size (minimum)](https://www.w3.org/TR/WCAG22/#target-size-minimum)
