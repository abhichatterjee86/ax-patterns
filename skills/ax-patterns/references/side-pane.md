# Side pane and artifacts

Put long output beside the chat on desktop, and in a full sheet on a phone.

- ID: AX-REA-01
- Moment: 4 Read - "What did it make?"
- Maturity: established
- Also called: Artifacts, Canvas, Side panel, Preview pane
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/side-pane
- Licence: CC BY 4.0 (text and figures)

## Story

> When the AI makes something I will keep - a document, some code - I want it in its own space beside the chat, so I can read and change it without scrolling through the conversation.

- **Setting:** Maya asks for a short launch email.
- **Trigger:** The draft is 5 paragraphs. She will change it many times.
- **Without it:** Every change prints the whole email again in the chat. She scrolls to find the latest.
- **With it:** The email opens beside the chat. Her follow-up changes it in place, and the change is marked.
- **Outcome:** 1 email, always the latest, with version 1 still there if she wants it.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Ask | The ask, in the chat. | Starts work. | 0 s | - |
| Card in chat | A card with the title, the kind and the version stands in for the output. | Writes. | - | Generating a response |
| Tap the card | When the pane does not open by itself, the card opens it. | Writes. | on tap | - |
| Pane opens | Desktop: the pane slides in beside the chat. Phone: a full sheet, with a way back to the chat. | Fills the pane. | about 200 ms | Draft opened |
| Follow-up | The chat stays usable. The person asks for a change. | Idle. | - | - |
| Edited in place | The changed part is marked, the version goes up, and Show changes appears. | Edits the output, not the chat. | - | Version 2 saved |
| Back to chat | Closing the pane returns to the same place in the chat. The card shows version 2. | Idle. | on close | - |

## On each device

- **Phone:** A full-screen sheet. The composer (the box where you type) stays at the bottom, with a clear way back to the chat. Never a squeezed split view.
- **Tablet:** Beside the chat in landscape. In portrait, a sheet from the bottom that can be dragged to full height.
- **Desktop:** Beside the chat, about half the width or more. The chat narrows but stays readable. A close button sits in the pane header.

## Use when

- The output is something people keep and change: a document, code, a table, a design.
- The output is longer than about 10 lines, or wider than the chat column.
- People will ask for several changes to the same thing.

## Don't use when

- The answer is short and read once - keep it in the chat. Use Streaming response instead.
- The output is a small interactive card - a chart, a booking - that fits in the thread. Use Generative UI and structured output instead.
- People need to watch an agent (an AI that takes actions for you) work, not read its output. Use Agent workspace and management instead.

## Anatomy

- **A. Card in chat:** Stands in for the output in the thread - title, kind, version - and reopens it.
- **B. Pane header:** The title and version, so people know which output and which version they are in.
- **C. The output:** Edited in place. Changes are marked, not rewritten from scratch.
- **D. The composer:** Stays available, so follow-ups change the output while it is open.
- **E. Close:** Returns to the same place in the chat.

## Do and Avoid

- **Do:** On a phone the pane is a full sheet, with the chat 1 tap away and the composer still there. (‹ ChatLaunch emailToday we’re launching the new Daybook app…Ask for a change)
- **Avoid:** A desktop split squeezed onto a phone. Both halves are too narrow to read. (Chat…Today we’re lau-nching the…)
- **Do:** The change is made in place and marked, and the version goes up. (Here’s what changed since the beta.Early users get 3 months free.v2 · 1 change)
- **Avoid:** Every change prints the whole output again. People cannot tell what changed. (Here is the updated email:Subject: Our new app is here. Hi Maya…The 3rd full copy in the chat)

## Writing

- Give every output a short, real title - "Launch email", "price.ts" - not "Untitled" or "Artifact".
- Show the version as "v2" in the header, and say what changed in 1 line: "1 change · Show changes".
- In the chat, say where the output is: "It is open beside the chat."

## Accessibility

- The pane is a labelled region (a named part of the page a screen reader can jump to), with aria-labelledby pointing at its title. On a phone, the sheet is a dialog with a visible close.
- Opening the pane moves focus to its title; closing returns focus to the card that opened it.
- Announce saves once: "Version 2 saved".
- Marked changes use a background and text, not colour alone.

## Seen in

- **ChatGPT canvas** (Web, Windows and macOS, checked Oct 2026): Canvas opens as a right-side window, by itself for longer answers or when asked. The help page lists mobile as "coming soon". [OpenAI Help: Canvas](https://help-lb.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it)
- **Claude** (Web, desktop and apps, checked Oct 2026): Artifacts open in a dedicated window, and the mobile apps can create and view them. [Claude blog: Artifacts](https://claude.com/blog/artifacts)
- **Microsoft 365 Copilot apps** (Web and desktop, checked Jun 2026): Apps show inline first, with an optional side-by-side mode. When the side panel opens, the inline card collapses into a small "chiclet". [Microsoft Learn: MCP Apps UI guidelines](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/plugin-mcp-apps-ui-guidelines)
- **Gemini Canvas** (Android, checked Jul 2025): On mobile, web-code previews opened in a Chrome tab while an in-app preview was tested; the experience was described as "cramped". [Android Authority, Jul 2025](https://www.androidauthority.com/gemini-canvas-previews-3577374/)

## Related patterns

- Often combined with Version history and checkpoints: Every version of the output, with restore.
- Often combined with Edit output and revert to AI: Change the output by hand in the pane.
- Alternative to Generative UI and structured output: Small interactive results that stay in the thread.
- Often combined with Regenerate, edit and branches: Version arrows in the pane work like version arrows in the chat.

## Sources

- [Claude - MCP Apps design guidelines](https://claude.com/docs/connectors/building/mcp-apps/design-guidelines.md)
- [OpenAI - Apps SDK UI guidelines](https://developers.openai.com/apps-sdk/concepts/ui-guidelines)
- [Android Developers - Material 3 Adaptive 1.2.0](https://android-developers.googleblog.com/2025/10/material-3-adaptive-120-is-stable.html)
- [Apple WWDC26 - Xcode, agents, and you](https://developer.apple.com/videos/play/wwdc2026/259/)
- [Apple WWDC26 - Inside Apple Intelligence and Xcode: Special Presentation](https://developer.apple.com/videos/play/wwdc2026/382/)
