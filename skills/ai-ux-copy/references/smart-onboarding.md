# Smart onboarding

Learn what a person needs in 1 or 2 questions, then set the AI up for them.

- ID: AX-DIS-06
- Moment: 1 Discover - "What can it do?"
- Maturity: emerging
- Also called: Personalised setup, Onboarding questions
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/smart-onboarding
- Licence: CC BY 4.0 (text and figures)

## Story

> When I start using an AI tool, I want it to ask me only the 1 or 2 things it truly needs, and show me what it set, so its first answers fit me and I can change them later.

- **Setting:** Mei opens a new lesson planning helper the school has bought.
- **Trigger:** "2 questions · about 20 seconds." She taps Start.
- **Without it:** A form of 8 fields. She fills 2, skips, and the first lesson plan is written for young children.
- **With it:** She taps Science, Year 9, then Lesson plans. A card says what it set, with Change.
- **Outcome:** She taps the first starter and gets a Year 9 plan she can use next week.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Welcome | How long it takes - "2 questions · about 20 seconds" - with Start and Skip. | Idle. | first open | - |
| Question 1 | 1 question, why it is asked, and answers to tap. No typing. | Idle. | - | Question 1 of 2 |
| Question 2 | The second question, with the answers so far in a chip. | Idle. | - | Question 2 of 2 |
| Setting up | "Setting up for Year 9 science" - the answers, in its words. | Applies the answers. | about 1 s | Setting up |
| Shows what it set | A card: Science · Year 9 · lesson plans first, with Change. Starter ideas that fit. | Idle. | when ready | Set up for Year 9 science |
| First ask | She taps a starter made for her answers. | Idle. | - | - |
| First answer | An answer at the right level, the first time. | Writes. | - | Generating a response |

## On each device

- **Phone:** 1 question per screen, answers as large chips, Skip always in the same corner. The keyboard never opens.
- **Tablet:** As on the phone, with room for both answer rows on 1 screen.
- **Desktop:** The questions can sit in the empty chat as 1 card, instead of full screens. Then people can see the tool behind them.

## Use when

- Good answers depend on 1 or 2 facts the AI cannot guess - a role, a level, a goal.
- The same facts matter for most asks, so asking once saves asking every time.
- People can answer by tapping, in under 30 seconds.

## Don't use when

- The AI can learn the fact from the first ask - ask then, in the moment, not up front.
- People only need to know what the tool does, not set it up. Use Capability disclosure instead.
- The facts are personal and change often - let people manage what the AI remembers. Use Memory controls instead.

## Anatomy

- **A. Progress:** "2 of 2" - people see the end from the start.
- **B. Question and why:** 1 question, and 1 line on what the answer changes.
- **C. Tap answers:** Chips, not text fields. 1 tap each. An Other chip for the rest.
- **D. Skip:** Always there. Skipping gives sensible defaults (settings the tool picks for you), not a broken tool.
- **E. So far:** The answers given, in 1 chip, so people can check them as they go.

## Do and Avoid

- **Do:** 2 questions, tap answers, the end in sight. (2 of 2What do you want help with first?Lesson plans · Quizzes · FeedbackSkip)
- **Avoid:** 8 fields, most of them not needed for a good first answer. People skip the lot, including the 1 that mattered. (2 of 8 · about 3 minutesName · Subject · School · Year groupsExam board · Class sizesTeaching style · Favourite topics)
- **Do:** Shows what it set from the answers, with a way to change it. (✓ Set up for youScience · Year 9 · lesson plans firstChange)
- **Avoid:** "All set!" hides what changed. When answers feel off, people can't tell why or fix it. (All set!Ask anything)

## Writing

- Say the cost first: "2 questions · about 20 seconds".
- Under each question, say what the answer changes: "So examples match your subject and class."
- Write answers as short chips in people's words. Add an Other chip.
- Play the answers back plainly: "Set up for you: Science · Year 9 · lesson plans first".

## Accessibility

- Each question is a group with a label. The chips are radio buttons, or toggle buttons that tell screen readers whether they are on (with aria-pressed).
- Announce progress when a question appears: "Question 2 of 2".
- Skip is a real button with the same name on every screen, reachable before the answers in tab order.
- Never time out a question. People who use switch access (1 or 2 buttons instead of a keyboard) or a screen reader may take longer.

## Seen in

- **Microsoft 365 Copilot** (Copilot app, web and Teams, checked Oct 2026): Onboarding asks people to describe their role, industry and main tasks, and to choose Beginner, Intermediate or Advanced. Copilot then suggests use cases for that role. [Microsoft Support: Complete Copilot onboarding](https://support.microsoft.com/microsoft-365-copilot/complete-microsoft-copilot-onboarding)
- **Microsoft News** (Web, checked Jul 2020): First-time visitors pick their interests, so the news feed is personal from the first visit. [Microsoft HAX Toolkit example (screenshot from Jul 2020)](https://www.microsoft.com/en-us/haxtoolkit/example/microsoft-news-g10-b-avoid-cold-starts-by-eliciting-user-preferences/)

## Related patterns

- Alternative to Capability disclosure: Tell people what the AI does, instead of asking about them.
- Often combined with Memory controls: Where the answers live afterwards, to see, change or delete.
- Often combined with Suggested prompts: The starters after setup, made from the answers.
- Often combined with Consent and data controls: Say how the answers are used and stored.

## Sources

- [Microsoft HAX Toolkit - Pattern 10B: Avoid cold starts by eliciting user preferences](https://www.microsoft.com/en-us/haxtoolkit/pattern/g10-b-avoid-cold-starts-by-eliciting-user-preferences/)
- [Google PAIR Guidebook - Mental models](https://pair.withgoogle.com/chapter/mental-models/)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
