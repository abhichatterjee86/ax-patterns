# Don't use when - and what to use instead

From every pattern's "Don't use when" section. Source: https://axpatterns.design. CC BY 4.0.

#### Entry point and AI button
- The AI does 1 small job on 1 thing, like rewriting the selected text - put the action right there. → use **Inline action on selection**
- The whole product is the chat, so there is no other page to open it from. → use **Prompt composer**
- People need to know what the AI can do before they use the door. → use **Capability disclosure**

#### Capability disclosure
- People already know the tool well - a short line and example asks are enough. → use **Suggested prompts**
- The limit only matters for 1 action - say it at that action. → use **Error, refusal and limits**
- You need to learn about the person before you can say what is useful to them. → use **Smart onboarding**

#### Suggested prompts
- The person is already mid-task - suggest the next step instead. → use **Follow-up suggestions**
- The examples would be generic, like "Ask me anything" - say what the AI can do instead. → use **Capability disclosure**
- People need whole finished starting points, not 1-line asks. → use **Templates and example gallery**

#### Templates and example gallery
- Most asks are short questions - a few example asks are enough. → use **Suggested prompts**
- Every ask needs the same few fields - give people a form. → use **Structured prompt**
- People need to see the limits first, not examples. → use **Capability disclosure**

#### Proactive nudges
- People are in the middle of typing or a task with a deadline - wait, or offer it when they ask. → use **Inline action on selection**
- The offer is general, like "Need help?" - show example asks instead. → use **Suggested prompts**
- The AI would act, not just offer - ask first, before acting. → use **Approval gate**

#### Smart onboarding
- The AI can learn the fact from the first ask - ask then, in the moment, not up front.
- People only need to know what the tool does, not set it up. → use **Capability disclosure**
- The facts are personal and change often - let people manage what the AI remembers. → use **Memory controls**

#### Prompt composer
- The AI needs 3 or 4 exact values, like dates and a budget - give it fields. → use **Structured prompt**
- The ask is always 1 of a few jobs, like summarise or translate - give it buttons. → use **Quick actions**
- People act on something already on screen - put the action where the selection is. → use **Inline action on selection**

#### Attachments and context chips
- The context is the page people are already on - attach it for them as 1 chip. → use **Entry point and AI button**
- People want to show the AI something live, like a camera view or their screen. → use **Multimodal input**
- The files are part of a long-running project - keep them in the project, not each message. → use **Agent workspace and management**

#### Voice input
- People want a spoken conversation, with the AI talking back - that is voice mode. → use **Voice output and live transcript**
- People need to show something as well as say it. → use **Multimodal input**
- The ask is a short choice from a list - taps are faster than speech. → use **Quick actions**

#### Multimodal input
- People only need to attach documents to read - files are enough. → use **Attachments and context chips**
- Speech alone does the job - a spoken ask with no picture. → use **Voice input**
- The AI must act on the screen, not only look - that needs an agent (an AI that can take actions for you) people can watch. → use **Watch mode and takeover**

#### Structured prompt
- The ask is open and creative, and fields would box people in. → use **Prompt composer**
- People need ideas for what to ask, not a place for exact values. → use **Suggested prompts**
- People want to change 1 thing after the first answer, like length or tone. → use **Adjust length and tone**

#### Prompt enhancer
- The AI needs a few exact values. Ask for them with fields instead of guessing them. → use **Structured prompt**
- The exact words matter, like a quote, a name or a line of code. A rewrite can break them.
- People want to change the result, not the ask - shorter, warmer, more formal. → use **Adjust length and tone**

#### Inline action on selection
- The job is about the whole thing, like summarising a long email. → use **Quick actions**
- People start from nothing - there is no text to select yet. → use **Prompt composer**
- People want to change the AI's answer by hand, word by word. → use **Edit output and revert to AI**

#### Quick actions
- The job is about 1 part of the item, like 1 sentence. → use **Inline action on selection**
- The jobs vary too much to name in 1 or 2 words. → use **Prompt composer**
- The action would send, post or delete something. That needs a check first. → use **Approval gate**

#### Mode and model selection
- The product can pick well on its own. Offer Auto as the default, and keep the picker for people who want to change it.
- The difference is only how long or formal the answer is. → use **Adjust length and tone**
- The ask needs exact values, not a way of working. → use **Structured prompt**

#### Thinking and processing steps
- Answers start in under a second - streaming alone is enough. → use **Streaming response**
- There is only 1 stage. Say what it is instead of inventing steps. → use **Specific loading messages**
- The work runs for minutes while people do something else. → use **Long-running tasks and notifications**

