# Version history and checkpoints

Keep every version the AI made, and let people go back to any of them.

- ID: AX-REF-07
- Moment: 5 Refine - "Can I change it?"
- Maturity: emerging
- Also called: Checkpoints, Restore, History
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/version-history
- Licence: CC BY 4.0 (text and figures)

## Story

> When I ask the AI to change something many times, I want every version kept with what I asked for, so I can go back to the one that worked.

- **Setting:** Hannah asks for a short lunch menu, then asks to make it warmer.
- **Trigger:** She asks to make it shorter. The AI drops the allergy line.
- **Without it:** Only the latest version exists. The warm wording and the allergy line are gone.
- **With it:** History lists every version with the ask that made it. She previews version 2.
- **Outcome:** She restores it. It comes back as version 4, and version 3 is still there.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Version 1 | The first draft, labelled v1. | Writes. | 0-1 s | Version 1 saved |
| New version | Each change the AI makes is a new version number. The old one is kept. | Writes. | each ask | Version 3 saved |
| History | A list, newest first: version number, the ask that made it, and "Now" on the current one. | Idle. | on tap | Version history, 3 versions |
| Preview | The old version shows in place, with "Previewing version 2" and Restore. Nothing has changed yet. | Idle. | on tap | - |
| Restored | The old version comes back as a new version. Every version stays in the list. | Idle. | on Restore | Version 2 restored as version 4 |
| No history | Only the latest version. Anything the AI removed has to be written again. | Idle. | - | - |

## On each device

- **Phone:** History opens as a full sheet over the document. Tapping a version opens a full-width preview with Restore at the top.
- **Tablet:** As on desktop: the list sits beside the document.
- **Desktop:** History sits beside the document, so people can click through versions and see each one in place. Show changes can mark what moved between 2 versions.

## Use when

- People ask the AI to change the same thing many times - a document, code, a design.
- A later change can remove something good from an earlier one.
- An AI agent changes many files, and people need a safe point to go back to.

## Don't use when

- The output is a short chat answer - versions under the answer are enough. Use Regenerate, edit and branches instead.
- People need to judge each small change before it lands. Use Draft mode and review instead.
- People need a record of what an agent did in the world, like emails sent - those cannot be restored. Use Activity log and undo instead.

## Anatomy

- **A. Version list:** Every version, newest first. Nothing is ever removed from it by a restore.
- **B. What made it:** The ask behind each version, so people find the one they want by what they asked.
- **C. Now:** Marks the version people are looking at in the document.
- **D. Preview:** "Previewing version 2" - the old version shows in place before anything changes.
- **E. Restore:** Brings the old version back as a new version. Safe to try.

## Do and Avoid

- **Do:** Each version names the ask that made it. People find the right one at a glance. (v3 Make it shorterv2 Make it warmerv1 Write a short lunch menu)
- **Avoid:** Only times. People open every version to find the one they want. (v3 14:32v2 14:31v1 14:30)
- **Do:** Restore adds a new version. People can go back to version 3 if they change their mind. (v4 Restored from version 2v3 Make it shorterVersion 3 is still here.)
- **Avoid:** Restore throws away later versions. People stop restoring, in case they lose work. (v2 Make it warmerVersions after this were deleted.)

## Writing

- Label each version with the ask that made it: "Make it shorter". Add the time in smaller text.
- Say "Restore", not "Revert" or "Roll back".
- Say what restore does before and after: "Restores as a new version", "Version 3 is still in History".
- If only AI changes are kept, say so: "Checkpoints save the AI's changes, not yours."

## Accessibility

- The list is a list of buttons, each named with its number and ask: "Version 2, Make it warmer".
- Announce "Previewing version 2" when a preview opens, and "Version 2 restored as version 4" after Restore.
- Restore is a real button, reachable by keyboard, at least 44 px.
- Mark the current version with text ("Now"), not only colour.

## Seen in

- **Cursor** (Desktop editor, checked Nov 2026): The agent makes checkpoints of its changes by itself. People go back with "Restore Checkpoint" on an earlier request. The docs say checkpoints track only agent changes and are not version control. [Cursor docs: Checkpoints](https://docs.cursor.com/agent/chat/checkpoints)
- **ChatGPT canvas** (Web, Windows and macOS, checked Nov 2026): Arrows in the toolbar move between versions, people can restore an earlier one, and "Show changes" marks additions and deletions. [OpenAI Help: Canvas](https://help-lb.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it)

## Related patterns

- Often combined with Regenerate, edit and branches: The same idea for chat answers: every try is kept as a version.
- Often combined with Draft mode and review: Review each change first; every accepted draft becomes a version.
- Often combined with Side pane and artifacts: Documents and code with versions usually live in a side pane.
- Alternative to Activity log and undo: For actions that cannot be restored, a record of what was done.

## Sources

- [Apple HIG - Generative AI, refine or revert results (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Microsoft HAX Toolkit - G9 Support efficient correction](https://www.microsoft.com/en-us/haxtoolkit/guideline/support-efficient-correction/)
- [Shape of AI - Footprints](https://www.shapeof.ai/patterns/footprints)
- [Apple WWDC25 - What’s new in Xcode 26](https://developer.apple.com/videos/play/wwdc2025/247/)
- [Apple WWDC25 - Platforms State of the Union](https://developer.apple.com/videos/play/wwdc2025/102/)
