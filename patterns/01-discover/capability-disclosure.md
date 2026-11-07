# Capability disclosure

Say what the AI can and cannot do before the first ask.

- ID: AX-DIS-02
- Moment: 1 Discover - "What can it do?"
- Maturity: established
- Also called: What I can help with, Capabilities card
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/capability-disclosure
- Licence: CC BY 4.0 (text and figures)

## Story

> When I open an AI tool for the first time, I want to see in a few seconds what it can and cannot do for me, so I ask for things that work and go elsewhere for things that don't.

- **Setting:** Rahul opens the new study helper for his ACC101 course.
- **Trigger:** He is not sure what it is for - homework, marks, or both.
- **Without it:** "Ask me anything!" So he asks for his mid-term mark and gets "Sorry, I can't help with that."
- **With it:** A short card says it explains and quizzes from the course notes. Marks are in the Student Portal.
- **Outcome:** He asks for an example of depreciation and gets 1 from chapter 4.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| First screen | A greeting and a short card: 1 line on what it is, what it can do, what it can't. | Idle. | before the first ask | - |
| Reads the card | Each limit says where to go instead. 1 example ask sits under the card. | Idle. | about 10 s | - |
| Asks | An ask that fits what the card said. The placeholder names the scope. | Idle. | - | - |
| Goes elsewhere | For a thing the AI can't do, the link in the card takes him to the right place. | Idle. | on tap | - |
| Answering | The answer streams in (it arrives word by word). | Writes. | - | Generating a response |
| Done | On a phone the card folds to 1 line, "What I can and can't do", still 1 tap away. | Idle. | after the first ask | Response complete |

## On each device

- **Phone:** The card is short - 1 intro line, 3 cans, 2 can'ts. After the first ask it folds to 1 line above the chat.
- **Tablet:** As on desktop.
- **Desktop:** The card sits in the empty chat, above the box. It stays at the top of the thread. Help links to the full list.

## Use when

- The AI is new to people, or new in this product.
- The AI has clear limits people would not guess - no web, no account data, no graded work.
- A wrong first ask costs trust, because "Sorry, I can't" feels like the tool is broken.

## Don't use when

- People already know the tool well - a short line and example asks are enough. Use Suggested prompts instead.
- The limit only matters for 1 action - say it at that action. Use Error, refusal and limits instead.
- You need to learn about the person before you can say what is useful to them. Use Smart onboarding instead.

## Anatomy

- **A. 1-line intro:** What it is and what it works from, in under 10 seconds of reading.
- **B. Can:** 3 things it does well, written as tasks people have.
- **C. Can't:** The limits people would hit first, each with where to go instead.
- **D. What it reads:** The data it uses: "I only read the ACC101 notes, not the web."
- **E. Try this:** 1 example ask that is sure to work well.

## Do and Avoid

- **Do:** Says what it does, what it can't, and where to go instead. (I help you study ACC101, using your course notes.✓ Explain a topic · ✓ Quiz you✕ See your marks - use Student Portal)
- **Avoid:** "Ask me anything" promises too much. People find the limits by failing. (Hi! I’m your AI genius. Ask me anything!Ask me anything)
- **Do:** Tasks people already have. Easy to match to what they came for. (I can✓ Explain a topic in plain words✓ Quiz you on a chapter✓ Check your working3 tasks, in people’s words)
- **Avoid:** A list of technology. People can't tell what to ask from it. (FeaturesRAG over 14 sources · GPT-class model · 128k context · Function calling · MultilingualTech words, no tasks)

## Writing

- Start with 1 line: what it is and what it works from. "I help you study ACC101, using your course notes."
- List 3 cans and 2 can'ts at most. Write them as tasks, not features.
- Give every can't a next step: "use the Student Portal", "ask your tutor".
- Don't promise magic. Avoid "anything", "genius" and "always".

## Accessibility

- Give the card a heading ("What I can and can't do") so screen reader users can jump to it.
- Use real lists for can and can't. Don't rely on the tick and cross icons alone - the words say it.
- Links to other places say where they go: "Student Portal", not "here".
- The folded line is a button that tells screen readers whether the card is open (with aria-expanded). So the card can be opened again from the keyboard.

## Seen in

- **Copilot in Word** (Word, checked Apr 2024): An onboarding carousel says Copilot can help you start from scratch or from existing files, summarise, and draft, then says "Copilot can make mistakes". [Microsoft HAX Toolkit example (screenshot from Apr 2024)](https://www.microsoft.com/en-us/haxtoolkit/example/copilot-in-word-1a-introductory-blurb-and-g2-make-clear-how-well-the-system-can-do-what-it-can-do/)
- **Copilot in PowerPoint** (PowerPoint, checked Apr 2024): A "discover Copilot" panel lists 3 tasks - create from Word docs, draft and refine, summarise slides - and a second panel asks people to verify results. [Microsoft HAX Toolkit example (screenshot from Apr 2024)](https://www.microsoft.com/en-us/haxtoolkit/example/copilot-in-powerpoint-1a-introductory-blurb/)

## Related patterns

- Often combined with Suggested prompts: Example asks show the cans in action.
- Often combined with Entry point and AI button: The card is the first thing people see after the door opens.
- Alternative to Smart onboarding: Ask 1 or 2 questions first, then show only what matters to this person.
- Often combined with Disclaimer: A short note that answers can be wrong sits well under the card.
- Often combined with Error, refusal and limits: When a limit is hit anyway, the refusal repeats it and points to the next step.

## Sources

- [Microsoft HAX Toolkit - Pattern 1A: Introductory blurb](https://www.microsoft.com/en-us/haxtoolkit/pattern/g1-a-introductory-blurb/)
- [Google PAIR Guidebook - Mental models](https://pair.withgoogle.com/chapter/mental-models/)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Apple WWDC22 - Implement App Shortcuts with App Intents](https://developer.apple.com/videos/play/wwdc2022/10170/)
