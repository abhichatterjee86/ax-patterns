# Consent and data controls

Ask before data is used for training or shared, and make the choice easy to find again.

- ID: AX-TRU-06
- Moment: 6 Trust - "Can I rely on it?"
- Maturity: established
- Also called: Data controls, Training opt-out, Privacy settings
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/consent-and-data
- Licence: CC BY 4.0 (text and figures)

## Story

> When an AI product wants to use what I share to train its models, I want to be asked in plain words and find my answer again easily, so my clients' work stays where I put it.

- **Setting:** Fatima opens a new AI tool to build a glossary for a client contract.
- **Trigger:** The product wants to train its AI on what people share.
- **Without it:** A pre-ticked box at sign-up says yes for her. Her client's contract may now be used for training.
- **With it:** A clear question, what is used, 2 equal buttons. She taps Don't allow. Her file says "Not used for training".
- **Outcome:** Months later she finds the same choice in 1 place in Settings, 1 tap to change.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asked | A plain question before the first chat. Nothing is chosen for her. | Waits. | first use | Choice needed: data use |
| What is used | What is used and what never is, in 2 short lines. | Waits. | on tap | - |
| Chosen | A line confirms the choice in plain words. | Idle. | on tap | - |
| Shown again | Where it matters - on a file - the choice shows again: "Not used for training". | Works. | on upload | - |
| Found again | 1 switch in Settings › Data, with what it applies to. | - | any time | - |

## On each device

- **Phone:** The question is a full-width card or sheet. The 2 buttons sit side by side at the same size. Settings › Data is 2 taps from the menu.
- **Tablet:** As on desktop.
- **Desktop:** The question is a card in the empty chat, not a pop-up over the page. Settings › Data is linked from the account menu.

## Use when

- What people share could be used to train models, shared with others, or kept for a long time.
- People add other people's data - client files, colleagues' emails, family photos.
- Laws or your own policy need a clear yes before data is used.

## Don't use when

- The question is about what the AI remembers about 1 person, not training. Use Memory controls instead.
- People want 1 chat to leave no trace at all. Use Temporary chat instead.
- The AI is about to act on someone's behalf - ask about that action, not about data. Use Approval gate instead.

## Anatomy

- **A. Plain question:** Says what will happen: "Use your chats to train our AI?" Not "Help us improve".
- **B. What is used:** What is used and what never is, in 2 lines. The full policy sits behind a link.
- **C. 2 equal buttons:** Same size and style. Nothing chosen before the person chooses.
- **D. Where to change it:** Names the 1 place to change it later, before people decide.

## Do and Avoid

- **Do:** Says what is used, and gives 2 equal choices. (Use your chats to train our AI?Used: messages, files. Never: temporary chats.Don’t allowAllow)
- **Avoid:** "Help us improve" hides what happens, and "maybe later" is small and grey. People say yes without knowing to what. (Help us improve!Sounds goodmaybe later)
- **Do:** The choice shows again where it matters, and lives in 1 obvious place. (📄 client-contract.pdfNot used for trainingSettings › Data)
- **Avoid:** The choice was made once and hidden 4 levels deep. People forget what they chose. (📄 client-contract.pdfSettings › Account › Privacy › Advanced)

## Writing

- Name the use: "train our AI", "share with our partners". Not "improve our services".
- List what is used and what never is, in 2 lines: "Used: your messages and files. Never used: temporary chats."
- Label the buttons with the choice: "Allow" and "Don't allow". Not "Sounds good" and "Maybe later".
- Say where to change it, and what changing it does: "Applies to new chats."

## Accessibility

- Both buttons are real buttons with the same size, contrast and focus style. Neither has focus by default.
- If the question blocks the product, it is a dialog with a clear heading and no close button that means yes.
- Switches in Settings have a visible text state ("On", "Off") and a label that names the use.
- The short version of what is used is real text, not an image, and is read before the buttons.

## Seen in

- **Claude** (Web, desktop and mobile, checked Aug 2025): Existing users saw a pop-up to choose whether their chats are used for training; new users choose at sign-up. The choice can be changed any time in Privacy Settings, and turning it off applies to new chats. [Anthropic: Updates to Consumer Terms and Privacy Policy](https://www.anthropic.com/news/updates-to-our-consumer-terms)
- **ChatGPT** (Web, iOS and Android, checked Nov 2026): Settings › Data Controls holds the training choice on every platform. While it is off, new chats are not used to train models. Temporary Chats are never used for training. [OpenAI Help: Data Controls FAQ](https://help.openai.com/en/articles/7730893-data-controls-faq)
- **Microsoft 365 Copilot** (Microsoft 365 apps, checked Nov 2026): When people send feedback, the pane asks permission before it adds the prompt, the response or files, and lets people preview them first. [Microsoft Support: Providing feedback about Microsoft Copilot](https://support.microsoft.com/privacy/providing-feedback-about-microsoft-copilot-with-microsoft-365-apps)

## Related patterns

- Often combined with Temporary chat: A chat that is never used for training, whatever the setting says.
- Often combined with Memory controls: A separate choice: what the AI remembers about 1 person.
- Often combined with Granular feedback: Sending a chat with feedback is a data choice too. Ask first.
- Often combined with Attachments and context chips: Show the data choice on the files people add.

## Sources

- [Apple HIG - Generative AI, Privacy (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Shape of AI - Consent](https://www.shapeof.ai/patterns/consent)
- [Shape of AI - Data ownership](https://www.shapeof.ai/patterns/data-ownership)
- [Google PAIR Guidebook - Feedback + Control](https://pair.withgoogle.com/chapter/feedback-controls/)
- [Apple WWDC25 - Integrate privacy into your development process](https://developer.apple.com/videos/play/wwdc2025/246/)
- [Apple WWDC20 - Design for location privacy](https://developer.apple.com/videos/play/wwdc2020/10162/)