#### Streaming response
- The output is a table, chart or form that only makes sense when complete. Show a skeleton (a grey outline of the shape to come), then the whole thing. → use **Generative UI and structured output**
- The AI is working for minutes on a task, not writing - show steps instead of text. → use **Thinking and processing steps**
- The answer is under 1 second. Streaming then only adds flicker.

#### Specific loading messages
- The answer starts in under 1 second. A message would only flicker. → use **Streaming response**
- The work has several stages people may want to check afterwards. → use **Thinking and processing steps**
- The work takes minutes. People should be free to leave. → use **Long-running tasks and notifications**

#### Long-running tasks and notifications
- The answer comes within about 10 seconds. People will wait for it. → use **Specific loading messages**
- People want to watch each step and step in. → use **Watch mode and takeover**
- The task should run again and again on a schedule. → use **Scheduled and background agents**

#### Update mid-run
- The answer takes a few seconds. Stopping and asking again costs little. → use **Stop generation**
- The change throws out the whole ask. Start a new version instead. → use **Regenerate, edit and branches**
- People should agree the plan before any work starts. → use **Intent preview and plan**

#### Side pane and artifacts
- The answer is short and read once - keep it in the chat. → use **Streaming response**
- The output is a small interactive card - a chart, a booking - that fits in the thread. → use **Generative UI and structured output**
- People need to watch an agent (an AI that takes actions for you) work, not read its output. → use **Agent workspace and management**

#### Generative UI and structured output
- The answer is 1 fact or 1 sentence. A sentence is faster to read than a card.
- The output is long writing or code that people will edit. → use **Side pane and artifacts**
- People want to change the wording, not the data - that is a request for the chat. → use **Adjust length and tone**

#### Variations
- There is 1 right answer - a fact, a sum, a date. Several versions only cause doubt.
- People want 1 more try, not a set to compare. → use **Regenerate, edit and branches**
- People already know the change they want - shorter, more formal. → use **Adjust length and tone**

#### Summary
- The source is short. A summary of 3 lines adds reading instead of saving it.
- Every word matters - a contract, a dose, a legal notice. Show the key passages as they are written.
- People asked a question and want the answer with its sources. → use **Citations and sources**

#### Confidence display
- The display would not change what people do. If they check everything anyway, a score is noise.
- The question is where a claim came from, not how sure the AI is. → use **Citations and sources**
- The AI cannot do the task at all. Say so plainly instead of showing a low score. → use **Error, refusal and limits**

#### Follow-up suggestions
- The person is deep in a focused task, like writing. Suggestions pull them away.
- No answer has been given yet - help people start instead. → use **Suggested prompts**
- People want to change this answer, not ask a new question. → use **Adjust length and tone**

#### Voice output and live transcript
- The answer is a table, code or a long list. It does not work spoken. → use **Generative UI and structured output**
- The place is quiet or shared - an office, a ward at night. Start in text and offer read aloud.
- People want to speak their ask but read the answer. → use **Voice input**

#### Stop generation
- The AI is doing things, not only writing. Stopping must also say what it already did. → use **Watch mode and takeover**
- People want to change the direction, not end it. → use **Update mid-run**
- Answers are always instant - there is nothing to stop. → use **Streaming response**

#### Regenerate, edit and branches
- People want to change a part of the answer, not all of it. → use **Edit output and revert to AI**
- People want shorter, longer or a different tone - give them those as 1 tap. → use **Adjust length and tone**
- People need to compare several options side by side at once. → use **Variations**

#### Adjust length and tone
- The content is wrong. A new tone will not fix it. → use **Regenerate, edit and branches**
- People want to fix 1 word or 1 number. → use **Edit output and revert to AI**
- People do not know yet how it should sound. → use **Variations**

#### Edit output and revert to AI
- The whole answer is wrong. Ask again. → use **Regenerate, edit and branches**
- The change is about the whole text - shorter, more formal. → use **Adjust length and tone**
- People need every version of a long document, not only the AI's and theirs. → use **Version history and checkpoints**

#### Draft mode and review
- The AI writes something new from nothing - there is nothing to compare with. → use **Side pane and artifacts**
- The change is small, safe and easy to undo, like a tone tweak on a chat answer. → use **Adjust length and tone**
- People need to go back to an older whole version, not judge single changes. → use **Version history and checkpoints**

#### Granular feedback
- People want to fix this answer now, not report it. → use **Regenerate, edit and branches**
- The answer was blocked or failed - say why and offer a way on first. → use **Error, refusal and limits**
- People judge many small items in a row, like 20 suggestions. A form on each one slows them down. A thumb is enough there.

#### Version history and checkpoints
- The output is a short chat answer - versions under the answer are enough. → use **Regenerate, edit and branches**
- People need to judge each small change before it lands. → use **Draft mode and review**
- People need a record of what an agent did in the world, like emails sent. Those cannot be restored. → use **Activity log and undo**

