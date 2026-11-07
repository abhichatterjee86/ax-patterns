# AX Patterns - the full library

> Every written AI interaction pattern on https://axpatterns.design, in the order of a conversation.
> Text and figures CC BY 4.0. Written by Abhi Chatterjee. Pattern IDs never change.

# Moment 1: Discover - What can it do?

How people find the AI, learn what it can do, and take a first step.

## Entry point and AI button

Give the AI 1 clear door in the product, so people know where it lives.

- ID: AX-DIS-01
- Moment: 1 Discover - "What can it do?"
- Maturity: established
- Also called: AI button, Assistant entry, Sparkle button
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/entry-point
- Licence: CC BY 4.0 (text and figures)

### Story

> When I need help in the middle of my work, I want 1 clear button that opens the AI, already looking at what I am working on, so I can ask without hunting or explaining again.

- **Setting:** Inês is checking the March rota for 4 nurses in a shared doc.
- **Trigger:** Something looks wrong. She wants the AI to count the nights.
- **Without it:** 3 sparkle icons sit on different buttons. She tries 2 before 1 opens a blank chat. Then she has to describe the rota.
- **With it:** A button named "Ask AI" sits top right. It opens beside the rota, already looking at it.
- **Outcome:** She asks 1 short question and learns Ana has 3 nights too many.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| On the page | The work, with 1 "Ask AI" button in the same place on every page. | Idle. | always there | - |
| Finds the door | The button has a sparkle and a name. Hover or focus shows the shortcut. | Idle. | - | - |
| Opens | The assistant opens beside the page with a chip: "Looking at: Rota - March". | Ready, with the page as context. | on tap or shortcut | Assistant opened |
| Asks | A short ask, because the page is already shared. | Idle. | - | - |
| Answering | The answer streams into the panel (it arrives word by word). The page stays visible. | Writes. | - | Generating a response |
| Answered | The answer, next to the work it is about. The same button closes the panel. | Idle. | when done | Response complete |

### On each device

- **Phone:** The button sits in the top bar with its name, 44 px tall. It opens the assistant as a sheet from the bottom, with the page still visible above.
- **Tablet:** As on desktop when the screen is wide; as on the phone in portrait split view.
- **Desktop:** The button sits top right on every page, with a keyboard shortcut. The assistant opens as a side panel, so the work stays in view.

### Use when

- The AI is 1 helper that works across many pages or tools in the product.
- People need to find the AI quickly, often in the middle of other work.
- What the person is looking at is useful context for the AI.

### Don't use when

- The AI does 1 small job on 1 thing, like rewriting the selected text - put the action right there. Use Inline action on selection instead.
- The whole product is the chat, so there is no other page to open it from. Use Prompt composer instead.
- People need to know what the AI can do before they use the door. Use Capability disclosure instead.

### Anatomy

- **A. The door:** A sparkle plus a name, "Ask AI", in the same place on every page. Pressed while open.
- **B. Panel header:** The assistant's name, the shortcut, and a close button.
- **C. Context chip:** Says what the AI is looking at. People can remove it.
- **D. The box:** A placeholder that matches the context: "Ask about this rota".

### Do and Avoid

- **Do:** 1 sparkle, with a name, in 1 place. People learn it once. (Rota - March✦ Ask AIB I ≡Mon · Ana · Rui · Marta)
- **Avoid:** A sparkle on every control. People cannot tell which 1 opens the assistant, so they try them all. (Rota - March ✦✦B I ≡ ✦Mon · Ana · Rui · Marta ✦)
- **Do:** The door opens with the page as context, and says so. (✦ AssistantLooking at: Rota - MarchAsk about this rota)
- **Avoid:** A blank chat. People must describe or paste the page they are already on. (✦ AssistantHow can I help?Ask anything)

### Writing

- Give the button a name with a verb: "Ask AI" or the assistant's name. Not a sparkle alone.
- Use the same name on every page, in the panel header, and in help.
- Say what the AI is looking at in plain words: "Looking at: Rota - March".

### Accessibility

- The button's accessible name (what a screen reader calls it) matches its visible label. So voice control users can say "Click Ask AI".
- The button tells screen readers whether the panel is open (with aria-expanded). It is at least 44 px on touch screens.
- Opening moves focus into the panel's box. Closing returns focus to the button.
- The keyboard shortcut is listed in the button's tooltip and in help. It does not clash with the product's own shortcuts.

### Seen in

