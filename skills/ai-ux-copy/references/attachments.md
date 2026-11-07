# Attachments and context chips

Let people add files, images and context to the ask, and see what is attached.

- ID: AX-ASK-02
- Moment: 2 Ask - "How do I tell it what I want?"
- Maturity: established
- Also called: File upload, Context chips, Add context
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/attachments
- Licence: CC BY 4.0 (text and figures)

## Story

> When I ask the AI about my own files, I want to see each file I added and whether it arrived, so I know what the answer is based on.

- **Setting:** Ayesha wants to check 2 invoices against her rice order.
- **Trigger:** She adds both PDFs. 1 is a 24 MB scan.
- **Without it:** The box shows "1 file". She doesn't notice, and the answer says the order is 15 kg short.
- **With it:** A chip per file. The scan's chip says "Over 20 MB · not added · Replace". She replaces it with a smaller copy.
- **Outcome:** The answer covers both invoices: 25 kg plus 15 kg, as ordered.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Add | A "+" in the box opens Files, Photos, Camera. Drag and drop and paste also work. | Idle. | on tap | - |
| Picked | A chip per file appears at once, before the upload is done. | Idle. | - | - |
| Uploading | Each chip has its own progress bar. Send waits until all are done. | Reads the files. | 1-5 s | Uploading 2 files |
| Attached | Each chip shows name, type and size, with an X to remove. A file that failed says why and offers Replace. | Idle. | when uploaded | "2 files attached", or which file failed |
| Fixed | The replacement uploads in the same place in the list. | Reads the new file. | on tap | Uploading the new file |
| Asks | The ask, with the chips above it. | Idle. | - | - |
| Answering | The sent message lists the files by name. The answer names which file each fact came from. | Writes. | - | Generating a response |
| Done | Files stay attached to that message, so people can check later what was used. | Idle. | when done | Response complete |

## On each device

- **Phone:** The + opens a sheet: Files, Photos, Camera. Chips stack 1 per row above the box so long names fit.
- **Tablet:** As on desktop, with drag and drop from other apps in split view.
- **Desktop:** Drag and drop anywhere on the chat, or paste. Chips sit in a row above the box and wrap.

## Use when

- People ask about their own documents, images, data or code.
- The answer depends on which files were read, so people need to check them.
- Uploads can fail - size, type, page or file limits.

## Don't use when

- The context is the page people are already on - attach it for them as 1 chip. Use Entry point and AI button instead.
- People want to show the AI something live, like a camera view or their screen. Use Multimodal input instead.
- The files are part of a long-running project - keep them in the project, not each message. Use Agent workspace and management instead.

## Anatomy

- **A. Add:** 1 + button for files, photos and camera. Drag, drop and paste do the same.
- **B. File chip:** The file's name and type icon, 1 chip per file.
- **C. Size and status:** Pages or size when ready; progress while uploading; the reason when it failed.
- **D. Remove:** An X on each chip, so 1 file can go without starting again.
- **E. Send:** Waits until every chip is ready, so nothing is sent half uploaded.

## Do and Avoid

- **Do:** Each file has a chip. The failed one says why and how to fix it. (Kwik-invoice-0412.pdf · 2 pagesBains-Foods-Oct.pdf · Over 20 MB · ReplaceDo these 2 invoices add up?)
- **Avoid:** A count only. The failed file disappears, and the answer is about half of what was sent. (1 fileDo these 2 invoices add up?)
- **Do:** The answer names which file each fact came from. (Yes. Together that is 40 kg.Kwik: 25 kg · Bains: 15 kg)
- **Avoid:** The answer does not say which files it read. People can't tell if 1 was missed. (Yes, the invoices look right.)

## Writing

- Say why a file failed and what to do, in 1 line: "Over 20 MB · not added · Replace".
- Show the file's real name, cut in the middle if it is long, never only "Document 1".
- Give useful size facts: "2 pages", "214 rows", not only "180 KB".
- Tell people the limits where they add files: how many, how big, which types.

## Accessibility

- Announce each change in the polite status region: "Kwik-invoice-0412.pdf attached", "Bains-Foods-Oct.pdf is too big".
- Each remove button is named with the file: "Remove Kwik-invoice-0412.pdf".
- Drag and drop always has a button that does the same thing.
- Don't show a failed upload by colour alone - use an icon and words.

## Seen in

- **Claude** (Web, desktop and mobile, checked Nov 2026): Files are added with the "+" button in the lower left of the chat box, by drag and drop, or by pasting images. Up to 20 files per chat, 500 MB each. [Claude Help: Uploading files to Claude](https://support.claude.com/en/articles/8241126-uploading-files-to-claude)
- **Gemini Apps** (Web, checked Nov 2026): Add files in the text box offers upload from the device, Google Drive, a code folder or notebooks. Up to 10 files per prompt. [Gemini Apps Help: Upload & analyze files](https://support.google.com/gemini/answer/14903178)
- **Copilot on Windows** (Windows, checked Nov 2025): A "+" in the composer attaches a file or a whole folder for Copilot Actions to work on. [Windows Insider Blog, 17 Nov 2025](https://blogs.windows.com/windows-insider/2025/11/17/copilot-on-windows-copilot-actions-begins-rolling-out-to-windows-insiders/)

## Related patterns

- Part of Prompt composer: The + and the chips live in the composer.
- Often combined with Citations and sources: Point each fact in the answer back to the file it came from.
- Alternative to Multimodal input: Show the AI something live, with the camera or screen.
- Often combined with Error, refusal and limits: How to word a failed upload, with a next step.

## Sources

- [AWS Cloudscape - In-chat context](https://cloudscape.design/gen-ai/patterns/in-chat-context/)
- [Shape of AI - Open input](https://www.shapeof.ai/patterns/open-input)
- [Apple WWDC25 - What’s new in Xcode 26](https://developer.apple.com/videos/play/wwdc2025/247/)