#### Citations and sources
- The output is creative or personal, like a poem or a birthday message - there is nothing to cite.
- The AI did not use any source. Do not invent links to look grounded - say so plainly. → use **Error, refusal and limits**
- The person wants to know why the AI decided something, not where a fact came from. → use **Explanation**

#### AI label and disclosure
- Everything on the screen is AI, like a chat answer - 1 label on the area is enough, not 1 per line.
- People need to know what the AI may get wrong in general, not which part it made. → use **Disclaimer**
- People need the sources behind a claim, not only that the AI wrote it. → use **Citations and sources**

#### Disclaimer
- People need to know which content the AI made, not what it may get wrong. → use **AI label and disclosure**
- The AI cannot or should not answer at all - say so, and offer a way on. → use **Error, refusal and limits**
- People need to see how sure the AI is about each part. → use **Confidence display**

#### Error, refusal and limits
- The AI could answer, but is unsure - show how sure it is instead. → use **Confidence display**
- The AI needs more detail to answer - ask a question, not an error. → use **Escalation and human handoff**
- An agent (an AI that can take actions for you) is about to do something risky - ask first, before anything fails. → use **Approval gate**

#### Memory controls
- People want 1 chat that is not saved or remembered at all. → use **Temporary chat**
- The question is whether data is used to train the AI, not what it remembers about 1 person. → use **Consent and data controls**
- The AI only uses the current chat and remembers nothing after it - there is nothing to control.

#### Consent and data controls
- The question is about what the AI remembers about 1 person, not training. → use **Memory controls**
- People want 1 chat to leave no trace at all. → use **Temporary chat**
- The AI is about to act on someone's behalf - ask about that action, not about data. → use **Approval gate**

#### Temporary chat
- People want to keep the chat but fix what the AI remembers. → use **Memory controls**
- The worry is the AI training on (learning from) all chats, not 1 chat - give a setting for that. → use **Consent and data controls**
- The work needs to last - a project, a long document. A temporary chat would lose it.

#### Explanation
- People want to see the AI's steps while it works, not the reason for a result. → use **Thinking and processing steps**
- People need to check where facts came from. → use **Citations and sources**
- People need to know how sure the AI is, more than why. → use **Confidence display**

#### Intent preview and plan
- The task is 1 quick step - a plan for it is only an extra tap.
- Only 1 step is risky. Ask at that step instead of showing the whole plan. → use **Approval gate**
- People want to watch and steer while it works, not agree a plan first. → use **Watch mode and takeover**

#### Approval gate
- The step is safe and undoable, like reading or drafting. Asking every time trains people to approve without looking. → use **Autonomy dial**
- People want to see the whole plan before anything starts. → use **Intent preview and plan**
- People want to watch and step in while it works. → use **Watch mode and takeover**

#### Autonomy dial
- The action must always ask, whatever the dial says - paying someone new, deleting for good. → use **Approval gate**
- Every job is safe and undoable. Let it act, and show what it did. → use **Activity log and undo**
- It is a 1-off task. Agree this run's steps instead of a lasting setting. → use **Intent preview and plan**

#### Watch mode and takeover
- The work takes an hour or runs at night. Nobody will watch it - report back instead. → use **Scheduled and background agents**
- Only 1 step needs a person, and it is known in advance. Stop and ask at that step. → use **Approval gate**
- There is no page to watch, only text. Show the steps instead. → use **Thinking and processing steps**

#### Activity log and undo
- The action can't be undone and matters - ask before it, not only log after it. → use **Approval gate**
- The agent only reads and answers. There is nothing to undo - show its steps instead. → use **Thinking and processing steps**
- People want to go back to a whole earlier version of 1 document. → use **Version history and checkpoints**

#### Escalation and human handoff
- The AI only needs 1 more detail to go on. Ask 1 clear question instead.
- The AI can do it, but the action is risky. Ask the person for a yes instead. → use **Approval gate**
- Nobody is on hand to pick it up. Don't promise a person - say what they can do next. → use **Error, refusal and limits**

#### Agent workspace and management
- People run 1 task at a time. Keep its status in the chat. → use **Long-running tasks and notifications**
- The only thing to do is say yes to 1 action. Send the question to the person, not to a dashboard. → use **Approval gate**
- Agents run on a timetable and people only want the results. → use **Scheduled and background agents**

#### Scheduled and background agents
- The person needs the answer now. Run it while they wait. → use **Long-running tasks and notifications**
- Each run sends, pays or deletes, and nobody is there to stop it. Ask first. → use **Approval gate**
- Nothing changes from day to day. A daily note would only be noise.
