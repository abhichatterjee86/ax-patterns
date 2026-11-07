# Memory controls

Show what the AI remembers about a person, and let them change or forget it.

- ID: AX-TRU-05
- Moment: 6 Trust - "Can I rely on it?"
- Maturity: emerging
- Also called: Memory, Personalisation, Saved context
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/memory-controls
- Licence: CC BY 4.0 (text and figures)

## Story

> When the AI uses what it remembers about me, I want to see what it used and change or forget it, so old facts stop shaping new answers.

- **Setting:** Kenji asks for this week's running plan.
- **Trigger:** The plan is easy, to protect his knee. His knee healed weeks ago.
- **Without it:** He asks how it knows. "You mentioned it in August." There is nothing he can see or change.
- **With it:** "Used 2 memories" opens the list. He deletes the knee memory.
- **Outcome:** He asks again and gets a real training week, with hills on Thursday.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asked | The ask. | Starts. | 0 s | - |
| Answer | The answer, and under it "Used 2 memories". | Writes. | - | Generating a response |
| Memory list | Each memory as 1 plain sentence. A dot marks the ones used in this answer. Edit and delete on each. | Idle. | on tap | Memory, 3 items |
| Changed | Delete crosses out the memory with Undo. Pause greys the list: "Nothing new is saved or used." | Idle. | on tap | Memory deleted, or Memory paused |
| New answer | The next answer no longer uses the old fact, and says which memories it used. | Writes. | - | Response complete |
| Silent memory | The AI uses old facts with no sign and no list. People can only ask. | - | - | - |

## On each device

- **Phone:** The "Used 2 memories" link opens a bottom sheet with the list. Edit and delete sit at the end of each row, at least 44 px.
- **Tablet:** As on the phone, or as a side panel in landscape.
- **Desktop:** The link opens a popover by the answer. The full list, with search, Pause and Delete all, lives in Settings.

## Use when

- The AI keeps facts about people across chats - their goals, health, family, work.
- Old facts can go stale and make answers wrong.
- People share personal things they may later want forgotten.

## Don't use when

- People want 1 chat that is not saved or remembered at all. Use Temporary chat instead.
- The question is whether data is used to train the AI, not what it remembers about 1 person. Use Consent and data controls instead.
- The AI only uses the current chat and remembers nothing after it - there is nothing to control.

## Anatomy

- **A. Memory used:** "Used 2 memories" under the answer. Shows memory at work, at the moment it matters.
- **B. 1 memory:** A plain sentence people can read and judge. A dot shows it was used in this answer.
- **C. Edit and delete:** On every memory. Delete gives Undo for a few seconds.
- **D. Pause:** Stops using and saving memory without deleting it. Different from Delete all.

## Do and Avoid

- **Do:** Shows memory was used, right under the answer, 1 tap from the list. (An easy week, to go gently on your knee.Used 2 memories)
- **Avoid:** Memory works silently. People find out by surprise, and the list is 4 levels deep. (An easy week, to go gently on your knee.Memory: Settings › Personal › Data › Memory)
- **Do:** Each memory is a sentence people can read, fix, or delete on its own. (Hurt his left knee in AugustTraining for the Osaka Marathon in FebruaryEdit · Delete on each)
- **Avoid:** Memories as data codes, and only Delete all. People cannot fix 1 fact without losing every one. (health: knee_injury=true; sport: runningDelete all memory)

## Writing

- Write each memory as 1 short sentence about the person: "Runs before work, around 6:00".
- Say how many memories were used: "Used 2 memories". Not "Personalised for you".
- Explain Pause in 1 line: "Nothing new is saved or used. Your memories are kept."
- Before Delete all, say what goes and that it cannot be undone.

## Accessibility

- Name edit and delete with the memory: "Delete: Hurt his left knee in August".
- Announce "Memory deleted" with an Undo button that stays until focus moves on.
- The Pause switch has a visible text state ("On", "Paused"), not only colour or position.
- Do not show "used in this answer" by colour alone - add text or a label to the dot for screen readers.

## Seen in

- **ChatGPT** (Web and apps, checked Nov 2026): A memory summary people can correct by typing or by highlighting text. "Don't mention this again" reduces future references without deleting the source. Sources under a response can show the memories used. [OpenAI Help: Memory FAQ](https://help-lb.openai.com/en/articles/8590148)
- **Claude** (Web, desktop and mobile, checked Nov 2026): Settings lists memory as Topics to edit or delete. Pause keeps memory but stops using and making it; Reset deletes it all. Memory can be turned off for 1 chat from the + menu before the first message. [Claude Help: How does Claude's memory work](https://support.claude.com/en/articles/11817273-how-does-claude-s-memory-work)

## Related patterns

- Alternative to Temporary chat: A chat that is not remembered at all, instead of fixing memory after.
- Often combined with Explanation: "Used 2 memories" is an explanation of why the answer came out this way.
- Often combined with Consent and data controls: Memory and training are separate choices. Show both clearly.
- Often combined with Citations and sources: Memories used can be shown like sources under the answer.

## Sources

- [Shape of AI - Memory](https://www.shapeof.ai/patterns/memory)
- [Google PAIR Guidebook - Feedback + Control](https://pair.withgoogle.com/chapter/feedback-controls/)
- [Microsoft HAX Toolkit - G17 Provide global controls](https://www.microsoft.com/en-us/haxtoolkit/guideline/provide-global-controls/)
- [Apple WWDC26 - What’s new in Shortcuts](https://developer.apple.com/videos/play/wwdc2026/310/)
- [Apple WWDC21 - Discoverable design](https://developer.apple.com/videos/play/wwdc2021/10126/)
