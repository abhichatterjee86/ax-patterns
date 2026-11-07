# Structured prompt

Turn a vague ask into fields, so people give the AI what it needs.

- ID: AX-ASK-05
- Moment: 2 Ask - "How do I tell it what I want?"
- Maturity: established
- Also called: Form prompt, Guided prompt, Prompt builder
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/structured-prompt
- Licence: CC BY 4.0 (text and figures)

## Story

> When I need the AI to make something with exact details, I want to fill in the few things it needs, so the first answer fits and I don't have to explain again.

- **Setting:** Anjali needs a short quiz for tomorrow's class.
- **Trigger:** She knows what she wants: 10 questions, tick-box answers, Class 5 level.
- **Without it:** She types "Make a fractions quiz" and gets 20 open questions, too hard for 10-year-olds.
- **With it:** 4 fields ask for topic, number, type and class. When she skips the class, the form says why it matters.
- **Outcome:** The first quiz fits. She prints it before the bell.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Fields | A short form: Topic, Questions, Type, Class. Each empty field shows an example. | Idle. | 0 s | - |
| Filling in | Typed values and 1-tap chips. The ask below the form builds itself as she goes. | Idle. | - | - |
| 1 is missing | She taps Make quiz with no class. An amber note by the field: "Choose a class, so the questions fit the age." | Idle - nothing is sent yet. | on tap | Choose a class to continue |
| Ask is ready | The built ask reads in full: "10 multiple-choice questions on fractions for Class 5". Make quiz lights up. | Idle. | when all needed fields are in | - |
| Sent | The form folds into 1 ask bubble, with Edit fields under it. | Starts work. | on tap | Message sent |
| Answer | The quiz streams in, matching every field. | Writes. | - | Generating a response |
| Done | The full quiz. Edit fields reopens the form with her values kept. | Idle. | when done | Response complete |

## On each device

- **Phone:** Fields stack in 1 column with the label above each. Short choices are chips, not drop-downs. The send button sits under the last field, by the thumb.
- **Tablet:** Like the phone in portrait. In landscape, like desktop.
- **Desktop:** Labels sit to the left of the fields, so the form is short. The built ask can sit beside the form and update as people type.

## Use when

- The AI needs a few exact values to do the job well - a number, a level, a date, a length.
- People make the same kind of ask again and again, like quizzes, job posts or release notes.
- People new to the AI don't know which details make a good ask.

## Don't use when

- The ask is open and creative, and fields would box people in. Use Prompt composer instead.
- People need ideas for what to ask, not a place for exact values. Use Suggested prompts instead.
- People want to change 1 thing after the first answer, like length or tone. Use Adjust length and tone instead.

## Anatomy

- **A. Field with an example:** A plain label and an example inside: "e.g. Fractions". People know what to type.
- **B. Choice chips:** 2 to 4 options as chips. 1 tap, nothing hidden in a menu.
- **C. Missing-value note:** Says which value is missing and why it matters, next to that field.
- **D. The built ask:** The sentence the fields make, in plain words. It updates as people fill in fields.
- **E. Send:** Names the job: "Make quiz". Pressing it with a gap shows the note, not a dead button.

## Do and Avoid

- **Do:** Only the values the AI really needs. The built ask shows what will be sent. (Topic · FractionsQuestions · 10Class · neededAsk: 10 questions on fractions for Class 5)
- **Avoid:** Every setting becomes a required field. People give up, or type anything to get past. (Topic* · Tone* · Audience* · Format*Length* · Style* · Language* · Reading age*Persona* · Output* · Examples* · Rules*12 required fields)
- **Do:** The note sits by the empty field and says why it is needed. (Class · Choose a classChoose a class, so the questions fit the age.Make quiz)
- **Avoid:** The button is greyed out with no reason. People don't know what is missing. (Class · Choose a classMake quiz)

## Writing

- Label fields with plain nouns people use: "Topic", "Class", "Questions". Not "Parameters" or "Variables".
- Put an example in each empty field: "e.g. Fractions".
- Mark only the fields that are needed, and say why in 1 line: "Choose a class, so the questions fit the age."
- Show the ask the fields build as 1 sentence, in the words a person would type.

## Accessibility

- Every field has a visible label tied to it. Placeholder text is never the only label.
- Chips work as a radio group: arrow keys move, Space picks, and the picked one is announced.
- When a needed value is missing, move focus to that field and announce the note: "Choose a class to continue".
- The built ask is plain text, so a screen reader can read the whole ask before it is sent.

## Seen in

- **Suno** (Android app and web, checked Nov 2026): Custom mode splits a song ask into separate parts: Lyrics (or let Suno write them), Styles, a Title, and an Instrumental switch. [Suno Help: Android Create, Custom Mode (edited Dec 2025)](https://help.suno.com/en/articles/3726721)
- **Adobe Firefly** (Web, checked Nov 2026): Content type, visual intensity, composition and style are set with controls beside the prompt bar, not typed into the prompt. [Adobe Help: Enhance prompts to generate images (updated Aug 2026)](https://helpx.adobe.com/firefly/web/work-with-images/generate-images/enhance-prompts-to-generate-images.html)

## Related patterns

- Alternative to Prompt composer: 1 open box, for asks that don't fit fields.
- Alternative to Suggested prompts: Example asks, when people need ideas more than exact values.
- Often combined with Templates and example gallery: Ready-made forms for common jobs, to start from.
- Often combined with Prompt enhancer: Fills out a short ask after it is typed. Fields do the same job up front.

## Sources

- [Shape of AI - Madlibs](https://www.shapeof.ai/patterns/madlibs)
- [NN/g - Prompt controls in GenAI chatbots (Aug 2024)](https://www.nngroup.com/articles/prompt-controls-genai/)
- [AWS Cloudscape - Support prompts](https://cloudscape.design/gen-ai/patterns/support-prompts/)
- [Apple WWDC24 - Design App Intents for system experiences](https://developer.apple.com/videos/play/wwdc2024/10176/)
- [Apple WWDC26 - Inside Apple Intelligence and Xcode: Special Presentation](https://developer.apple.com/videos/play/wwdc2026/382/)