- **Notion AI** (Web and desktop, checked Nov 2026): Notion AI opens from a round icon in the bottom-right corner of every page, from the left sidebar under Search, or with Shift + Cmd + J on desktop. [Notion Help: Everything you can do with Notion AI](https://www.notion.com/help/guides/everything-you-can-do-with-notion-ai)
- **Gemini in Gmail** (Web, checked Nov 2026): People click "Ask Gemini" at the top right of Gmail to open a side panel with a prompt box at the bottom. [Gmail Help: Collaborate with Gemini in Gmail](https://support.google.com/mail/answer/14355636)
- **Copilot in Word** (Word, checked Sep 2026): In a blank document or at the spot where new text should go, people open Copilot from the bottom-right corner and describe what to write. [Microsoft Support: Draft and add content with Copilot in Word](https://support.microsoft.com/en-us/office/start-a-draft-with-copilot-in-word-069c91f0-9e42-4c9a-bbce-fddf5d581541)

### Related patterns

- Often combined with Side pane and artifacts: Where the assistant opens on wide screens, beside the work.
- Often combined with Capability disclosure: The first thing the panel says: what it can and cannot do.
- Alternative to Inline action on selection: AI right on the selected thing, instead of 1 door for everything.
- Often combined with Attachments and context chips: The context chip is the same idea as an attached file.
- Often combined with AI label and disclosure: The sparkle marks AI actions, so use it only where it adds meaning.

### Sources

- [AWS Cloudscape - Ingress](https://cloudscape.design/gen-ai/patterns/ingress/)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [W3C - Understanding Label in Name (WCAG 2.2)](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)
- [Apple WWDC25 - Dive deeper into Writing Tools](https://developer.apple.com/videos/play/wwdc2025/265/)

## Capability disclosure

Say what the AI can and cannot do before the first ask.

- ID: AX-DIS-02
- Moment: 1 Discover - "What can it do?"
- Maturity: established
- Also called: What I can help with, Capabilities card
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/capability-disclosure
- Licence: CC BY 4.0 (text and figures)

### Story

> When I open an AI tool for the first time, I want to see in a few seconds what it can and cannot do for me, so I ask for things that work and go elsewhere for things that don't.

- **Setting:** Rahul opens the new study helper for his ACC101 course.
- **Trigger:** He is not sure what it is for - homework, marks, or both.
- **Without it:** "Ask me anything!" So he asks for his mid-term mark and gets "Sorry, I can't help with that."
- **With it:** A short card says it explains and quizzes from the course notes. Marks are in the Student Portal.
- **Outcome:** He asks for an example of depreciation and gets 1 from chapter 4.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| First screen | A greeting and a short card: 1 line on what it is, what it can do, what it can't. | Idle. | before the first ask | - |
| Reads the card | Each limit says where to go instead. 1 example ask sits under the card. | Idle. | about 10 s | - |
| Asks | An ask that fits what the card said. The placeholder names the scope. | Idle. | - | - |
| Goes elsewhere | For a thing the AI can't do, the link in the card takes him to the right place. | Idle. | on tap | - |
| Answering | The answer streams in (it arrives word by word). | Writes. | - | Generating a response |
| Done | On a phone the card folds to 1 line, "What I can and can't do", still 1 tap away. | Idle. | after the first ask | Response complete |

### On each device

- **Phone:** The card is short - 1 intro line, 3 cans, 2 can'ts. After the first ask it folds to 1 line above the chat.
- **Tablet:** As on desktop.
- **Desktop:** The card sits in the empty chat, above the box. It stays at the top of the thread. Help links to the full list.

### Use when

- The AI is new to people, or new in this product.
- The AI has clear limits people would not guess - no web, no account data, no graded work.
- A wrong first ask costs trust, because "Sorry, I can't" feels like the tool is broken.

### Don't use when

- People already know the tool well - a short line and example asks are enough. Use Suggested prompts instead.
- The limit only matters for 1 action - say it at that action. Use Error, refusal and limits instead.
- You need to learn about the person before you can say what is useful to them. Use Smart onboarding instead.

### Anatomy

- **A. 1-line intro:** What it is and what it works from, in under 10 seconds of reading.
- **B. Can:** 3 things it does well, written as tasks people have.
- **C. Can't:** The limits people would hit first, each with where to go instead.
- **D. What it reads:** The data it uses: "I only read the ACC101 notes, not the web."
- **E. Try this:** 1 example ask that is sure to work well.

### Do and Avoid

- **Do:** Says what it does, what it can't, and where to go instead. (I help you study ACC101, using your course notes.✓ Explain a topic · ✓ Quiz you✕ See your marks - use Student Portal)
- **Avoid:** "Ask me anything" promises too much. People find the limits by failing. (Hi! I’m your AI genius. Ask me anything!Ask me anything)
- **Do:** Tasks people already have. Easy to match to what they came for. (I can✓ Explain a topic in plain words✓ Quiz you on a chapter✓ Check your working3 tasks, in people’s words)
- **Avoid:** A list of technology. People can't tell what to ask from it. (FeaturesRAG over 14 sources · GPT-class model · 128k context · Function calling · MultilingualTech words, no tasks)

### Writing

- Start with 1 line: what it is and what it works from. "I help you study ACC101, using your course notes."
- List 3 cans and 2 can'ts at most. Write them as tasks, not features.
- Give every can't a next step: "use the Student Portal", "ask your tutor".
- Don't promise magic. Avoid "anything", "genius" and "always".

### Accessibility

- Give the card a heading ("What I can and can't do") so screen reader users can jump to it.
- Use real lists for can and can't. Don't rely on the tick and cross icons alone - the words say it.
- Links to other places say where they go: "Student Portal", not "here".
- The folded line is a button that tells screen readers whether the card is open (with aria-expanded). So the card can be opened again from the keyboard.

### Seen in

- **Copilot in Word** (Word, checked Apr 2024): An onboarding carousel says Copilot can help you start from scratch or from existing files, summarise, and draft, then says "Copilot can make mistakes". [Microsoft HAX Toolkit example (screenshot from Apr 2024)](https://www.microsoft.com/en-us/haxtoolkit/example/copilot-in-word-1a-introductory-blurb-and-g2-make-clear-how-well-the-system-can-do-what-it-can-do/)
- **Copilot in PowerPoint** (PowerPoint, checked Apr 2024): A "discover Copilot" panel lists 3 tasks - create from Word docs, draft and refine, summarise slides - and a second panel asks people to verify results. [Microsoft HAX Toolkit example (screenshot from Apr 2024)](https://www.microsoft.com/en-us/haxtoolkit/example/copilot-in-powerpoint-1a-introductory-blurb/)

### Related patterns

- Often combined with Suggested prompts: Example asks show the cans in action.
- Often combined with Entry point and AI button: The card is the first thing people see after the door opens.
- Alternative to Smart onboarding: Ask 1 or 2 questions first, then show only what matters to this person.
- Often combined with Disclaimer: A short note that answers can be wrong sits well under the card.
- Often combined with Error, refusal and limits: When a limit is hit anyway, the refusal repeats it and points to the next step.

### Sources

- [Microsoft HAX Toolkit - Pattern 1A: Introductory blurb](https://www.microsoft.com/en-us/haxtoolkit/pattern/g1-a-introductory-blurb/)
- [Google PAIR Guidebook - Mental models](https://pair.withgoogle.com/chapter/mental-models/)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Apple WWDC22 - Implement App Shortcuts with App Intents](https://developer.apple.com/videos/play/wwdc2022/10170/)

## Suggested prompts

Offer 3 or 4 example asks, so people know what to type and what the AI can do.

- ID: AX-DIS-03
- Moment: 1 Discover - "What can it do?"
- Maturity: established
- Also called: Starter prompts, Conversation starters, Prompt chips
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/suggested-prompts
- Licence: CC BY 4.0 (text and figures)

### Story

> When I open an AI tool for the first time, I want a few real examples of what it can do, so I can start without guessing what to type.

- **Setting:** Priya opens the assistant. The box is empty and the cursor blinks.
- **Trigger:** She does not know what it is good at, or how much to write.
- **Without it:** She types "hi", gets a generic reply, and closes the app.
- **With it:** 4 specific examples sit above the box. She taps 1, changes the city and the month, and sends.
- **Outcome:** Her first answer is useful - and now she knows how to ask the next one.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Empty state | A greeting, 1 line on what the AI can do, 3 or 4 examples, and the box. | Idle. | on open | - |
| Focus | The example under the finger or the mouse lifts. | Idle. | on hover or focus | - |
| Picked | The chosen example is marked. | Idle. | on tap | - |
| Filled the box | The example lands in the box. Its changeable parts are ready to edit. | Idle. | at once | Prompt added to the message box |
| Edited | The person changes the parts that are theirs, then sends. | Idle. | as typed | - |
| Sent | A ready-to-go example sends straight away, like any message. | Starts answering. | on tap | Message sent |
| Answering | The examples are gone. The conversation has started. | Answers. | after send | Generating a response |

### On each device

- **Phone:** 3 or 4 pills (small rounded buttons) just above the box, where the thumb already is. They scroll sideways if they do not fit - never 2 rows of tiny chips.
- **Tablet:** Cards with 1 line of detail fit 2 to a row, above the box.
- **Desktop:** Cards in a row of 3 or 4 above the box, or beside a greeting. Each card can carry a short line on what you will get.

### Use when

- New people meet an empty box and do not know what the AI is good at.
- The AI can do things people would not think to ask for.
- Asks work better with a certain shape - a place, a date, a goal - and an example teaches it.

### Don't use when

- The person is already mid-task - suggest the next step instead. Use Follow-up suggestions instead.
- The examples would be generic, like "Ask me anything" - say what the AI can do instead. Use Capability disclosure instead.
- People need whole finished starting points, not 1-line asks. Use Templates and example gallery instead.

### Anatomy

- **A. Greeting and scope:** 1 line on what the AI can do, so the examples make sense.
- **B. A suggestion:** A specific, real ask - a place, a goal, a format - not a category.
- **C. What a tap does:** A pencil means it fills the box to edit. An arrow means it sends at once.
- **D. The box:** Right below, so the examples read as "things you could type here".
- **E. More ideas:** A shuffle for people the first 4 did not fit.

### Do and Avoid

- **Do:** Specific asks show both what the AI can do and how to ask. (Plan a 3-day trip to Kyoto in AprilExplain this phone bill)
- **Avoid:** Categories. They say nothing a person could not have guessed, and teach no shape. (Help me writeBrainstormLearn)
- **Do:** An example with a place and a date fills the box, so the person makes it theirs. (Plan a 3-day trip to Kyoto in MayChange the parts in the box, then send.)
- **Avoid:** The same example sends at once, so she gets a plan for the wrong month. (Planning a trip to Kyoto in April…Sent before she could change the month.)

### Writing

- Write each example as a whole ask a real person would type, in their words. Not a feature name.
- Keep pills to about 6 words. Put detail on a second line of a card, not in the pill.
- Mark the parts people should change - "[Kyoto]", "[April]" - when the example fills the box.
- No exclamation marks, no "please". Sentence case.

### Accessibility

- Each suggestion is a real button whose name is the whole ask, not just the short label.
- Say in the name what a tap does: "Fill the message box with: Plan a 3-day trip…".
- After filling the box, move focus into it. Then a keyboard or screen reader user can edit at once.
- Suggestions are reachable by Tab in reading order, before the box.

### Seen in

- **ChatGPT** (Web, signed out, checked Jun 2025): Short pill suggestions such as "Analyze data", "Summarize text" and "Help me write" sit near the box for people who are not signed in. [Nielsen Norman Group, 27 Jun 2025](https://www.nngroup.com/articles/designing-use-case-prompt-suggestions/)
- **Claude** (Web, before sign-in, checked Jun 2025): A carousel of use cases shows example conversations. NN/g notes the simplified examples can understate how complex real conversations get. [Nielsen Norman Group, 27 Jun 2025](https://www.nngroup.com/articles/designing-use-case-prompt-suggestions/)
- **Amazon Rufus** (Shopping app, checked Jun 2025): Suggested questions change with the product on screen, so a shopper who does not know the category still knows what to ask. [Nielsen Norman Group, 27 Jun 2025](https://www.nngroup.com/articles/designing-use-case-prompt-suggestions/)
- **Microsoft 365 Copilot** (Web and apps, checked Oct 2026): The Prompt Lab holds Microsoft-curated prompts alongside "Your saved prompts" - a prompt is saved with the bookmark that appears after it runs. [Microsoft Support, updated 30 Oct 2026](https://support.microsoft.com/en-US/Microsoft-365-Copilot/save-your-favorite-prompts-to-use-again)

### Related patterns

- Often combined with Capability disclosure: The 1 line above the examples that says what the AI can do.
- Alternative to Follow-up suggestions: The same idea later in the conversation: the next 2 or 3 asks.
- Alternative to Templates and example gallery: Whole finished starting points, for bigger jobs.
- Often combined with Prompt composer: The box the examples fill.

### Sources

- [Nielsen Norman Group - Designing use-case prompt suggestions (Jun 2025)](https://www.nngroup.com/articles/designing-use-case-prompt-suggestions/)
- [AWS Cloudscape - Support prompts](https://cloudscape.design/gen-ai/patterns/support-prompts/)
- [Microsoft HAX Toolkit - Make clear what the system can do](https://www.microsoft.com/en-us/haxtoolkit/)
- [Apple WWDC21 - Discoverable design](https://developer.apple.com/videos/play/wwdc2021/10126/)
- [Apple WWDC22 - Implement App Shortcuts with App Intents](https://developer.apple.com/videos/play/wwdc2022/10170/)

## Templates and example gallery

Show finished examples people can start from, instead of a blank box.

- ID: AX-DIS-04
- Moment: 1 Discover - "What can it do?"
- Maturity: established
- Also called: Prompt library, Gallery, Use cases
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/templates-gallery
- Licence: CC BY 4.0 (text and figures)

### Story

> When I want to make something but don't know how to ask for it, I want to start from a finished example and change only my details, so I get a good result without learning to write prompts.

- **Setting:** Grace wants a flyer for a Saturday offer. She opens the design helper.
- **Trigger:** She taps Flyers and sees 2 finished ones.
- **Without it:** A blank box. She types "make a flyer for my bakery" and gets "Bakery Sale!" with no name, offer or date.
- **With it:** She taps Use this. The ask behind the example opens with 3 blue blanks: shop, deal, day.
- **Outcome:** She fills the blanks and gets a flyer with her shop, her offer and her date.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Gallery | Finished results, each with the short ask that made it. | Idle. | on open | - |
| By task | Chips filter by task: Flyers, Menus, Posts. | Idle. | on tap | - |
| Picks 1 | The card lifts. Use this is the 1 action. | Idle. | - | - |
| Ask opens | The example's ask goes into the box, with its details as blanks to fill. | Idle. | on tap | Example ask added to the box |
| Fills the blanks | Each blank turns into her words. Make it lights up when all are filled. | Idle. | - | - |
| Making | "Making your flyer", with a note of which example it came from. | Works. | - | Making your flyer |
| Her flyer | The same layout as the example, with only her details. | Idle. | when done | Flyer ready |

### On each device

- **Phone:** 2 small cards per row. Filter chips scroll sideways. Use this opens the ask full width, above the keyboard.
- **Tablet:** 2 or 3 cards per row. The ask opens at the bottom, with the example still visible.
- **Desktop:** 3 or 4 cards per row with search. Hover shows the full ask. Use this opens it beside the gallery.

### Use when

- The result is visual or has a set shape - flyers, menus, slides, apps, reports.
- People don't know what a good ask looks like for this tool.
- Seeing the result first helps people choose faster than reading a description.

### Don't use when

- Most asks are short questions - a few example asks are enough. Use Suggested prompts instead.
- Every ask needs the same few fields - give people a form. Use Structured prompt instead.
- People need to see the limits first, not examples. Use Capability disclosure instead.

### Anatomy

- **A. Finished result:** What people will get. They pick by look, not by words.
- **B. The ask behind it:** The short ask that made it, with its details as blanks. It teaches how to ask.
- **C. Use this:** Opens the ask with blanks to fill. It does not copy the example's details.
- **D. Task filters:** Chips by task, in people's words: Flyers, Menus, Posts.

### Do and Avoid

- **Do:** Use this opens blanks. Nothing from the example can slip through. (Fresh Bread SaturdayFlyer for shop, offer deal, on dayFill the blue blanks, then make it.)
- **Avoid:** Use this copies the example. People fix what they see, and a detail they miss goes out. (Fresh Bread SaturdayMama Grace’s Bakery · Sat 19 AprSunrise Café · sunrisecafe.com)
- **Do:** Each card shows the ask that made it. People learn how to ask by browsing. (Fresh Bread SaturdayFlyer for [shop], offer [deal], on [day]Use this)
- **Avoid:** Only likes and badges. People copy results but never learn what made them. (Fresh Bread Saturday♥ 2.4k · FeaturedUse this)

### Writing

- Name examples by what they are for: "Fresh Bread Saturday", not "Template 12".
- Write the ask on each card in plain words, with the parts to change as blanks.
- Name the blanks by what goes in them: "shop", "deal", "day".
- Say where a result came from: "From the example Fresh Bread Saturday".

### Accessibility

- Each card is 1 list item with a heading (its title) and 1 button named "Use this: Fresh Bread Saturday".
- Thumbnails have alt text (the words a screen reader reads for an image) that describes the result, not "template image".
- Blanks in the ask are real form fields with labels, so Tab moves from 1 to the next.
- Filter chips are toggle buttons that tell screen readers whether they are on (with aria-pressed). The result count is announced without interrupting.

### Seen in

- **Claude** (Web and mobile, checked Nov 2026): An Inspiration tab in the artifacts space shows curated artifacts by category, such as "Learn something". Customize starts a new chat with the artifact's content to change. [Claude Help: Discovering, publishing, customizing and sharing artifacts](https://support.claude.com/en/articles/9547008-discovering-publishing-customizing-and-sharing-artifacts)
- **Microsoft 365 Copilot** (Copilot and Copilot Chat, checked Oct 2026): Prompt Gallery holds Microsoft prompts, prompts people save, and prompts shared with their team. Each prompt comes with tips to make it your own. [Microsoft Learn: Copilot Prompt Gallery](https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-prompt-gallery)
- **Gemini Gems** (Web, checked Sep 2024): Premade Gems such as Brainstormer and Writing editor sit in the side panel. People can copy some of them and rewrite the instructions. [Google blog: 5 tips on getting started with Gems (5 Sep 2024)](https://blog.google/products/gemini/google-gems-tips/)

### Related patterns

- Alternative to Suggested prompts: Example asks in words, for short questions.
- Often combined with Structured prompt: The blanks in the ask become a small form.
- Often combined with Variations: After the first result, show a few to choose from.
- Often combined with Capability disclosure: The gallery shows the cans. The card says the can'ts.

### Sources

- [Shape of AI - Example gallery](https://www.shapeof.ai/patterns/gallery)
- [Microsoft HAX Toolkit - Pattern 1E: Show a set of system outputs](https://www.microsoft.com/en-us/haxtoolkit/pattern/g1-e-show-a-set-of-system-outputs/)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)

## Proactive nudges

Let the AI offer help at the right moment, and make it easy to say no.

- ID: AX-DIS-05
- Moment: 1 Discover - "What can it do?"
- Maturity: emerging
- Also called: Proactive suggestions, AI tips, Smart prompts
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/proactive-nudges
- Licence: CC BY 4.0 (text and figures)

### Story

> When the AI notices something it could help with, I want it to offer once, at a pause, with 1 clear offer, so I can say yes or no without losing my place.

- **Setting:** Sipho is finishing a long status email for the site team.
- **Trigger:** He stops typing. The email is 412 words - long for people on site.
- **Without it:** A box pops up over his text mid-sentence. He loses his place, and the short version misses next week's plan.
- **With it:** Below the email: "This email is 412 words. Shorten it to 5 lines?" with Shorten, Not now, and Stop these tips.
- **Outcome:** He taps Shorten, checks the 5 lines, and sends. Undo is there if he wants it back.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Working | Only the work. The AI watches for 1 clear signal - here, length. | Watching. | - | - |
| A pause | The person stops typing. Nothing appears yet. | Waits about 1 s. | after typing stops | - |
| The nudge | 1 small card below the work: why now, 1 offer, yes, not now, stop these tips. | Waits for an answer, or none. | at a pause | Suggestion: shorten this email |
| Answer | 1 tap either way. Ignoring it is also an answer - it fades when typing starts again. | Idle. | on tap | - |
| Doing it | "Shortening to 5 lines", in place. | Writes. | - | - |
| Recorded | "Shortened to 5 lines · Undo", or "Not now · I won't suggest this again for this email". | Idle. | when done | Email shortened, or Suggestion dismissed |

### On each device

- **Phone:** The nudge is 1 line above the keyboard with 1 action and an X. Never a pop-up over the text being typed.
- **Tablet:** As on desktop.
- **Desktop:** A small card under the text or in the margin. It never takes focus, and it goes away when typing starts again.

### Use when

- The AI can see a clear, specific chance to help - a long email, an event date, a repeated task.
- The help saves real time, and 1 tap is enough to accept it.
- People may not know the feature exists.

### Don't use when

- People are in the middle of typing or a task with a deadline - wait, or offer it when they ask. Use Inline action on selection instead.
- The offer is general, like "Need help?" - show example asks instead. Use Suggested prompts instead.
- The AI would act, not just offer - ask first, before acting. Use Approval gate instead.

### Anatomy

- **A. Why now:** The fact that triggered it: "This email is 412 words."
- **B. 1 specific offer:** What it will do, with a number: shorten to 5 lines.
- **C. Accept:** Names the action. Does it in place, with Undo after.
- **D. Not now:** 1 tap. The nudge does not come back for this piece of work.
- **E. Stop these tips:** Turns this kind of nudge off for good, without a trip to settings.

### Do and Avoid

- **Do:** Waits for a pause, and sits below the work. (…if it stays dry.412 words. Shorten to 5 lines?Shorten · Not now · Stop these tips)
- **Avoid:** Same offer, but it arrives mid-sentence and covers the text. People lose their place. (Next week we pour th412 words. Shorten to 5 lines?Shown over the text, mid-sentence)
- **Do:** Says why it is showing and what it will do. (This email is 412 words.Shorten it to 5 lines for the site team?Shorten · Not now)
- **Avoid:** A vague offer that is a sales pitch in disguise. People learn to close every nudge without reading. (✦ Want me to help?Try AI Pro free for 7 daysTry it · ✕)

### Writing

- Start with the fact that triggered it: "This email is 412 words."
- Make 1 offer, as a question with a number: "Shorten it to 5 lines?"
- Use "Not now" to refuse, and "Stop these tips" to turn it off. Never "No, I like long emails".
- Record the answer in the past tense: "Shortened to 5 lines · Undo".

### Accessibility

- Announce the nudge once through a live region (the part of the page a screen reader announces on its own), without interrupting: "Suggestion: shorten this email". Never move focus to it.
- Make it reachable as the next item after the text field, and dismissable with Escape.
- Do not hide it on a timer while a screen reader user may still be reaching it. Hide it when typing starts.
- Buttons are at least 44 px on touch screens, and name the action: Shorten, Not now.

### Seen in

- **Gemini in Gmail** (Web, checked Nov 2026): When Gemini finds event details in an email, an Add to calendar button appears above the email. [Gmail Help: Collaborate with Gemini in Gmail](https://support.google.com/mail/answer/14355636)
- **Gmail summary cards** (Gmail, checked May 2025): Long emails get a Gemini summary card at the top without being asked. People turn it off with Smart features in settings. [TechCrunch, 30 May 2025](https://techcrunch.com/2025/05/30/gemini-will-now-automatically-summarize-your-long-emails-unless-you-opt-out)
- **Outlook Text Predictions** (Outlook, checked Dec 2021): A tip says "Outlook gives you writing suggestions as you type", with "Got it" and a button to stop the predictions. [Microsoft HAX Toolkit example (screenshot from Dec 2021)](https://www.microsoft.com/en-us/haxtoolkit/example/outlook-g1-a-introductory-blurb-and-g17-provide-global-controls/)

### Related patterns

- Alternative to Suggested prompts: Offer help in the empty state, when people are ready to ask.
- Alternative to Inline action on selection: Help that waits on the selected thing until people ask for it.
- Often combined with Autonomy dial: Lets people choose how often the AI offers, or acts by itself.
- Conflicts with Approval gate: A nudge only offers. If the AI would act, it needs a gate, not a nudge.

### Sources

- [Shape of AI - Nudges](https://www.shapeof.ai/patterns/nudges)
- [Google PAIR Guidebook - Mental models](https://pair.withgoogle.com/chapter/mental-models/)
- [Microsoft HAX Toolkit - Guidelines for Human-AI Interaction](https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/)
- [Apple WWDC23 - Make features discoverable with TipKit](https://developer.apple.com/videos/play/wwdc2023/10229/)
- [Apple WWDC20 - Design for intelligence: Discover new opportunities](https://developer.apple.com/videos/play/wwdc2020/10088/)

## Smart onboarding

Learn what a person needs in 1 or 2 questions, then set the AI up for them.

- ID: AX-DIS-06
- Moment: 1 Discover - "What can it do?"
- Maturity: emerging
- Also called: Personalised setup, Onboarding questions
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/smart-onboarding
- Licence: CC BY 4.0 (text and figures)

### Story

> When I start using an AI tool, I want it to ask me only the 1 or 2 things it truly needs, and show me what it set, so its first answers fit me and I can change them later.

- **Setting:** Mei opens a new lesson planning helper the school has bought.
- **Trigger:** "2 questions · about 20 seconds." She taps Start.
- **Without it:** A form of 8 fields. She fills 2, skips, and the first lesson plan is written for young children.
- **With it:** She taps Science, Year 9, then Lesson plans. A card says what it set, with Change.
- **Outcome:** She taps the first starter and gets a Year 9 plan she can use next week.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Welcome | How long it takes - "2 questions · about 20 seconds" - with Start and Skip. | Idle. | first open | - |
| Question 1 | 1 question, why it is asked, and answers to tap. No typing. | Idle. | - | Question 1 of 2 |
| Question 2 | The second question, with the answers so far in a chip. | Idle. | - | Question 2 of 2 |
| Setting up | "Setting up for Year 9 science" - the answers, in its words. | Applies the answers. | about 1 s | Setting up |
| Shows what it set | A card: Science · Year 9 · lesson plans first, with Change. Starter ideas that fit. | Idle. | when ready | Set up for Year 9 science |
| First ask | She taps a starter made for her answers. | Idle. | - | - |
| First answer | An answer at the right level, the first time. | Writes. | - | Generating a response |

### On each device

- **Phone:** 1 question per screen, answers as large chips, Skip always in the same corner. The keyboard never opens.
- **Tablet:** As on the phone, with room for both answer rows on 1 screen.
- **Desktop:** The questions can sit in the empty chat as 1 card, instead of full screens. Then people can see the tool behind them.

### Use when

- Good answers depend on 1 or 2 facts the AI cannot guess - a role, a level, a goal.
- The same facts matter for most asks, so asking once saves asking every time.
- People can answer by tapping, in under 30 seconds.

### Don't use when

- The AI can learn the fact from the first ask - ask then, in the moment, not up front.
- People only need to know what the tool does, not set it up. Use Capability disclosure instead.
- The facts are personal and change often - let people manage what the AI remembers. Use Memory controls instead.

### Anatomy

- **A. Progress:** "2 of 2" - people see the end from the start.
- **B. Question and why:** 1 question, and 1 line on what the answer changes.
- **C. Tap answers:** Chips, not text fields. 1 tap each. An Other chip for the rest.
- **D. Skip:** Always there. Skipping gives sensible defaults (settings the tool picks for you), not a broken tool.
- **E. So far:** The answers given, in 1 chip, so people can check them as they go.

### Do and Avoid

- **Do:** 2 questions, tap answers, the end in sight. (2 of 2What do you want help with first?Lesson plans · Quizzes · FeedbackSkip)
- **Avoid:** 8 fields, most of them not needed for a good first answer. People skip the lot, including the 1 that mattered. (2 of 8 · about 3 minutesName · Subject · School · Year groupsExam board · Class sizesTeaching style · Favourite topics)
- **Do:** Shows what it set from the answers, with a way to change it. (✓ Set up for youScience · Year 9 · lesson plans firstChange)
- **Avoid:** "All set!" hides what changed. When answers feel off, people can't tell why or fix it. (All set!Ask anything)

### Writing

- Say the cost first: "2 questions · about 20 seconds".
- Under each question, say what the answer changes: "So examples match your subject and class."
- Write answers as short chips in people's words. Add an Other chip.
- Play the answers back plainly: "Set up for you: Science · Year 9 · lesson plans first".

### Accessibility

- Each question is a group with a label. The chips are radio buttons, or toggle buttons that tell screen readers whether they are on (with aria-pressed).
- Announce progress when a question appears: "Question 2 of 2".
- Skip is a real button with the same name on every screen, reachable before the answers in tab order.
- Never time out a question. People who use switch access (1 or 2 buttons instead of a keyboard) or a screen reader may take longer.

### Seen in

- **Microsoft 365 Copilot** (Copilot app, web and Teams, checked Oct 2026): Onboarding asks people to describe their role, industry and main tasks, and to choose Beginner, Intermediate or Advanced. Copilot then suggests use cases for that role. [Microsoft Support: Complete Copilot onboarding](https://support.microsoft.com/microsoft-365-copilot/complete-microsoft-copilot-onboarding)
- **Microsoft News** (Web, checked Jul 2020): First-time visitors pick their interests, so the news feed is personal from the first visit. [Microsoft HAX Toolkit example (screenshot from Jul 2020)](https://www.microsoft.com/en-us/haxtoolkit/example/microsoft-news-g10-b-avoid-cold-starts-by-eliciting-user-preferences/)

### Related patterns

- Alternative to Capability disclosure: Tell people what the AI does, instead of asking about them.
- Often combined with Memory controls: Where the answers live afterwards, to see, change or delete.
- Often combined with Suggested prompts: The starters after setup, made from the answers.
- Often combined with Consent and data controls: Say how the answers are used and stored.

### Sources

- [Microsoft HAX Toolkit - Pattern 10B: Avoid cold starts by eliciting user preferences](https://www.microsoft.com/en-us/haxtoolkit/pattern/g10-b-avoid-cold-starts-by-eliciting-user-preferences/)
- [Google PAIR Guidebook - Mental models](https://pair.withgoogle.com/chapter/mental-models/)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)

# Moment 2: Ask - How do I tell it what I want?

How people put an ask into words, files, voice or a selection.

## Prompt composer

A box that grows with the ask and keeps its tools within reach.

- ID: AX-ASK-01
- Moment: 2 Ask - "How do I tell it what I want?"
- Maturity: established
- Also called: Chat input, Message box, Composer
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/prompt-composer
- Licence: CC BY 4.0 (text and figures)

### Story

> When I need the AI to do something specific, I want 1 box that takes my words, my files and my choice of mode, so I can say it all at once and send it with confidence.

- **Setting:** Meera wants the top 5 support problems from last week, with an example of each.
- **Trigger:** Her ask is 2 sentences long, and the tickets are in a file.
- **Without it:** A 1-line box hides half of what she typed, and the file has to go in a separate message.
- **With it:** The box grows as she types. The file sits in it as a chip, and Send lights up when it is ready.
- **Outcome:** 1 message, everything in it. The answer is right the first time.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Empty | A short hint, the tools on the left, the mic and a greyed Send on the right. | Idle. | 0 s | - |
| Focused | The box lifts slightly. On a phone the keyboard opens. | Idle. | on tap | - |
| Typing | Words appear. Send turns on with the first character. | Idle. | as typed | - |
| Grows | The box grows to about 6 lines, then scrolls inside itself. | Idle. | after line 1 | - |
| File added | The file appears as a chip with its name, size and an x to remove it. | Reads the file in the background. | on drop or pick | tickets.csv attached |
| Ready | Send is fully on. Enter sends on desktop. On a phone, only the button does. | Idle. | - | - |
| Sent | The box clears into the conversation and Send becomes Stop. | Starts working. | on send | Message sent |

### On each device

- **Phone:** Tools and modes go behind the + button as a sheet. Send is at least 44 px and sits by the thumb. Return makes a new line - only the button sends.
- **Tablet:** Like the phone in portrait. With a hardware keyboard, Enter sends and Shift+Enter makes a new line, as on desktop.
- **Desktop:** Mode and model can sit as chips in the box. Enter sends, Shift+Enter makes a new line, and files can be dropped anywhere on the page.

### Use when

- People talk to the AI in their own words - chat, search, assistants.
- An ask often comes with context: a file, an image, a selection, a mode.
- The same box is used for the first ask and every follow-up.

### Don't use when

- The AI needs 3 or 4 exact values, like dates and a budget - give it fields. Use Structured prompt instead.
- The ask is always 1 of a few jobs, like summarise or translate - give it buttons. Use Quick actions instead.
- People act on something already on screen - put the action where the selection is. Use Inline action on selection instead.

### Anatomy

- **A. Tools button:** Files, images and modes in 1 place, so the box stays clean.
- **B. The input:** Grows with the ask up to about 6 lines, then scrolls inside itself.
- **C. Context chip:** Shows what is attached - name and size - and lets people remove it.
- **D. Mode chip:** Says how the AI will work in plain words, not a model name.
- **E. Voice:** Speaking is 1 tap away, for when typing is slow.
- **F. Send:** Off until there is something to send. Becomes Stop while the AI works.

### Do and Avoid

- **Do:** The box grows, so people can read and fix what they wrote before sending. (Summarise this week’s support tickets into the 5 problems people hit most, with 1 example ticket for each↕ grows)
- **Avoid:** A fixed 1-line box. Long asks scroll sideways and mistakes go out unseen. (…hit most, with 1 example ticket for each)
- **Do:** Send is clearly off until there is something to send. (Ask anythingSend)
- **Avoid:** Send always looks ready, so an accidental tap sends nothing and wastes a turn. (Ask anythingSendSends an empty message, and the AI answers it.)

### Writing

- Make the hint an invitation, not an instruction: "Ask anything" or "What should we work on?" - never "Enter your prompt".
- Name modes by what they do - "Fast", "Thinking", "Research" - not by model names people have to learn.
- Show the file name and size on the chip, so people can see they attached the right thing.
- Keep the hint short enough that it never wraps on a phone.

### Accessibility

- The input is a real textarea with a visible label, or an aria-label (a name only screen readers hear), like "Message".
- Send and the tools button are real buttons with names. The disabled Send uses aria-disabled (a tag that tells a screen reader it is off), so it can still be found.
- Announce attached files and errors in a polite status region (the part of the page a screen reader announces on its own): "tickets.csv attached".
- Never send on Enter on a phone - people use Return for new lines and lose half-written asks.
- Keep focus in the input after sending, so a follow-up can be typed at once.

### Seen in

- **ChatGPT** (Web and apps, checked Oct 2026): A "+" tools menu in the composer holds tools and modes; the agent could be picked there or typed as the /agent command. [OpenAI Help: ChatGPT agent](https://help-lb.openai.com/en/articles/11752874-chatgpt-agent)
- **Claude** (Web, desktop and apps, checked Oct 2026): The "+" menu holds per-chat switches - for example, turning memory off before the first message is sent. [Claude Help: How memory works](https://support.claude.com/en/articles/11817273-how-does-claude-s-memory-work)
- **Perplexity** (Web and mobile, checked Jun 2025): A Search / Research / Labs mode selector sits with the input. It shipped on web and mobile before the desktop apps. [InfoQ, Jun 2025](https://www.infoq.com/news/2025/06/perplexity-labs)
- **Copilot on Windows** (Windows, checked Nov 2025): "Take Action" lives in a dropdown in the composer, and "+" attaches a file or a whole folder. [Windows Insider Blog, 17 Nov 2025](https://blogs.windows.com/windows-insider/2025/11/17/copilot-on-windows-copilot-actions-begins-rolling-out-to-windows-insiders/)

### Related patterns

- Part of Attachments and context chips: The chips that carry files and context into the ask.
- Often combined with Mode and model selection: How the AI should work, chosen from the box.
- Often combined with Voice input: The mic in the box, for speaking the ask.
- Alternative to Structured prompt: Fields instead of a box, when the AI needs exact values.
- Often combined with Suggested prompts: Examples above the empty box, so the first ask is easy.

### Sources

- [AWS Cloudscape - Prompt input](https://cloudscape.design/components/prompt-input/)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [W3C - WCAG 2.2, 2.5.8 Target size (minimum)](https://www.w3.org/TR/WCAG22/#target-size-minimum)

## Attachments and context chips

Let people add files, images and context to the ask, and see what is attached.

- ID: AX-ASK-02
- Moment: 2 Ask - "How do I tell it what I want?"
- Maturity: established
- Also called: File upload, Context chips, Add context
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/attachments
- Licence: CC BY 4.0 (text and figures)

### Story

> When I ask the AI about my own files, I want to see each file I added and whether it arrived, so I know what the answer is based on.

- **Setting:** Ayesha wants to check 2 invoices against her rice order.
- **Trigger:** She adds both PDFs. 1 is a 24 MB scan.
- **Without it:** The box shows "1 file". She doesn't notice, and the answer says the order is 15 kg short.
- **With it:** A chip per file. The scan's chip says "Over 20 MB · not added · Replace". She replaces it with a smaller copy.
- **Outcome:** The answer covers both invoices: 25 kg plus 15 kg, as ordered.

### States over time

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

### On each device

- **Phone:** The + opens a sheet: Files, Photos, Camera. Chips stack 1 per row above the box so long names fit.
- **Tablet:** As on desktop, with drag and drop from other apps in split view.
- **Desktop:** Drag and drop anywhere on the chat, or paste. Chips sit in a row above the box and wrap.

### Use when

- People ask about their own documents, images, data or code.
- The answer depends on which files were read, so people need to check them.
- Uploads can fail - size, type, page or file limits.

### Don't use when

- The context is the page people are already on - attach it for them as 1 chip. Use Entry point and AI button instead.
- People want to show the AI something live, like a camera view or their screen. Use Multimodal input instead.
- The files are part of a long-running project - keep them in the project, not each message. Use Agent workspace and management instead.

### Anatomy

- **A. Add:** 1 + button for files, photos and camera. Drag, drop and paste do the same.
- **B. File chip:** The file's name and type icon, 1 chip per file.
- **C. Size and status:** Pages or size when ready. Progress while uploading. The reason when it failed.
- **D. Remove:** An X on each chip, so 1 file can go without starting again.
- **E. Send:** Waits until every chip is ready, so nothing is sent half uploaded.

### Do and Avoid

- **Do:** Each file has a chip. The failed one says why and how to fix it. (Kwik-invoice-0412.pdf · 2 pagesBains-Foods-Oct.pdf · Over 20 MB · ReplaceDo these 2 invoices add up?)
- **Avoid:** A count only. The failed file disappears, and the answer is about half of what was sent. (1 fileDo these 2 invoices add up?)
- **Do:** The answer names which file each fact came from. (Yes. Together that is 40 kg.Kwik: 25 kg · Bains: 15 kg)
- **Avoid:** The answer does not say which files it read. People can't tell if 1 was missed. (Yes, the invoices look right.)

### Writing

- Say why a file failed and what to do, in 1 line: "Over 20 MB · not added · Replace".
- Show the file's real name, cut in the middle if it is long, never only "Document 1".
- Give useful size facts: "2 pages", "214 rows", not only "180 KB".
- Tell people the limits where they add files: how many, how big, which types.

### Accessibility

- Announce each change in the polite status region (the part of the page a screen reader announces on its own): "Kwik-invoice-0412.pdf attached", "Bains-Foods-Oct.pdf is too big".
- Each remove button is named with the file: "Remove Kwik-invoice-0412.pdf".
- Drag and drop always has a button that does the same thing.
- Don't show a failed upload by colour alone - use an icon and words.

### Seen in

- **Claude** (Web, desktop and mobile, checked Nov 2026): Files are added with the "+" button in the lower left of the chat box, by drag and drop, or by pasting images. Up to 20 files per chat, 500 MB each. [Claude Help: Uploading files to Claude](https://support.claude.com/en/articles/8241126-uploading-files-to-claude)
- **Gemini Apps** (Web, checked Nov 2026): Add files in the text box offers upload from the device, Google Drive, a code folder or notebooks. Up to 10 files per prompt. [Gemini Apps Help: Upload & analyze files](https://support.google.com/gemini/answer/14903178)
- **Copilot on Windows** (Windows, checked Nov 2025): A "+" in the composer attaches a file or a whole folder for Copilot Actions to work on. [Windows Insider Blog, 17 Nov 2025](https://blogs.windows.com/windows-insider/2025/11/17/copilot-on-windows-copilot-actions-begins-rolling-out-to-windows-insiders/)

### Related patterns

- Part of Prompt composer: The + and the chips live in the composer.
- Often combined with Citations and sources: Point each fact in the answer back to the file it came from.
- Alternative to Multimodal input: Show the AI something live, with the camera or screen.
- Often combined with Error, refusal and limits: How to word a failed upload, with a next step.

### Sources

- [AWS Cloudscape - In-chat context](https://cloudscape.design/gen-ai/patterns/in-chat-context/)
- [Shape of AI - Open input](https://www.shapeof.ai/patterns/open-input)
- [Apple WWDC25 - What’s new in Xcode 26](https://developer.apple.com/videos/play/wwdc2025/247/)

## Voice input

Let people speak the ask, and show them what was heard before it is sent.

- ID: AX-ASK-03
- Moment: 2 Ask - "How do I tell it what I want?"
- Maturity: established
- Also called: Dictation, Speech to text, Mic
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/voice-input
- Licence: CC BY 4.0 (text and figures)

### Story

> When my hands are busy or typing is slow, I want to speak my ask and see the words before they are sent, so a misheard word doesn't give me a wrong answer.

- **Setting:** Joseph is in his field and wants to know how much fertiliser to buy.
- **Trigger:** He taps the mic and says "2 acres". It hears "10".
- **Without it:** The message goes as soon as he stops. The answer is for 10 acres, and he nearly buys 5 times too much.
- **With it:** The words land in the box. "10" is marked as unsure. He taps it and picks "2".
- **Outcome:** He sends, and gets the amounts for his 2 acres.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Ready | A mic in the box, with a hint: "Tap the mic and speak". | Idle. | - | - |
| Listening | A pulsing dot, a timer, a level meter and the words as they are heard. Stop and Cancel are always visible. | Turns speech into text. | while speaking | Listening |
| Check the words | The words sit in the box, not sent. Unsure words are marked. | Idle. | on stop | Stopped listening. Check the text, then send |
| Fix 1 word | Tapping a marked word offers other words it might be. 1 tap fixes it. | Idle. | on tap | - |
| Sent at once | The avoid version: the message goes as soon as listening stops, mistakes and all. | Reads the misheard ask. | on stop | Message sent |
| Answering | The sent message is marked "Spoken". The answer streams in (arrives word by word). | Writes. | - | Generating a response |
| Done | An answer for what he meant. | Idle. | when done | Response complete |

### On each device

- **Phone:** The mic sits next to Send, by the thumb. Hold to talk suits noisy places. Tap to start and stop suits longer asks.
- **Tablet:** As on the phone. In split view, the listening bar stays inside the app's own box.
- **Desktop:** The mic sits in the box with a keyboard shortcut. Typing while listening stops listening and keeps the words.

### Use when

- People's hands or eyes are busy - cooking, driving, working outside.
- Typing is slow or hard for people - on a phone, in a second language, or with a motor disability.
- Asks are long and spoken words come more easily than typed ones.

### Don't use when

- People want a spoken conversation, with the AI talking back - that is voice mode. Use Voice output and live transcript instead.
- People need to show something as well as say it. Use Multimodal input instead.
- The ask is a short choice from a list - taps are faster than speech. Use Quick actions instead.

### Anatomy

- **A. Stop:** The mic turns into a stop button, with a label: "Tap to stop" or "Release to stop".
- **B. Listening status:** A pulsing dot and a timer. People always know the mic is on.
- **C. Live words:** The words appear as they are heard, so mistakes show early.
- **D. Cancel:** Throws the recording away. Nothing is sent or kept.
- **E. Level meter:** Moves with the voice, so people know they are being heard - or not.

### Do and Avoid

- **Do:** The words wait in the box, and the unsure 1 is marked. (Check the words, then send.…for 10 acres of maize?)
- **Avoid:** Sent at once. A misheard number becomes a wrong answer before anyone can see it. (…for 10 acres of maize?Sent as soon as he stopped.)
- **Do:** Shows it is listening, for how long, the words so far, and how to stop or cancel. (How much fertiliser do I need…● 0:03 · Tap to stop · ✕)
- **Avoid:** Only a dot. People can't tell if they are heard, or how to stop without sending. (…●)

### Writing

- Label the state, not the tech: "Listening", not "Speech recognition active".
- Name how to stop: "Tap to stop", "Release to stop".
- Say what to do next when listening ends: "Check the words, then send."
- Mark spoken messages in the thread: "Spoken".

### Accessibility

- Announce "Listening" and "Stopped listening" in the polite status region (the part of the page a screen reader announces on its own). Never read the live words out while the person speaks.
- The mic button's name changes with its state: "Start dictation", "Stop dictation".
- Keep a visible label on every button that matches its name, so people who use voice control can say it.
- Never auto-send on silence. People who speak slowly, stammer or pause to think need time.

### Seen in

- **ChatGPT** (Not stated, checked Nov 2026): Dictation turns the recording into text that people can edit before sending as a message. [OpenAI Help: Voice dictation FAQ](https://help-lb.openai.com/en/articles/12168547-voice-dictation-faq)
- **Claude** (iOS and Android, checked Nov 2026): A mic on the right of the box turns speech into text in the chat; people tap the arrow to send or "X" to cancel. 12 languages, most in beta. [Claude Help: Use dictation on Claude Mobile](https://support.claude.com/en/articles/10065434-use-dictation-on-claude-mobile)
- **Claude voice mode** (Web, desktop and mobile, checked Nov 2026): Hands-free listens and answers at natural pauses; push-to-talk is for noisy places. Text transcripts are saved in the chat. [Claude Help: Use voice mode](https://support.claude.com/en/articles/11101966-use-voice-mode)
- **ChatGPT voice** (Web and mobile, checked Nov 2025): Voice runs inside the chat, so people see answers appear while they talk. They tap "end" to stop; the old full screen is a setting. [TechCrunch, 25 Nov 2025](https://techcrunch.com/2025/11/25/chatgpts-voice-mode-is-no-longer-a-separate-interface/)

### Related patterns

- Part of Prompt composer: The mic is 1 of the composer's tools.
- Often combined with Voice output and live transcript: The AI speaks back, for a full spoken conversation.
- Often combined with Multimodal input: Speak and show at the same time.
- Often combined with Stop generation: In voice, speaking over the AI should stop it.

### Sources

- [Meta Horizon OS - Voice (updated Mar 2026)](https://developers.meta.com/vr/design/voice/)
- [W3C - Understanding Label in Name (WCAG 2.2)](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Apple WWDC25 - Bring advanced speech-to-text to your app with SpeechAnalyzer](https://developer.apple.com/videos/play/wwdc2025/277/)

## Multimodal input

Let 1 ask mix text, images, camera and screen, and show how each part is read.

- ID: AX-ASK-04
- Moment: 2 Ask - "How do I tell it what I want?"
- Maturity: emerging
- Also called: Vision input, Camera, Screen share
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/multimodal-input
- Licence: CC BY 4.0 (text and figures)

### Story

> When it is easier to show than to describe, I want to add a photo, my camera or my screen to my ask and see what the AI read from it, so I can trust the answer is about the right thing.

- **Setting:** Nomvula's new router has 4 lights. 1 is orange and the internet is down.
- **Trigger:** She doesn't know the light's name, so she takes a photo instead.
- **Without it:** "Orange usually means something is wrong. Try restarting." She can't tell which light it looked at, and restarting doesn't help.
- **With it:** "From your photo: 4 lights. WAN is orange." The WAN light is marked on her photo.
- **Outcome:** She clicks the fibre cable in properly. 2 minutes later the light turns green.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Add | The + offers Photo, Live camera and Share screen, each with its own icon. | Idle. | on tap | - |
| Added | A photo becomes a chip. Live camera or screen shows an "on" bar with Stop, the whole time. | Idle, or watching while live. | - | "Photo attached", or "Camera sharing on" |
| Asks | Words that point at the picture: "Why is this light orange?" | Idle. | - | - |
| Looking | "Looking at your photo" - says which input it is reading. | Reads the image. | 1-3 s | Looking at your photo |
| Says what it saw | 1 line on what it read from the image, and that part marked on the image. Then the answer. | Writes. | - | Generating a response |
| Done | People can check the answer against the marked part. | Idle. | when done | Response complete |
| Off | "Camera off · was on for 0:24" stays in the chat. | No longer sees anything. | on Stop, or when the app is left | Camera sharing off |

### On each device

- **Phone:** The camera is the main use: photo or live. The on bar sits at the top. The OS indicator (the phone's own camera-on dot) shows too. Screen sharing stops when the screen locks.
- **Tablet:** As on the phone, plus screen sharing of the app beside it in split view.
- **Desktop:** Paste or drop a screenshot, or share 1 window - never the whole screen by default. The on bar names what is shared.

### Use when

- The thing is hard to name or describe - a light, a rash, a part, an error on screen.
- A picture holds the facts - a label, a chart, a form, a receipt.
- People are doing something with their hands and can point the camera at it.

### Don't use when

- People only need to attach documents to read - files are enough. Use Attachments and context chips instead.
- Speech alone does the job - a spoken ask with no picture. Use Voice input instead.
- The AI must act on the screen, not only look - that needs an agent (an AI that can take actions for you) people can watch. Use Watch mode and takeover instead.

### Anatomy

- **A. The image in the ask:** The photo stays in the sent message, so the answer has its source.
- **B. Marked part:** The part of the image the answer is about, outlined.
- **C. What I read:** 1 line in plain words: "From your photo: 4 lights. WAN is orange."
- **D. The answer:** Comes after what it read, so people can check the reading first.

### Do and Avoid

- **Do:** Says what it read before answering. A wrong reading is easy to spot. (From your photo: WAN is orange.An orange WAN light means the router can’t reach your provider.)
- **Avoid:** An answer with no reading. People can't tell if it looked at the right thing. (Orange usually means something is wrong. Try restarting.)
- **Do:** A live input shows it is on, how to stop it, and when it ended. (● Camera on · StopCamera off · was on for 0:24)
- **Avoid:** No sign the camera is on. People stop trusting the app with their camera at all. ((camera still on in the background)Ask anything)

### Writing

- Start the reply with what was read, naming the input: "From your photo: …".
- Name live inputs plainly while on: "Camera on", "Sharing your screen".
- Record when they end: "Camera off · was on for 0:24".
- If the image is unclear, say what is missing and ask for a better 1: "I can't read the label - can you move closer?"

### Accessibility

- Give a sent photo the alt text (the words a screen reader says for an image) the AI read from it, so people who use a screen reader get the same reading.
- Announce "Camera sharing on" and "Camera sharing off" in the polite status region (the part of the page a screen reader announces on its own).
- Stop is a real button, reachable at any time, at least 44 px.
- Never make an image the only way to ask - typing and voice always work too.

### Seen in

- **Gemini Live** (Android, checked Nov 2026): People tap Camera to share it and tap again to stop. Screen sharing shows a "Screen Sharing" card in the notification area with Stop sharing, and both stop when the screen locks. [Gemini Apps Help: Talk naturally with Gemini Live](https://support.google.com/gemini/answer/15274899)
- **Gemini Live (beta redesign)** (Android, checked Apr 2026): The prompt box becomes a pill with a waveform. Camera and screen sharing sit on its left, mute on its right. [9to5Google, 19 Apr 2026](https://9to5google.com/2026/04/19/gemini-live-app-redesign/)
- **Gemini Apps** (Web, checked Nov 2026): 1 prompt can carry up to 10 files, including video (up to 5 minutes) and audio (up to 10 minutes), with more on paid plans. [Gemini Apps Help: Upload & analyze files](https://support.google.com/gemini/answer/14903178)

### Related patterns

- Alternative to Attachments and context chips: For documents to read, not things to show.
- Often combined with Voice input: Point the camera and speak, hands free.
- Often combined with Citations and sources: The marked part of the image works like a citation.
- Often combined with Consent and data controls: Say what is sent and kept when the camera or screen is on.

### Sources

- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [AWS Cloudscape - In-chat context](https://cloudscape.design/gen-ai/patterns/in-chat-context/)
- [Apple WWDC26 - Best practices for integrating visual intelligence in your app](https://developer.apple.com/videos/play/wwdc2026/297/)
- [Apple WWDC26 - Create high-quality images using Image Playground](https://developer.apple.com/videos/play/wwdc2026/375/)

## Structured prompt

Turn a vague ask into fields, so people give the AI what it needs.

- ID: AX-ASK-05
- Moment: 2 Ask - "How do I tell it what I want?"
- Maturity: established
- Also called: Form prompt, Guided prompt, Prompt builder
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/structured-prompt
- Licence: CC BY 4.0 (text and figures)

### Story

> When I need the AI to make something with exact details, I want to fill in the few things it needs, so the first answer fits and I don't have to explain again.

- **Setting:** Anjali needs a short quiz for tomorrow's class.
- **Trigger:** She knows what she wants: 10 questions, tick-box answers, Class 5 level.
- **Without it:** She types "Make a fractions quiz" and gets 20 open questions, too hard for 10-year-olds.
- **With it:** 4 fields ask for topic, number, type and class. When she skips the class, the form says why it matters.
- **Outcome:** The first quiz fits. She prints it before the bell.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Fields | A short form: Topic, Questions, Type, Class. Each empty field shows an example. | Idle. | 0 s | - |
| Filling in | Typed values and 1-tap chips. The ask below the form builds itself as she goes. | Idle. | - | - |
| 1 is missing | She taps Make quiz with no class. An amber note by the field: "Choose a class, so the questions fit the age." | Idle - nothing is sent yet. | on tap | Choose a class to continue |
| Ask is ready | The built ask reads in full: "10 multiple-choice questions on fractions for Class 5". Make quiz lights up. | Idle. | when all needed fields are in | - |
| Sent | The form folds into 1 ask bubble, with Edit fields under it. | Starts work. | on tap | Message sent |
| Answer | The quiz streams in (arrives word by word), matching every field. | Writes. | - | Generating a response |
| Done | The full quiz. Edit fields reopens the form with her values kept. | Idle. | when done | Response complete |

### On each device

- **Phone:** Fields stack in 1 column with the label above each. Short choices are chips, not drop-downs. The send button sits under the last field, by the thumb.
- **Tablet:** Like the phone in portrait. In landscape, like desktop.
- **Desktop:** Labels sit to the left of the fields, so the form is short. The built ask can sit beside the form and update as people type.

### Use when

- The AI needs a few exact values to do the job well - a number, a level, a date, a length.
- People make the same kind of ask again and again, like quizzes, job posts or release notes.
- People new to the AI don't know which details make a good ask.

### Don't use when

- The ask is open and creative, and fields would box people in. Use Prompt composer instead.
- People need ideas for what to ask, not a place for exact values. Use Suggested prompts instead.
- People want to change 1 thing after the first answer, like length or tone. Use Adjust length and tone instead.

### Anatomy

- **A. Field with an example:** A plain label and an example inside: "e.g. Fractions". People know what to type.
- **B. Choice chips:** 2 to 4 options as chips. 1 tap, nothing hidden in a menu.
- **C. Missing-value note:** Says which value is missing and why it matters, next to that field.
- **D. The built ask:** The sentence the fields make, in plain words. It updates as people fill in fields.
- **E. Send:** Names the job: "Make quiz". Pressing it with a gap shows the note, not a dead button.

### Do and Avoid

- **Do:** Only the values the AI needs. The built ask shows what will be sent. (Topic · FractionsQuestions · 10Class · neededAsk: 10 questions on fractions for Class 5)
- **Avoid:** Every setting becomes a required field. People give up, or type anything to get past. (Topic* · Tone* · Audience* · Format*Length* · Style* · Language* · Reading age*Persona* · Output* · Examples* · Rules*12 required fields)
- **Do:** The note sits by the empty field and says why it is needed. (Class · Choose a classChoose a class, so the questions fit the age.Make quiz)
- **Avoid:** The button is greyed out with no reason. People don't know what is missing. (Class · Choose a classMake quiz)

### Writing

- Label fields with plain nouns people use: "Topic", "Class", "Questions". Not "Parameters" or "Variables".
- Put an example in each empty field: "e.g. Fractions".
- Mark only the fields that are needed, and say why in 1 line: "Choose a class, so the questions fit the age."
- Show the ask the fields build as 1 sentence, in the words a person would type.

### Accessibility

- Every field has a visible label tied to it. Placeholder text (the grey example inside the field) is never the only label.
- Chips work as a radio group (a set where only 1 can be picked): arrow keys move, Space picks, and a screen reader announces the picked one.
- When a needed value is missing, move focus to that field and announce the note: "Choose a class to continue".
- The built ask is plain text, so a screen reader can read the whole ask before it is sent.

### Seen in

- **Suno** (Android app and web, checked Nov 2026): Custom mode splits a song ask into separate parts: Lyrics (or let Suno write them), Styles, a Title, and an Instrumental switch. [Suno Help: Android Create, Custom Mode (edited Dec 2025)](https://help.suno.com/en/articles/3726721)
- **Adobe Firefly** (Web, checked Nov 2026): Content type, visual intensity, composition and style are set with controls beside the prompt bar, not typed into the prompt. [Adobe Help: Enhance prompts to generate images (updated Aug 2026)](https://helpx.adobe.com/firefly/web/work-with-images/generate-images/enhance-prompts-to-generate-images.html)

### Related patterns

- Alternative to Prompt composer: 1 open box, for asks that don't fit fields.
- Alternative to Suggested prompts: Example asks, when people need ideas more than exact values.
- Often combined with Templates and example gallery: Ready-made forms for common jobs, to start from.
- Often combined with Prompt enhancer: Fills out a short ask after it is typed. Fields do the same job up front.

### Sources

- [Shape of AI - Madlibs](https://www.shapeof.ai/patterns/madlibs)
- [NN/g - Prompt controls in GenAI chatbots (Aug 2024)](https://www.nngroup.com/articles/prompt-controls-genai/)
- [AWS Cloudscape - Support prompts](https://cloudscape.design/gen-ai/patterns/support-prompts/)
- [Apple WWDC24 - Design App Intents for system experiences](https://developer.apple.com/videos/play/wwdc2024/10176/)
- [Apple WWDC26 - Inside Apple Intelligence and Xcode: Special Presentation](https://developer.apple.com/videos/play/wwdc2026/382/)

## Prompt enhancer

Offer to improve the ask before it is sent, and show the change.

- ID: AX-ASK-06
- Moment: 2 Ask - "How do I tell it what I want?"
- Maturity: emerging
- Also called: Improve prompt, Rewrite prompt, Magic prompt
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/prompt-enhancer
- Licence: CC BY 4.0 (text and figures)

### Story

> When my ask is short and I don't know what else to say, I want the AI to suggest a fuller ask that I can see and undo, so I get a better result without losing my own words.

- **Setting:** Mei types a short ask: "Poster for my cake shop".
- **Trigger:** She doesn't know what else to say, so she taps Enhance.
- **Without it:** The tool rewrites her ask in secret. The poster comes back neon, at night, and she can't see why.
- **With it:** The fuller ask appears in her box, with the added words marked and an Undo.
- **Outcome:** She keeps the strawberry cakes and the morning light. The poster works first time.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Short ask | Her own words in the box, with Enhance and Generate below. | Idle. | 0 s | - |
| Enhancing | "Improving your prompt" in the box. Nothing is generated yet. | Rewrites the ask. | on tap, about 1 s | Improving your prompt |
| Change shown | The fuller ask replaces hers in the box. Added words are underlined. "Enhanced · 2 additions" and Undo sit below. | Idle - waits for her. | - | Prompt enhanced. 2 additions |
| Keep or undo | She edits it, keeps it, or taps Undo and sees "Back to your words". | Idle. | on tap | "Back to your prompt" after Undo |
| Generate | She taps Generate. The ask on screen is the ask that is used. | Generates. | on tap | Generating an image |
| Result | The poster, with a line saying what it was made from: "Made from the enhanced prompt". | Idle. | when done | Image ready |

### On each device

- **Phone:** Enhance sits in the tool row of the box. The rewrite fills the box and grows it. Undo sits right under the text, by the thumb.
- **Tablet:** As on the phone. In landscape there is room to show the original above the rewrite.
- **Desktop:** As on the phone, with room for a "Show original" link beside Undo, so people can compare before they choose.

### Use when

- Short asks give weak results and people don't know what to add - common for images and video.
- A fuller ask works better, and seeing it teaches people to write better asks.
- People can check the rewrite quickly, before anything runs or costs credits.

### Don't use when

- The AI needs a few exact values. Ask for them with fields instead of guessing them. Use Structured prompt instead.
- The exact words matter, like a quote, a name or a line of code. A rewrite can break them.
- People want to change the result, not the ask - shorter, warmer, more formal. Use Adjust length and tone instead.

### Anatomy

- **A. Enhance:** 1 button in the box. It runs only when tapped, never in secret.
- **B. Marked additions:** The words the AI added are underlined, so people see what changed and what stayed.
- **C. What changed, and Undo:** "Enhanced · 2 additions" in 1 line. Undo brings back her exact words.
- **D. Generate:** Still her tap. The rewrite never runs by itself.

### Do and Avoid

- **Do:** The rewrite is in the box. Added words are marked and Undo is 1 tap away. (A bright poster for my cake shop: 3 strawberry cakes, soft morning lightEnhanced · 2 additions · UndoGenerate)
- **Avoid:** The rewrite runs in the background. When the result is odd, people can't see why or go back. (Poster for my cake shopEnhance: always onResult: neon sign, night street)
- **Do:** Keeps her words and adds detail she can check at a glance. (Hers: Poster for my cake shopRewrite: poster for my cake shop, space at the top for the shop name)
- **Avoid:** Adds a fact she never gave - a sale. If she misses it, a wrong offer goes in the window. (Hers: Poster for my cake shopRewrite: poster for my cake shop, 50% off all cakes this week)

### Writing

- Name the button for what it does: "Enhance" or "Improve prompt". Not "Magic".
- Say what changed in 1 line: "Enhanced · 2 additions".
- Keep the person's words and their order. Add detail, but never new facts like prices, names or dates.
- Use the same plain name for the way back every time: "Undo" or "Show original".

### Accessibility

- Announce "Improving your prompt" when it starts and "Prompt enhanced. 2 additions" when it ends.
- Mark added words with an underline as well as colour, and tell screen readers they are added text.
- Keep focus in the prompt box after the rewrite, so people can read and edit it with the keyboard.
- Undo is a real button, and the usual undo keys work too.

### Seen in

- **Adobe Firefly** (Web, checked Nov 2026): Prompt enhancement is on by default. After generating, "Show enhanced" shows the fuller prompt, which can be edited, and "Show original" shows the words as typed. [Adobe Help: Enhance prompts to generate images (updated Aug 2026)](https://helpx.adobe.com/firefly/web/work-with-images/generate-images/enhance-prompts-to-generate-images.html)
- **Ideogram** (Web, checked Nov 2026): Magic Prompt rewrites the prompt for more variety and detail, and can translate it into English. It starts on; people turn it off to keep their exact wording. [Ideogram Docs: Magic prompt](https://docs.ideogram.ai/using-ideogram/generation-settings/magic-prompt)
- **Anthropic Console** (Web, checked Oct 2024): The prompt improver rewrites a developer's prompt with clearer structure and examples. People then test it and give feedback to refine it. [Claude blog: Prompt improver (14 Oct 2024)](https://claude.com/blog/prompt-improver)

### Related patterns

- Alternative to Structured prompt: Ask for the details up front, instead of adding them after.
- Part of Prompt composer: Enhance lives in the tool row of the box.
- Often combined with Suggested prompts: Good examples teach the same thing: what a strong ask looks like.

### Sources

- [Shape of AI - Prompt enhancer](https://www.shapeof.ai/patterns/prompt-enhancer)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)

## Inline action on selection

Act on the text or object a person has selected, right where it is.

- ID: AX-ASK-07
- Moment: 2 Ask - "How do I tell it what I want?"
- Maturity: established
- Also called: Selection toolbar, Floating AI menu, Ask AI on selection
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/inline-action
- Licence: CC BY 4.0 (text and figures)

### Story

> When 1 part of my text needs work, I want to select it and ask the AI right there, so I can fix only that part and see the change before it goes in.

- **Setting:** Daniel is writing a cover letter for a new nursing job.
- **Trigger:** 1 sentence is long and flat. He selects it.
- **Without it:** He copies the sentence into a chat and asks for a shorter one. Then he copies the answer back and fixes the spacing.
- **With it:** A small menu appears by the selection. He taps Shorter and sees the new sentence before it goes in.
- **Outcome:** He taps Replace. Only that sentence changes, and Undo is there if he wants it back.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Reading | His letter. No AI on screen. | Idle. | 0 s | - |
| Selects | 1 sentence highlighted. | Idle. | - | - |
| Menu by the text | A small menu: "Ask about this text", then Shorter, Friendlier, Fix spelling. | Idle. | on selection, or on a shortcut | AI actions available |
| Picks | He taps Shorter, or types his own ask: "Sound more confident". "Rewriting 1 sentence" shows. | Rewrites only the selection. | on tap | - |
| Preview | The new sentence under the actions, with Replace, Insert below, Try again and Discard. His text is unchanged. | Idle - waits for him. | about 1 s | Suggestion ready |
| Replaced | The new sentence is in, briefly highlighted. "1 sentence replaced · Undo". | Idle. | on tap | Text replaced |

### On each device

- **Phone:** The menu opens as a sheet at the bottom, by the thumb. The preview shows in the sheet, so the text stays in view above it.
- **Tablet:** As on desktop, kept clear of the system's own copy and paste menu.
- **Desktop:** A small floating menu appears by the selection. The preview opens in the same menu, so the eye never leaves the text.

### Use when

- People work on content already on screen - a document, an email, a sheet, a canvas.
- The job is about 1 part, not the whole: 1 sentence, 1 cell, 1 shape.
- A few common jobs cover most needs, like shorter, friendlier or fix spelling.

### Don't use when

- The job is about the whole thing, like summarising a long email. Use Quick actions instead.
- People start from nothing - there is no text to select yet. Use Prompt composer instead.
- People want to change the AI's answer by hand, word by word. Use Edit output and revert to AI instead.

### Anatomy

- **A. Selection:** What the AI will work on, and nothing else. The rest of the text stays as it is.
- **B. Preset actions:** 3 or 4 short actions that fit the selection. 1 tap each.
- **C. Ask about this text:** A field for anything the presets don't cover. It already works on the selection only.
- **D. Preview:** The new version, shown beside the old one. Nothing changes until he chooses.
- **E. Result actions:** Replace, Insert below, Try again, Discard. Each says what it does to his text.

### Do and Avoid

- **Do:** A preview first. He chooses to replace, add below, or throw it away. (I have worked on a busy ward for 6 years…For 6 years I have cared for patients before and after surgery.Replace · Insert below · Discard)
- **Avoid:** The text swaps at once. He never read the new sentence before it went in. (For 6 years I have cared for patients before and after surgery.Replaced. The old sentence is gone.)
- **Do:** A few actions that fit 1 sentence, and a field for anything else. (Ask about this textShorter · Friendlier · Fix spelling)
- **Avoid:** Every AI action in the product. People scan, give up, or pick one that makes no sense for 1 sentence. (Summarise · Translate · Make table · Brainstorm · Write poem · Continue · Explain · Outline · Action items · Find quotes · Make tweet · …)

### Writing

- Name presets with short words: "Shorter", "Friendlier", "Fix spelling".
- Say what the field acts on: "Ask about this text", not "Ask AI".
- Name result buttons by what they do to the text: "Replace", "Insert below", "Discard".
- After a change, say what changed in 1 line: "1 sentence replaced · Undo".

### Accessibility

- The menu opens from the keyboard on a selection too, not only when the mouse button is released.
- When the menu opens, focus moves into it. Escape closes it and puts focus back on the selection.
- Announce "Suggestion ready" when the preview appears, and read the new text before the buttons.
- On touch screens, buttons in the sheet are at least 44 px. The menu never covers the system's copy and paste menu.

### Seen in

- **Microsoft Word (Copilot)** (Microsoft 365, checked Nov 2026): Select text, then open Copilot from the mini toolbar. Pick a preset like Auto Rewrite or type your own ask. The result offers Replace, Insert below or Regenerate. [Microsoft Support: Rewrite text with Copilot in Word](https://support.microsoft.com/en-US/word/copilot/rewrite-text-with-copilot-in-word)
- **Apple Writing Tools** (macOS, checked Nov 2026): Control-click selected text and choose Writing Tools: Proofread, Rewrite (Friendly, Professional, Concise), Summary, Key Points, or "Describe a change" in your own words. [Apple Support: Mac User Guide, Writing Tools](https://support.apple.com/en-gb/guide/mac-help/mchldcd6c260/mac)
- **Perplexity** (Web, checked Jun 2026): "Check sources" appears when you select text in an answer. [AI UX Playground teardown, Jun 2026](https://aiuxplayground.com/teardowns/perplexity/citations)

### Related patterns

- Alternative to Quick actions: Buttons for the whole item, not a selected part.
- Often combined with Adjust length and tone: The same jobs - shorter, friendlier - offered on a whole answer.
- Often combined with Edit output and revert to AI: Change the result by hand after the AI's pass.
- Often combined with Regenerate, edit and branches: Try again gives another version of the same sentence.

### Sources

- [Shape of AI - Inline Action](https://www.shapeof.ai/patterns/inline-action)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Apple WWDC24 - Get started with Writing Tools](https://developer.apple.com/videos/play/wwdc2024/10168/)
- [Apple WWDC25 - Dive deeper into Writing Tools](https://developer.apple.com/videos/play/wwdc2025/265/)

## Quick actions

1-tap asks for the common jobs: summarise, rewrite, translate, explain.

- ID: AX-ASK-08
- Moment: 2 Ask - "How do I tell it what I want?"
- Maturity: established
- Also called: AI actions, Smart actions, Summarise button
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/quick-actions
- Licence: CC BY 4.0 (text and figures)

### Story

> When I need a common job done on what I'm looking at, I want 1 tap to do it, so I don't have to type out the ask every time.

- **Setting:** A supplier thread about late cement has 14 replies.
- **Trigger:** Ravi has 2 minutes before the next truck and needs to know what was agreed.
- **Without it:** He opens the assistant and types the ask with 1 thumb. By the time it answers, the truck is at the gate.
- **With it:** 1 tap on Summarise. 3 lines say what went wrong, what is offered, and the deadline.
- **Outcome:** He taps Draft a reply, checks it, and sends it himself.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Item with actions | The thread, with Summarise, Draft a reply and Translate as chips under the subject. | Idle. | 0 s | - |
| 1 tap | The chip he tapped turns dark. A sheet opens at the bottom. | Starts work on this thread. | on tap | - |
| Working | "Summarising 14 replies" in the sheet. | Reads the thread. | 1-3 s | Summarising 14 replies |
| Result | "Summary of 14 replies" and 3 short points. A draft is marked "Not sent". | Writes. | - | - |
| Next actions | Copy and Draft a reply under a summary. Shorter and Review and send under a draft. | Idle. | when done | Done |

### On each device

- **Phone:** 2 or 3 actions sit as chips under the subject, by the thumb. The result opens in a sheet at the bottom, with the thread still above it.
- **Tablet:** As on desktop in landscape, as on the phone in portrait.
- **Desktop:** The actions sit at the top of the item. The result opens in a side panel, so the original stays in view to check against.

### Use when

- A few jobs cover most of what people want from this kind of item. For example: summarise an email, translate a message, explain an error.
- Typing the ask is slow, like on a phone, or people type the same ask again and again.
- The job is about the whole item on screen, so the AI already knows what "this" is.

### Don't use when

- The job is about 1 part of the item, like 1 sentence. Use Inline action on selection instead.
- The jobs vary too much to name in 1 or 2 words. Use Prompt composer instead.
- The action would send, post or delete something. That needs a check first. Use Approval gate instead.

### Anatomy

- **A. Action chips:** 2 to 4 named jobs, on the item they act on. 1 tap each.
- **B. Result title:** What it is and what it came from: "Summary of 14 replies".
- **C. Result:** Short and easy to scan. Points for a summary, a draft for a reply.
- **D. Next actions:** The likely next jobs, like Draft a reply. A draft is never sent by itself.

### Do and Avoid

- **Do:** Each action names the job in 1 or 2 words, right on the item. (Cement delivery - new dateSummarise · Draft a reply · TranslateHi Ravi, sorry, the truck broke down…)
- **Avoid:** 1 sparkle with no label. People can't tell what it does until they tap, so most never do. (Cement delivery - new date ✦Hi Ravi, sorry, the truck broke down…)
- **Do:** The action makes a draft. Sending is still his own tap. (Reply draftHi Suresh, Friday morning works if…Not sent · Review and send)
- **Avoid:** 1 tap wrote and sent a reply in his name. A quick action should never send. (ReplyReply sent to Suresh)

### Writing

- Name each action with a plain verb: "Summarise", "Draft a reply", "Translate".
- Title the result with what it is and what it came from: "Summary of 14 replies".
- Say plainly when nothing went out: "Not sent".
- Show 2 to 4 actions. Put the rest behind More, not in the row.

### Accessibility

- Actions are real buttons with text labels. An icon alone is not enough.
- Announce the work and the end: "Summarising 14 replies", then "Done".
- Move focus to the result's title when it opens, and back to the action when it closes.
- On phones, each action is at least 44 px tall, with space between them.

### Seen in

- **Gmail** (Android and iOS, checked Jun 2024): A "Summarize this email" button sits under the subject of longer threads. Tapping it opens a sheet with a bullet summary. [9to5Google, 24 Jun 2024 (updated 4 Jul 2024)](https://9to5google.com/2024/06/24/gmail-gemini-summarize-android-ios)
- **Outlook (Copilot)** (Windows, Mac, web, Android and iOS, checked Nov 2026): "Summary by Copilot" sits at the top of an email thread. The summary appears above the email and can include numbered citations that open the message they came from. [Microsoft Support: Summarize an email thread with Copilot in Outlook](https://support.microsoft.com/office/summarize-an-email-thread-with-copilot-a79873f2-396b-46dc-b852-7fe5947ab640)

### Related patterns

- Alternative to Inline action on selection: For 1 selected part, not the whole item.
- Alternative to Suggested prompts: Example asks in a chat, instead of buttons on an item.
- Often combined with Summary: What a good summary looks like once it arrives.
- Often combined with Follow-up suggestions: The next jobs after a result, like Draft a reply.

### Sources

- [NN/g - Prompt controls in GenAI chatbots (Aug 2024)](https://www.nngroup.com/articles/prompt-controls-genai/)
- [AWS Cloudscape - Support prompts](https://cloudscape.design/gen-ai/patterns/support-prompts/)
- [Apple WWDC24 - Get started with Writing Tools](https://developer.apple.com/videos/play/wwdc2024/10168/)
- [Apple WWDC25 - What’s new in Xcode 26](https://developer.apple.com/videos/play/wwdc2025/247/)

## Mode and model selection

Let people pick how the AI should work, in plain words, not model names.

- ID: AX-ASK-09
- Moment: 2 Ask - "How do I tell it what I want?"
- Maturity: established
- Also called: Model picker, Mode switch, Deep research toggle
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/mode-and-model
- Licence: CC BY 4.0 (text and figures)

### Story

> When a question needs more than a quick answer, I want to choose how the AI works in words I understand, so I know what I'll get and how long it will take.

- **Setting:** Joseph wants to stock solar lamps that won't come back broken.
- **Trigger:** The question needs real tests and prices, not a quick guess. He opens the picker.
- **Without it:** The picker lists atlas-2-lite, atlas-2 and atlas-2-deep-r. He guesses, gets a quick general answer, and never knows Research was there.
- **With it:** Each mode says what it does, how long it takes, and how many runs are left today. He picks Research.
- **Outcome:** 5 minutes later he has 3 lamps with sources, marked "Answered with Research".

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Ask typed | His ask in the composer, with a "Fast" chip beside the + button. | Idle. | 0 s | - |
| Picker open | Fast, Thinking and Research, each with 1 line on what it does and how long it takes. Research shows 3 left today. | Idle. | on tap | - |
| Picked | The check moves to Research, and the chip now reads "Research". | Idle. | on tap | Research selected |
| Working | "Researching · reading site 6 of 14 · about 5 min". A quick mode only shows it is writing. | Works in the chosen mode. | seconds to minutes | Researching |
| Answer | The answer streams in (arrives word by word). | Writes. | - | - |
| Labelled | "Answered with Research · 14 sources" under the answer. | Idle. | when done | Response complete |

### On each device

- **Phone:** The mode chip sits in the composer. The picker opens as a sheet from the bottom, 1 row per mode. Rare options go under More.
- **Tablet:** As on desktop: the picker opens as a menu above the chip.
- **Desktop:** The picker opens as a menu above the chip, with room for the description and the time on 1 row.

### Use when

- The AI can work in ways that differ a lot in time, cost or output - a quick answer, careful thinking, long research.
- The right choice depends on the task, and people can judge it once they know what each choice does.
- Some modes have limits, like runs per day, that people should see before they pick.

### Don't use when

- The product can pick well on its own. Offer Auto as the default, and keep the picker for people who want to change it.
- The difference is only how long or formal the answer is. Use Adjust length and tone instead.
- The ask needs exact values, not a way of working. Use Structured prompt instead.

### Anatomy

- **A. Mode chip:** Shows the current mode in the composer, and opens the picker.
- **B. Mode name:** A plain word for how it works: "Research". Not a model name (the name of the AI engine underneath).
- **C. What it does and how long:** 1 line in everyday words, with the time: "Reads many websites and cites them · about 5 min".
- **D. Limit:** "3 left today", in amber, before the pick - not after the run fails.
- **E. Current mode:** A check on the mode in use, so it is clear what sending will do.

### Do and Avoid

- **Do:** Each mode says what it does and how long it takes, in everyday words. (FastQuick answers · secondsResearchReads many websites and cites them · about 5 min)
- **Avoid:** Model names only. People can't tell which one fits, so they guess or never switch. (atlas-2-liteatlas-2atlas-2-deep-r)
- **Do:** The slow mode says what it is doing and how long is left. (Which solar lamps last longest?Researching · site 6 of 14 · about 5 min)
- **Avoid:** A 5-minute mode with no time shown. People think it is stuck and leave. (Which solar lamps last longest?Working…)

### Writing

- Name modes by how they work: "Fast", "Thinking", "Research". If model names appear, put them in a details line.
- Give each mode 1 line in everyday words, with the time: "Reads many websites and cites them · about 5 min".
- Show limits before the pick: "3 left today".
- Label the answer with the mode that made it: "Answered with Research".

### Accessibility

- The chip's name includes the current mode: "Mode: Research".
- The picker is a group of radio options (a set where only 1 can be picked). Each option's description is part of its name, so a screen reader reads them together.
- Announce the change: "Research selected".
- Escape closes the picker and puts focus back on the chip.

### Seen in

- **ChatGPT** (Web first, checked Sep 2025): Thinking time can be set to Standard or Extended (Light and Heavy on Pro). It launched on the web, with mobile to follow. [TechRadar, 18 Sep 2025](https://www.techradar.com/ai-platforms-assistants/chatgpt/you-can-now-toggle-gpt-5s-thinking-time-for-faster-or-smarter-answers-heres-how-to-do-it)
- **Perplexity** (Web and mobile, checked Jun 2025): A mode selector offers Search, Research and Labs. It came to web and mobile before the desktop apps. [InfoQ, Jun 2025](https://www.infoq.com/news/2025/06/perplexity-labs)
- **Claude** (Web, checked Jan 2026): Extended thinking is a toggle in the "Search and tools" menu. Turning it on mid-chat starts a new chat. [Claude Help: Extended thinking (14 Jan 2026)](https://support.claude.com/en/articles/10574485)
- **Gemini** (Gemini app, checked Nov 2025): "Thinking" is an option in the model picker of the Gemini 3 app. [9to5Google, 18 Nov 2025](https://9to5google.com/2025/11/18/gemini-3-pro-app/)

### Related patterns

- Part of Prompt composer: The mode chip lives in the composer.
- Often combined with Specific loading messages: Say what the chosen mode is doing while it works.
- Often combined with Long-running tasks and notifications: Slow modes like Research need a way to leave and be told.
- Often combined with Thinking and processing steps: What a Thinking mode shows while it works.

### Sources

- [Shape of AI - Modes](https://www.shapeof.ai/patterns/modes)
- [Shape of AI - Model management](https://www.shapeof.ai/patterns/model-management)
- [Apple WWDC26 - Create high-quality images using Image Playground](https://developer.apple.com/videos/play/wwdc2026/375/)

# Moment 3: Wait - Is it still working?

What people see while the AI thinks, and how time is made visible.

## Thinking and processing steps

Make 1 to 60 seconds of silence feel like progress, with steps people can open.

- ID: AX-WAI-01
- Moment: 3 Wait - "Is it still working?"
- Maturity: established
- Also called: Stream of thought, Reasoning trace, Thought for 8s, Processing steps
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/thinking-steps
- Licence: CC BY 4.0 (text and figures)

### Story

> When the AI takes more than a few seconds before it answers, I want to see what it is doing right now, so I know it is working on the right thing and can decide whether to wait.

- **Setting:** Dev attaches 3 files and asks for a launch-week plan.
- **Trigger:** The AI needs 10 seconds or more before it can write anything.
- **Without it:** A spinner with no words. After 6 seconds Dev wonders if it is stuck, and asks again.
- **With it:** Each step names what is happening - reading the files, checking the dates - with a timer beside it.
- **Outcome:** The steps fold into 1 line when the answer starts. Dev trusts the plan because he saw the date check.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Sent | The ask, and nothing else yet. | Starts work. | 0 s | - |
| First step | A Thinking header, a timer and the first step in plain words. | Reads the input. | within 1 s | Thinking |
| Next steps | Done steps get a tick; the current one pulses; the next one is faint. | Works step by step. | every 1-3 s | - |
| Last step | The last step runs. The timer keeps counting. | Checks its work. | - | - |
| Answer starts | The steps fold into 1 line - or stay open if set. The answer streams (arrives word by word) below. | Writes the answer. | on the first word | - |
| Done | 1 line, "Thought for 8 s · 5 steps", that opens the steps again. | Idle. | - | Response complete |

### On each device

- **Phone:** Show only the current step, on 1 line, with the timer. The full list opens in a sheet (a panel that slides up from the bottom). When the answer starts, fold to 1 line so the answer gets the screen.
- **Tablet:** The full list fits above the answer. Fold it when the answer starts.
- **Desktop:** The list sits above the answer. For a long run by an agent (an AI that can take actions for you), it sits in a side panel. Each done step can open to show what it found.

### Use when

- The AI regularly takes more than about 3 seconds before the first word.
- The work has real stages people would recognise: reading, searching, checking, drafting.
- Seeing the steps helps people judge the answer - for example, which files or sites it used.

### Don't use when

- Answers start in under a second - streaming alone is enough. Use Streaming response instead.
- There is only 1 stage. Say what it is instead of inventing steps. Use Specific loading messages instead.
- The work runs for minutes while people do something else. Use Long-running tasks and notifications instead.

### Anatomy

- **A. Timer:** Proves time is passing and sets an expectation for next time.
- **B. Current step:** Names what is happening now, in plain words, and pulses gently.
- **C. Done step:** A tick, so progress is visible at a glance.
- **D. Next step:** Faint, so people see what is still to come.
- **E. Open a step:** Shows what the step found - files, dates, sources.

### Do and Avoid

- **Do:** Each step names the real thing it is doing, so people can spot a wrong turn early. (✓ Reading the 3 files you attachedChecking the dates against the calendar)
- **Avoid:** Generic verbs. They look busy but tell people nothing they can check. (✓ ProcessingAnalysing)
- **Do:** The steps fold to 1 line when the answer starts. They are still 1 tap away. (› Thought for 8 s · 5 stepsHere is your launch week: lock the build Monday…)
- **Avoid:** The full list stays open on a phone, and pushes the answer off the screen. (✓ Reading the files✓ Checking the dates✓ Comparing… (+3 more)The answer is below the fold.)

### Writing

- Start each step with a verb and name the thing: "Reading the 3 files you attached", not "Processing".
- Use the person's own nouns - their file names, their dates, the sites it is searching.
- When done, say how long it took: "Thought for 8 s". People learn what to expect.
- Never claim the steps are the AI's full reasoning. If they are a summary, say so.

### Accessibility

- Announce only the start ("Thinking") and the end ("Response complete") - not every step.
- The folded line is a real button with aria-expanded (the code that tells a screen reader if it is open or closed), so people can open the steps again.
- Under reduced motion (a device setting that turns off animation), the pulse on the current step stops. The tick and the words carry the meaning.
- Screen readers do not read the timer every second. It is on screen only.

### Seen in

- **Claude** (Web, checked Oct 2026): A timer and a collapsible thinking section sit above the answer. Opening it shows a summary, not the full chain, and thinking can stop early when safety flags it. [Claude Help: Extended thinking (14 Jan 2026)](https://support.claude.com/en/articles/10574485)
- **Gemini** (Web and apps, checked Oct 2026): A Task opens a work panel listing completed, current and planned steps, with a progress chip that reopens it. [Gemini Help: Tasks](https://support.google.com/gemini/answer/16596215)
- **Perplexity** (Web, checked Jun 2026): A collapsed "Completed N steps" row opens into plain-language steps such as "Searching the web". [AI UX Playground teardown, Jun 2026](https://aiuxplayground.com/teardowns/perplexity/citations)
- **ChatGPT** (Web first, checked Sep 2025): Thinking time can be set to Standard or Extended (Light and Heavy on Pro). It launched on the web, with mobile to follow. [TechRadar, 18 Sep 2025](https://www.techradar.com/ai-platforms-assistants/chatgpt/you-can-now-toggle-gpt-5s-thinking-time-for-faster-or-smarter-answers-heres-how-to-do-it)

### Related patterns

- Alternative to Specific loading messages: 1 specific line instead of a list, for short single-stage waits.
- Often combined with Streaming response: What happens after the steps fold: the answer arrives word by word.
- Often combined with Stop generation: Stop should work during thinking too, not only while writing.
- Alternative to Long-running tasks and notifications: For work that runs for minutes while people leave.
- Often combined with Explanation: Opening a step is the start of showing why the answer came out this way.

### Sources

- [AWS Cloudscape - Thinking](https://cloudscape.design/gen-ai/patterns/thinking/)
- [Shape of AI - Stream of Thought](https://www.shapeof.ai/patterns/stream-of-thought)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [W3C - Understanding 2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)

## Streaming response

Show the answer as it is written, so waiting feels like reading.

- ID: AX-WAI-02
- Moment: 3 Wait - "Is it still working?"
- Maturity: established
- Also called: Token streaming, Typewriter, Live response
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/streaming
- Licence: CC BY 4.0 (text and figures)

### Story

> When I ask the AI for something long, I want to start reading before it has finished, so the wait feels like progress and I can stop it if it goes the wrong way.

- **Setting:** Arjun asks the assistant for a 3-step plan for next week's launch.
- **Trigger:** A long answer takes the AI 5 seconds to write.
- **Without it:** A spinner for 5 seconds, then a wall of text. He cannot tell if it is stuck, and step 1 is already wrong.
- **With it:** The first words land in under a second. By step 2 he sees it misread the date, and presses Stop.
- **Outcome:** He keeps what was right, fixes the date in 1 line, and asks again.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Message sent | His message, and the composer (the box where he types) locked to a Stop button. | Receives the ask. | 0 s | - |
| Waiting | 3 quiet dots where the answer will be. Stop is already there. | Thinks before the first word. | 0 to 1.2 s | Generating a response |
| Still working | Only on a slow answer: "Still working - long answers take a moment." | Still thinking. | after 4 s | - |
| First words | The answer starts in place, with a caret (a blinking line) at its end. | Sends the first tokens (pieces of words). | 1.2 s | - |
| Streaming | Text grows in whole words. The page does not jump; it follows only if he has not scrolled away. | Writes the rest. | 1.2 to 5 s | - |
| Done | The caret goes, Stop becomes the composer again, and Copy, Retry and feedback appear. | Finished. | 5 s | Response complete |
| Stopped | Everything written so far stays, with a note that he stopped it and a Continue button. | Stops at once. | on Stop | Response stopped |
| Error | What was written stays. A plain line says the connection was lost, with Retry. | The stream broke. | any time | Response failed |

### On each device

- **Phone:** The Stop button replaces Send in the same spot, at least 44 px. The keyboard closes when the answer starts, so more of it is visible.
- **Tablet:** Same as the phone in portrait. In landscape the answer column keeps its reading width rather than stretching edge to edge.
- **Desktop:** Text streams into a column of about 70 characters. Esc stops the answer, and Stop stays visible even when the answer scrolls past the window.

### Use when

- An answer takes more than about 1 second to write.
- The output is text people read in order: answers, drafts, code, plans.
- People may want to stop early once they see where the answer is going.

### Don't use when

- The output is a table, chart or form that only makes sense when complete. Show a skeleton (a grey outline of the shape to come), then the whole thing. Use Generative UI and structured output instead.
- The AI is working for minutes on a task, not writing - show steps instead of text. Use Thinking and processing steps instead.
- The answer is under 1 second. Streaming then only adds flicker.

### Anatomy

- **A. The ask:** Stays on screen, so the answer is read against what was asked.
- **B. Status line:** Says what is happening and for how long: "Generating · 2.1 s".
- **C. Growing answer:** Text lands in whole words, in its final position - no jumping.
- **D. Caret:** Shows where new text will appear, and that it is still coming.
- **E. Stop:** Always visible while the answer is written. Keeps what is there.
- **F. Composer:** Comes back the moment the answer ends, ready for a follow-up.

### Do and Avoid

- **Do:** A Stop button for the whole time the answer is written. (Plan my launch week in 3 steps1. Lock the build on Monday, so the rest of the week is…Generating · 1.8 sStop)
- **Avoid:** No way to stop. If step 1 is wrong, the person has to wait for all 3. (Plan my launch week in 3 steps1. Lock the build on Monday, so the rest of the week is…Generating…)
- **Do:** Stopping keeps every word already written, and says so. (1. Lock the build on Monday.2. Brief support with the top 5…You stopped this answer · Continue)
- **Avoid:** Stopping throws the partial answer away, so Stop feels like losing work. (Response cancelled.)

### Writing

- Name the wait honestly: "Generating", then the time. Never a fake progress bar.
- After a few seconds of silence, say something specific: "Reading your 3 files", not "Processing…".
- Label the button "Stop", not "Cancel" - nothing is cancelled, the text stays.
- On an error, keep the text and say what broke in 1 line: "Connection lost after 2.1 s. What was written is kept."

### Accessibility

- The chat history is a log with aria-live off. The streaming text is never a live region (the part of the page a screen reader announces on its own). Screen readers would re-read it or drop it, token by token.
- A hidden status region, set to polite (it waits for a pause) and atomic (it reads the whole message), announces only 4 things: "Generating a response", "Response complete", "Response stopped" and "Response failed".
- Stop is a real button. Focus stays in the composer while the answer streams and returns there when Stop goes away.
- Under reduced motion (a device setting that turns off animation), text appears in sentence chunks, not word by word. The caret does not blink.
- Do not auto-scroll if the person has scrolled up to read - offer a "Jump to latest" button instead.

### Seen in

- **OpenAI Apps SDK** (ChatGPT, fullscreen apps, checked Oct 2026): While a reply streams, the overlaid system composer shimmers; afterwards a short snippet sits above the composer and opens the chat sheet. [OpenAI Apps SDK UI guidelines](https://developers.openai.com/apps-sdk/concepts/ui-guidelines)
- **ChatGPT** (Web and apps, checked Nov 2025): "Update" lets you add context while a Pro or Deep Research answer is still being written, without starting again. [TechRadar, 8 Nov 2025](https://www.techradar.com/ai-platforms-assistants/chatgpt/you-can-now-interrupt-chatgpt-as-it-learns-to-take-feedback-on-the-fly)
- **Gemini** (Web and apps, checked Oct 2026): For agent Tasks, "Stop" sits in the text box itself and cancels the whole task, not only the current reply. [Gemini Help: Tasks](https://support.google.com/gemini/answer/16596215)

### Related patterns

- Part of Stop generation: Stop is the other half of streaming - never ship 1 without the other.
- Alternative to Thinking and processing steps: For long work that is not text, show steps instead.
- Often combined with Citations and sources: Source markers appear as each sentence lands.
- Often combined with Update mid-run: Let people steer an answer while it is still being written.
- Conflicts with Generative UI and structured output: Tables and charts should appear whole, not stream cell by cell.

### Sources

- [azukiazusa - Accessible streaming chat UI (Aug 2026)](https://azukiazusa.dev/en/blog/accessible-streaming-chat-ui)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [AI UX Playground - Streaming](https://aiuxplayground.com/pattern/streaming)
- [W3C - WCAG 2.2, 4.1.3 Status messages](https://www.w3.org/TR/WCAG22/#status-messages)
- [Apple WWDC25 - Meet the Foundation Models framework](https://developer.apple.com/videos/play/wwdc2025/286/)
- [Apple WWDC25 - Code-along: Bring on-device AI to your app using the Foundation Models framework](https://developer.apple.com/videos/play/wwdc2025/259/)

## Specific loading messages

Say what the AI is doing right now, not just that it is busy.

- ID: AX-WAI-03
- Moment: 3 Wait - "Is it still working?"
- Maturity: established
- Also called: Status messages, Progress copy, Loading states
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/loading-messages
- Licence: CC BY 4.0 (text and figures)

### Story

> When the AI takes a few seconds before it answers, I want to see what it is doing right now, so I know it is working on the right thing and not stuck.

- **Setting:** Nadia sends her 40-page lease with 1 question: "Can I keep a cat?"
- **Trigger:** The answer takes about 8 seconds - long enough to wonder if anything is happening.
- **Without it:** A spinner and "Processing…" for 8 seconds. She can't tell if it read her file or if it is stuck.
- **With it:** 1 line says what is happening now: reading page 20 of 40, then finding the parts about pets.
- **Outcome:** The answer names clause 14.2. She trusts it - she saw it read the right file.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Sent | Her question and the file name in the ask bubble. Send has turned into Stop. | Starts work. | 0 s | - |
| Reading | "Reading lease.pdf · page 20 of 40", with the count going up. | Reads the file. | after about 1 s | Reading lease.pdf |
| Finding | The line changes: "Finding the parts about pets". | Searches the file. | - | Finding the parts about pets |
| Checking | "Checking clause 14.2 and 3 others". | Checks the matches. | - | Checking 4 clauses |
| Answer | The line goes away. The answer streams (arrives word by word) in its place. | Writes. | about 8 s | Generating a response |
| Done | The answer, naming the clause it came from. | Idle. | when done | Response complete |

### On each device

- **Phone:** 1 line under the ask. Long file names are cut in the middle (lease-2026…final.pdf), so the end stays readable.
- **Tablet:** As on the phone.
- **Desktop:** As on the phone, with room for the count on the same line.

### Use when

- The wait is longer than about 1 second, so people notice it.
- The AI does work people would recognise - reading a file, searching, checking. Naming it shows it is on track.
- There is 1 stage at a time, so 1 line is enough.

### Don't use when

- The answer starts in under 1 second. A message would only flicker. Use Streaming response instead.
- The work has several stages people may want to check afterwards. Use Thinking and processing steps instead.
- The work takes minutes. People should be free to leave. Use Long-running tasks and notifications instead.

### Anatomy

- **A. Moving indicator:** Small dots that show the AI is still working. They stop when motion is reduced.
- **B. Verb and object:** "Reading lease.pdf". What it is doing, to what - in her words, with her file name.
- **C. Count:** "page 20 of 40". A real count when there is one. Never a made-up percent.
- **D. Stop:** Send turns into Stop for the whole wait.

### Do and Avoid

- **Do:** Names the work and her file. She can see it is on the right track. (Can I keep a cat?Reading lease.pdf · page 20 of 40)
- **Avoid:** "Processing…" for 8 seconds. It could be reading, stuck, or doing the wrong thing. (Can I keep a cat?Processing…)
- **Do:** Under 1 second, skip the message. The answer itself shows it is working. (0.4 sYes, with written consent. Clause 14.2…)
- **Avoid:** A message that shows for a blink reads as a glitch, not a status. (0.4 sLoading…then the answer, a blink later)

### Writing

- Use a verb and the real thing: "Reading lease.pdf", "Searching 3 sites". Not "Processing…" or "Thinking…".
- Add a count when there is a real one: "page 20 of 40".
- No end punctuation and no "please wait": "Finding the parts about pets".
- Don't promise what you don't know. Avoid "Almost done" unless it is.

### Accessibility

- Put the line in a polite status region (a part of the page a screen reader announces on its own, when there is a pause). Announce when the stage changes, not every page count.
- Don't move focus to the message. People keep their place.
- With reduced motion (a device setting that turns off animation), the dots stand still. The words still change.
- Stop stays a real button named "Stop" for the whole wait.

### Seen in

- **Perplexity** (Web, checked Jun 2026): "Completed N steps" opens to plain-language steps such as "Searching the web". [AI UX Playground teardown, Jun 2026](https://aiuxplayground.com/teardowns/perplexity/citations)
- **Comet** (Android, checked Nov 2025): The Android browser shows what action the assistant is taking while it works. [TechCrunch, 20 Nov 2025](https://www.techcrunch.com/2025/11/20/perplexity-brings-its-ai-browser-comet-to-android/)

### Related patterns

- Alternative to Thinking and processing steps: A list of steps, for longer work with several stages.
- Often combined with Streaming response: What comes after the message: the answer, word by word.
- Often combined with Stop generation: Stop should work during the wait too.
- Alternative to Long-running tasks and notifications: For work that takes minutes, when people should be free to leave.

### Sources

- [AWS Cloudscape - Gen AI loading states](https://cloudscape.design/patterns/genai/genai-loading-states/)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [W3C - Understanding 4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)

## Long-running tasks and notifications

Let people leave a long task and be told when it is done.

- ID: AX-WAI-04
- Moment: 3 Wait - "Is it still working?"
- Maturity: emerging
- Also called: Background task, Notify me, Task queue
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/long-running-tasks
- Licence: CC BY 4.0 (text and figures)

### Story

> When I start a task that takes many minutes, I want to leave and be told when it is done or needs me, so I can get on with my day without checking back.

- **Setting:** Thandi asks for 10 suppliers of recycled boxes near Johannesburg, with prices.
- **Trigger:** It will take about 10 minutes, and her meeting starts in 2.
- **Without it:** She leaves and forgets. 2 hours later she finds the task stuck on 1 question since 9:51.
- **With it:** She taps Start and goes to her meeting. The task keeps going, with a small live status.
- **Outcome:** At 9:53 a notification says it is ready. 1 tap opens the supplier table.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asks | Her ask in the chat. | Plans the work. | 0 s | - |
| Says how long | "This takes about 10 minutes. It keeps going if you close the app." A Notify me switch is on. Start. | Waits for Start. | before it starts | - |
| Running | "Searching supplier sites · 4 of 10", a bar, "You can leave", and Stop. | Works in the cloud (on a server, not on her phone). | minutes | Research started. About 10 minutes |
| She leaves | Another app. A small live status at the top: "Research · 6 of 10". | Keeps working. | - | - |
| Told | A notification: "Supplier research is ready" with the result in 1 line - or "needs you" with the question. | Done, or paused for 1 answer. | when it ends or needs her | Supplier research is ready |
| Opens | The result, "Done in 9 min", with the table - or the question with Allow once and Skip this site. | Idle, or goes on after her answer. | on tap | - |
| No notice | Without a notification she comes back by chance at 11:40: "Waiting for you since 9:51 - 2 hours". | Stuck, or long done. | hours later | - |

### On each device

- **Phone:** The phone starts the task, follows it and answers it. The work runs in the cloud. A notification, also on the lock screen, opens straight to the result or the question.
- **Tablet:** As on the phone.
- **Desktop:** The task keeps running in its tab or a task list. A system notification appears when it ends, and the result shows next to the chat.

### Use when

- The work takes minutes or more - research, long reports, tasks for an agent (an AI that can take actions for you).
- People have other things to do and shouldn't have to watch.
- The task may stop to ask a question, so people need to know when it is waiting on them.

### Don't use when

- The answer comes within about 10 seconds. People will wait for it. Use Specific loading messages instead.
- People want to watch each step and step in. Use Watch mode and takeover instead.
- The task should run again and again on a schedule. Use Scheduled and background agents instead.

### Anatomy

- **A. Name and time:** "Supplier research · about 10 min". A time people can plan around.
- **B. Live progress:** "4 of 10", with a bar. Real progress, so a glance says how far it got.
- **C. Leave and be told:** Says leaving is safe and that a notification will come when it ends or needs her.
- **D. Stop:** Always there while it runs. Stopping says what was kept.

### Do and Avoid

- **Do:** Names the task and its state, with the result in 1 line. She knows before she taps. (Assistant · nowSupplier research is ready10 suppliers compared. Cheapest: GreenBox, R4.20 a box.)
- **Avoid:** "An update" could mean done, failed or waiting. She has to open the app to find out. (Assistant · nowYour task has an update)
- **Do:** A question is news too. The notification asks it, so the task waits minutes, not hours. (Assistant · 9:51Supplier research needs youCan I sign in to Boxit Trade to see their prices?)
- **Avoid:** The task stopped for 1 answer and told no one. 2 hours were lost. (Opened by chance at 11:40Waiting for you since 9:51 - 2 hours)

### Writing

- Give the time before it starts, as people would say it: "about 10 minutes".
- Say plainly that leaving is safe: "It keeps going if you close the app."
- Title the notification with the task and its state: "Supplier research is ready", "Supplier research needs you". Put the result or the question in the body.
- Send 1 notification when it ends or needs an answer - not 1 per step.

### Accessibility

- Announce the start with the time: "Research started. About 10 minutes".
- Tapping the notification opens the result or the question. Focus lands on its title, not at the top of the chat.
- Progress has a text count ("4 of 10") as well as a bar.
- Never rely on sound alone. The notification text and the chat both carry the news.

### Seen in

- **Gemini Deep Research** (Web and mobile, checked Oct 2026): Takes about 5-10 minutes and people can leave the chat. On the web the report appears next to the thread; on mobile a device notification says it is ready. [Gemini Help: Deep Research](https://support.google.com/gemini/answer/15719111)
- **Claude Dispatch** (Phone and desktop, checked Oct 2026): People assign a task from their phone and their computer does the work. A push notification comes when it is done or when it needs approval. [Claude Help: Assign tasks to Claude from anywhere in Cowork](https://support.claude.com/en/articles/13947068-assign-tasks-to-claude-from-anywhere-in-cowork)
- **ChatGPT agent** (Web and apps, checked Jul 2025): Sent a phone notification when a task was done. The agent has since been replaced by ChatGPT Work. [OpenAI: Introducing ChatGPT agent (17 Jul 2025)](https://openai.com/index/introducing-chatgpt-agent/)

### Related patterns

- Alternative to Thinking and processing steps: For work under a minute, while people watch.
- Often combined with Approval gate: When the task needs a yes, the notification brings people to the gate.
- Often combined with Agent workspace and management: Where people follow and manage running tasks.
- Often combined with Scheduled and background agents: Tasks that run again on a schedule, with the same notifications.

### Sources

- [NN/g - Response times: the 3 important limits](https://www.nngroup.com/articles/response-times-3-important-limits/)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Apple HIG - Notifications](https://developer.apple.com/design/human-interface-guidelines/notifications)
- [Apple WWDC25 - Finish tasks in the background](https://developer.apple.com/videos/play/wwdc2025/227/)
- [Apple WWDC23 - Design dynamic Live Activities](https://developer.apple.com/videos/play/wwdc2023/10194/)

## Update mid-run

Let people add to or correct the ask while the AI is still working.

- ID: AX-WAI-05
- Moment: 3 Wait - "Is it still working?"
- Maturity: emerging
- Also called: Steer mid-generation, Interject, Add instruction
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/update-mid-run
- Licence: CC BY 4.0 (text and figures)

### Story

> When I remember something important while the AI is still working, I want to add it without stopping, so the work done so far is kept and the result includes my change.

- **Setting:** Leila asks for 5 wedding venues for 60 people, under 80,000 dirhams.
- **Trigger:** While it is still checking venues, she remembers: her grandmother uses a wheelchair.
- **Without it:** She has to stop the research and start again. The 7 venues it already checked are lost.
- **With it:** She types the change and taps Update. It says "Got it" and keeps the 7 it already checked.
- **Outcome:** The answer lists 5 step-free venues and says it includes her update.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asks | Her ask in the chat. | Starts work. | 0 s | - |
| Working | "Checking venues · 3 of 12" with a bar. The composer (the box where she types) says "Add to the task", with Stop beside it. | Works. | minutes | Researching |
| Types a change | Her change in the composer. Update appears next to Stop. | Keeps working. | - | - |
| Update sent | Her message in the thread, "Added while working". In the work card: "Got it - only step-free venues. Keeping the 7 already checked." | Takes it in without stopping. | on tap | Update added to the task |
| Uses it | "Checking step-free access". The count keeps going from where it was. | Works with the change. | - | - |
| Queued | If it can't be used now: her message in a drawer (a small panel that slides open), "Queued · runs after this task", with Edit and Remove. | Finishes the run first. | on tap | Message queued |
| Starts again | The old way: "Sending stops the work". The count drops to 0 and 7 checked venues are lost. | Starts over. | on tap | Stopped. Starting again |
| Answer | 5 venues, marked "Includes your update · step-free only". | Idle. | when done | Response complete |

### On each device

- **Phone:** The composer stays open while the AI works, with Stop and Update side by side, each at least 44 px. The update shows in the thread right under the ask.
- **Tablet:** As on the phone.
- **Desktop:** As on the phone. Enter sends the update into the running work; a second shortcut can queue it instead.

### Use when

- The work runs long enough that people think of something while it runs - research, reports, tasks for an agent (an AI that can take actions for you).
- Most of the work done so far is still useful after the change.
- People often add a limit or a detail, rather than change the whole ask.

### Don't use when

- The answer takes a few seconds. Stopping and asking again costs little. Use Stop generation instead.
- The change throws out the whole ask. Start a new version instead. Use Regenerate, edit and branches instead.
- People should agree the plan before any work starts. Use Intent preview and plan instead.

### Anatomy

- **A. The update:** Her message in the thread, marked "Added while working".
- **B. Got it:** 1 line that says what was taken in and what was kept.
- **C. Progress that keeps going:** The count carries on from where it was. Nothing resets.
- **D. Stop:** Still there. Updating and stopping are 2 different buttons.
- **E. Add to the task:** The composer's placeholder (the grey hint text in the box) while it works, so people know they can add to it.

### Do and Avoid

- **Do:** The change joins the running work. What was done is kept, and it says so. (Only step-free venuesChecking venues · 8 of 12Got it. Keeping the 7 already checked.)
- **Avoid:** The only way to add a detail is to stop. Minutes of work are thrown away. (Only step-free venuesChecking venues · 0 of 12Stopped and started again. 7 venues lost.)
- **Do:** If the update can't be used now, say so and show where it waits. (Checking venues · 11 of 12Queued · runs after this task: Only step-free venues)
- **Avoid:** The message was sent mid-run and quietly ignored. The answer misses it. (Only step-free venues5 venues: Dar Amira, Riad Zitoun…2 have steps at the door. Nothing says why.)

### Writing

- Change the composer's placeholder while it works: "Add to the task".
- Name the button for what will happen: "Update" when it joins the work, "Queue" when it waits.
- Confirm in 1 line what was taken in and what was kept: "Got it - only step-free venues. Keeping the 7 already checked."
- Mark the answer: "Includes your update".

### Accessibility

- People can still move keyboard focus to the composer while the AI works. Stop and Update are separate buttons with their own names.
- Announce "Update added to the task" or "Message queued" when it is sent.
- Don't move focus to the work card when the update is taken in.
- Queued messages are a list people can reach by keyboard, with Edit and Remove on each.

### Seen in

- **ChatGPT** (Web and apps, checked Nov 2025): "Update" lets people add context while GPT-5 Pro or Deep Research is still working, without stopping and restarting. [TechRadar, Nov 2025](https://www.techradar.com/ai-platforms-assistants/chatgpt/you-can-now-interrupt-chatgpt-as-it-learns-to-take-feedback-on-the-fly)
- **ChatGPT Work** (Desktop and mobile, checked Jul 2026): While a task runs, people can follow progress, answer its questions and redirect it. [OpenAI: ChatGPT for your most ambitious work (9 Jul 2026)](https://openai.com/index/chatgpt-for-your-most-ambitious-work/)
- **Replit Agent** (Web and mobile, checked Nov 2026): "Steer" sends a follow-up into the running turn; "Queue" saves it for the next turn. Queued messages wait in a drawer above the input, where they can be edited, reordered, deleted or steered now. [Replit Docs: Steer and queue messages](https://docs.repl.it/features/agent/steer-and-queue-messages)

### Related patterns

- Alternative to Stop generation: End the run instead of changing it.
- Alternative to Regenerate, edit and branches: Start a new version when the change is big.
- Often combined with Thinking and processing steps: Where the update shows up in the work.
- Often combined with Long-running tasks and notifications: Long runs are where updates matter most.

### Sources

- [Shape of AI - Controls](https://www.shapeof.ai/patterns/controls)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Apple WWDC26 - Xcode, agents, and you](https://developer.apple.com/videos/play/wwdc2026/259/)

# Moment 4: Read - What did it make?

How an answer or an output is laid out so it can be read and used.

## Side pane and artifacts

Put long output beside the chat on desktop, and in a full sheet on a phone.

- ID: AX-REA-01
- Moment: 4 Read - "What did it make?"
- Maturity: established
- Also called: Artifacts, Canvas, Side panel, Preview pane
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/side-pane
- Licence: CC BY 4.0 (text and figures)

### Story

> When the AI makes something I will keep - a document, some code - I want it in its own space beside the chat, so I can read and change it without scrolling through the conversation.

- **Setting:** Maya asks for a short launch email.
- **Trigger:** The draft is 5 paragraphs. She will change it many times.
- **Without it:** Every change prints the whole email again in the chat. She scrolls to find the latest.
- **With it:** The email opens beside the chat. Her follow-up changes it in place, and the change is marked.
- **Outcome:** 1 email, always the latest, with version 1 still there if she wants it.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Ask | The ask, in the chat. | Starts work. | 0 s | - |
| Card in chat | A card with the title, the kind and the version stands in for the output. | Writes. | - | Generating a response |
| Tap the card | When the pane does not open by itself, the card opens it. | Writes. | on tap | - |
| Pane opens | Desktop: the pane slides in beside the chat. Phone: a full sheet, with a way back to the chat. | Fills the pane. | about 200 ms | Draft opened |
| Follow-up | The chat stays usable. The person asks for a change. | Idle. | - | - |
| Edited in place | The changed part is marked, the version goes up, and Show changes appears. | Edits the output, not the chat. | - | Version 2 saved |
| Back to chat | Closing the pane returns to the same place in the chat. The card shows version 2. | Idle. | on close | - |

### On each device

- **Phone:** A full-screen sheet. The composer (the box where you type) stays at the bottom, with a clear way back to the chat. Never a squeezed split view.
- **Tablet:** Beside the chat in landscape. In portrait, a sheet from the bottom that can be dragged to full height.
- **Desktop:** Beside the chat, about half the width or more. The chat narrows but stays readable. A close button sits in the pane header.

### Use when

- The output is something people keep and change: a document, code, a table, a design.
- The output is longer than about 10 lines, or wider than the chat column.
- People will ask for several changes to the same thing.

### Don't use when

- The answer is short and read once - keep it in the chat. Use Streaming response instead.
- The output is a small interactive card - a chart, a booking - that fits in the thread. Use Generative UI and structured output instead.
- People need to watch an agent (an AI that takes actions for you) work, not read its output. Use Agent workspace and management instead.

### Anatomy

- **A. Card in chat:** Stands in for the output in the thread - title, kind, version - and reopens it.
- **B. Pane header:** The title and version, so people know which output and which version they are in.
- **C. The output:** Edited in place. Changes are marked, not rewritten from scratch.
- **D. The composer:** Stays available, so follow-ups change the output while it is open.
- **E. Close:** Returns to the same place in the chat.

### Do and Avoid

- **Do:** On a phone the pane is a full sheet, with the chat 1 tap away and the composer still there. (‹ ChatLaunch emailToday we’re launching the new Daybook app…Ask for a change)
- **Avoid:** A desktop split squeezed onto a phone. Both halves are too narrow to read. (Chat…Today we’re lau-nching the…)
- **Do:** The change is made in place and marked, and the version goes up. (Here’s what changed since the beta.Early users get 3 months free.v2 · 1 change)
- **Avoid:** Every change prints the whole output again. People cannot tell what changed. (Here is the updated email:Subject: Our new app is here. Hi Maya…The 3rd full copy in the chat)

### Writing

- Give every output a short, real title - "Launch email", "price.ts" - not "Untitled" or "Artifact".
- Show the version as "v2" in the header, and say what changed in 1 line: "1 change · Show changes".
- In the chat, say where the output is: "It is open beside the chat."

### Accessibility

- The pane is a labelled region (a named part of the page a screen reader can jump to), with aria-labelledby pointing at its title. On a phone, the sheet is a dialog with a visible close.
- Opening the pane moves focus to its title; closing returns focus to the card that opened it.
- Announce saves once: "Version 2 saved".
- Marked changes use a background and text, not colour alone.

### Seen in

- **ChatGPT canvas** (Web, Windows and macOS, checked Oct 2026): Canvas opens as a right-side window, by itself for longer answers or when asked. The help page lists mobile as "coming soon". [OpenAI Help: Canvas](https://help-lb.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it)
- **Claude** (Web, desktop and apps, checked Oct 2026): Artifacts open in a dedicated window, and the mobile apps can create and view them. [Claude blog: Artifacts](https://claude.com/blog/artifacts)
- **Microsoft 365 Copilot apps** (Web and desktop, checked Jun 2026): Apps show inline first, with an optional side-by-side mode. When the side panel opens, the inline card collapses into a small "chiclet". [Microsoft Learn: MCP Apps UI guidelines](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/plugin-mcp-apps-ui-guidelines)
- **Gemini Canvas** (Android, checked Jul 2025): On mobile, web-code previews opened in a Chrome tab while an in-app preview was tested; the experience was described as "cramped". [Android Authority, Jul 2025](https://www.androidauthority.com/gemini-canvas-previews-3577374/)

### Related patterns

- Often combined with Version history and checkpoints: Every version of the output, with restore.
- Often combined with Edit output and revert to AI: Change the output by hand in the pane.
- Alternative to Generative UI and structured output: Small interactive results that stay in the thread.
- Often combined with Regenerate, edit and branches: Version arrows in the pane work like version arrows in the chat.

### Sources

- [Claude - MCP Apps design guidelines](https://claude.com/docs/connectors/building/mcp-apps/design-guidelines.md)
- [OpenAI - Apps SDK UI guidelines](https://developers.openai.com/apps-sdk/concepts/ui-guidelines)
- [Android Developers - Material 3 Adaptive 1.2.0](https://android-developers.googleblog.com/2025/10/material-3-adaptive-120-is-stable.html)
- [Apple WWDC26 - Xcode, agents, and you](https://developer.apple.com/videos/play/wwdc2026/259/)
- [Apple WWDC26 - Inside Apple Intelligence and Xcode: Special Presentation](https://developer.apple.com/videos/play/wwdc2026/382/)

## Generative UI and structured output

Answer with the right widget - a table, a chart, a card - not only prose.

- ID: AX-REA-02
- Moment: 4 Read - "What did it make?"
- Maturity: emerging
- Also called: Rich responses, Widgets, Structured output, Tool UI
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/generative-ui
- Licence: CC BY 4.0 (text and figures)

### Story

> When I ask the AI to compare or sort things, I want the answer laid out as a table or cards I can scan and change, so I can decide without reading a long paragraph twice.

- **Setting:** Lerato asks to compare 3 data plans. She uses about 10 GB a month.
- **Trigger:** The answer has 3 plans and 4 facts each to weigh.
- **Without it:** She gets 1 long paragraph and scrolls up and down to compare the prices.
- **With it:** The answer is 1 line plus a table: 1 plan per row, the prices in 1 column.
- **Outcome:** She switches to yearly prices with 1 tap and chooses Flex.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asked | The ask. | Starts work. | 0 s | - |
| Skeleton | A grey outline in the shape of the widget (the table or cards the AI builds), so the layout does not jump later. | Builds the data. | 0.5-2 s | Generating a response |
| Widget ready | 1 line that answers, then the table or cards, with at most 2 actions. | Idle. | when done | Response complete |
| Change it in place | A switch inside the widget (Monthly / Yearly) changes the numbers. No new message. | Idle - the widget does it. | on tap | - |
| Act | The person taps "Choose Flex". The card shows what was done. | Records the choice. | on tap | Flex chosen |

### On each device

- **Phone:** A 4-column table does not fit. Show the same data as a row of cards to swipe, with the next card peeking in. Keep actions at the bottom, by the thumb, and at least 44 px tall.
- **Tablet:** The table fits inline (inside the chat thread). Open full screen only for big tables, maps or editing.
- **Desktop:** The widget sits inline in the thread. A big or long-lived widget can open side by side. The inline card then shrinks to a small chip, so the chat keeps its place.

### Use when

- The answer compares several items on the same facts - plans, flights, products, options.
- People will act on the answer at once: choose, book, confirm, sort or filter.
- The data has a natural shape - rows and columns, a list of places, a chart over time.

### Don't use when

- The answer is 1 fact or 1 sentence. A sentence is faster to read than a card.
- The output is long writing or code that people will edit. Use Side pane and artifacts instead.
- People want to change the wording, not the data - that is a request for the chat. Use Adjust length and tone instead.

### Anatomy

- **A. Lead line:** 1 sentence that answers the question. The widget holds the detail.
- **B. The widget:** A table, cards or a chart, shaped by the content. No inner scroll.
- **C. Direct control:** A switch, sort or filter that changes what is already on screen, without a new ask.
- **D. Action:** At most 2, at the bottom. The main one names the verb and the thing.
- **E. The chat:** Stays below. Follow-ups and changes to the request still go here.

### Do and Avoid

- **Do:** 1 line answers. The table puts each fact in 1 column, so the eye compares down. (Flex covers your 10 GB for the least money.PlanDataPer monthLite5 GBR99Flex12 GBR179Max30 GBR349)
- **Avoid:** The same facts as a paragraph. People hold 9 numbers in their head, or read it twice. (Lite gives you 5 GB for R99 a month and does not roll over. Flex gives you 12 GB for R179 and rolls over for 1 month. Max gives you 30 GB for R349 and also rolls over…)
- **Do:** 4 facts and 2 actions. The main action names what happens. (Flex · 12 GB · R179Rollover: 1 monthChoose FlexFull screen)
- **Avoid:** A mini app inside the chat: 6 buttons, a menu and a retry that copies the chat's own. Menus also get clipped in the thread. (Flex · 12 GB · R179 ▾Rollover · Speed · Hotspot · Roaming · Contract…Choose · Compare · Share · Save · Retry · More ▾)

### Writing

- Start with 1 sentence that answers. Do not repeat the numbers that are in the widget.
- Label columns with what people compare: "Per month", not "Cost".
- Name the action with a verb and the thing: "Choose Flex", not "Submit".
- Keep inline cards to 4 or 5 facts. Put the rest in full screen.

### Accessibility

- Use a real table with header cells, so a screen reader reads each value with its column name.
- Hide the skeleton from screen readers. Announce "Generating a response" when it appears and "Response complete" when the widget is filled.
- Every control in the widget is a real button or switch, reachable by keyboard, at least 44 px on touch.
- In a swipeable row, give each card a name like "Flex, 2 of 3", and make the row readable in order without swiping.

### Seen in

- **Gemini app** (Web and apps, checked Nov 2025): Google is rolling out generative UI as "dynamic view": the model builds a custom interactive page for the prompt. Google says it can take a minute or more. [Google Research blog, 18 Nov 2025](https://research.google/blog/generative-ui-a-rich-custom-visual-interactive-user-experience-for-any-prompt/)
- **ChatGPT apps** (Web and apps, checked Nov 2026): Apps answer with an inline card (at most 2 actions, no inner scroll), a carousel of 3-8 items, full screen with the chat box still there, or picture-in-picture. [OpenAI Apps SDK: UI guidelines](https://developers.openai.com/apps-sdk/concepts/ui-guidelines)
- **Claude (MCP Apps)** (Web, desktop and mobile, checked Nov 2026): Inline cards have at most 2 actions and 4-5 data points. On mobile the next carousel card peeks in. Sorting and filtering stay in the app; follow-ups go through the chat. [Claude Docs: MCP Apps design guidelines](https://claude.com/docs/connectors/building/mcp-apps/design-guidelines.md)
- **Microsoft 365 Copilot** (Web and desktop, checked Jun 2026): Inline widgets are required; side-by-side is optional, and the inline widget then collapses into a small chip. Widgets must not copy Copilot's own prompt box, retry or reasoning. [Microsoft Learn: MCP Apps UI guidelines (18 Jun 2026)](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/plugin-mcp-apps-ui-guidelines)

### Related patterns

- Often combined with Side pane and artifacts: Where a big widget goes when inline is too small.
- Often combined with Specific loading messages: The skeleton and status while the widget is built.
- Often combined with Follow-up suggestions: Next asks under the widget, sent through the chat.
- Alternative to Streaming response: Plain text, word by word - right when the answer is words, not data.

### Sources

- [OpenAI Apps SDK - UI guidelines](https://developers.openai.com/apps-sdk/concepts/ui-guidelines)
- [Claude Docs - MCP Apps design guidelines](https://claude.com/docs/connectors/building/mcp-apps/design-guidelines.md)
- [Google Research - Generative UI (18 Nov 2025)](https://research.google/blog/generative-ui-a-rich-custom-visual-interactive-user-experience-for-any-prompt/)
- [Apple WWDC25 - Meet the Foundation Models framework](https://developer.apple.com/videos/play/wwdc2025/286/)
- [Apple WWDC25 - Design interactive snippets](https://developer.apple.com/videos/play/wwdc2025/281/)

## Variations

Offer 2 to 4 versions to pick from, side by side.

- ID: AX-REA-03
- Moment: 4 Read - "What did it make?"
- Maturity: established
- Also called: Options, Alternatives, Drafts
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/variations
- Licence: CC BY 4.0 (text and figures)

### Story

> When I am not sure what I want the AI to make, I want to see a few clearly different versions at once, so I can point at the one that feels right instead of describing it.

- **Setting:** Wanjiru asks for a note about Saturday's street party.
- **Trigger:** She is not sure how it should sound - short, warm, or full of details.
- **Without it:** She gets 1 note, tries again 4 times, and loses track of the one she liked.
- **With it:** 3 versions arrive together, each labelled by how it is different.
- **Outcome:** She picks Warm and posts it. The other 2 stay 1 tap away.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asked | The ask. | Starts work. | 0 s | - |
| Writing | "Writing 3 versions", with all 3 filling in at once. | Writes 3 versions. | 0.5-3 s | Generating a response |
| Pick 1 | "3 versions - pick 1 to use." Each has a label, the text and "Use this". "3 more" sits below. | Idle. | when all are done | 3 versions ready |
| Picking | The chosen version lifts. The others fade. | Idle. | on tap | - |
| Kept | The pick becomes the answer. "2 other versions" opens the rest again. | Idle. | after the tap | Version 2 chosen |

### On each device

- **Phone:** Versions stack in 1 column, 2 lines each, with the label on top. 3 fit on 1 screen. 6 do not, and people stop comparing.
- **Tablet:** 2 or 3 side by side. Images sit in a 2 x 2 grid.
- **Desktop:** 3 or 4 side by side, so the eye moves across and compares. Hover shows the full text of a long version.

### Use when

- Taste matters more than correctness - wording, names, images, layouts.
- People find it easier to point at what they like than to describe it.
- 1 version at a time would mean many retries and lost good ones.

### Don't use when

- There is 1 right answer - a fact, a sum, a date. Several versions only cause doubt.
- People want 1 more try, not a set to compare. Use Regenerate, edit and branches instead.
- People already know the change they want - shorter, more formal. Use Adjust length and tone instead.

### Anatomy

- **A. Label:** Says how this version is different: "Short", "Warm", "With details".
- **B. The set:** 2 to 4 versions, side by side or stacked, all the same size.
- **C. Use this:** Picks 1. The others fold away but are kept.
- **D. More:** A new set from the same ask, when none of these fits.

### Do and Avoid

- **Do:** Each version is clearly different, and its label says how. Choosing is quick. (ShortStreet party Sat, 2 pm. Bring a dish!WarmHello neighbours! Games, music and food…With detailsRoad closes 1 pm, please move cars…)
- **Avoid:** 3 versions that differ by 1 word. People cannot see the difference and pick at random. (Hello neighbours! Join our street party…Hi neighbours! Join our street party…Hello neighbours! Come to our street party…)
- **Do:** The pick becomes the answer. The others are folded, not gone. (Hello neighbours! Street party on Saturday…✓ Using “Warm” · › 2 other versions)
- **Avoid:** Picking deletes the rest. If the pick was wrong, people must ask again. (Hello neighbours! Street party on Saturday…The other versions were removed.)

### Writing

- Label each version by how it differs: "Short", "Warm", "With details" - not "Option 1".
- Say the count and the job at the top: "3 versions - pick 1 to use."
- Name the buttons for what they do: "Use this", "3 more".

### Accessibility

- Mark up the set as a list. Each version's name starts with its label and place: "Warm, 2 of 3".
- Announce "3 versions ready" once, when all are done - not each version as it finishes.
- "Use this" is a real button named with the label: "Use the Warm version".
- After a pick, move focus to the kept version. "2 other versions" is a button that says if it is open or closed.

### Seen in

- **Midjourney** (Image generator, checked Nov 2026): From the image grid, V1-V4 buttons make variations of 1 image. "Vary (Subtle)" makes small changes; "Vary (Strong)" changes more but keeps the main idea. [Midjourney Docs: Variations](https://docs.midjourney.com/docs/variations)
- **Adobe Firefly** (Image generator, checked Nov 2026): Firefly Image 3 and Image 4 make 4 image variations per prompt; Image 4 Ultra and Image 5 make 1. "Generate more" makes a new set from the same prompt and settings. [Adobe Help: Create images from text prompts (updated 4 Nov 2026)](https://helpx.adobe.com/firefly/generate-images-with-text-to-image/generate-images-using-text-prompts/create-images-from-text-prompts.html)
- **Image Playground** (iOS, iPadOS and macOS, checked Jun 2026): Apple's guidelines say Image Playground can make several images of a person, so someone can pick the one they prefer. [Apple HIG: Generative AI (updated 8 Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)

### Related patterns

- Alternative to Regenerate, edit and branches: 1 new answer at a time, with arrows between them.
- Alternative to Adjust length and tone: When people know the change they want, 1 control beats a set to compare.
- Often combined with Edit output and revert to AI: Pick the closest version, then fix the last words by hand.
- Often combined with Generative UI and structured output: Versions of a layout or image shown as a grid of cards.

### Sources

- [Apple HIG - Generative AI: offer alternate versions (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Shape of AI - Variations](https://www.shapeof.ai/patterns/variations)
- [AI UX Patterns - Result variations](https://www.aiuxpatterns.com/pattern-result-variations.html)
- [Apple WWDC26 - Create UI prototypes using agents in Xcode](https://developer.apple.com/videos/play/wwdc2026/227/)

## Summary

Give the short version first, with a way into the long one.

- ID: AX-REA-04
- Moment: 4 Read - "What did it make?"
- Maturity: established
- Also called: TL;DR, Key points, Overview
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/summary
- Licence: CC BY 4.0 (text and figures)

### Story

> When I come back to a long thread or document, I want the short version first, with each point linked to where it came from, so I can catch up in a minute and still check the details.

- **Setting:** Vikram opens a 40-message thread about Thursday's concrete pour.
- **Trigger:** He has 2 minutes before the site meeting.
- **Without it:** He skims the last 5 messages and misses that the pour moved to Thursday.
- **With it:** 3 points sit on top: what changed, who did what, and what is still open.
- **Outcome:** He checks 1 point at its source. Later a reply settles the open question, and the summary updates.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Summarising | The thread opens with a grey placeholder where the summary will be. | Reads the thread. | 0-2 s | Summarising 40 messages |
| Summary | An "AI" label, 3 points with a link to their message, the open question in amber, and "From 40 messages · just now". | Idle. | when ready | Summary ready |
| Check the source | Tapping a point opens its message, highlighted, with a way back. | Idle. | on tap | - |
| Back | The summary, as it was. | Idle. | on tap | - |
| Updated | A new reply arrives. The changed point is highlighted and the card says "Updated · 1 new reply". | Reads the new reply. | when a reply arrives | Summary updated |

### On each device

- **Phone:** A card at the top of the thread with 3 to 5 points. It can be collapsed, and stays collapsed for that thread.
- **Tablet:** As on the phone. In split view the card stays above the list of messages.
- **Desktop:** A Summarize button or a card above the first message. Each point can open its source without losing the summary.

### Use when

- The source is long and people need the short version before deciding to read it - threads, meetings, reports.
- People come back to something that changed while they were away.
- Several people need the same short picture - a handover, a stand-up.

### Don't use when

- The source is short. A summary of 3 lines adds reading instead of saving it.
- Every word matters - a contract, a dose, a legal notice. Show the key passages as they are written.
- People asked a question and want the answer with its sources. Use Citations and sources instead.

### Anatomy

- **A. AI label:** Says in words that the AI wrote this.
- **B. Key points:** 3 to 5 facts: what changed, who does what. The most important first.
- **C. Link to source:** Each point opens the message it came from, so people can check.
- **D. Still open:** What is not decided yet, in amber. Summaries often hide this.
- **E. Scope and time:** "From 40 messages · just now", and a way to read all of it.

### Do and Avoid

- **Do:** Each point links to its message. Checking 1 fact takes 1 tap. (Summary · AIPour moved to Thursday 7 am. › 31Anil booked the pump. › 36)
- **Avoid:** The same facts with no links. To check 1, people search all 40 messages. (Summary · AIThe pour moved to Thursday 7 am because of rain. Anil booked the pump truck…)
- **Do:** Facts, and what is not decided yet. People know what to act on. (Pour moved to Thursday 7 am.Still open: who signs off the rebar check?)
- **Avoid:** "Discussed" and "talked about" hide the result. Nobody can tell that sign-off is still open. (The team discussed the pour date.They also talked about sign-off.)

### Writing

- Put what changed or was decided first, then who does what, then what is still open.
- Write the facts, not the talk: "Pour moved to Thursday 7 am", not "The team discussed the date".
- Say what was summarised and when: "From 40 messages · just now".
- Label it in words: "Summary · AI".

### Accessibility

- Give the summary a heading ("Summary, made by AI") and put it before the thread in reading order.
- Name each source link by its target: "Message 31, from Priya".
- Announce "Summary updated" when it changes. Use the polite status region (the part of the page a screen reader reads out when it is next free). Do not move focus.
- Collapse is a real button that says if the summary is open or closed, and the choice is remembered.

### Seen in

- **Gmail** (Android and iOS, checked May 2025): On longer threads a Gemini summary card sits at the top of the email. It updates when new replies arrive, and people can collapse it. English only at launch. [Google Workspace Updates, 29 May 2025](https://workspaceupdates.googleblog.com/2025/05/gemini-summary-cards-gmail-app.html)
- **Gmail** (Web, checked Nov 2026): "Summarize this email" at the top of a thread gives the key points and replies. "Minimize" hides it. [Gmail Help: AI Overview conversation summaries](https://support.google.com/mail/answer/16561387)
- **Apple Writing Tools** (macOS, checked Nov 2026): For selected text, "Summarize" or "Key Points" gives only the most important points. [Mac User Guide: Use Writing Tools](https://support.apple.com/guide/mac-help/mchldcd6c260/mac)

### Related patterns

- Often combined with Citations and sources: Each point links back to where it came from.
- Often combined with Adjust length and tone: Shorter or more detailed, with 1 control.
- Often combined with Follow-up suggestions: Next asks after a summary: "What do I need to do?"
- Often combined with Generative UI and structured output: A summary card inline, with the full view 1 tap away.

### Sources

- [Shape of AI - Summary](https://www.shapeof.ai/patterns/summary)
- [Nielsen Norman Group - Inverted pyramid: writing for comprehension (2018)](https://www.nngroup.com/articles/inverted-pyramid/)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Apple WWDC25 - What’s new in App Store Connect](https://developer.apple.com/videos/play/wwdc2025/328/)
- [Apple WWDC24 - Get started with Writing Tools](https://developer.apple.com/videos/play/wwdc2024/10168/)

## Confidence display

Show how sure the AI is, so people know when to check.

- ID: AX-REA-05
- Moment: 4 Read - "What did it make?"
- Maturity: emerging
- Also called: Confidence score, Uncertainty, Hedging
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/confidence-display
- Licence: CC BY 4.0 (text and figures)

### Story

> When the AI reads or decides something for me, I want it to point at the parts it is not sure about, so I check those and trust the rest.

- **Setting:** Nomvula adds a scanned invoice. The AI reads 4 fields from it.
- **Trigger:** The total on the scan is blurry.
- **Without it:** All 4 fields look equally sure. She saves, and the supplier is paid R 500 short.
- **With it:** Only the total is flagged: "Check this - the scan is blurry here."
- **Outcome:** She checks 1 field on the scan, fixes 1 digit, and saves the rest without worry.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Added | The scan. | Starts. | 0 s | - |
| Reading | "Reading the scan" with moving dots. | Reads the fields. | 1-3 s | Reading the invoice |
| Read, 1 to check | "4 fields read · 1 to check". The weak field has an amber icon, a reason, and "Show on scan". The rest look plain. | Idle. | when done | 4 fields read, 1 to check |
| Check | The part of the scan beside the field, so the person compares and fixes it. | Idle. | on tap | - |
| Saved | "Saved · 1 field checked by you". Without the flag, the wrong total is saved and found days later. | Idle. | on save | Saved |

### On each device

- **Phone:** Fields stack. The flag sits on the field with its reason under it. "Show on scan" opens the crop (the cut-out part of the scan) full width above the field.
- **Tablet:** The scan sits beside the fields, as on desktop.
- **Desktop:** The scan sits beside the fields. Focus on a flagged field highlights the matching place on the scan.

### Use when

- The AI can be wrong in ways people cannot see - read text, numbers taken from documents, matches, translations.
- Checking everything is slow, so people need to know where to look.
- A wrong value costs money, health or trust once it goes through.

### Don't use when

- The display would not change what people do. If they check everything anyway, a score is noise.
- The question is where a claim came from, not how sure the AI is. Use Citations and sources instead.
- The AI cannot do the task at all. Say so plainly instead of showing a low score. Use Error, refusal and limits instead.

### Anatomy

- **A. Count:** "4 fields read · 1 to check" - how much needs a look, before any detail.
- **B. Flag:** An icon and amber text on the 1 weak field. The rest stay plain.
- **C. Reason:** Why it may be wrong, and what to do: the scan is blurry here.
- **D. Show on scan:** Opens the source next to the value, so checking takes seconds.

### Do and Avoid

- **Do:** Only the field to check stands out. The count says how much work is left. (4 fields read · 1 to checkDate · 14 Oct 2026⚠ Total · R 4,370.00)
- **Avoid:** A percent on every field. Is 81% low? People cannot tell, so most read it as fine. (Supplier · 99%Invoice no. · 97%Date · 96%Total · 81%)
- **Do:** Says why and what to do, with the source 1 tap away. (Total · R 4,370.00Check this - the scan is blurry here.Show on scan)
- **Avoid:** "Low confidence" warns but does not help. People do not know what to check. (Total · R 4,370.00Low confidence)

### Writing

- Say what to do and why: "Check this - the scan is blurry here", not "Low confidence".
- Flag only what needs a look. If everything is flagged, nothing is.
- Give the count first: "4 fields read · 1 to check".
- Avoid percents for most people. If experts need them, say what the number means.

### Accessibility

- Never use colour alone. The flag has an icon and words.
- Put the flag in the field's name: "Total, R 4,370, check this, the scan is blurry".
- Announce the count once, politely: "4 fields read, 1 to check".
- "Show on scan" is a real button, and the scan crop has a text alternative with what the AI read.

### Seen in

- **Gemini** (Chat app, checked Nov 2026): Microsoft's HAX Toolkit shows a Gemini double-check that searches Google, then marks statements green, orange or not at all. A pop-up explains the colours. Gemini's own help page on sources no longer describes it. [Microsoft HAX Toolkit: Gemini example for Guideline 2](https://www.microsoft.com/en-us/haxtoolkit/?p=11760)
- **Azure Document Intelligence** (Web studio and API, checked Apr 2026): Each value read from a document gets a confidence from 0 to 1. Microsoft suggests using it to accept a value at once or send it to a person to review. [Microsoft Learn: Accuracy and confidence scores (8 Apr 2026)](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/concept/accuracy-confidence)

### Related patterns

- Often combined with Citations and sources: Where a claim came from, next to how sure the AI is.
- Often combined with Edit output and revert to AI: Fix the flagged value in place.
- Often combined with Explanation: Why the AI is unsure, in more detail.
- Alternative to Error, refusal and limits: When the AI cannot do it at all, say so instead of showing a low score.

### Sources

- [Google PAIR - Explainability + Trust](https://pair.withgoogle.com/chapter/explainability-trust/)
- [Smashing Magazine - Designing agentic AI: practical UX patterns (Feb 2026)](https://smashingmagazine.com/2026/02/designing-agentic-ai-practical-ux-patterns/)

## Follow-up suggestions

Offer the next 2 or 3 asks, so the conversation keeps moving.

- ID: AX-REA-06
- Moment: 4 Read - "What did it make?"
- Maturity: established
- Also called: Related questions, Next steps, Suggested replies
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/follow-up-suggestions
- Licence: CC BY 4.0 (text and figures)

### Story

> When I have read an answer and am not sure what to ask next, I want 2 or 3 good next questions I can tap, so I keep learning without having to think up the words.

- **Setting:** Kwame asks how insulin works, in simple words.
- **Trigger:** He understands it, but does not know what to ask next.
- **Without it:** He types "more" and gets the same answer again, only longer.
- **With it:** 3 next asks sit under the answer: type 1 or type 2, too little insulin, and a quiz.
- **Outcome:** He taps 1, gets a clear answer, and new suggestions lead him on.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Answer | The answer streams in (arrives word by word). No suggestions yet. | Writes. | 0-2 s | Generating a response |
| Suggestions | "Ask next" and 3 short asks under the answer, about this answer. | Idle. | when the answer is done | Response complete |
| Tap | The tapped suggestion fills in. | Idle. | on tap | - |
| Add to it | If a tap fills the box, the person can add words before sending. | Idle. | optional | - |
| Next answer | The suggestion becomes the person's ask. The old suggestions are gone. | Writes. | - | Generating a response |
| New suggestions | 3 new asks under the new answer only. | Idle. | when done | Response complete |

### On each device

- **Phone:** Suggestions stack as full-width rows under the answer, each at least 44 px tall, so they are easy to tap with a thumb.
- **Tablet:** A wrapping row of pills (small rounded buttons) under the answer.
- **Desktop:** A wrapping row of pills under the latest answer. A long suggestion shows in full on hover and focus.

### Use when

- People are learning or exploring and may not know what to ask next.
- The answer has clear next steps - go deeper, compare, apply, test yourself.
- Typing is slow, as on a phone or on the move.

### Don't use when

- The person is deep in a focused task, like writing. Suggestions pull them away.
- No answer has been given yet - help people start instead. Use Suggested prompts instead.
- People want to change this answer, not ask a new question. Use Adjust length and tone instead.

### Anatomy

- **A. Label:** "Ask next" - says these are questions to send, not part of the answer.
- **B. Specific ask:** Comes from this answer, in the person's own words, ready to send.
- **C. Something to do:** Not only questions: "Quiz me on this", "Make a checklist".
- **D. The box:** Always there. Suggestions help. They never replace typing.

### Do and Avoid

- **Do:** Each suggestion comes from this answer and goes somewhere new. (Insulin lets sugar move from your blood into your cells…Ask nextHow is type 1 different from type 2?Quiz me on this)
- **Avoid:** "Tell me more" fits any answer, so it teaches nothing and gets a longer copy. (Insulin lets sugar move from your blood into your cells…Ask nextTell me moreAnything else?)
- **Do:** Only the latest answer has suggestions. Old ones go once 1 is used. (In type 1, the body makes almost no insulin…Which type is more common?)
- **Avoid:** Suggestions stay under every old answer. The thread fills with buttons that no longer fit. (Insulin lets sugar move…Tell me more · Anything else?In type 1, the body makes…Tell me more · Give an example)

### Writing

- Write each one as the person would ask it: "How is type 1 different from type 2?"
- Give 3 at most. Mix a deeper ask, a wider ask, and something to do: "Quiz me on this".
- Never "Tell me more" or "Anything else?" - they fit every answer, so they help with none.
- If a suggestion is paid for, label it "Sponsored".

### Accessibility

- Make suggestions a list of real buttons named by their text, after the answer in reading order, under the heading "Ask next".
- Do not read each suggestion aloud when it appears. "Response complete" is enough; people find them by moving on.
- When a tap fills the box, move focus to the box with the caret (the typing cursor) at the end.
- When old suggestions are removed, keep focus on the new message, not the top of the page.

### Seen in

- **Perplexity** (Answer engine, checked Nov 2024): Perplexity said its ads would appear as sponsored follow-up questions, labelled "sponsored". Answers to them are still written by Perplexity, not by the brand. [Perplexity blog, 12 Nov 2024](https://www.perplexity.ai/hub/blog/why-we-re-experimenting-with-advertising)
- **Copilot in Teams meetings** (Microsoft Teams, checked Nov 2024): When Copilot answers a prompt in a meeting, it also suggests follow-ups to keep the conversation going (roadmap item 325858, planned for January 2025). [M365 Admin: roadmap item summary, 26 Nov 2024](https://m365admin.handsontek.net/microsoft-teams-copilot-in-meetings-will-suggest-follow-up-questions-to-ask-it/)

### Related patterns

- Alternative to Suggested prompts: The same idea before the first ask, to help people start.
- Often combined with Prompt composer: Where a suggestion lands when a tap fills the box.
- Alternative to Adjust length and tone: Change this answer instead of asking a new question.
- Often combined with Summary: After a summary: "What do I need to do?"

### Sources

- [AWS Cloudscape - Support prompts](https://cloudscape.design/gen-ai/patterns/support-prompts/)
- [Shape of AI - Follow up](https://www.shapeof.ai/patterns/follow-up)

## Voice output and live transcript

Read the answer aloud and show the words as they are spoken.

- ID: AX-REA-07
- Moment: 4 Read - "What did it make?"
- Maturity: established
- Also called: Read aloud, Voice mode, Transcript
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/voice-output
- Licence: CC BY 4.0 (text and figures)

### Story

> When my hands are busy and the AI answers out loud, I want to see the words as they are spoken and cut in with my voice, so I can catch a number I missed and steer it without touching the screen.

- **Setting:** Fatima has dough on her hands. She asks out loud for the next step.
- **Trigger:** The answer has 2 times to remember: 10 minutes and 20 minutes.
- **Without it:** An orb (a glowing ball on the screen) talks. Halfway through kneading she forgets the time and asks again.
- **With it:** Each word appears in the chat as it is spoken. A glance shows "10 minutes".
- **Outcome:** She ends the voice chat with a knuckle. The steps stay in the chat for later.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Voice on | The text box becomes a voice bar: "Listening", mute and End. | Listens. | 0 s | Voice chat on. Listening |
| Person speaks | Her words appear in her bubble as she says them. | Listens. | while she talks | - |
| AI speaks | Each word appears as it is spoken. The current word is highlighted. The bar says "Speaking". | Speaks. | about 2-3 words a second | Speaking |
| Cut in | She speaks. The AI stops at once. Its line ends with "stopped, you spoke". | Stops and listens. | within a moment | Listening |
| Short answer | A short answer to the new question, shown and spoken. | Speaks. | - | Speaking |
| Done talking | The full answer as text. The bar goes back to "Listening". | Listens. | after the last word | Listening |
| Ended | "Voice chat ended". The words stay in the thread. The text box is back. | Idle. | on End | Voice chat ended |

### On each device

- **Phone:** The main place for voice. The text box becomes a voice bar with status, mute and End, near the thumb. Words appear in the thread above.
- **Tablet:** As on the phone. A tablet is often propped up, so the text must be readable at arm's length.
- **Desktop:** The same voice in the chat. End or Stop stays in 1 place and works from the keyboard too.

### Use when

- People's hands or eyes are busy - cooking, driving, fixing something.
- People find listening easier than reading - low vision, reading difficulty, tiredness.
- Answers are short and work spoken - steps, directions, quick facts.

### Don't use when

- The answer is a table, code or a long list. It does not work spoken. Use Generative UI and structured output instead.
- The place is quiet or shared - an office, a ward at night. Start in text and offer read aloud.
- People want to speak their ask but read the answer. Use Voice input instead.

### Anatomy

- **A. Her words:** What the AI heard, shown as she speaks, so a mishearing is caught early.
- **B. Live words:** The answer as text, word by word, in time with the voice. The current word is marked.
- **C. Voice bar:** Says "Listening" or "Speaking" in words, with a moving wave.
- **D. End:** Ends the voice chat. Always visible, always in the same place.

### Do and Avoid

- **Do:** The words are on screen as they are spoken. A glance gets back what was missed. (Next, knead the dough for 10 minutes.〰 Speaking · End)
- **Avoid:** An orb with no words. A number said once is gone, and people ask again. (Speaking)
- **Do:** Speaking stops it at once, and the new answer is short. (Next, knead the dough for- stopped, you spoke10 minutes, until it is smooth.)
- **Avoid:** It talks to the end of the answer while she tries to ask. She has to touch the screen. (Next, knead the dough for 10 minutes. Then cover it and let it rest for 20 minutes…(still talking over her))

### Writing

- Write for the ear: short sentences, the action first, 1 number per sentence. "Knead for 10 minutes."
- Say numbers as people say them: "10 minutes", not "10 min".
- Keep spoken answers short, then offer more: "Want the next step?"
- Show status in words - "Listening", "Speaking" - not only a moving shape.

### Accessibility

- Show every spoken word as text, in time with the voice. People who are deaf or hard of hearing need it.
- Speech starts only when the person starts it, and can be paused or stopped at once.
- Announce only state changes: "Listening", "Speaking", "Voice chat ended". Never read the transcript (the written words) out through the status region (the part of the page a screen reader announces on its own). It would talk over the voice.
- End and mute are real buttons, at least 44 px, reachable by keyboard and by switch (a 1-button control some people use instead of touch). The words stay after the voice chat ends.

### Seen in

- **ChatGPT voice** (Web and mobile, checked Nov 2025): Since 25 Nov 2025, voice runs inside the chat: a live transcript and visuals such as maps appear in the thread, and you tap "end" to stop. The old full-screen orb is still there as "Separate mode" in settings. [TechCrunch, 25 Nov 2025](https://techcrunch.com/2025/11/25/chatgpts-voice-mode-is-no-longer-a-separate-interface/)
- **Claude voice mode** (Web, desktop and mobile, checked Oct 2026): Hands-free or push-to-talk. People can speak to interrupt, transcripts are saved, and a Stop button sits at the bottom right on web and desktop. [Claude Help: Use voice mode](https://support.claude.com/en/articles/11101966-use-voice-mode.md)
- **Gemini Live** (Android (beta), checked Apr 2026): A redesign drops the full screen. A waveform bar takes the place of the text box, with a transcript button, camera and screen share, mute, and a keyboard icon to leave. [9to5Google, 19 Apr 2026](https://9to5google.com/2026/04/19/gemini-live-app-redesign/)

### Related patterns

- Often combined with Voice input: The other half of a voice chat: speaking the ask.
- Often combined with Stop generation: Speaking over the AI is a stop, by voice.
- Often combined with Streaming response: The live words fill in like streamed text (text that arrives word by word), in time with the voice.

### Sources

- [W3C WAI - Captions/Subtitles](https://www.w3.org/WAI/media/av/captions/)
- [W3C - Understanding WCAG 2.2: Audio control (1.4.2)](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html)
- [Apple WWDC20 - Evaluate and optimize voice interaction for your app](https://developer.apple.com/videos/play/wwdc2020/10071/)

# Moment 5: Refine - Can I change it?

How people stop, retry, edit and steer what the AI made.

## Stop generation

Let people stop the AI and keep what is already there.

- ID: AX-REF-01
- Moment: 5 Refine - "Can I change it?"
- Maturity: established
- Also called: Stop button, Cancel, Halt
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/stop-generation
- Licence: CC BY 4.0 (text and figures)

### Story

> When the AI is going the wrong way, or I already have what I need, I want to stop it at once and keep what it wrote, so I do not wait or lose the useful part.

- **Setting:** Sam asks for 5 names for her coffee cart.
- **Trigger:** Name 2 is the one. She does not need the rest.
- **Without it:** She waits for all 5, or leaves the page and loses the answer.
- **With it:** Stop sits where Send was. 1 tap, and the answer ends where it is - every word kept.
- **Outcome:** She copies name 2. If she changes her mind, Continue picks up from the same word.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Sent | Send turns into Stop at once - before the first word arrives. | Starts work. | 0 s | - |
| Streaming | The answer streams in (arrives word by word). Stop stays in the same place. | Writes. | - | Generating a response |
| Stop pressed | Stop shows it was pressed. | Stops writing. | under 100 ms | - |
| Stopped | Every word written so far stays, with a short note and Continue or Try again. | Idle. | at once | Response stopped |
| Continued | The answer picks up from the last word - not from the start. | Writes again. | on tap | Generating a response |
| Done | The full answer, and Send is back. | Idle. | - | Response complete |

### On each device

- **Phone:** Stop replaces Send in the same spot, at least 44 px, so the thumb is already there. Never hide it behind a menu.
- **Tablet:** As on the phone. With a keyboard, Escape stops too.
- **Desktop:** Stop replaces Send. Escape stops too. The composer (the box where you type) stays editable, so people can type the next ask while it finishes.

### Use when

- Answers take more than a couple of seconds to finish.
- People often find what they need part-way through.
- The AI can head the wrong way, and waiting for the end wastes time and money.

### Don't use when

- The AI is doing things, not only writing. Stopping must also say what it already did. Use Watch mode and takeover instead.
- People want to change the direction, not end it. Use Update mid-run instead.
- Answers are always instant - there is nothing to stop. Use Streaming response instead.

### Anatomy

- **A. Stop button:** Where Send was, with a word and a square. Works from the very first moment.
- **B. The partial answer:** Stays on screen exactly as written. Nothing is thrown away.
- **C. The caret:** The blinking mark at the end of the text. It shows the AI is still writing, and it goes the moment Stop is pressed.
- **D. The composer:** Stays usable, so people can type the next ask straight away.

### Do and Avoid

- **Do:** Stopping keeps every word, so the useful part is still there. (1. Daily Grind - simple, and easy to say. 2. Pour Decisions…You stopped this answer. What is written is kept.)
- **Avoid:** Stopping wipes the answer. People learn never to press Stop. (Response cancelled.)
- **Do:** Stop takes Send's place, so the finger is already on it. (Reply…■ Stop)
- **Avoid:** A small link at the top of the answer, far from the thumb, while a dead Send stays in the corner. (Stop generatingReply…Send)

### Writing

- Label it "Stop", with a square icon. Not "Cancel", which sounds like the answer will be thrown away.
- After stopping, say what happened in 1 line: "You stopped this answer. What is written is kept."
- Offer 2 ways on: "Continue" picks up where it ended; "Try again" starts fresh.

### Accessibility

- Stop is a real button with the name "Stop generating", and it takes the focus Send had.
- Escape stops on a keyboard, from anywhere in the conversation.
- Announce "Response stopped" once in the polite status region (the part of the page a screen reader reads out on its own). Do not read the partial text out again.
- Stop is at least 44 by 44 px on touch screens.

### Seen in

- **Gemini** (Web and apps, checked Oct 2026): For agent Tasks, "Stop" in the text box cancels the whole task. [Gemini Help: Tasks](https://support.google.com/gemini/answer/16596215)
- **ChatGPT** (Web and apps, checked Nov 2025): "Update" lets people add context while GPT-5 Pro or Deep Research is still working, without stopping and restarting. [TechRadar, Nov 2025](https://www.techradar.com/ai-platforms-assistants/chatgpt/you-can-now-interrupt-chatgpt-as-it-learns-to-take-feedback-on-the-fly)
- **Claude** (Web and desktop, checked Oct 2026): In voice mode, a "Stop" button sits bottom right, and people can also speak to interrupt. [Claude Help: Voice mode](https://support.claude.com/en/articles/11101966-use-voice-mode.md)

### Related patterns

- Part of Streaming response: Stop is the way out of a streaming answer.
- Alternative to Update mid-run: Change the direction without stopping.
- Often combined with Regenerate, edit and branches: "Try again" after a stop starts a new version.
- Often combined with Thinking and processing steps: Stop should work while the AI is still thinking, too.

### Sources

- [AWS Cloudscape - Generative AI chat](https://cloudscape.design/gen-ai/patterns/generative-ai-chat/)
- [AWS Cloudscape - Gen AI loading states](https://cloudscape.design/patterns/genai/genai-loading-states/)
- [W3C - Understanding 2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Apple WWDC26 - Build agentic app experiences with the Foundation Models framework](https://developer.apple.com/videos/play/wwdc2026/242/)

## Regenerate, edit and branches

Try again, or change the ask, without losing the last try.

- ID: AX-REF-02
- Moment: 5 Refine - "Can I change it?"
- Maturity: established
- Also called: Regenerate, Edit message, Versions 1/2, Branch
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/regenerate-and-branches
- Licence: CC BY 4.0 (text and figures)

### Story

> When an answer is close but not right, I want to try again or change my ask without losing what I had, so I can compare and keep the best one.

- **Setting:** Tom asks for a 1-line tagline for his shop.
- **Trigger:** It is fine, but he wants to see another.
- **Without it:** He taps Try again, and the first line is gone. He liked it more.
- **With it:** The new line arrives as version 2. Arrows let him go back to version 1.
- **Outcome:** He picks version 1, edits 1 word, and prints the sign.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| First answer | The answer streams in (arrives word by word). | Writes. | 0-1 s | Generating a response |
| Actions | Try again and Copy appear under the answer; a pencil sits by the ask. | Idle. | when done | Response complete |
| Try again or edit | Try again replays the same ask. Edit opens the ask in place, with Cancel and Send. | Idle. | on tap | - |
| New version | A new answer streams in the same place. | Writes again. | - | Generating a response |
| 2 of 2 | Arrows and "2 / 2" under the answer. Both versions are kept. | Idle. | when done | Version 2 of 2 |
| Back to 1 | The first answer, unchanged. Anything after it follows the version on screen. | Idle. | on tap | Version 1 of 2 |

### On each device

- **Phone:** Try again sits in a row under the answer, 44 px tall. The pencil appears under the ask on tap or long press. Version arrows sit at the end of the row.
- **Tablet:** As on the phone, with the actions always visible rather than on tap.
- **Desktop:** Actions appear on hover and stay for the latest answer. Arrows show "2 / 2". A "Branch in new chat" option suits long chats.

### Use when

- The same ask can give different good answers - names, taglines, drafts, images.
- People often want to change 1 detail of what they asked, not start again.
- Earlier versions might be the best ones, so throwing them away costs people.

### Don't use when

- People want to change a part of the answer, not all of it. Use Edit output and revert to AI instead.
- People want shorter, longer or a different tone - give them those as 1 tap. Use Adjust length and tone instead.
- People need to compare several options side by side at once. Use Variations instead.

### Anatomy

- **A. Try again:** Replays the same ask for a fresh answer. 1 tap, under every answer.
- **B. Edit the ask:** Opens the ask in place, so 1 detail can change without retyping.
- **C. Version switch:** "2 / 2" with arrows. Every try is kept and 1 tap away.
- **D. The new version:** Arrives in the same place as the old one, so comparing is easy.

### Do and Avoid

- **Do:** Every try is kept. People can go back to the one they liked. (Your bike, back on the road by Friday.↻ Try again ‹ 2 / 2 ›)
- **Avoid:** The new answer replaces the old one. People stop trying again, in case they lose a good one. (Your bike, back on the road by Friday.↻ Try againThe first tagline is gone.)
- **Do:** Editing the ask changes 1 detail and keeps the old answer as a version. (…a bike repair shop in LeedsEdit the ask in place, then send.)
- **Avoid:** There is no edit, so people retype the whole ask. The thread fills with near-copies. (Write a 1-line tagline for a bike repair shopTo change it, type the whole ask again below.)

### Writing

- Say "Try again", not "Regenerate". It says what people get.
- Show versions as "2 / 2" with arrows. No version names to learn.
- If trying again will remove later messages in a branch (a side path of the chat), say so before it happens: "Messages after this will move to version 1."

### Accessibility

- Try again is a button named "Try again"; the arrows are named "Previous version" and "Next version".
- Announce the version on change: "Version 1 of 2".
- The edit field takes focus when it opens; Escape cancels and returns focus to the pencil.
- Actions that only show on hover also show on focus, and are always visible on touch screens.

### Seen in

- **ChatGPT** (Web, checked Sep 2025): "Branch in new chat" makes a new chat with everything up to the chosen message, so a side idea does not change the main thread. [BleepingComputer, Sep 2025](https://bleepingcomputer.com/news/artificial-intelligence/chatgpt-makes-projects-feature-free-adds-a-toggle-to-split-chat)
- **ChatGPT canvas** (Web, Windows and macOS, checked Oct 2026): Canvas has version arrows, Restore, and "Show changes" to see what moved between versions. [OpenAI Help: Canvas](https://help-lb.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it)
- **Perplexity** (Web, checked Jun 2026): "Rewrite" sits in the action bar under each answer, beside share and copy. [AI UX Playground teardown, Jun 2026](https://aiuxplayground.com/teardowns/perplexity/citations)

### Related patterns

- Often combined with Stop generation: After a stop, "Try again" starts a new version.
- Alternative to Variations: Several answers at once, side by side, instead of 1 at a time.
- Alternative to Adjust length and tone: Change 1 quality of the answer without a full retry.
- Often combined with Version history and checkpoints: The same idea for long documents: every version, with restore.
- Often combined with Edit output and revert to AI: Change a part by hand instead of asking again.

### Sources

- [AWS Cloudscape - Response regeneration](https://cloudscape.design/gen-ai/patterns/response-regeneration/)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)

## Adjust length and tone

Change how long or how formal an answer is with 1 control, not a new ask.

- ID: AX-REF-03
- Moment: 5 Refine - "Can I change it?"
- Maturity: established
- Also called: Tone picker, Shorter / longer, Rewrite as
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/adjust-length-tone
- Licence: CC BY 4.0 (text and figures)

### Story

> When an answer says the right thing but is too long or sounds wrong, I want to change its length or tone with 1 tap and keep every fact, so I can send it without checking it all again.

- **Setting:** Ifeoma asks for a reply to Ada, whose bag strap broke.
- **Trigger:** The draft is right, but too long for a phone message.
- **Without it:** She types "make it shorter". A second version appears below. She re-reads it to check the refund is still there.
- **With it:** She taps Shorter. The same reply is rewritten in place.
- **Outcome:** 45 → 26 words, with the repair, the ₦18,000 and the courier marked as kept. She sends it.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Draft | The reply streams in (arrives word by word). | Writes. | 0-2 s | Generating a response |
| Controls | Shorter, Longer, More formal and More friendly sit under the reply. | Idle. | when done | Response complete |
| Press | The pressed control fills in; the others fade. | Idle. | on tap | - |
| Rewrite in place | The new version writes over the old one, in the same place. | Rewrites. | - | Rewriting |
| Changed | Facts that stayed are marked. "45 → 26 words" and Undo sit under the reply. | Idle. | when done | Shorter. 26 words |

### On each device

- **Phone:** The controls sit in 1 row under the answer and scroll sideways if needed, each 44 px tall. Undo sits next to the word count.
- **Tablet:** As on the phone, with all controls visible.
- **Desktop:** A row under the answer, or on the selection toolbar (the small bar that appears over highlighted text) to change only part of a text. A slider suits length when people want fine steps.

### Use when

- The content is right, but the size or voice is not - too long, too stiff, too casual.
- People make the same kind of change often - shorter for a phone, formal for a client.
- The facts must stay the same while the wording changes.

### Don't use when

- The content is wrong. A new tone will not fix it. Use Regenerate, edit and branches instead.
- People want to fix 1 word or 1 number. Use Edit output and revert to AI instead.
- People do not know yet how it should sound. Use Variations instead.

### Anatomy

- **A. Controls:** 1 tap each, named by the result: Shorter, Longer, More formal, More friendly.
- **B. In place:** The new version replaces the old one where it was. No second message.
- **C. Kept facts:** Amounts, names and promises that stayed are marked, so nobody has to re-check.
- **D. Change and Undo:** "45 → 26 words" shows what happened. Undo brings the old version back.

### Do and Avoid

- **Do:** 1 tap, rewritten in place, with the change in numbers and Undo. (Hello Ada, I’m sorry your strap broke…45 → 26 words · UndoShorter More formal)
- **Avoid:** Typing the change makes a second near-copy. The thread grows, and there is no Undo. (Hello Ada, I’m so sorry your strap broke after…Make it shorterHello Ada, I’m sorry your strap broke…)
- **Do:** Shorter, but every fact stays, and the kept facts are marked. (We’ll repair it for free or refund the full ₦18,000.)
- **Avoid:** Shorter by dropping the offer. The refund is gone, and nothing says so. (Sorry about the strap. We’ll sort it out.)

### Writing

- Name controls by the result: "Shorter", "Longer", "More formal", "More friendly", so people know what they get before they tap.
- Show the change in numbers: "45 → 26 words".
- Keep names, amounts, dates and promises the same in every version, and mark them.
- Offer "Undo" right after a change, in the same place.

### Accessibility

- Controls are real buttons with clear names. The one just used says it is pressed.
- Announce the result once, politely: "Shorter. 26 words." Do not read the new text out.
- Keep focus on the control after a change, so people can press it again or press Undo.
- Mark kept facts with more than colour: a background, and the word "kept" for screen readers.

### Seen in

- **ChatGPT canvas** (Web, Windows and macOS, checked Nov 2026): Shortcuts include "Adjust the length", a slider from shortest to longest, and "Change reading level", from Kindergarten to Graduate School. [OpenAI Help: Canvas](https://help-lb.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it)
- **Apple Writing Tools** (macOS, checked Nov 2026): Rewrite, then Friendly, Professional or Concise, changes the tone of selected text. [Mac User Guide: Use Writing Tools](https://support.apple.com/guide/mac-help/mchldcd6c260/mac)
- **Gemini** (Computer, Android and iPhone, checked Nov 2026): Gemini Help says you can modify a response: adjust the length, simplify the language or change the tone. [Gemini Apps Help: Regenerate or modify responses](https://support.google.com/gemini/answer/14262426)

### Related patterns

- Alternative to Regenerate, edit and branches: A whole new try, when the content itself is wrong.
- Alternative to Variations: Several tones at once, side by side, when people are not sure.
- Often combined with Edit output and revert to AI: Fix 1 word by hand after changing the tone.
- Often combined with Version history and checkpoints: Every change kept, for long documents.

### Sources

- [Apple HIG - Generative AI: refine or revert results (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Shape of AI - Voice and tone](https://www.shapeof.ai/patterns/voice-and-tone)
- [Apple WWDC25 - Dive deeper into Writing Tools](https://developer.apple.com/videos/play/wwdc2025/265/)
- [Apple WWDC24 - Get started with Writing Tools](https://developer.apple.com/videos/play/wwdc2024/10168/)

## Edit output and revert to AI

Let people edit what the AI made directly, and get the AI's version back.

- ID: AX-REF-04
- Moment: 5 Refine - "Can I change it?"
- Maturity: emerging
- Also called: Inline edit, Revert, Accept and edit
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/edit-output
- Licence: CC BY 4.0 (text and figures)

### Story

> When the AI's text is nearly right, I want to fix it by hand and have the AI respect my fix, with its own version 1 tap away, so I stay the author without losing the AI's help.

- **Setting:** Marta asks for a note about sports day.
- **Trigger:** The date is wrong - it moved to Thursday. She clicks it and types the right one.
- **Without it:** She asks the AI to add a line about lunch. The date quietly goes back to Friday. 200 parents get the wrong day.
- **With it:** Her change is marked as hers. The AI adds lunch and says it kept her date.
- **Outcome:** The note goes out with the right date. The AI version is still 1 tap away.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Draft | The AI's note streams in (arrives word by word), with "Click to edit". | Writes. | 0-2 s | Generating a response |
| Editing | She types over the date, in place, with a caret (the blinking text cursor). | Idle. | on click | - |
| Marked as hers | Her change is underlined. "1 edit by you" and "Revert to AI version" sit under the text. | Idle. | when she stops typing | 1 edit saved |
| Ask for more | "Add a line about lunch". | Starts. | - | - |
| AI changes the text | The new line writes in. Her date stays as she wrote it. | Writes around her edit. | - | Generating a response |
| Revert | If she changes her mind, "Revert to AI version" brings the AI's words back. | Idle. | on tap | - |
| Done | "Your edit is kept" and "I kept your date change" - or "AI version restored · Undo". | Idle. | when done | Response complete, or AI version restored |

### On each device

- **Phone:** Tap a sentence to edit it in place, with the keyboard up. "Revert to AI version" sits under the text, not in a menu.
- **Tablet:** As on the phone. With a keyboard attached, undo works from the keyboard too.
- **Desktop:** Click anywhere to type. Edited parts are marked; hover or focus on 1 shows "Edited by you" and Revert for that part.

### Use when

- The AI's text is nearly right, and a small fix is faster by hand.
- The text belongs to the person - it goes out in their name.
- The AI will keep working on the same text after the person edits it.

### Don't use when

- The whole answer is wrong. Ask again. Use Regenerate, edit and branches instead.
- The change is about the whole text - shorter, more formal. Use Adjust length and tone instead.
- People need every version of a long document, not only the AI's and theirs. Use Version history and checkpoints instead.

### Anatomy

- **A. Her edit:** Marked with an underline, so she and the AI both know it is hers.
- **B. Edit count:** "1 edit by you" - and later, "Your edit is kept".
- **C. Revert to AI version:** Brings back the AI's words for that part. 1 tap, with Undo after it.
- **D. Click to edit:** Says the text is editable in place. No copy and paste to another app.

### Do and Avoid

- **Do:** The AI works around her edit and says so. (Sports day is on Thursday 11 June… Lunch is a picnic…I kept your date change.)
- **Avoid:** The AI rewrote from its own version. Her fix is gone, and nothing said so. (Sports day is on Friday 12 June… Lunch is a picnic…Added a line about lunch.)
- **Do:** The way back is next to the edit and brings back exactly what the AI wrote. (Sports day is on Thursday 11 June…1 edit by you · ↺ Revert to AI version)
- **Avoid:** Asking again writes a new text, not the old one. The AI's version is lost. (Sports day is on Thursday 11 June…To get the AI’s text back, ask again.)

### Writing

- Mark the person's edits in words: "1 edit by you".
- When the AI changes edited text, say what it kept: "I kept your date change."
- Name the way back exactly: "Revert to AI version", then offer "Undo".

### Accessibility

- The editable text is a real text field with a name, so screen readers say it can be edited.
- Mark edited parts with more than colour: an underline, and "edited by you" for screen readers.
- "Revert to AI version" is a real button. After it, announce "AI version restored" and keep focus on the text.
- Undo works from the keyboard, as in any text field.

### Seen in

- **ChatGPT canvas** (Web, Windows and macOS, checked Nov 2026): People click into the canvas and type to edit. Arrows in the top toolbar move between versions, an older one can be restored, and "Show changes" shows what was added and removed. [OpenAI Help: Canvas](https://help-lb.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it)
- **Cursor** (Desktop code editor, checked Oct 2026): The agent's edits make checkpoints automatically. "Restore Checkpoint" on an earlier request takes the code back. Checkpoints are kept apart from Git. [Cursor Docs: Checkpoints](https://docs.cursor.com/agent/chat/checkpoints)

### Related patterns

- Alternative to Regenerate, edit and branches: A whole new answer, when a hand fix is not enough.
- Often combined with Adjust length and tone: Change the whole text's length or tone, then fix 1 word by hand.
- Often combined with Version history and checkpoints: Every version of a long document, with restore.
- Often combined with Side pane and artifacts: Long text is edited in a pane beside the chat.

### Sources

- [Apple HIG - Generative AI: refine or revert results (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Microsoft HAX Toolkit - Guideline 9: Support efficient correction](https://www.microsoft.com/en-us/haxtoolkit/guideline/support-efficient-correction/)

## Draft mode and review

Hold AI changes as a draft until a person reviews and accepts them.

- ID: AX-REF-05
- Moment: 5 Refine - "Can I change it?"
- Maturity: emerging
- Also called: Review changes, Suggested edits, Accept all
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/draft-mode
- Licence: CC BY 4.0 (text and figures)

### Story

> When the AI changes something I wrote, I want each change held as a draft that I can accept or reject, so nothing goes out that I did not see.

- **Setting:** Priya asks the AI to fix the grammar in her newsletter.
- **Trigger:** The AI finds 3 things to change. 1 of them changes the date by mistake.
- **Without it:** The 3 changes go straight into the text. The wrong date goes out to 28 parents.
- **With it:** Each change is marked and waits. She rejects the date change.
- **Outcome:** 2 changes accepted, 1 rejected. The newsletter has the right day.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asked | The ask, and the text as it is. | Starts. | 0 s | - |
| Suggesting | "Suggesting changes" with dots. The text does not move. | Works. | - | Suggesting changes |
| Draft | Each change marked in place - old text crossed out, new text underlined - and "3 to review · nothing is changed yet". | Waits. | when ready | Draft ready. 3 changes to review |
| Accept | The change becomes plain text. The review moves to the next change. | Idle. | on tap | - |
| Reject | The old text comes back. A line records what was rejected. | Idle. | on tap | - |
| Reviewed | The draft is gone. A past-tense line: "2 accepted · 1 rejected". | Idle. | after the last change | Changes applied |

### On each device

- **Phone:** Changes are marked in the text. A review card at the bottom shows 1 change at a time, with Reject and Accept by the thumb.
- **Tablet:** As on the phone, or as on desktop when the keyboard is attached.
- **Desktop:** Changes are marked in the text, and each has its own Accept and Reject on hover and focus. Accept all and Reject all sit at the top of the draft.

### Use when

- The AI edits something a person wrote, and the person is responsible for it.
- 1 wrong change can do harm - a date, a number, a name, a line of code.
- The AI makes several changes at once, and people need to keep some and drop others.

### Don't use when

- The AI writes something new from nothing - there is nothing to compare with. Use Side pane and artifacts instead.
- The change is small, safe and easy to undo, like a tone tweak on a chat answer. Use Adjust length and tone instead.
- People need to go back to an older whole version, not judge single changes. Use Version history and checkpoints instead.

### Anatomy

- **A. Draft status:** Says it is a draft, how many changes are left, and that "nothing is changed yet".
- **B. Marked change:** Old text crossed out, new text underlined, in place. The change under review has a ring.
- **C. Reject and Accept:** 1 decision per change. Reject is as easy to reach as Accept.
- **D. Accept all:** A quiet shortcut for when every change is fine. Not the main button.

### Do and Avoid

- **Do:** Each change is marked where it happens, so a wrong date stands out. (Sports day is on Friday 14 15 March.Change 2 of 3 · Reject · Accept)
- **Avoid:** It is a draft, but the changes are not marked. People cannot see the date moved, so they accept all. (Sports day is on Friday 15 March.Draft ready · Discard · Accept all)
- **Do:** Each change can be kept or dropped on its own. (“14 March” to “15 March”RejectAccept)
- **Avoid:** Only all or nothing. To drop 1 bad change, people lose the 2 good ones, or keep the bad one. (“14 March” to “15 March”Accept all 3or undo everything)

### Writing

- Say it is a draft and that nothing has changed yet: "Draft · 3 to review · nothing is changed yet".
- Name each change in a few words: "14 March to 15 March", not "Edit 2".
- Use the plain verbs Accept and Reject. Keep "Accept all" smaller than the per-change buttons.
- Record the result in the past tense: "2 accepted · 1 rejected".

### Accessibility

- Do not rely on colour or strike-through alone. Give each change a text name, like "Suggested: 15, was 14".
- Accept and Reject are real buttons, at least 44 px, named with the change they act on.
- Announce "Draft ready. 3 changes to review" when the draft appears, and the count as it goes down.
- After a decision, move focus to the next change, not back to the top of the page.

### Seen in

- **GitHub Copilot in VS Code** (Desktop editor, checked Nov 2026): Agent edits wait as pending changes. People choose Keep or Undo for each change, each file, or all at once. The docs say pending edits are already saved to disk, so tests run on them. [VS Code docs: Review AI-generated code edits](https://code.visualstudio.com/docs/copilot/chat/review-code-edits)
- **ChatGPT canvas** (Web, Windows and macOS, checked Nov 2026): Suggest edits adds comment bubbles to the text. People can make the change themselves, or select Apply to have ChatGPT do it. [OpenAI Help: Canvas](https://help-lb.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it)

### Related patterns

- Often combined with Version history and checkpoints: Every accepted draft becomes a version people can go back to.
- Alternative to Edit output and revert to AI: People change the text by hand instead of judging AI changes.
- Often combined with Side pane and artifacts: Long drafts are reviewed in a pane beside the chat.
- Often combined with Approval gate: The same idea for actions: nothing happens until a person says yes.

### Sources

- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Microsoft HAX Toolkit - G9 Support efficient correction](https://www.microsoft.com/en-us/haxtoolkit/guideline/support-efficient-correction/)
- [Carbon for AI - AI and default variants, revert to AI](https://carbondesignsystem.com/guidelines/carbon-for-ai/)
- [Apple WWDC24 - Get started with Writing Tools](https://developer.apple.com/videos/play/wwdc2024/10168/)
- [Apple WWDC25 - What’s new in Xcode 26](https://developer.apple.com/videos/play/wwdc2025/247/)

## Granular feedback

Let people say what was wrong, not only thumbs up or down.

- ID: AX-REF-06
- Moment: 5 Refine - "Can I change it?"
- Maturity: established
- Also called: Thumbs up / down, Rate response, Report
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/granular-feedback
- Licence: CC BY 4.0 (text and figures)

### Story

> When an AI answer is wrong, I want to say what was wrong in 1 or 2 taps, so the people who build it can fix that kind of mistake.

- **Setting:** Sipho asks how much VAT to add to a R2,000 invoice.
- **Trigger:** The answer uses 14%. The rate has been 15% since 2018.
- **Without it:** He taps thumbs down. The team sees 1 unhappy person, but not why.
- **With it:** The thumb opens a few reasons. He picks "Out of date" and adds 1 line.
- **Outcome:** The feedback names the problem. He is back to his invoice in 10 seconds.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Answer | The answer, with copy and 2 thumbs under it. | Idle. | when done | Response complete |
| Rated | The thumb fills. A small form opens below the answer, not over it. | Idle. | on tap | Feedback form opened |
| Reason | 4 or 5 reasons as chips (small pill-shaped buttons). 1 tap picks 1. | Idle. | on tap | - |
| Note | An optional note, and "Send this chat with my feedback", off until ticked. | Idle. | optional | - |
| Sent | The form closes. 1 line says what was sent. | Idle. | on Send | Feedback sent |

### On each device

- **Phone:** The form opens in place under the answer, or as a short bottom sheet (a panel that slides up from the bottom). Chips wrap to 2 rows. The keyboard opens only if people tap the note.
- **Tablet:** As on the phone.
- **Desktop:** The thumbs show on hover and focus, and always on the latest answer. The form opens under the answer, never as a full-page modal (a box that blocks the rest of the page).

### Use when

- People can tell when an answer is wrong, and the team can act on what they say.
- Answers fail in a few common ways - wrong, out of date, off the ask, too long.
- A thumb alone is not enough to tell 1 kind of failure from another.

### Don't use when

- People want to fix this answer now, not report it. Use Regenerate, edit and branches instead.
- The answer was blocked or failed - say why and offer a way on first. Use Error, refusal and limits instead.
- People judge many small items in a row, like 20 suggestions. A form on each one slows them down. A thumb is enough there.

### Anatomy

- **A. Thumbs:** 1 tap for good or bad. Always there, never in the way.
- **B. Reasons:** A short list of the common failures, in plain words. 1 tap.
- **C. Note:** Optional. For the detail no chip can hold.
- **D. Share this chat:** Off until people tick it. Says what else goes with the feedback.
- **E. Send:** Works with a reason alone. The note is never required.

### Do and Avoid

- **Do:** 1 tap names the problem. The note is there for those who want it. (What was wrong?Wrong factOut of dateToo longAdd a note (optional))
- **Avoid:** An empty, required text box. Most people close it, so the team learns nothing. (Tell us moreDescribe the problem (required)Submit)
- **Do:** Sharing the chat is a separate choice, off until people tick it. (Out of date · VAT is 15% since 2018☐ Send this chat with my feedback)
- **Avoid:** Pre-ticked. People send private chats and files without meaning to, and stop giving feedback once they notice. (Out of date · VAT is 15% since 2018☑ Include chat history and files)

### Writing

- Ask a short question that matches the thumb: "What was wrong?" or "What was good?".
- Name reasons by what people saw: "Out of date", "Not what I asked". Not "Hallucination" or "Low quality".
- Say what else is sent, in 1 line, next to the choice: "Send this chat with my feedback".
- Thank people in 1 line and say what was sent. Do not promise a fix you cannot make.

### Accessibility

- Name the buttons "Good answer" and "Bad answer", and show their pressed state with aria-pressed (the code that tells a screen reader a button is on).
- Move focus into the form when it opens, and back to the thumb when it closes. Escape closes it.
- Reason chips are a group of toggle buttons with a visible label, not colour alone.
- Announce "Feedback sent" in the polite status region (the part of the page a screen reader reads out on its own). Do not use a toast (a small message that pops up and fades) that disappears before people read it.

### Seen in

- **Microsoft 365 Copilot** (Microsoft 365 apps, checked Nov 2026): Feedback starts with thumbs up or down. People can then say more. The pane asks permission before it adds the prompt, the response or files, and people can preview them first. [Microsoft Support: Providing feedback about Microsoft Copilot](https://support.microsoft.com/privacy/providing-feedback-about-microsoft-copilot-with-microsoft-365-apps)
- **AWS Cloudscape** (Design system, checked Nov 2026): Thumbs down can open a dialog: "What did you dislike about the response?" with Harmful, Incomplete, Inaccurate and Other, plus notes. The dialog can be dismissed. [Cloudscape: Generative AI chat](https://cloudscape.design/patterns/genai/generative-AI-chat/)

### Related patterns

- Often combined with Regenerate, edit and branches: After a thumbs down, Try again gets a better answer now.
- Often combined with Consent and data controls: Sending the chat with feedback is a data choice. Ask first.
- Often combined with Error, refusal and limits: A wrong refusal is a common reason to report.
- Often combined with Explanation: Knowing why the AI answered helps people say what was wrong.

### Sources

- [Apple HIG - Generative AI, Let people share feedback (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Microsoft HAX Toolkit - G15 Encourage granular feedback](https://www.microsoft.com/en-us/haxtoolkit/guideline/encourage-granular-feedback/)
- [Google PAIR Guidebook - Feedback + Control](https://pair.withgoogle.com/chapter/feedback-controls/)
- [Apple WWDC21 - Discoverable design](https://developer.apple.com/videos/play/wwdc2021/10126/)
- [Apple WWDC25 - Explore prompt design & safety for on-device foundation models](https://developer.apple.com/videos/play/wwdc2025/248/)

## Version history and checkpoints

Keep every version the AI made, and let people go back to any of them.

- ID: AX-REF-07
- Moment: 5 Refine - "Can I change it?"
- Maturity: emerging
- Also called: Checkpoints, Restore, History
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/version-history
- Licence: CC BY 4.0 (text and figures)

### Story

> When I ask the AI to change something many times, I want every version kept with what I asked for, so I can go back to the one that worked.

- **Setting:** Hannah asks for a short lunch menu, then asks to make it warmer.
- **Trigger:** She asks to make it shorter. The AI drops the allergy line.
- **Without it:** Only the latest version exists. The warm wording and the allergy line are gone.
- **With it:** History lists every version with the ask that made it. She previews version 2.
- **Outcome:** She restores it. It comes back as version 4, and version 3 is still there.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Version 1 | The first draft, labelled v1. | Writes. | 0-1 s | Version 1 saved |
| New version | Each change the AI makes is a new version number. The old one is kept. | Writes. | each ask | Version 3 saved |
| History | A list, newest first: version number, the ask that made it, and "Now" on the current one. | Idle. | on tap | Version history, 3 versions |
| Preview | The old version shows in place, with "Previewing version 2" and Restore. Nothing has changed yet. | Idle. | on tap | - |
| Restored | The old version comes back as a new version. Every version stays in the list. | Idle. | on Restore | Version 2 restored as version 4 |
| No history | Only the latest version. Anything the AI removed has to be written again. | Idle. | - | - |

### On each device

- **Phone:** History opens as a full sheet over the document. Tapping a version opens a full-width preview with Restore at the top.
- **Tablet:** As on desktop: the list sits beside the document.
- **Desktop:** History sits beside the document, so people can click through versions and see each one in place. Show changes can mark what moved between 2 versions.

### Use when

- People ask the AI to change the same thing many times - a document, code, a design.
- A later change can remove something good from an earlier one.
- An AI agent (an AI that takes actions for you) changes many files. People need a safe point to go back to.

### Don't use when

- The output is a short chat answer - versions under the answer are enough. Use Regenerate, edit and branches instead.
- People need to judge each small change before it lands. Use Draft mode and review instead.
- People need a record of what an agent did in the world, like emails sent. Those cannot be restored. Use Activity log and undo instead.

### Anatomy

- **A. Version list:** Every version, newest first. A restore never removes anything from it.
- **B. What made it:** The ask behind each version, so people find the one they want by what they asked.
- **C. Now:** Marks the version people are looking at in the document.
- **D. Preview:** "Previewing version 2" - the old version shows in place before anything changes.
- **E. Restore:** Brings the old version back as a new version. Safe to try.

### Do and Avoid

- **Do:** Each version names the ask that made it. People find the right one at a glance. (v3 Make it shorterv2 Make it warmerv1 Write a short lunch menu)
- **Avoid:** Only times. People open every version to find the one they want. (v3 14:32v2 14:31v1 14:30)
- **Do:** Restore adds a new version. People can go back to version 3 if they change their mind. (v4 Restored from version 2v3 Make it shorterVersion 3 is still here.)
- **Avoid:** Restore throws away later versions. People stop restoring, in case they lose work. (v2 Make it warmerVersions after this were deleted.)

### Writing

- Label each version with the ask that made it: "Make it shorter". Add the time in smaller text.
- Say "Restore", not "Revert" or "Roll back".
- Say what restore does before and after: "Restores as a new version", "Version 3 is still in History".
- If checkpoints (saved copies you can go back to) keep only the AI's changes, say so: "Checkpoints save the AI's changes, not yours."

### Accessibility

- The list is a list of buttons, each named with its number and ask: "Version 2, Make it warmer".
- Announce "Previewing version 2" when a preview opens, and "Version 2 restored as version 4" after Restore.
- Restore is a real button, reachable by keyboard, at least 44 px.
- Mark the current version with text ("Now"), not only colour.

### Seen in

- **Cursor** (Desktop editor, checked Nov 2026): The agent makes checkpoints of its changes by itself. People go back with "Restore Checkpoint" on an earlier request. The docs say checkpoints track only agent changes and are not version control. [Cursor docs: Checkpoints](https://docs.cursor.com/agent/chat/checkpoints)
- **ChatGPT canvas** (Web, Windows and macOS, checked Nov 2026): Arrows in the toolbar move between versions, people can restore an earlier one, and "Show changes" marks additions and deletions. [OpenAI Help: Canvas](https://help-lb.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it)

### Related patterns

- Often combined with Regenerate, edit and branches: The same idea for chat answers: every try is kept as a version.
- Often combined with Draft mode and review: Review each change first; every accepted draft becomes a version.
- Often combined with Side pane and artifacts: Documents and code with versions usually live in a side pane.
- Alternative to Activity log and undo: For actions that cannot be restored, a record of what was done.

### Sources

- [Apple HIG - Generative AI, refine or revert results (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Microsoft HAX Toolkit - G9 Support efficient correction](https://www.microsoft.com/en-us/haxtoolkit/guideline/support-efficient-correction/)
- [Shape of AI - Footprints](https://www.shapeof.ai/patterns/footprints)
- [Apple WWDC25 - What’s new in Xcode 26](https://developer.apple.com/videos/play/wwdc2025/247/)
- [Apple WWDC25 - Platforms State of the Union](https://developer.apple.com/videos/play/wwdc2025/102/)

# Moment 6: Trust - Can I rely on it?

How the AI shows its sources, its limits, its mistakes and what it remembers.

## Citations and sources

Link every claim in an AI answer to the source it came from.

- ID: AX-TRU-01
- Moment: 6 Trust - "Can I rely on it?"
- Maturity: established
- Also called: Sources, References, Footnotes, Grounding
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/citations
- Licence: CC BY 4.0 (text and figures)

### Story

> When I ask the AI a factual question, I want to see where each part of the answer comes from, so I can decide in seconds whether to trust it.

- **Setting:** Priya needs 1 number for a slide: how much of a web page people read.
- **Trigger:** She asks the assistant. It answers in 3 confident sentences.
- **Without it:** Nothing says where the number came from. She cannot put it on a slide, so she searches again herself.
- **With it:** Each sentence ends in a small number. She taps 1 and the source opens in a sheet, with the line it came from.
- **Outcome:** She copies the number and the source together. 20 seconds, and she can defend it.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Question sent | Her question, and the composer (the box she typed in) clears. | Reads the question and decides it needs sources. | 0 s | - |
| Searching | "Searching 6 sources" with the site icons appearing 1 by 1. | Finds and reads pages. | 0 to 1.5 s | Searching |
| Answering | The answer streams in (it arrives word by word). A number appears at the end of each sentence as it lands. | Writes the answer and links each claim to the passage behind it. | 1.5 to 4.5 s | Generating a response |
| Sources shown | On a phone, a "3 sources" row under the answer. On desktop, the list beside it. | Done writing; the full list is now fixed. | 4.5 s | - |
| Previewing a source | The title, the site, the date, and the exact passage, highlighted. | Nothing - this is the person checking. | on tap | Source 1 of 3, Nielsen Norman Group |
| Done | The answer with its markers, and the sources 1 tap away. | Waits for the next question. | 7 s | Response complete, 3 sources |

### On each device

- **Phone:** Markers are tap targets of at least 24 px. The source opens in a bottom sheet, not a hover card, and the answer stays where it was.
- **Tablet:** In landscape there is room for a narrow source column. In portrait, use the phone's sheet. Perplexity's Apr 2026 iPad redesign added richer citation displays.
- **Desktop:** Sources sit in a column beside the answer, open by default. Hovering a marker highlights its source. Clicking keeps it open.

### Use when

- The answer states facts someone may repeat, decide on or put in front of others.
- The AI read pages, files or records the person could open themselves.
- Being wrong costs something: health, money, law, a client deliverable.
- People need to compare what different sources say.

### Don't use when

- The output is creative or personal, like a poem or a birthday message - there is nothing to cite.
- The AI did not use any source. Do not invent links to look grounded - say so plainly. Use Error, refusal and limits instead.
- The person wants to know why the AI decided something, not where a fact came from. Use Explanation instead.

### Anatomy

- **A. Inline marker:** Ties 1 claim to 1 source, at the end of the sentence it supports.
- **B. The claim:** The sentence the marker belongs to - highlighted when its source is open.
- **C. Source list:** Every source in 1 place, numbered the same as the markers.
- **D. Source preview:** Title, site and date, so the person can judge the source before opening it.
- **E. Quoted passage:** The exact lines the claim came from - the fastest way to check.
- **F. No-source flag:** Marks a sentence the AI could not ground, instead of hiding the gap.

### Do and Avoid

- **Do:** 1 marker per claim, right where the claim is. (Do people read every word of a page?No - about 20 to 28% of the words. They scan for what they came for.)
- **Avoid:** A single list at the end. Nobody can tell which of the 5 sources backs which sentence. (Do people read every word of a page?No - about 20 to 28% of the words. They scan for what they came for.Sources (5))
- **Do:** Flag the sentence the AI could not ground. (People scan web pages. Older readers scan lessno source found)
- **Avoid:** A marker on every sentence, even when the source does not support it. (People scan web pages. Older readers scan less[2] links to a page that does not say this.)

### Writing

- Number markers 1, 2, 3 in reading order. Never "[source]" or a bare link icon.
- Label the list "Sources", not "References" or "Citations" - it is the word people search for.
- Show the site name and the date next to every title. An undated source is half a source.
- When nothing was found, say "No sources found - check this before you use it", not nothing.

### Accessibility

- Each marker is a real button with a name like "Source 1: Nielsen Norman Group", not just "1".
- Markers are at least 24 by 24 px, so they pass the WCAG 2.2 target-size rule on a phone.
- Opening a source moves focus into the sheet; closing it returns focus to the marker.
- The answer is not a live region (the part of the page a screen reader announces on its own). Announce only that the answer is complete and how many sources it has.
- Do not show the source only on hover - keyboard and touch users never see a hover.

### Seen in

- **Perplexity** (Web, checked Jun 2026): Inline site chips with "+N". A popover pages through sources with "1/N". A stack of site icons labelled "N sources" opens a sidebar, and "Check sources" appears when you select text. The sidebar narrows the answer column. [AI UX Playground teardown, updated 15 Jun 2026](https://aiuxplayground.com/teardowns/perplexity/citations)
- **Perplexity** (iPad, checked Apr 2026): The iPad redesign replaced a scaled-up phone layout with a persistent sidebar, Split View and richer citations - the only tablet-specific citation work found for a major AI product. [Business Today, 29 Apr 2026](https://www.businesstoday.in/technology/story/perplexitys-new-ipad-app-528049-2026-04-29)
- **ChatGPT** (Web, checked Jun 2026): A book icon under a reply shows which saved memories informed it - sources for what the AI remembers about you, not only for the web. Mobile was marked as coming soon. [OpenAI Help: Memory FAQ (screenshots dated 4 Jun 2026)](https://help-lb.openai.com/en/articles/8590148)

### Related patterns

- Often combined with Streaming response: Markers appear as each sentence streams in.
- Often combined with Confidence display: Say how sure the AI is when sources disagree.
- Alternative to Explanation: For why the AI decided, not where a fact came from.
- Part of Side pane and artifacts: Long research reports keep their sources in the side pane.
- Conflicts with Summary: A summary that drops the markers loses the grounding.

### Sources

- [Nielsen Norman Group - How little do users read?](https://www.nngroup.com/articles/how-little-do-users-read/)
- [Google PAIR Guidebook - Explainability and trust](https://pair.withgoogle.com/guidebook/)
- [Microsoft HAX Toolkit - Guidelines for human-AI interaction](https://www.microsoft.com/en-us/haxtoolkit/)
- [W3C - WCAG 2.2, 2.5.8 Target size (minimum)](https://www.w3.org/TR/WCAG22/#target-size-minimum)

## AI label and disclosure

Mark what the AI made, so people always know what they are reading.

- ID: AX-TRU-02
- Moment: 6 Trust - "Can I rely on it?"
- Maturity: established
- Also called: AI badge, Generated by AI, Disclosure
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/ai-label
- Licence: CC BY 4.0 (text and figures)

### Story

> When I read something that mixes people's work with AI work, I want the AI parts marked and explained, so I know what to trust and what to check.

- **Setting:** Ines opens the notes from a meeting she missed. Tom wrote some, an AI wrote the rest.
- **Trigger:** The summary says she must send the budget "by Friday".
- **Without it:** Nothing marks the summary as AI. She thinks Tom set the deadline and plans her week around it.
- **With it:** A label says "Summarised with AI". She taps it. It says what the AI did and that dates can be wrong.
- **Outcome:** She checks the recording before she plans her week. If she fixes the date, the label says she edited it.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Mixed page | A colleague's notes with his name, then the AI summary with its label and a line in the margin. | Done earlier. | on open | - |
| Reading | The label sits at the top of the AI part, before the first line: "Summarised with AI". | - | - | - |
| Explained | Tapping the label opens a small popover (a card that floats over the page): what the AI did, what was not checked, and a link to the source. | - | on tap | About this summary |
| Edited | After a person edits the text, the label changes to "Edited by you · from AI", with Revert to AI. | - | on edit | - |
| Knows | The reader knows who wrote what and what to check. | - | - | - |

### On each device

- **Phone:** The label sits on its own line above the AI text, so it does not crowd the words. The popover opens as a small card under it, or as a bottom sheet.
- **Tablet:** As on desktop.
- **Desktop:** The label sits at the top right of the AI area. The popover opens next to it and stays open until people click or tab away.

### Use when

- AI content sits next to content people wrote - notes, documents, tickets, reviews.
- People act on the content, so they need to know what to check.
- The content is shared, so other people read it without knowing how it was made.

### Don't use when

- Everything on the screen is AI, like a chat answer - 1 label on the area is enough, not 1 per line.
- People need to know what the AI may get wrong in general, not which part it made. Use Disclaimer instead.
- People need the sources behind a claim, not only that the AI wrote it. Use Citations and sources instead.

### Anatomy

- **A. Label:** Names what the AI did - "Summarised with AI", not a bare "AI". Tapping it opens the popover.
- **B. AI area:** A line in the margin shows where the AI part starts and ends.
- **C. What the AI did:** 1 sentence: the task and the input - the 42 min recording.
- **D. What to check:** What was not checked, and what can be wrong. In amber.
- **E. Way to the source:** A link to the input, at the right moment, so checking takes seconds.

### Do and Avoid

- **Do:** Says what the AI did, and opens what to check. (✦ Summarised with AIInes sends the budget by Friday.Tap the label to see what to check.)
- **Avoid:** A bare sparkle. Some people miss it. Others know it is AI but not what to check. (✦Ines sends the budget by Friday.Tap: “AI”)
- **Do:** After a person edits it, the label says so, and the AI version is 1 tap away. (Edited by you · from AIInes sends the budget by Monday.Revert to AI)
- **Avoid:** The label still says AI after a person fixed it. The label stops meaning anything. (✦ Summarised with AIInes sends the budget by Monday.)

### Writing

- Name the action: "Summarised with AI", "Drafted with AI", "Translated with AI". Not a bare "AI".
- In the popover, say what the AI used, what nobody checked, and what can be wrong, in 3 short lines.
- Use the same words for the same thing everywhere in the product.
- Never let AI text pass as a person's. If a person edited it, say "Edited by" and their name.

### Accessibility

- The label is a button with a full name, like "Summarised with AI, about this summary", not "sparkle".
- Mark the AI area as a region (a named block a screen reader can jump to) called "AI summary", so screen reader users hear where it starts and ends.
- The popover opens on Enter and Space, closes on Escape, and returns focus to the label.
- Do not use colour or a glow alone to mark AI text - always have the words.

### Seen in

- **IBM Carbon** (Design system, checked Nov 2026): The AI label marks AI content and opens an explainability popover. It is not decoration and must not trigger AI actions. Edited AI content switches to the default variant, with a way back to the AI version. [Carbon: AI label usage](https://carbondesignsystem.com/components/ai-label/usage/)
- **SAP Fiori** (Design system, checked Nov 2026): "Created with AI. Verify before use." - 1 notice per screen, by the lowest title that holds all the AI results. For high-impact content it sits at the top, before the AI content. [SAP Fiori: Local AI Notice](https://www.sap.com/design-system/fiori-design-web/v1-145/ui-elements/local-ai-notice/usage)
- **AWS Cloudscape** (Design system, checked Nov 2026): A sparkle icon with "Generated by AI", close to the output. If every item in a group is AI, use 1 label by the group header, not 1 per item. [Cloudscape: Generative AI output label](https://cloudscape.design/gen-ai/patterns/generative-ai-output-label/)

### Related patterns

- Often combined with Explanation: The label is the door to why and how the AI made this.
- Often combined with Disclaimer: The label says which part is AI. The disclaimer says what AI may get wrong.
- Often combined with Citations and sources: Link the AI text to what it came from.
- Often combined with Edit output and revert to AI: When people edit AI text, the label changes to say so.

### Sources

- [Apple HIG - Generative AI, Transparency (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Carbon for AI - AI label and explainability](https://carbondesignsystem.com/guidelines/carbon-for-ai/)
- [Shape of AI - Disclosure](https://www.shapeof.ai/patterns/disclosure)

## Disclaimer

Say what the AI may get wrong, once, in the right place, in plain words.

- ID: AX-TRU-03
- Moment: 6 Trust - "Can I rely on it?"
- Maturity: established
- Also called: AI can make mistakes, Legal notice
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/disclaimer
- Licence: CC BY 4.0 (text and figures)

### Story

> When an AI answer could lead me into a costly mistake, I want 1 plain warning about this answer, where I am reading, so I know what to check before I act.

- **Setting:** Rosa asks if her landlord can keep her whole deposit for a small stain.
- **Trigger:** The answer sounds sure. But the rules depend on where she lives.
- **Without it:** The only warning is a grey "AI can make mistakes" under every answer. She has stopped seeing it.
- **With it:** The answer ends with 1 line: general information, not legal advice, rules differ by city. And where to get help.
- **Outcome:** She calls a free tenant help line before she writes to her landlord.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asked | The question. | Starts. | 0 s | - |
| Pop-up (avoid) | A pop-up before every answer. People tap I understand without reading. | Waits. | every time | Dialog: AI can make mistakes |
| Answer | The answer streams in (it arrives word by word). The quiet line under the composer (the box people type in) is always there. | Writes. | - | Generating a response |
| Caveat | For high-stakes topics only: 1 line in amber at the end of the answer, about this answer, with a next step. | Writes. | end of the answer | - |
| Done | The caveat stays with the answer, so it is there when people come back or share it. | Idle. | when done | Response complete |

### On each device

- **Phone:** The caveat is part of the answer, so it scrolls with it. The quiet line under the composer may wrap to 2 lines - keep it short.
- **Tablet:** As on desktop.
- **Desktop:** The quiet line sits centred under the composer. The caveat sits at the end of the answer, with its link.

### Use when

- Answers can be wrong in ways that cost people money, health, or legal trouble.
- The answer depends on things the AI may not know - where people live, their contract, their history.
- People may act on the answer without checking anything else.

### Don't use when

- People need to know which content the AI made, not what it may get wrong. Use AI label and disclosure instead.
- The AI cannot or should not answer at all - say so, and offer a way on. Use Error, refusal and limits instead.
- People need to see how sure the AI is about each part. Use Confidence display instead.

### Anatomy

- **A. Caveat in the answer:** About this answer and this topic, in 1 line, in amber. Only when the stakes are high.
- **B. Next step:** Where to check or get help. A warning with no next step only worries people.
- **C. Quiet line:** 1 short, general line under the composer. Always there, never in the way.

### Do and Avoid

- **Do:** About this answer, where people are reading, with what differs. (Often not. A landlord can usually keep money only for…⚠ General information, not legal advice. Rules differ by city.)
- **Avoid:** The same grey line under every answer. After a day, people stop seeing it. (Often not. A landlord can usually keep money only for…AI can make mistakes.)
- **Do:** Gives a next step people can take. (⚠ General information, not legal advice.Find free tenant help near you)
- **Avoid:** A pop-up before every answer. People tap through it without reading and learn to ignore it. (Before you continueAI can make mistakes. Our terms apply.I understand)

### Writing

- Say what may be wrong and why: "Deposit rules differ by city and state." Not only "AI can make mistakes".
- Give 1 next step: "Find free tenant help near you", "Check with your pharmacist".
- Keep the quiet line under 8 words: "AI can make mistakes. Check important info."
- Write it for people, not for lawyers. Put the legal text behind a link.

### Accessibility

- Do not rely on amber alone. Start the caveat with a warning icon that has a text name, like "Caution".
- Keep the caveat inside the answer's text, so it is read in order with the answer.
- The quiet line must pass 4.5:1 contrast (the colour difference between text and background), even though it is quiet.
- Never trap keyboard focus (so people cannot tab out) in a pop-up that blocks every answer. If a 1-time notice is needed, people dismiss it once and never see it again.

### Seen in

- **Microsoft 365 Copilot Chat** (Microsoft 365 app, checked Nov 2025): The line "AI-generated content may be incorrect" under the compose box was hidden by default, "based on customer feedback". Admins can turn on a bolder version with a link to their own policy. [Windows Latest, 2 Nov 2025](https://www.windowslatest.com/2025/11/02/microsoft-365-copilot-drops-ai-can-make-mistakes-alert-by-default)
- **SAP Fiori** (Design system, checked Nov 2026): A general line - "AI can make mistakes. Check for accuracy." - goes below AI prompt inputs. Content-specific lines say "Generated with AI" or "Predicted with AI", then "Verify before use." [SAP Fiori: AI Notice Base Concept](https://www.sap.com/design-system/fiori-design-web/v1-139/foundations/best-practices/global-patterns/ai-notice-base-concept)
- **AWS Cloudscape** (Design system, checked Nov 2026): A disclaimer is an optional part of the chat, for legal or other important information. Teams decide with their product team whether they need one. [Cloudscape: Generative AI chat](https://cloudscape.design/patterns/genai/generative-AI-chat/)

### Related patterns

- Often combined with AI label and disclosure: The label marks which part is AI. The disclaimer says what may be wrong.
- Often combined with Citations and sources: Sources let people check the answer the disclaimer warns about.
- Alternative to Confidence display: Shows how sure the AI is, part by part, instead of 1 general warning.
- Often combined with Capability disclosure: Say what the AI cannot do before the first ask, not after every answer.

### Sources

- [Apple HIG - Generative AI, raise awareness about hallucinations (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Microsoft HAX Toolkit - G2 Make clear how well the system can do what it can do](https://www.microsoft.com/en-us/haxtoolkit/guideline/make-clear-how-well-the-system-can-do-what-it-can-do/)
- [Shape of AI - Caveat](https://www.shapeof.ai/patterns/caveat)
- [Apple WWDC26 - Principles of great design](https://developer.apple.com/videos/play/wwdc2026/250/)
- [Apple WWDC25 - Explore prompt design & safety for on-device foundation models](https://developer.apple.com/videos/play/wwdc2025/248/)

## Error, refusal and limits

Say no clearly, say why, and offer a way on.

- ID: AX-TRU-04
- Moment: 6 Trust - "Can I rely on it?"
- Maturity: established
- Also called: Refusal, Rate limit, Content policy, Error state
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/errors-and-refusals
- Licence: CC BY 4.0 (text and figures)

### Story

> When the AI cannot give me what I asked for, I want to know what happened, why, and what I can do now, so I am not stuck or left guessing.

- **Setting:** Ana asks for deep research on e-bikes under £1,500.
- **Trigger:** She has used today's deep research.
- **Without it:** "Something went wrong." She tries 3 times, then gives up.
- **With it:** It says what happened, when it resets, and that quick answers still work - with a button for 1.
- **Outcome:** She gets 3 bikes to look at now, and a full report tomorrow.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Sent | The ask. | Starts work. | 0 s | - |
| Working | Dots, or the first words of the answer. | Works. | - | Generating a response |
| Partial answer | For a dropped connection: the words written so far stay on screen. | Writes, then fails. | - | - |
| The problem | 1 line on what happened, 1 on why, what still works, and 1 main way on. | Stopped. | at once | The problem's title |
| Way on | The person picks the way on. It is a real action, not a link to help. | Idle. | on tap | - |
| Answer | A useful answer, in the same thread. | Writes. | - | Generating a response |
| Done | The thread goes on as normal. | Idle. | - | Response complete |

### On each device

- **Phone:** The message sits in the thread where the answer would be - not a pop-up. Buttons are full-width or side by side at 44 px.
- **Tablet:** As on the phone.
- **Desktop:** The same message in the thread. A limit that affects the whole app can also show once in the composer (the box people type in), near Send.

### Use when

- Any AI feature. Errors, refusals and limits will happen. The only choice is how they look.
- The AI can refuse some asks for safety or policy reasons.
- There are usage limits, quotas or modes that run out.

### Don't use when

- The AI could answer, but is unsure - show how sure it is instead. Use Confidence display instead.
- The AI needs more detail to answer - ask a question, not an error. Use Escalation and human handoff instead.
- An agent (an AI that can take actions for you) is about to do something risky - ask first, before anything fails. Use Approval gate instead.

### Anatomy

- **A. What happened:** 1 plain line, in the first person or about the thing - never a code.
- **B. Why:** 1 short reason: a dropped connection, a safety reason, a limit and when it resets.
- **C. What still works:** Kept words, or what the person can still do now.
- **D. Main way on:** 1 real action: try again, a different mode, a safer version of the ask.
- **E. Second way on:** A quieter option - copy what is here, report, or a reminder.

### Do and Avoid

- **Do:** Says what happened, when it changes, and gives 1 way on that works now. (You’ve used today’s deep researchIt resets at 5:30 am. Quick answers still work.Get a quick answer)
- **Avoid:** A code and a vague retry. People try again, hit the same wall, and leave. (Something went wrong. (Error 429)Please try again later.)
- **Do:** A short, plain no, and a safe way to get what the person really needs. (I can’t help find where a private person lives.Contact them through the app)
- **Avoid:** A long apology that blames policy and gives no way on. (I’m sorry, but as an AI I am unable to assist with that request as it may violate our usage policies and guidelines…)

### Writing

- Lead with what happened, in plain words: "The answer stopped part-way", "You've used today's deep research".
- Give the reason in 1 line. For limits, give the reset time, not only "later".
- Refuse once, briefly, without a lecture. Then offer what you can do.
- Never show an error code as the main message. Put it in a details row if support needs it.

### Accessibility

- Announce the title once in the polite status region (the part of the page a screen reader reads out when it is not busy) - not the whole message.
- Do not move focus to the error. Make the main way on the next thing in tab order (the order the Tab key moves through).
- Do not rely on colour: the alert icon and the words carry the meaning.
- Partial answers stay as text, so people using screen readers do not lose them.

### Seen in

- **Claude** (Web, checked Oct 2026): Extended thinking can be cut short when safety systems flag it, with a note that the rest of the thinking is unavailable. [Claude Help: Extended thinking (14 Jan 2026)](https://support.claude.com/en/articles/10574485)
- **Gemini** (Web and apps, checked Oct 2026): Deep Research warns people when they are near the daily limit, before they run out. [Gemini Help: Deep Research](https://support.google.com/gemini/answer/15719111)
- **Microsoft 365 Copilot apps** (Web and desktop, checked Jun 2026): App guidelines ask for explicit loading, disabled, success and error states, with recovery in the app itself - not in the model's text. [Microsoft Learn: MCP Apps UI guidelines](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/plugin-mcp-apps-ui-guidelines)

### Related patterns

- Often combined with Stop generation: A stopped answer keeps its words, like a dropped one.
- Often combined with Regenerate, edit and branches: Try again is the main way on after most errors.
- Alternative to Confidence display: When the AI can answer but is not sure.
- Often combined with Suggested prompts: After a refusal, examples of what the AI can do help people ask again.

### Sources

- [AWS Cloudscape - Generative AI chat](https://cloudscape.design/gen-ai/patterns/generative-ai-chat/)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Microsoft Learn - MCP Apps UI guidelines](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/plugin-mcp-apps-ui-guidelines)
- [Apple WWDC25 - Explore prompt design & safety for on-device foundation models](https://developer.apple.com/videos/play/wwdc2025/248/)
- [Apple WWDC26 - Build with the new Apple Foundation Model on Private Cloud Compute](https://developer.apple.com/videos/play/wwdc2026/319/)

## Memory controls

Show what the AI remembers about a person, and let them change or forget it.

- ID: AX-TRU-05
- Moment: 6 Trust - "Can I rely on it?"
- Maturity: emerging
- Also called: Memory, Personalisation, Saved context
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/memory-controls
- Licence: CC BY 4.0 (text and figures)

### Story

> When the AI uses what it remembers about me, I want to see what it used and change or forget it, so old facts stop shaping new answers.

- **Setting:** Kenji asks for this week's running plan.
- **Trigger:** The plan is easy, to protect his knee. His knee healed weeks ago.
- **Without it:** He asks how it knows. "You mentioned it in August." There is nothing he can see or change.
- **With it:** He taps "Used 2 memories" and the list opens. He deletes the knee memory.
- **Outcome:** He asks again and gets a real training week, with hills on Thursday.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asked | The ask. | Starts. | 0 s | - |
| Answer | The answer, and under it "Used 2 memories". | Writes. | - | Generating a response |
| Memory list | Each memory as 1 plain sentence. A dot marks the ones used in this answer. Edit and delete on each. | Idle. | on tap | Memory, 3 items |
| Changed | Delete crosses out the memory with Undo. Pause greys the list: "Nothing new is saved or used." | Idle. | on tap | Memory deleted, or Memory paused |
| New answer | The next answer no longer uses the old fact, and says which memories it used. | Writes. | - | Response complete |
| Silent memory | The AI uses old facts with no sign and no list. People can only ask. | - | - | - |

### On each device

- **Phone:** The "Used 2 memories" link opens a bottom sheet with the list. Edit and delete sit at the end of each row, at least 44 px.
- **Tablet:** As on the phone, or as a side panel in landscape.
- **Desktop:** The link opens a popover (a small card that floats over the page) by the answer. The full list, with search, Pause and Delete all, lives in Settings.

### Use when

- The AI keeps facts about people across chats - their goals, health, family, work.
- Old facts can go stale and make answers wrong.
- People share personal things they may later want forgotten.

### Don't use when

- People want 1 chat that is not saved or remembered at all. Use Temporary chat instead.
- The question is whether data is used to train the AI, not what it remembers about 1 person. Use Consent and data controls instead.
- The AI only uses the current chat and remembers nothing after it - there is nothing to control.

### Anatomy

- **A. Memory used:** "Used 2 memories" under the answer. Shows memory at work, at the moment it matters.
- **B. 1 memory:** A plain sentence people can read and judge. A dot shows it was used in this answer.
- **C. Edit and delete:** On every memory. Delete gives Undo for a few seconds.
- **D. Pause:** Stops using and saving memory without deleting it. Different from Delete all.

### Do and Avoid

- **Do:** Shows memory was used, right under the answer, 1 tap from the list. (An easy week, to go gently on your knee.Used 2 memories)
- **Avoid:** Memory works silently. People find out by surprise, and the list is 4 levels deep. (An easy week, to go gently on your knee.Memory: Settings › Personal › Data › Memory)
- **Do:** Each memory is a sentence people can read, fix, or delete on its own. (Hurt his left knee in AugustTraining for the Osaka Marathon in FebruaryEdit · Delete on each)
- **Avoid:** Memories as data codes, and only Delete all. People cannot fix 1 fact without losing every one. (health: knee_injury=true; sport: runningDelete all memory)

### Writing

- Write each memory as 1 short sentence about the person: "Runs before work, around 6:00".
- Say how many memories were used: "Used 2 memories". Not "Personalised for you".
- Explain Pause in 1 line: "Nothing new is saved or used. Your memories are kept."
- Before Delete all, say what goes and that it cannot be undone.

### Accessibility

- Name edit and delete with the memory: "Delete: Hurt his left knee in August".
- Announce "Memory deleted" with an Undo button that stays until focus moves on.
- The Pause switch has a visible text state ("On", "Paused"), not only colour or position.
- Do not show "used in this answer" by colour alone - add text or a label to the dot for screen readers.

### Seen in

- **ChatGPT** (Web and apps, checked Nov 2026): A memory summary people can correct by typing or by highlighting text. "Don't mention this again" reduces future references without deleting the source. Sources under a response can show the memories used. [OpenAI Help: Memory FAQ](https://help-lb.openai.com/en/articles/8590148)
- **Claude** (Web, desktop and mobile, checked Nov 2026): Settings lists memory as Topics to edit or delete. Pause keeps memory but stops using and making it; Reset deletes it all. Memory can be turned off for 1 chat from the + menu before the first message. [Claude Help: How does Claude's memory work](https://support.claude.com/en/articles/11817273-how-does-claude-s-memory-work)

### Related patterns

- Alternative to Temporary chat: A chat that is not remembered at all, instead of fixing memory after.
- Often combined with Explanation: "Used 2 memories" is an explanation of why the answer came out this way.
- Often combined with Consent and data controls: Memory and training are separate choices. Show both clearly.
- Often combined with Citations and sources: Memories used can be shown like sources under the answer.

### Sources

- [Shape of AI - Memory](https://www.shapeof.ai/patterns/memory)
- [Google PAIR Guidebook - Feedback + Control](https://pair.withgoogle.com/chapter/feedback-controls/)
- [Microsoft HAX Toolkit - G17 Provide global controls](https://www.microsoft.com/en-us/haxtoolkit/guideline/provide-global-controls/)
- [Apple WWDC26 - What’s new in Shortcuts](https://developer.apple.com/videos/play/wwdc2026/310/)
- [Apple WWDC21 - Discoverable design](https://developer.apple.com/videos/play/wwdc2021/10126/)

## Consent and data controls

Ask before data is used for training or shared, and make the choice easy to find again.

- ID: AX-TRU-06
- Moment: 6 Trust - "Can I rely on it?"
- Maturity: established
- Also called: Data controls, Training opt-out, Privacy settings
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/consent-and-data
- Licence: CC BY 4.0 (text and figures)

### Story

> When an AI product wants to use what I share to train its models, I want to be asked in plain words and find my answer again easily, so my clients' work stays where I put it.

- **Setting:** Fatima opens a new AI tool to build a glossary for a client contract.
- **Trigger:** The product wants to use what people share to train its AI (teach it from real examples).
- **Without it:** A pre-ticked box at sign-up says yes for her. Her client's contract may now be used for training.
- **With it:** A clear question, what is used, 2 equal buttons. She taps Don't allow. Her file says "Not used for training".
- **Outcome:** Months later she finds the same choice in 1 place in Settings, 1 tap to change.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asked | A plain question before the first chat. Nothing is chosen for her. | Waits. | first use | Choice needed: data use |
| What is used | What is used and what never is, in 2 short lines. | Waits. | on tap | - |
| Chosen | A line confirms the choice in plain words. | Idle. | on tap | - |
| Shown again | Where it matters - on a file - the choice shows again: "Not used for training". | Works. | on upload | - |
| Found again | 1 switch in Settings › Data, with what it applies to. | - | any time | - |

### On each device

- **Phone:** The question is a full-width card or sheet. The 2 buttons sit side by side at the same size. Settings › Data is 2 taps from the menu.
- **Tablet:** As on desktop.
- **Desktop:** The question is a card in the empty chat, not a pop-up over the page. Settings › Data is linked from the account menu.

### Use when

- What people share could be used to train models, shared with others, or kept for a long time.
- People add other people's data - client files, colleagues' emails, family photos.
- Laws or your own policy need a clear yes before data is used.

### Don't use when

- The question is about what the AI remembers about 1 person, not training. Use Memory controls instead.
- People want 1 chat to leave no trace at all. Use Temporary chat instead.
- The AI is about to act on someone's behalf - ask about that action, not about data. Use Approval gate instead.

### Anatomy

- **A. Plain question:** Says what will happen: "Use your chats to train our AI?" Not "Help us improve".
- **B. What is used:** What is used and what never is, in 2 lines. The full policy sits behind a link.
- **C. 2 equal buttons:** Same size and style. Nothing chosen before the person chooses.
- **D. Where to change it:** Names the 1 place to change it later, before people decide.

### Do and Avoid

- **Do:** Says what is used, and gives 2 equal choices. (Use your chats to train our AI?Used: messages, files. Never: temporary chats.Don’t allowAllow)
- **Avoid:** "Help us improve" hides what happens, and "maybe later" is small and grey. People say yes without knowing to what. (Help us improve!Sounds goodmaybe later)
- **Do:** The choice shows again where it matters, and lives in 1 obvious place. (📄 client-contract.pdfNot used for trainingSettings › Data)
- **Avoid:** People chose once. Then the product buried the choice 4 levels deep, and people forget what they chose. (📄 client-contract.pdfSettings › Account › Privacy › Advanced)

### Writing

- Name the use: "train our AI", "share with our partners". Not "improve our services".
- List what is used and what never is, in 2 lines: "Used: your messages and files. Never used: temporary chats."
- Label the buttons with the choice: "Allow" and "Don't allow". Not "Sounds good" and "Maybe later".
- Say where to change it, and what changing it does: "Applies to new chats."

### Accessibility

- Both buttons are real buttons with the same size, contrast and focus style. Neither has focus (the keyboard's current spot) by default.
- If the question blocks the product, it is a dialog with a clear heading and no close button that means yes.
- Switches in Settings have a visible text state ("On", "Off") and a label that names the use.
- The short version of what is used is real text, not an image, and is read before the buttons.

### Seen in

- **Claude** (Web, desktop and mobile, checked Aug 2025): Existing users saw a pop-up to choose whether their chats are used for training; new users choose at sign-up. The choice can be changed any time in Privacy Settings, and turning it off applies to new chats. [Anthropic: Updates to Consumer Terms and Privacy Policy](https://www.anthropic.com/news/updates-to-our-consumer-terms)
- **ChatGPT** (Web, iOS and Android, checked Nov 2026): Settings › Data Controls holds the training choice on every platform. While it is off, new chats are not used to train models. Temporary Chats are never used for training. [OpenAI Help: Data Controls FAQ](https://help.openai.com/en/articles/7730893-data-controls-faq)
- **Microsoft 365 Copilot** (Microsoft 365 apps, checked Nov 2026): When people send feedback, the pane asks permission before it adds the prompt, the response or files, and lets people preview them first. [Microsoft Support: Providing feedback about Microsoft Copilot](https://support.microsoft.com/privacy/providing-feedback-about-microsoft-copilot-with-microsoft-365-apps)

### Related patterns

- Often combined with Temporary chat: A chat that is never used for training, whatever the setting says.
- Often combined with Memory controls: A separate choice: what the AI remembers about 1 person.
- Often combined with Granular feedback: Sending a chat with feedback is a data choice too. Ask first.
- Often combined with Attachments and context chips: Show the data choice on the files people add.

### Sources

- [Apple HIG - Generative AI, Privacy (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Shape of AI - Consent](https://www.shapeof.ai/patterns/consent)
- [Shape of AI - Data ownership](https://www.shapeof.ai/patterns/data-ownership)
- [Google PAIR Guidebook - Feedback + Control](https://pair.withgoogle.com/chapter/feedback-controls/)
- [Apple WWDC25 - Integrate privacy into your development process](https://developer.apple.com/videos/play/wwdc2025/246/)
- [Apple WWDC20 - Design for location privacy](https://developer.apple.com/videos/play/wwdc2020/10162/)

## Temporary chat

Let people talk without it being saved, and show that it is not.

- ID: AX-TRU-07
- Moment: 6 Trust - "Can I rely on it?"
- Maturity: established
- Also called: Incognito chat, Private mode, Ephemeral
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/temporary-chat
- Licence: CC BY 4.0 (text and figures)

### Story

> When I want to ask something I do not want kept, I want a chat that is clearly not saved, so I can ask freely and nothing shows up later.

- **Setting:** Noor wants party ideas. Sam uses the same tablet every evening.
- **Trigger:** She taps the ghost icon before she types.
- **Without it:** "Sam's surprise 40th" sits at the top of the chat history, and the AI saves it to memory.
- **With it:** The chat looks different the whole time, and says once what is and is not kept. She gets her ideas.
- **Outcome:** She closes it. The history list is the same as before. The surprise is safe.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| New chat | An empty chat with a ghost icon in the top bar. | Idle. | 0 s | - |
| Temporary on | "Temporary chat" in the header, the rules in 1 line, and a composer (the box people type in) that says "not saved". | Idle. | before the first message | Temporary chat. Not saved to history or memory |
| Asks | The ask, as in any chat. | Starts. | - | - |
| Answer | The answer. The chat still looks temporary. Nothing new appears in history. | Writes. | - | Generating a response |
| Leave | Closing asks once: Close, or Save to history. Saving makes it a normal chat. | Idle. | on close | Chat saved to history, if saved |
| History | The history list, with nothing from the temporary chat - unless people saved it. | - | later | - |

### On each device

- **Phone:** The ghost icon sits in the top bar of a new chat. The header and composer change for the whole chat, because the history list is out of sight.
- **Tablet:** As on desktop. On a shared tablet, the empty history list is the proof.
- **Desktop:** The history list beside the chat stays as it was while people talk. The header and composer still change, in case the list is closed.

### Use when

- People ask about private things - health, money, gifts, job hunting.
- Devices or accounts are shared with family or colleagues.
- People want a fresh answer without their memory or past chats shaping it.

### Don't use when

- People want to keep the chat but fix what the AI remembers. Use Memory controls instead.
- The worry is the AI training on (learning from) all chats, not 1 chat - give a setting for that. Use Consent and data controls instead.
- The work needs to last - a project, a long document. A temporary chat would lose it.

### Anatomy

- **A. Temporary header:** Says it is temporary for the whole chat, not only at the start.
- **B. The rules:** 1 line: what is not kept, and the honest exception - a safety copy for up to 30 days.
- **C. Composer:** "Temporary chat - not saved" where people type, so they never forget.
- **D. Close:** Ends the chat. Asks once whether to save it, so nothing is lost by accident.

### Do and Avoid

- **Do:** The chat looks different from top to bottom, for as long as it lasts. (Temporary chatIdeas for Sam’s surprise 40thTemporary chat - not saved)
- **Avoid:** A small notice at the start that scrolls away. 20 messages later, people forget they are in "private mode". (Private mode onIdeas for Sam’s surprise 40thAsk a follow-up)
- **Do:** Says exactly what is not kept, and the 1 exception. (Not saved to history or memory. A copy may be kept for up to 30 days for safety.)
- **Avoid:** Promises more than is true. If a safety copy exists, people will feel lied to. (Nothing you say here is ever stored.)

### Writing

- Call it what it does: "Temporary chat". Avoid "Incognito" alone - not everyone knows the word.
- Say the rules in 1 line: "Not saved to your history or memory, and not used for training."
- Say the exception honestly, with the number of days.
- When people save it, say what changes: "Saved to your history as a normal chat."

### Accessibility

- Announce "Temporary chat. Not saved to history or memory" when it turns on.
- The ghost button has a name and a pressed state: "Temporary chat, on".
- Do not use colour alone to show the mode - keep the words "Temporary chat" in the header and the composer.
- The close question is a dialog with 2 clear buttons. Escape keeps the chat open.

### Seen in

- **ChatGPT** (Web and apps, checked Nov 2026): Temporary chats do not appear in the chat list, do not create memories, and are not used for training. A copy may be kept for up to 30 days for safety. Custom instructions still apply. [OpenAI Help: Temporary Chat FAQ](https://help.openai.com/en/articles/8914046-temporary-chat-faq)
- **Claude** (Web, desktop and mobile, checked Nov 2026): A ghost icon at the top right of a new chat starts an incognito chat. It is not saved to chat history or to memory. It is available on all plans. [Claude Help: How does Claude's memory work](https://support.claude.com/en/articles/11817273-how-does-claude-s-memory-work)

### Related patterns

- Alternative to Memory controls: Keep the chat, and fix what the AI remembers instead.
- Often combined with Consent and data controls: Temporary chats are never used for training, whatever the setting says.
- Often combined with Mode and model selection: Temporary is a mode people choose before the first message.

### Sources

- [Shape of AI - Incognito Mode](https://www.shapeof.ai/patterns/incognito-mode)
- [Shape of AI - Memory](https://www.shapeof.ai/patterns/memory)
- [Apple HIG - Generative AI, Privacy (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)

## Explanation

Say why the AI did this, in words a person can act on.

- ID: AX-TRU-08
- Moment: 6 Trust - "Can I rely on it?"
- Maturity: emerging
- Also called: Why this?, Reasoning, Explainability
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/explanation
- Licence: CC BY 4.0 (text and figures)

### Story

> When the AI flags, ranks or changes something of mine, I want to know why in plain words, so I can fix it or push back on the first try.

- **Setting:** Wanjiru adds a taxi receipt from the airport, late at night.
- **Trigger:** The AI check marks it "Needs review".
- **Without it:** No reason, or only a model score (a raw number from the AI). She sends it again unchanged, and the AI flags it again.
- **With it:** She taps Why? and sees 2 reasons with the numbers, the rule they come from, and what she can do.
- **Outcome:** She adds 1 line about the late flight. It goes to her manager on the first try.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Checking | "Checking" with dots on the new expense. | Checks. | 0-1 s | Checking your expense |
| Flagged | "Needs review" in amber, with a Why? button beside it. | Done. | when done | 1 expense needs review |
| Why | Each reason with its numbers, the rule it comes from, and what to do next. | - | on tap | Explanation opened |
| Acts | People do what the explanation said - here, add a reason. | - | - | - |
| Resolved | The expense moves on, or - without a usable reason - comes back flagged again. | - | - | Sent for approval |

### On each device

- **Phone:** Why? sits next to the flag. The explanation opens in place under the item, so the numbers and the fix are on 1 screen.
- **Tablet:** As on desktop.
- **Desktop:** Why? opens a popover (a small card that floats over the page) next to the item. Longer detail - the full rule, past cases - sits behind a link in the popover.

### Use when

- The AI makes a decision about people's things - flags, ranks, rejects, recommends, changes.
- People can do something about the reason - fix the input, add context, appeal.
- A wrong decision costs people time or money.

### Don't use when

- People want to see the AI's steps while it works, not the reason for a result. Use Thinking and processing steps instead.
- People need to check where facts came from. Use Citations and sources instead.
- People need to know how sure the AI is, more than why. Use Confidence display instead.

### Anatomy

- **A. The decision:** "Needs review" - what the AI decided, in amber, in words.
- **B. Why?:** 1 tap from the decision. Always there when the AI decides something.
- **C. Reasons:** 2 or 3, in plain words, with the real numbers: KSh 4,200 against a KSh 3,000 limit.
- **D. Where it comes from:** The rule or data behind the reason, linked, so people can check it.
- **E. What to do:** The next step, and who makes the final decision.

### Do and Avoid

- **Do:** The reason, with the numbers and the rule. People know what is wrong. (Needs reviewKSh 4,200 is over the KSh 3,000 taxi limit.From Travel policy 4.2)
- **Avoid:** A model score says how sure the AI is, not why. People cannot act on it. (Needs reviewRisk score 0.82 (limit 0.75))
- **Do:** Ends with what people can do, and who makes the final decision. (23:40 is outside work hours.To send it, add a reason. Your manager decides.)
- **Avoid:** A reason with no way on. People feel judged by a machine and stop trusting it. (23:40 is outside work hours.This decision is final.)

### Writing

- Start each reason with the fact, then the rule: "KSh 4,200 is over the KSh 3,000 limit."
- Use the person's numbers and names, not model terms like score, feature or weight.
- Give 2 or 3 reasons at most. Put the rest behind a link.
- End with the next step: "To send it, add a reason."

### Accessibility

- Name the button with the item: "Why does Taxi, KSh 4,200 need review?".
- Announce "Explanation opened", and move focus to the first reason.
- Write reasons as a real list, so screen readers say how many there are.
- Do not use amber alone for the decision - always say it in words.

### Seen in

- **IBM Carbon** (Design system, checked Nov 2026): The AI label opens an explainability popover - the first layer of explanation. The template has Overview, Supporting details, Artifacts and resources, and Additional actions. [Carbon: AI label usage](https://carbondesignsystem.com/components/ai-label/usage/)
- **ChatGPT** (Web and apps, checked Nov 2026): Sources can appear below a response, to review the past chats, memories, instructions or files used. The help page says Sources may not show every factor that shaped a response. [OpenAI Help: Memory FAQ](https://help-lb.openai.com/en/articles/8590148)

### Related patterns

- Often combined with AI label and disclosure: The label is often the door to the explanation.
- Often combined with Citations and sources: Link each reason to the rule or data it comes from.
- Alternative to Confidence display: Shows how sure the AI is. Use it with reasons, not instead of them.
- Often combined with Escalation and human handoff: When people disagree with the reason, let them reach a person.

### Sources

- [Microsoft HAX Toolkit - G11 Make clear why the system did what it did](https://www.microsoft.com/en-us/haxtoolkit/guideline/make-clear-why-the-system-did-what-it-did/)
- [Google PAIR Guidebook - Explainability + Trust](https://pair.withgoogle.com/chapter/explainability-trust/)
- [Carbon for AI - explainability](https://carbondesignsystem.com/guidelines/carbon-for-ai/)
- [Apple WWDC21 - Discoverable design](https://developer.apple.com/videos/play/wwdc2021/10126/)
- [Apple WWDC26 - What’s new in Shortcuts](https://developer.apple.com/videos/play/wwdc2026/310/)

# Moment 7: Delegate - Can it act for me?

How people hand work to an agent, watch it, approve it and take it back.

## Intent preview and plan

Show the plan before the agent starts, so people can fix it early.

- ID: AX-DEL-01
- Moment: 7 Delegate - "Can it act for me?"
- Maturity: emerging
- Also called: Plan preview, Steps to take, Task breakdown
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/intent-preview
- Licence: CC BY 4.0 (text and figures)

### Story

> When I hand a task with several steps to an AI agent (an AI that can take actions for me), I want to see its plan in plain words before it starts. Then I can fix a wrong step while it costs nothing.

- **Setting:** Grace asks the agent to book the coach and museum tickets for Friday's trip.
- **Trigger:** The agent has worked out 4 steps and is ready to use the school card.
- **Without it:** It starts at once and books 32 pupil tickets. The 4 adults have none, and a change costs £40.
- **With it:** The plan lists 4 steps in plain words. Grace sees "32 pupil tickets" and changes it to 36.
- **Outcome:** She taps Start. The plan turns into the progress list, and all 4 steps finish.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asked | The ask. | Works out the steps. | 0 s | - |
| Plan shown | The goal, numbered steps in plain words, and what the agent will use. Nothing has started. | Waits. | before any action | Plan ready for review |
| Fix a step | The person edits 1 step in place. It is marked "Edited by you". | Waits. | on tap | - |
| Start | The person taps "Start · 4 steps" or "I'll do it myself". | Waits. | on tap | - |
| Running | The same list now shows progress: done, now, next. "Working · step 2 of 4". | Follows the plan. | - | Working |
| Done | Every step ticked, and 1 past-tense line of what happened. | Idle. | when done | Done |

### On each device

- **Phone:** The plan is a card in the thread. Each step is 1 line, with its detail under it. Edit opens the step in place, not a new screen.
- **Tablet:** As on desktop.
- **Desktop:** The plan card is wider, so each step and its detail sit on 1 row. Long plans can fold into groups, with the first group open.

### Use when

- The task has 3 or more steps, and a wrong step early on spoils the rest.
- The agent will spend money, time or a booking that is costly to change.
- The ask is open to more than 1 reading - "the class", "Friday", "the team".

### Don't use when

- The task is 1 quick step - a plan for it is only an extra tap.
- Only 1 step is risky. Ask at that step instead of showing the whole plan. Use Approval gate instead.
- People want to watch and steer while it works, not agree a plan first. Use Watch mode and takeover instead.

### Anatomy

- **A. Goal:** The task said back in 1 line, with the date and place filled in.
- **B. Steps:** Numbered, in plain words and real numbers - not tool names or code.
- **C. What it uses:** The accounts, files and people the agent will touch.
- **D. Edit a step:** Fix 1 step in place, without asking for a whole new plan.
- **E. Start:** Names the size of the job. Beside it, a way to do it yourself.

### Do and Avoid

- **Do:** Plain words and real numbers. The mistake - 32, not 36 - is easy to spot. (Year 6 trip · Fri 14 Nov1 Read the class list2 Book a coach for 363 Book 32 pupil tickets4 Email parents the times)
- **Avoid:** The same plan as tool calls. The mistake is in there, but nobody will see it. (Plan1 class_list.read()2 transport.book(n)3 tickets.book(n_pupils)4 notify(parents))
- **Do:** The approved plan becomes the progress list, so people see where the work is. (Working · step 3 of 4✓ Read the class list✓ Booked a coach for 36● Book 36 tickets4 Email parents)
- **Avoid:** Once approved, the plan vanishes. Nobody can tell if the agent is still following it. (Plan approved ✓Working…)

### Writing

- Write each step as a verb and real numbers: "Book a coach for 36", not "Handle transport".
- Say the goal back with the details filled in - date, place, how many.
- Name what the agent will use: "school card", "parent emails".
- Label the start button with the size of the job: "Start · 4 steps", not "OK".

### Accessibility

- Announce "Plan ready for review" in the polite status region (the part of the page a screen reader reads out on its own, without interrupting). Do not move focus.
- Mark the plan up as an ordered list, so screen readers say "3 of 4".
- Each edit button names its step: "Edit step 3, Book 32 pupil tickets".
- During the run, show done, now and next with icons and words, not colour alone.

### Seen in

- **Claude in Chrome** (Chrome extension, checked Nov 2026): In Manual mode the classic side panel shows a plan of the sites and approach first, with "Approve plan" or "Make changes". Claude will not use sites outside the plan without asking. [Claude Help: Chrome permissions guide](https://support.claude.com/en/articles/12902446-claude-in-chrome-permissions-guide)
- **Gemini Deep Research** (Web and apps, checked Nov 2026): Gemini makes a research plan before it starts. People can "Edit plan" or "Start research". [Gemini Help: Deep Research](https://support.google.com/gemini/answer/15719111)
- **Gemini Task** (Web and apps, checked Nov 2026): A work panel shows each step as "Completed step", "Current step" or "Planned step", so the plan stays visible while it runs. [Gemini Help: Tasks](https://support.google.com/gemini/answer/16596215)

### Related patterns

- Alternative to Approval gate: Ask at the 1 risky step, instead of agreeing the whole plan first.
- Often combined with Thinking and processing steps: The plan's steps can become the steps shown while it works.
- Often combined with Watch mode and takeover: After the plan, watch the work and step in if it goes off plan.
- Often combined with Activity log and undo: What really happened, step by step, after the run.

### Sources

- [Shape of AI - Action plan](https://www.shapeof.ai/patterns/action-plan)
- [Smashing Magazine - Designing agentic AI: practical UX patterns (Feb 2026)](https://smashingmagazine.com/2026/02/designing-agentic-ai-practical-ux-patterns/)
- [Apple WWDC26 - Xcode, agents, and you](https://developer.apple.com/videos/play/wwdc2026/259/)
- [Apple WWDC26 - Inside Apple Intelligence and Xcode: Special Presentation](https://developer.apple.com/videos/play/wwdc2026/382/)

## Approval gate

Before an agent does something it cannot undo, show it and ask for a yes.

- ID: AX-DEL-02
- Moment: 7 Delegate - "Can it act for me?"
- Maturity: emerging
- Also called: Confirm action, Human in the loop, Permission prompt
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/approval-gate
- Licence: CC BY 4.0 (text and figures)

### Story

> When an AI agent (an AI that can take actions for me) is about to do something that affects other people or cannot be undone, I want it to stop and show me exactly what it will do. Then I stay in charge of what goes out in my name.

- **Setting:** Kofi asks the agent to chase 3 unpaid invoices.
- **Trigger:** The agent has drafted 3 emails and is about to send them.
- **Without it:** The emails go out at once - 1 of them to a client who paid yesterday.
- **With it:** The agent stops and shows who gets what, and that emails can't be unsent.
- **Outcome:** Kofi checks the 3 names, taps Send 3 emails, and the chat records what he approved.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asked | The ask. | Starts work. | 0 s | - |
| Working | Safe steps run without asking - finding, reading, drafting. | Works. | - | Working |
| Asks first | The agent pauses: "Waiting for you", what it will do, to whom, and whether it can be undone. | Paused - does nothing until answered. | before the action | Needs your approval |
| Answer | The person approves, edits first, or declines. | Paused. | on tap | - |
| Doing it | The action runs, with its name: "Sending 3 emails". | Acts. | - | - |
| Recorded | A past-tense line stays in the chat: "Approved · 3 emails sent" or "Declined · nothing was sent". | Idle. | when done | Done, or Skipped |

### On each device

- **Phone:** The gate sits at the bottom of the thread, by the thumb. It can also arrive as a push notification when the agent works in the background.
- **Tablet:** As on the phone.
- **Desktop:** The gate sits in the thread above the composer. Long details - a full command, a full email - open in an expandable section.

### Use when

- An agent can send, buy, delete, publish, or change something other people see.
- The action cannot be undone, or undoing it is costly.
- The person is responsible for the result - it goes out in their name or with their money.

### Don't use when

- The step is safe and undoable, like reading or drafting. Asking every time trains people to approve without looking. Use Autonomy dial instead.
- People want to see the whole plan before anything starts. Use Intent preview and plan instead.
- People want to watch and step in while it works. Use Watch mode and takeover instead.

### Anatomy

- **A. Paused status:** "Waiting for you" - the agent has stopped and will not go on alone.
- **B. Exactly what:** The action and its targets, in full: who gets the email, which files move.
- **C. Can it be undone:** 1 line on the consequence, in amber when it cannot be undone.
- **D. Approve:** Names the action - "Send 3 emails" - so a tap is a clear choice, not a reflex.
- **E. Decline:** Always there. Declining skips this step and nothing runs.

### Do and Avoid

- **Do:** Says what, to whom, and that it is final. The button names the action. (Send 3 emails?Lumen Studio · Hart & Co · Okafor DesignEmails can’t be unsent.Send 3 emails)
- **Avoid:** "Continue? OK" says nothing about what will happen. People tap it without reading. (Continue?OKCancel)
- **Do:** Safe steps run on their own. The gate appears only before the step that cannot be undone. (✓ Found 3 unpaid invoices✓ Drafted 3 remindersSend 3 emails? - 1 question, at the step that matters)
- **Avoid:** A gate on every step. By the 4th, people approve without reading - including the 1 that matters. (Allow reading invoices? ✓Allow drafting? ✓Allow opening mail? ✓Allow sending? ✓)

### Writing

- Ask as a question with the real numbers: "Send 3 emails?", "Move 42 files to Archive?".
- Name the action on the approve button. Not "OK", "Continue" or "Yes".
- Say whether it can be undone, in 1 line, before the buttons.
- Record the answer in the past tense, with no end punctuation: "Approved · 3 emails sent", "Declined · nothing was sent".

### Accessibility

- Announce "Needs your approval" in the polite status region (the part of the page a screen reader reads out on its own, without interrupting) when the gate appears.
- Do not steal focus. Make the gate the next stop for the Tab key, and reachable from a notification.
- Approve and decline are real buttons, at least 44 px, with the action in their names.
- Never pre-select approve for actions that cannot be undone, and never accept on Enter by default.

### Seen in

- **Claude in Chrome** (Chrome extension, checked Oct 2026): People choose Manually approve, Auto, or Skip all approvals. Per-site prompts offer "Allow this action", "Always allow on site" or "Decline". Some actions, like purchases and permanent deletion, stay blocked. [Claude Help: Chrome permissions guide](https://support.claude.com/en/articles/12902446-claude-in-chrome-permissions-guide)
- **Gemini Task** (Web and apps, checked Oct 2026): The agent confirms before sending, deleting, buying, submitting forms or signing in. If you deny an action, it does not try another route. [Gemini Help: Tasks](https://support.google.com/gemini/answer/16596215)
- **ChatGPT agent** (Web, apps and desktop, checked Jul 2025): The agent asks permission before consequential actions, and uses Watch Mode on critical sites such as email. [OpenAI: Introducing ChatGPT agent (17 Jul 2025)](https://openai.com/index/introducing-chatgpt-agent/)

### Related patterns

- Alternative to Intent preview and plan: Show the whole plan up front, instead of asking at 1 step.
- Often combined with Autonomy dial: Lets people choose which actions need a gate.
- Often combined with Activity log and undo: Where every approved and declined action is recorded.
- Often combined with Watch mode and takeover: Watch the agent work and step in at any time.

### Sources

- [AWS Cloudscape - User authorized actions](https://cloudscape.design/gen-ai/patterns/user-authorized-actions/)
- [Smashing Magazine - Designing agentic AI: practical UX patterns (Feb 2026)](https://smashingmagazine.com/2026/02/designing-agentic-ai-practical-ux-patterns/)
- [Apple ML Research - Mapping the design space of computer-use agents (Feb 2026)](https://machinelearning.apple.com/research/mapping)
- [Apple WWDC26 - Explore advanced App Intents features for Siri and Apple Intelligence](https://developer.apple.com/videos/play/wwdc2026/343/)
- [Apple WWDC26 - Secure your app: mitigate risks to agentic features](https://developer.apple.com/videos/play/wwdc2026/347/)

## Autonomy dial

Let people set how much the agent may do alone, from ask-every-time to just-do-it.

- ID: AX-DEL-03
- Moment: 7 Delegate - "Can it act for me?"
- Maturity: emerging
- Also called: Autonomy level, Auto-approve, Permission mode
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/autonomy-dial
- Licence: CC BY 4.0 (text and figures)

### Story

> When an AI agent (an AI that can take actions for me) does the same kinds of jobs for me every day, I want to choose which ones it may do alone and which ones wait for me. Then I am not asked about small things and not surprised by big ones.

- **Setting:** Amara lets the shop assistant handle customer messages - replies and refunds.
- **Trigger:** 3 messages come in: 1 question, 1 small refund and 1 big refund.
- **Without it:** The agent asks about all 3. By the 3rd tap she approves without reading - or she turns asking off for everything.
- **With it:** The dial is set to "Ask for big ones". The reply and the small refund go through on their own. Only ₦45,000 waits.
- **Outcome:** She approves 1 refund and sees which 2 the agent did alone.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Dial set | The current level and its rule in words: "Refunds over ₦20,000 wait for you." | Idle. | set once, change any time | - |
| Working | Each job, tagged "Done alone" or "Waiting for you". | Acts below the line, stops above it. | - | Working |
| Waiting | Only the jobs above the line, with the action named on the button. | Paused on those jobs only. | when a job crosses the line | Needs your approval |
| Approve | The person approves or says not now. | Paused. | on tap | - |
| Report | A count of what was done alone and with you: "3 done · 2 alone, 1 with you". | Idle. | when done | Done |

### On each device

- **Phone:** The dial is a 3-step control at the top of the agent's screen. The rule for the current level sits under it in 1 line.
- **Tablet:** As on desktop.
- **Desktop:** The dial sits in a column beside the work, so people see the setting and its effect together. More detail - 1 dial per kind of job - can open in settings.

### Use when

- The agent does the same kinds of jobs again and again, and some are riskier than others.
- People's trust grows over time - they want to start careful and loosen up.
- There is a clear line people understand: an amount, "to people outside my team", "can it be undone".

### Don't use when

- The action must always ask, whatever the dial says - paying someone new, deleting for good. Use Approval gate instead.
- Every job is safe and undoable. Let it act, and show what it did. Use Activity log and undo instead.
- It is a 1-off task. Agree this run's steps instead of a lasting setting. Use Intent preview and plan instead.

### Anatomy

- **A. Dial:** 2 to 4 levels, from ask every time to just do it. The current 1 is filled.
- **B. Rule in words:** What the level means for this agent, with the real line: ₦20,000.
- **C. Done alone:** A tag on each job the agent did without asking.
- **D. Waiting:** Only the jobs above the line stop here.
- **E. Approve:** Names the action and the amount.

### Do and Avoid

- **Do:** Each level says what it does. The rule names the real line. (How much can it do alone?Ask every timeAsk for big onesJust do itRefunds over ₦20,000 wait for you.)
- **Avoid:** "Medium" says nothing about which refunds will go out alone. (AutonomyLowMediumHighMedium)
- **Do:** Each job says whether the agent did it alone or with you. (✓ Reply to Chidi · Done alone✓ Refund ₦8,000 · Done aloneRefund ₦45,000? · Waiting for you)
- **Avoid:** People can't tell what the dial let through, so they can't tell if it is set right. (All done ✓3 messages handled)

### Writing

- Name levels by what happens: "Ask every time", "Ask for big ones", "Just do it". Not "Low", "Medium", "High".
- Put the real line in the rule: "Refunds over ₦20,000", "Emails to people outside the team".
- Tag results "Done alone" or "Approved by you", so people can check the setting.
- Say the level can change: 1 short line and a link to the dial.

### Accessibility

- Build the dial as a radio group (a set of options where only 1 can be picked) with a visible label, not as a slider with no steps.
- Each option's name says what it does, so it reads well on its own.
- "Done alone" and "Waiting for you" are words, not only colour dots.
- Announce "Needs your approval" when a job stops, and the count when there are several.

### Seen in

- **Claude in Chrome** (Chrome extension, checked Nov 2026): A drop-down on the chat input sets the mode: "Manually approve", "Automatically approve" (a safety check reviews each action) or "Skip all approvals". Some actions ask in every mode. [Claude Help: Chrome permissions guide](https://support.claude.com/en/articles/12902446-claude-in-chrome-permissions-guide)
- **ChatGPT Work** (Web, apps and desktop, checked Jul 2026): People decide what the agent can access, when it needs approval before acting, and when it should check in. [OpenAI: ChatGPT for your most ambitious work (9 Jul 2026)](https://openai.com/index/chatgpt-for-your-most-ambitious-work/)

### Related patterns

- Often combined with Approval gate: What a job above the line looks like when it stops.
- Often combined with Activity log and undo: Where people check what the agent did alone.
- Alternative to Intent preview and plan: Agree each run's plan instead of a lasting level.
- Often combined with Scheduled and background agents: Agents that run without you need a level set in advance.

### Sources

- [Smashing Magazine - Designing agentic AI: practical UX patterns (Feb 2026)](https://smashingmagazine.com/2026/02/designing-agentic-ai-practical-ux-patterns/)
- [Feng, McDonald, Zhang - Levels of Autonomy for AI Agents (arXiv, 2025)](https://arxiv.org/abs/2506.12469)
- [Apple WWDC25 - What’s new in Xcode 26](https://developer.apple.com/videos/play/wwdc2025/247/)
- [Apple WWDC26 - Inside Apple Intelligence and Xcode: Special Presentation](https://developer.apple.com/videos/play/wwdc2026/382/)

## Watch mode and takeover

Let people watch an agent work and step in at any moment.

- ID: AX-DEL-04
- Moment: 7 Delegate - "Can it act for me?"
- Maturity: emerging
- Also called: Watch mode, Take over, Live view
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/watch-and-takeover
- Licence: CC BY 4.0 (text and figures)

### Story

> When an AI agent (an AI that can take actions for me) works in a website or app for me, I want to watch what it does and take the controls the moment it goes wrong. Then I can fix 1 thing without starting over.

- **Setting:** Hannah asks the agent to renew her residents' parking permit on the council site.
- **Trigger:** The agent picks a car from last year's permit - the car she sold in May.
- **Without it:** A spinner runs, then says Done. She finds the old car on the form only at the end.
- **With it:** She sees "Choosing the car: WR11 KTE" in the live view, taps Take over and picks the new car.
- **Outcome:** She taps Hand back. The agent carries on from her choice and stops at payment.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asked | The ask. | Starts. | 0 s | - |
| Live view | The page the agent is using, and 1 line of what it is doing now. | Works and narrates. | while it works | Working. Live view open |
| Narrating | Each choice in words, as it happens: "Choosing the car: WR11 KTE". | Works. | each step | - |
| Taken over | "You're in control · the agent is paused". The agent's cursor is gone. | Paused. Does not touch the page. | on tap, at any moment | You have control. The agent is paused |
| You fix it | The person changes what they need to. The log shows what they did. | Paused. | - | - |
| Handed back | "Carrying on with YB24 LMN" - the agent says it saw the change. | Resumes from the person's state, not from the start. | on tap | Agent resumed |
| Done | A past-tense result, stopped before payment. | Idle. | when done | Done |

### On each device

- **Phone:** The narration sits in the thread and the live view is a card under it. Take over opens the page full screen. Long tasks often run elsewhere and send a notification when they need the person.
- **Tablet:** As on desktop.
- **Desktop:** The chat and narration on the left, the live page on the right. Take over and Stop sit under the live view, always visible.

### Use when

- The agent clicks and types in real websites or apps, where a wrong field is easy to miss.
- Some steps need the person's own hands - a sign-in, a password, a card number.
- People are new to the agent and want to see it work before they trust it.

### Don't use when

- The work takes an hour or runs at night. Nobody will watch it - report back instead. Use Scheduled and background agents instead.
- Only 1 step needs a person, and it is known in advance. Stop and ask at that step. Use Approval gate instead.
- There is no page to watch, only text. Show the steps instead. Use Thinking and processing steps instead.

### Anatomy

- **A. Live view:** The real page the agent is using, updated as it works.
- **B. Narration:** 1 line of what the agent is doing now, with the real value.
- **C. Take over:** Pauses the agent and gives the person the controls. Always there.
- **D. Stop:** Ends the task. Different from take over - nothing resumes.
- **E. Where it is:** The field the agent is working in, marked so the eye finds it.

### Do and Avoid

- **Do:** Take over pauses the agent and keeps the work so far. (✓ Filled in your address● Choosing the car: WR11 KTETake overStop)
- **Avoid:** Stop is the only way in. To fix 1 field, the person loses everything and starts again. (✓ Filled in your address● Choosing the car: WR11 KTEStop)
- **Do:** After hand back, the agent names the change and carries on from there. (✎ You chose YB24 LMN● Carrying on with YB24 LMN)
- **Avoid:** The agent starts again from the top and may pick the old car again. (✎ You chose YB24 LMN● Opening the permits page)

### Writing

- Narrate in the present tense with the real value: "Choosing the car: WR11 KTE".
- Say who is in control in plain words: "You're in control · the agent is paused".
- After hand back, name what changed: "Carrying on with YB24 LMN".
- Keep "Take over" and "Stop" as 2 different words, because they do 2 different things.

### Accessibility

- Put narration in a polite live region (the part of the page a screen reader reads out on its own, without interrupting). Announce only changes of step, not every keystroke.
- Announce control changes: "You have control. The agent is paused" and "Agent resumed".
- Take over and Stop are real buttons, reachable by keyboard at all times, not only on hover.
- Show who is in control with words and an icon, not only a coloured border.

### Seen in

- **ChatGPT agent** (Web, apps and desktop, checked Jul 2025): The agent narrates on screen. People can interrupt or take over the browser at any time, and Watch Mode is used for critical tasks such as email. OpenAI has since moved the agent into ChatGPT Work. [OpenAI: Introducing ChatGPT agent (17 Jul 2025)](https://openai.com/index/introducing-chatgpt-agent/)
- **Gemini Task** (Web and apps, checked Nov 2026): "View live" opens the browser Gemini is using. "Take over task" gives you the controls, and "Go back to Gemini" hands them back. Tasks pause at sign-in steps until you take over. [Gemini Help: Tasks](https://support.google.com/gemini/answer/16596215)
- **Windows Copilot Actions** (Windows, checked Nov 2025): The agent works in a separate Agent Workspace desktop. People can check in on progress or take over the task at any time. [Windows Insider Blog (17 Nov 2025)](https://blogs.windows.com/windows-insider/2025/11/17/copilot-on-windows-copilot-actions-begins-rolling-out-to-windows-insiders/)

### Related patterns

- Often combined with Approval gate: The agent stops at the risky step even while being watched.
- Often combined with Stop generation: Stop ends the run. Take over pauses it.
- Often combined with Activity log and undo: Records what the agent did and what the person did during takeover.
- Alternative to Intent preview and plan: Agree the steps first, instead of watching them happen.

### Sources

- [Google PAIR - Errors + Graceful Failure](https://pair.withgoogle.com/chapter/errors-failing/)
- [Apple ML Research - Mapping the design space of computer-use agents (Feb 2026)](https://machinelearning.apple.com/research/mapping)

## Activity log and undo

Record every action an agent took, and let people undo the ones they can.

- ID: AX-DEL-05
- Moment: 7 Delegate - "Can it act for me?"
- Maturity: emerging
- Also called: Audit log, Action history, Undo
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/activity-log
- Licence: CC BY 4.0 (text and figures)

### Story

> When an AI agent (an AI that can take actions for me) has changed things for me, I want a list of each thing it did and a way to undo the ones I don't want. Then I can trust it with real work.

- **Setting:** Oliver asks the agent to clear Thursday afternoon for a big wedding order.
- **Trigger:** The agent is done. Then he remembers: the design review with Ama is about his new boxes.
- **Without it:** The agent says only "I tidied your week". He has to search his calendar, and the agent can't put it back.
- **With it:** A log lists 5 actions with times. He finds "Declined Design review with Ama" and taps Undo.
- **Outcome:** The meeting is back, and the log adds a line: "You accepted Design review again".

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Report | A header with the count, the time span and how long undo works. Then 1 line per action. | Idle. | when the task ends | Task complete |
| Find it | Each line has a time, a past-tense verb and the target. Steps that only read something say "Nothing changed". | Idle. | - | - |
| Undo | The person taps Undo on 1 line. Lines that can't be undone say so, and offer a fix instead. | Reverses that 1 action. | on tap | - |
| Undone | The line is struck through, "Undone by you", and a new line records the undo. | Idle. | about 1 s | Action undone |

### On each device

- **Phone:** The log sits in the thread under the result, newest action last. Each Undo is a 44 px target at the end of its line.
- **Tablet:** As on desktop.
- **Desktop:** The chat on the left, the log in a pane on the right. Times sit in a fixed column so the eye can scan them.

### Use when

- The agent changes more than 1 thing - files, meetings, emails, records.
- Some of its actions can be reversed, and people will want to reverse 1 without losing the rest.
- People need to check later what happened - for a manager, a client or themselves.

### Don't use when

- The action can't be undone and matters - ask before it, not only log after it. Use Approval gate instead.
- The agent only reads and answers. There is nothing to undo - show its steps instead. Use Thinking and processing steps instead.
- People want to go back to a whole earlier version of 1 document. Use Version history and checkpoints instead.

### Anatomy

- **A. Header:** How many actions, when, and how long undo works.
- **B. 1 line per action:** Time, past-tense verb and target. Steps that only read something are listed too, marked "Nothing changed".
- **C. Undo:** On each line that can be reversed. Undoes that line only.
- **D. Can't undo:** Said in words on lines that can't be reversed, like a sent email.

### Do and Avoid

- **Do:** 1 line per action, each with its own undo. (09:02 Read 34 emails09:04 Declined Design review · Undo09:05 Moved 1:1 with Sipho · Undo09:06 Emailed Ama · can’t undo)
- **Avoid:** "Undo all" throws away the 2 changes he wanted to keep, and still can't unsend the email. (I tidied your week: declined 2 meetings, moved 1 and emailed Ama.Undo all)
- **Do:** Says it can't be undone and offers the next best thing. (09:06 Emailed AmaSent · can’t undo · Draft a correction)
- **Avoid:** An Undo that can't really unsend the email. People think it's fixed when it isn't. (09:06 Emailed AmaUndo)

### Writing

- Write each line as a past-tense verb and its target: "Declined Design review with Ama".
- Say how long undo works, once, in the header: "Undo works for 24 hours".
- For actions that can't be reversed, say so: "Sent · can't undo". Offer a fix if there is one.
- Record the undo as a new line, starting with "You": "You accepted Design review again".

### Accessibility

- Mark the log up as an ordered list, oldest first, with the time in each item's text.
- Each Undo button names its action: "Undo: Declined Design review with Ama".
- Announce "Action undone" politely after an undo, and keep focus on that line.
- Struck-through text also says "Undone by you" in words, for people who can't see the line.

### Seen in

- **Cursor** (Desktop, checked Nov 2026): Checkpoints save the agent's edits automatically. "Restore Checkpoint" on an earlier request rolls them back. They cover only agent changes and are kept apart from Git. [Cursor docs: Checkpoints](https://docs.cursor.com/agent/chat/checkpoints)
- **Gemini Task** (Web and apps, checked Nov 2026): The work panel has a "Files" list of the files Gemini read or updated during the task. [Gemini Help: Tasks](https://support.google.com/gemini/answer/16596215)
- **Windows Copilot Actions** (Windows, checked Nov 2025): The Agent Workspace is described as "auditable". People can review what actions have been taken. [Windows Insider Blog (17 Nov 2025)](https://blogs.windows.com/windows-insider/2025/11/17/copilot-on-windows-copilot-actions-begins-rolling-out-to-windows-insiders/)

### Related patterns

- Often combined with Approval gate: Ask before what can't be undone. The log records the answer.
- Often combined with Autonomy dial: The more the agent does alone, the more people need the log.
- Alternative to Version history and checkpoints: Go back to a whole earlier version, instead of undoing 1 action.
- Often combined with Scheduled and background agents: Agents that ran while you were away report back with a log.

### Sources

- [Smashing Magazine - Designing agentic AI: practical UX patterns (Feb 2026)](https://smashingmagazine.com/2026/02/designing-agentic-ai-practical-ux-patterns/)
- [AWS Cloudscape - Timeline overview](https://cloudscape.design/gen-ai/patterns/timeline-overview/)
- [Apple Human Interface Guidelines - Generative AI](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Apple WWDC25 - What’s new in Xcode 26](https://developer.apple.com/videos/play/wwdc2025/247/)

## Escalation and human handoff

Hand over to a person cleanly when the AI should not go on.

- ID: AX-DEL-06
- Moment: 7 Delegate - "Can it act for me?"
- Maturity: established
- Also called: Talk to a human, Handoff, Escalate
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/escalation
- Licence: CC BY 4.0 (text and figures)

### Story

> When an AI assistant can't solve my problem, I want it to pass me to a person who already knows the story. Then I don't have to explain it all again.

- **Setting:** Wanjiru opens the help chat: she was charged twice for October.
- **Trigger:** The assistant finds the 2 payments, but it is not allowed to refund.
- **Without it:** A person joins and asks "How can I help you today?" She types the whole story again.
- **With it:** The assistant says who it is passing her to, the wait, and what they will see.
- **Outcome:** Otieno from Billing joins, names the 2 payments, and starts the refund.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asked | The problem. | Reads it. | 0 s | - |
| AI tries | The assistant, marked AI, finds what it can: 2 payments, 4 minutes apart. | Answers. | - | Generating a response |
| Can't go on | The person asks for a human. Or the AI says what it can't do and offers a person: "Shall I pass this to them?" | Stops trying. | as soon as it knows | - |
| Handoff | Who it goes to, that it is a person, the wait, and what they will see. | Hands over the chat and a short summary. | - | Connecting you to a person |
| Person joins | A clear change of voice: "Otieno · Billing team". The first message uses the facts. | Silent. | after the wait | Otieno from Billing joined |
| Solved | What the person did, in 1 past-tense line. | Silent. | - | - |

### On each device

- **Phone:** The handoff happens in the same thread. The person can leave the app - the reply arrives as a notification, with the chat kept.
- **Tablet:** As on the phone.
- **Desktop:** As on the phone. If the wait is long, offer another way in the same card - "Email me when Billing replies".

### Use when

- The AI can't finish the job - it is not allowed to refund, decide or change the thing.
- The topic is risky or upsetting - money, health, safety, a complaint.
- The person asks for a human, in any words - "agent", "a real person", "someone".

### Don't use when

- The AI only needs 1 more detail to go on. Ask 1 clear question instead.
- The AI can do it, but the action is risky. Ask the person for a yes instead. Use Approval gate instead.
- Nobody is on hand to pick it up. Don't promise a person - say what they can do next. Use Error, refusal and limits instead.

### Anatomy

- **A. Where it goes:** The team, and that it is a person. While waiting, the wait time.
- **B. What they will see:** The facts the AI found, and the chat so far. The person can check it is right.
- **C. Who is talking:** The person's name and team, clearly not the AI.
- **D. First message:** Uses the facts, so the person never repeats the story.
- **E. AI label:** The assistant is marked AI from the start.

### Do and Avoid

- **Do:** Says who, how long, and what is passed on. (Passing you to BillingA person will reply here · usual wait 3 minWhat Billing will see: 2 payments on 3 Oct)
- **Avoid:** "An agent" could be another bot. No wait time, and no sign the story goes with her. (Connecting you to an agentPlease wait…)
- **Do:** The AI says what it can't do and offers a person straight away. (AI · AssistantI can’t refund payments. A person in Billing can. Shall I pass this to them?Yes, pass it on)
- **Avoid:** The AI loops. The person has to guess the magic words to reach a human. (AI · AssistantSorry, I didn’t get that. Could you rephrase?Sorry, I didn’t get that…)

### Writing

- Say what the AI can't do, then offer a person: "I can't refund payments. A person in Billing can."
- Name the team and say it is a person: "Passing you to Billing - a person will reply here."
- Give the wait in minutes or place in line, not "shortly".
- The human's first message uses the facts already found, so it is clear they read them.

### Accessibility

- Announce "Connecting you to a person" and then who joined, in the polite status region (the part of the page a screen reader reads out on its own, without interrupting).
- Name every speaker in text, not only with an avatar or colour.
- Keep focus in the composer (the box where people type) through the handoff, so people can keep typing.
- Don't time people out while they wait. If the chat must close, say so and offer another way.

### Seen in

- **Microsoft Copilot Studio** (Agent builder, checked Nov 2026): People can ask for a live agent at any point, for example "talk to agent". The live agent can get the full conversation history and the details collected so far. [Microsoft Learn: Hand off to a live agent](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-hand-off)
- **Intercom Fin** (Customer support, checked Nov 2026): Fin always hands off when that is the safest option, for example for self-harm or high-risk medical, legal or financial advice. It escalates into the team's usual inbox and rules. [Intercom Help: Fin AI Agent explained](https://www.intercom.com/help/en/articles/7120684-fin-chatbot-explained)

### Related patterns

- Often combined with Error, refusal and limits: When the AI can't help, a person is 1 of the ways forward.
- Often combined with Summary: The short summary that goes with the chat to the person.
- Alternative to Approval gate: The AI can act, but asks the person for a yes first.
- Often combined with AI label and disclosure: Marks which messages come from the AI and which from a person.

### Sources

- [Smashing Magazine - Designing agentic AI: practical UX patterns (Feb 2026)](https://smashingmagazine.com/2026/02/designing-agentic-ai-practical-ux-patterns/)
- [Google PAIR - Errors + Graceful Failure](https://pair.withgoogle.com/chapter/errors-failing/)

## Agent workspace and management

Give people 1 place to see, start and manage the agents working for them.

- ID: AX-DEL-07
- Moment: 7 Delegate - "Can it act for me?"
- Maturity: speculative
- Also called: Agent dashboard, Fleet view, Task board
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/agent-workspace
- Licence: CC BY 4.0 (text and figures)

### Story

> When several AI agents (AIs that can take actions for me) are working for me at once, I want 1 place that shows which ones need me. Then I can unblock them first and leave the rest alone.

- **Setting:** Siobhán has 4 agents running: invoices, a weekly report, travel and a supplier check.
- **Trigger:** The supplier check has been waiting for her yes since 07:15.
- **Without it:** Each agent lives in its own chat. She opens 4 threads to find the 1 that is stuck.
- **With it:** The list puts "Needs you" at the top, in words. She opens it beside the list.
- **Outcome:** She approves Kente Ltd. The agent is running again, and "None need you" shows at the top.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Workspace | A count by status, then 1 row per agent: name, what it is doing, time, status. | Agents keep working. | on open | - |
| Needs you | The agent waiting for a person sits first and says so in words. | That agent is paused. | while it waits | 1 agent needs you |
| Hunt for it | With newest first, the waiting agent is at the bottom - on a phone, off the bottom of the screen. | Still paused. | - | - |
| Open it | The agent's work so far and its question. Pause and Stop are always there. | Paused. | on tap | - |
| Answer | The person approves. The row changes to Running. | Resumes. | on tap | - |
| Back to list | The count updates: "None need you". | Agents keep working. | - | Supplier check is running again |

### On each device

- **Phone:** A list, with agents that need you first. Opening 1 fills the screen, with a back link to the list. Waiting agents also send a notification.
- **Tablet:** As on desktop.
- **Desktop:** The list on the left, the open agent on the right. People can work down the list without losing their place.

### Use when

- People run 3 or more agents, or the same agent many times, and lose track of them in chat.
- Agents wait for people, and a waiting agent costs time.
- People need to start, pause or stop agents, not only read what they did.

### Don't use when

- People run 1 task at a time. Keep its status in the chat. Use Long-running tasks and notifications instead.
- The only thing to do is say yes to 1 action. Send the question to the person, not to a dashboard. Use Approval gate instead.
- Agents run on a timetable and people only want the results. Use Scheduled and background agents instead.

### Anatomy

- **A. Count:** How many agents are in each status, needs-you first.
- **B. Status in words:** Needs you, Stopped, Running, Done - with an icon, not colour alone.
- **C. Needs you first:** Agents waiting for a person sort to the top.
- **D. What it is doing:** A line of progress: "Step 3 of 5 · drafting reminders".
- **E. New agent:** Start an agent from the same place you manage them.

### Do and Avoid

- **Do:** Sorted by what needs a person. The waiting agent is the first thing seen. (Supplier check · Needs youTravel booking · StoppedInvoice chaser · RunningWeekly report · Done)
- **Avoid:** Newest first. The agent that has waited longest sinks to the bottom. (Invoice chaser · RunningWeekly report · DoneTravel booking · StoppedSupplier check · Needs you)
- **Do:** Status in words and an icon. It reads the same in any colour. (Supplier check⚠ Needs you)
- **Avoid:** A dot alone. Needs you and Stopped are both warm colours and look alike. (Supplier check●)

### Writing

- Name agents by their job, not a model name: "Invoice chaser", "Supplier check".
- Use the same 4 status words everywhere: "Needs you", "Stopped", "Running", "Done".
- Write progress as step and action: "Step 3 of 5 · drafting reminders".
- Say why an agent stopped, in 1 line: "Card declined at checkout".

### Accessibility

- Status is a word in each row's name, not only a colour or icon.
- Announce "1 agent needs you" politely when an agent starts waiting, not on every progress change.
- Each row is 1 link or button, at least 44 px tall, named by the agent and its status.
- When an agent opens beside the list, move focus to its heading, and back to the row on close.

### Seen in

- **Gemini Task** (Web and apps, checked Nov 2026): Task threads sit in the sidebar, and up to 15 can run at once. A progress chip opens each task's work panel. A Scheduled page lists schedules to pause or resume. [Gemini Help: Tasks](https://support.google.com/gemini/answer/16596215)
- **Microsoft 365 Copilot** (Web and desktop, checked May 2026): The redesigned app puts agents, conversations and history in a rail on the left side. [Help Net Security (29 May 2026)](https://www.helpnetsecurity.com/2026/05/29/microsoft-365-copilot-redesign/)

### Related patterns

- Often combined with Approval gate: What people see when they open an agent that "Needs you".
- Often combined with Scheduled and background agents: Scheduled agents show up here between runs.
- Often combined with Activity log and undo: Open an agent to see each thing it did.
- Alternative to Long-running tasks and notifications: For 1 long task, a status in the chat is enough.

### Sources

- [AWS Cloudscape - Agent management](https://cloudscape.design/gen-ai/patterns/agent-management/)
- [Microsoft Design - Designs for the frontier future (May 2025)](https://microsoft.design/articles/designs-for-the-frontier-future/)
- [Apple WWDC26 - Inside Apple Intelligence and Xcode: Special Presentation](https://developer.apple.com/videos/play/wwdc2026/382/)
- [Apple WWDC26 - Xcode, agents, and you](https://developer.apple.com/videos/play/wwdc2026/259/)

## Scheduled and background agents

Let an agent run on a schedule or in the background, and report back briefly.

- ID: AX-DEL-08
- Moment: 7 Delegate - "Can it act for me?"
- Maturity: emerging
- Also called: Scheduled tasks, Routines, Background jobs
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/scheduled-agents
- Licence: CC BY 4.0 (text and figures)

### Story

> When I need the same check done every day, I want an agent (an AI that can take actions for me) to run it on a schedule while I am away and tell me only what changed. Then I can act on it in a minute.

- **Setting:** Mei asks the agent to check 3 job boards every weekday at 8:00.
- **Trigger:** On Tuesday it runs at 8:00 while she makes breakfast.
- **Without it:** She checks 3 boards by hand each morning. Or she gets a long log and misses the 1 good job in line 6.
- **With it:** A notification says "3 new jobs · 1 fits your rate", and names the job.
- **Outcome:** She opens the contract review and replies. The card shows the next run: Wed 8:00.

### States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Schedule set | 1 card: the name, when it runs, what it does, the next run, Pause and Edit. | Waits for the time. | once | - |
| Running | If the person looks: "Running now · board 2 of 3". Usually nobody is looking. | Works in the background. | at 8:00 | - |
| Reports back | 1 notification with what changed, not what it did. | Idle until the next run. | when the run ends | Daily job check finished |
| Needs you | The run stopped at a step only the person can do. It says which step, and what is already done. | Paused. Keeps the work so far. | as soon as it is stuck | Daily job check needs you |
| Opens it | The short report in the chat, with the 1 item that matters marked and an action on it. | Idle. | on tap | - |
| Next run | The card shows when it runs next, with Pause and Edit. | Waits. | - | - |

### On each device

- **Phone:** The report arrives as a notification, often on the lock screen, so the first line must carry the news. Tapping it opens the report in the chat.
- **Tablet:** As on desktop.
- **Desktop:** A notice appears in the corner of the app, and the report sits in the chat. A list of schedules lets people pause or edit each one.

### Use when

- The same check or task repeats - daily, weekly, or when something happens.
- The result matters only when something changed.
- The work can finish without the person - it reads, collects or drafts.

### Don't use when

- The person needs the answer now. Run it while they wait. Use Long-running tasks and notifications instead.
- Each run sends, pays or deletes, and nobody is there to stop it. Ask first. Use Approval gate instead.
- Nothing changes from day to day. A daily note would only be noise.

### Anatomy

- **A. Which run:** The agent's name, when it ran, and how much it covered.
- **B. What changed:** 1 line with the news and the numbers.
- **C. The 1 that matters:** Marked in the list, with the reason: fits your rate.
- **D. Schedule controls:** Next run, Pause and Edit, always 1 tap away.

### Do and Avoid

- **Do:** The first line is the news. It works on a lock screen. (Assistant · nowDaily job check3 new jobs · 1 fits your rate: contract review, due Fri)
- **Avoid:** The first line is the log. The good job is cut off after 2 lines. (Assistant · nowDaily job checkFinished. 8:00 Opened board 1. 8:00 Searched…)
- **Do:** Says which step needs the person, and that the rest is kept. (Daily job check needs youBoard 3 asks you to sign in. 2 of 3 boards are done.)
- **Avoid:** "Task failed" - she can't tell why, or whether to start again. (Daily job checkTask failed.)

### Writing

- Name the agent by its job: "Daily job check", not "Task 3".
- Put the news first, with numbers: "3 new jobs · 1 fits your rate".
- When it is stuck, say the step and what is done: "Board 3 asks you to sign in. 2 of 3 boards are done."
- Show the next run as a day and time: "Next run: Wed 8:00".

### Accessibility

- The notification's first line makes sense alone - it is what screen readers and watches read first.
- Announce a finished run only if the app is open: "Daily job check finished".
- Pause and Edit are real buttons with the agent's name in them.
- Give times as words and numbers, not only a clock icon: "Every weekday at 8:00".

### Seen in

- **ChatGPT Work** (Web, apps and desktop, checked Jul 2026): Scheduled Tasks repeat a task on a schedule or when an event happens, or watch for changes over time - for example, checking dashboards each morning and sending a report. [OpenAI: ChatGPT for your most ambitious work (9 Jul 2026)](https://openai.com/index/chatgpt-for-your-most-ambitious-work/)
- **Gemini Task** (Web and apps, checked Nov 2026): People tell Gemini when to run a task, such as a daily 8AM update. "More options" on the task chip pauses or resumes it. Schedules do not run if the device is off. [Gemini Help: Tasks](https://support.google.com/gemini/answer/16596215)
- **Claude Dispatch** (Phone and desktop, checked Nov 2026): People assign a task from their phone and the desktop does the work. A push notification arrives when it is done or needs approval. A cloud session keeps working when the computer is off. [Claude Help: Dispatch](https://support.claude.com/en/articles/13947068-assign-tasks-to-claude-from-anywhere-in-cowork)

### Related patterns

- Often combined with Autonomy dial: Decide in advance what the agent may do while nobody is watching.
- Often combined with Activity log and undo: The full record of a run, behind the short report.
- Often combined with Agent workspace and management: 1 place to see every schedule and pause it.
- Alternative to Long-running tasks and notifications: 1 long task the person starts and waits for, instead of a repeating one.

### Sources

- [Apple Human Interface Guidelines - Generative AI](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Smashing Magazine - Designing agentic AI: practical UX patterns (Feb 2026)](https://smashingmagazine.com/2026/02/designing-agentic-ai-practical-ux-patterns/)
- [Apple WWDC26 - What’s new in Shortcuts](https://developer.apple.com/videos/play/wwdc2026/310/)
