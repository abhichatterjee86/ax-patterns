# Entry point and AI button

Give the AI 1 clear door in the product, so people know where it lives.

- ID: AX-DIS-01
- Moment: 1 Discover - "What can it do?"
- Maturity: established
- Also called: AI button, Assistant entry, Sparkle button
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/entry-point
- Licence: CC BY 4.0 (text and figures)

## Story

> When I need help in the middle of my work, I want 1 clear button that opens the AI, already looking at what I am working on, so I can ask without hunting or explaining again.

- **Setting:** Inês is checking the March rota for 4 nurses in a shared doc.
- **Trigger:** Something looks wrong. She wants the AI to count the nights.
- **Without it:** 3 sparkle icons sit on different buttons. She tries 2 before 1 opens a blank chat, and then she has to describe the rota.
- **With it:** A button named "Ask AI" sits top right. It opens beside the rota, already looking at it.
- **Outcome:** She asks 1 short question and learns Ana has 3 nights too many.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| On the page | The work, with 1 "Ask AI" button in the same place on every page. | Idle. | always there | - |
| Finds the door | The button has a sparkle and a name. Hover or focus shows the shortcut. | Idle. | - | - |
| Opens | The assistant opens beside the page with a chip: "Looking at: Rota - March". | Ready, with the page as context. | on tap or shortcut | Assistant opened |
| Asks | A short ask, because the page is already shared. | Idle. | - | - |
| Answering | The answer streams in the panel. The page stays visible. | Writes. | - | Generating a response |
| Answered | The answer, next to the work it is about. The same button closes the panel. | Idle. | when done | Response complete |

## On each device

- **Phone:** The button sits in the top bar with its name, 44 px tall. It opens the assistant as a sheet from the bottom, with the page still visible above.
- **Tablet:** As on desktop when the screen is wide; as on the phone in portrait split view.
- **Desktop:** The button sits top right on every page, with a keyboard shortcut. The assistant opens as a side panel, so the work stays in view.

## Use when

- The AI is 1 helper that works across many pages or tools in the product.
- People need to find the AI quickly, often in the middle of other work.
- What the person is looking at is useful context for the AI.

## Don't use when

- The AI does 1 small job on 1 thing, like rewriting the selected text - put the action right there. Use Inline action on selection instead.
- The whole product is the chat, so there is no other page to open it from. Use Prompt composer instead.
- People need to know what the AI can do before they use the door. Use Capability disclosure instead.

## Anatomy

- **A. The door:** A sparkle plus a name, "Ask AI", in the same place on every page. Pressed while open.
- **B. Panel header:** The assistant's name, the shortcut, and a close button.
- **C. Context chip:** Says what the AI is looking at. People can remove it.
- **D. The box:** A placeholder that matches the context: "Ask about this rota".

## Do and Avoid

- **Do:** 1 sparkle, with a name, in 1 place. People learn it once. (Rota - March✦ Ask AIB I ≡Mon · Ana · Rui · Marta)
- **Avoid:** A sparkle on every control. People cannot tell which 1 opens the assistant, so they try them all. (Rota - March ✦✦B I ≡ ✦Mon · Ana · Rui · Marta ✦)
- **Do:** The door opens with the page as context, and says so. (✦ AssistantLooking at: Rota - MarchAsk about this rota)
- **Avoid:** A blank chat. People must describe or paste the page they are already on. (✦ AssistantHow can I help?Ask anything)

## Writing

- Give the button a name with a verb: "Ask AI" or the assistant's name. Not a sparkle alone.
- Use the same name on every page, in the panel header, and in help.
- Say what the AI is looking at in plain words: "Looking at: Rota - March".

## Accessibility

- The button's accessible name matches its visible label, so voice control users can say "Click Ask AI".
- The button shows its state with aria-expanded and is at least 44 px on touch screens.
- Opening moves focus into the panel's box; closing returns focus to the button.
- The keyboard shortcut is listed in the button's tooltip and in help, and does not clash with the product's own shortcuts.

## Seen in

- **Notion AI** (Web and desktop, checked Nov 2026): Notion AI opens from a round icon in the bottom-right corner of every page, from the left sidebar under Search, or with Shift + Cmd + J on desktop. [Notion Help: Everything you can do with Notion AI](https://www.notion.com/help/guides/everything-you-can-do-with-notion-ai)
- **Gemini in Gmail** (Web, checked Nov 2026): People click "Ask Gemini" at the top right of Gmail to open a side panel with a prompt box at the bottom. [Gmail Help: Collaborate with Gemini in Gmail](https://support.google.com/mail/answer/14355636)
- **Copilot in Word** (Word, checked Sep 2026): In a blank document or at the spot where new text should go, people open Copilot from the bottom-right corner and describe what to write. [Microsoft Support: Draft and add content with Copilot in Word](https://support.microsoft.com/en-us/office/start-a-draft-with-copilot-in-word-069c91f0-9e42-4c9a-bbce-fddf5d581541)

## Related patterns

- Often combined with Side pane and artifacts: Where the assistant opens on wide screens, beside the work.
- Often combined with Capability disclosure: The first thing the panel says: what it can and cannot do.
- Alternative to Inline action on selection: AI right on the selected thing, instead of 1 door for everything.
- Often combined with Attachments and context chips: The context chip is the same idea as an attached file.
- Often combined with AI label and disclosure: The sparkle marks AI actions, so use it only where it adds meaning.

## Sources

- [AWS Cloudscape - Ingress](https://cloudscape.design/gen-ai/patterns/ingress/)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [W3C - Understanding Label in Name (WCAG 2.2)](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)
- [Apple WWDC25 - Dive deeper into Writing Tools](https://developer.apple.com/videos/play/wwdc2025/265/)
