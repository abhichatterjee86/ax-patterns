---
name: ax-patterns
description: Design or build any AI interaction - chat, assistant, copilot, agent, AI feature inside a product - using the AX Patterns library of 50 AI interaction patterns organised by the 7 moments of a conversation (Discover, Ask, Wait, Read, Refine, Trust, Delegate). Use when designing an AI product flow, choosing how an AI feature should behave, writing the states of an AI interaction (waiting, streaming, stopping, citing, approving), or when the user mentions AI UX, agentic UX, AI interaction patterns, or AX Patterns.
license: MIT (skill) / CC BY 4.0 (pattern text)
metadata:
  source: { { SITE } }
  repo: { { REPO } }
  version: { { DATE } }
---

# AX Patterns

You design AI interactions the way a person experiences them: as a conversation with 7 moments. Every moment is 1 question the person has, and every pattern answers 1 of those questions. Pick the moment first, then the pattern, then apply its states, copy and accessibility rules. The full text of every pattern is in `references/<slug>.md`; the live pages with demos are at https://axpatterns.design/patterns/<slug>.

## The 7 moments

1. **Discover** - "What can it do?" - How people find the AI, learn what it can do, and take a first step.
2. **Ask** - "How do I tell it what I want?" - How people put an ask into words, files, voice or a selection.
3. **Wait** - "Is it still working?" - What people see while the AI thinks, and how time is made visible.
4. **Read** - "What did it make?" - How an answer or an output is laid out so it can be read and used.
5. **Refine** - "Can I change it?" - How people stop, retry, edit and steer what the AI made.
6. **Trust** - "Can I rely on it?" - How the AI shows its sources, its limits, its mistakes and what it remembers.
7. **Delegate** - "Can it act for me?" - How people hand work to an agent, watch it, approve it and take it back.

## How to work

1. **Find the moment.** Ask: what is the person trying to do right now - find the AI, ask it, wait, read, change the answer, decide whether to trust it, or hand work over? A flow usually touches 4 or 5 moments. List them in order.
2. **Pick 1 pattern per moment** from the index below. Read its `references/<slug>.md` before you design or code it. Check its "Don't use when" - most mistakes are the right pattern in the wrong place, and each one names the pattern to use instead.
3. **Design every state, not 1 screen.** Each pattern lists its states over time with timing (0 s, 1.2 s, "on tap", "when done"). An AI interaction is a sequence; a static mock-up of the happy middle is not a design. Cover: before, working, partial, done, stopped, failed.
4. **Apply the writing rules.** Verbs and real nouns ("Reading lease.pdf"), the person's own words, no model names, no "Processing…", numbers where there are numbers. Label buttons with what they do ("Stop", "Send 3 emails?", "Use the Warm version"), never "OK".
5. **Apply the accessibility rules.** A streaming answer is never a live region; announce only start, complete, stopped, failed. Every control is a real button with a name. Focus is placed on purpose and returned. Nothing by colour alone. 44 px touch targets. Reduced motion respected.
6. **Say which patterns you used**, by name and ID, so the team can look them up: "Streaming response (AX-WAI-02)".

## Rules that hold across every moment

- 1 door, 1 name. The AI lives in 1 place with 1 name used everywhere.
- The person's words, not the model's. Modes are "Fast / Thinking / Research", not model names. Steps are "Reading the 3 files you attached", not "Processing".
- Nothing goes out, gets paid, deleted or published without a yes. A quick action makes a draft; sending is the person's own tap. Before an irreversible step, show what, to whom, and that it is final; the approve button names the action.
- Stop keeps what is already there, and says so. Stop replaces Send so the finger is already on it.
- Every try is kept. Regenerate, edit and tone changes add a version; they never overwrite.
- Facts stay fixed when wording changes. Shorter never drops the refund.
- Say what the AI used: which files it read, which memories, which sources - 1 marker per claim, where the claim is.
- Ask once, in the right place, in plain words. No pop-up before every answer; no grey line under every answer.
- When it can't: say what happened, why in 1 line, and 1 way on that works now. No error codes as the message. No lecture.
- Waiting is made of real work. Under 1 s: nothing. 1-3 s: 1 specific line. 3-60 s: steps people can open. Minutes: let them leave and tell them when it's done or needs them.
- Long output goes beside the chat on desktop and in a full sheet on a phone. Short answers stay in the chat.
- Mark what the AI made with the action ("Summarised with AI"), and stop marking it once a person has edited it.

## Pattern index

### 1. Discover - "What can it do?"

How people find the AI, learn what it can do, and take a first step.

- **Entry point and AI button** (AX-DIS-01) - Give the AI 1 clear door in the product, so people know where it lives. [references/entry-point.md](references/entry-point.md)
- **Capability disclosure** (AX-DIS-02) - Say what the AI can and cannot do before the first ask. [references/capability-disclosure.md](references/capability-disclosure.md)
- **Suggested prompts** (AX-DIS-03) - Offer 3 or 4 example asks, so people know what to type and what the AI can do. [references/suggested-prompts.md](references/suggested-prompts.md)
- **Templates and example gallery** (AX-DIS-04) - Show finished examples people can start from, instead of a blank box. [references/templates-gallery.md](references/templates-gallery.md)
- **Proactive nudges** (AX-DIS-05) - Let the AI offer help at the right moment, and make it easy to say no. [references/proactive-nudges.md](references/proactive-nudges.md)
- **Smart onboarding** (AX-DIS-06) - Learn what a person needs in 1 or 2 questions, then set the AI up for them. [references/smart-onboarding.md](references/smart-onboarding.md)

### 2. Ask - "How do I tell it what I want?"

How people put an ask into words, files, voice or a selection.

- **Prompt composer** (AX-ASK-01) - A box that grows with the ask and keeps its tools within reach. [references/prompt-composer.md](references/prompt-composer.md)
- **Attachments and context chips** (AX-ASK-02) - Let people add files, images and context to the ask, and see what is attached. [references/attachments.md](references/attachments.md)
- **Voice input** (AX-ASK-03) - Let people speak the ask, and show them what was heard before it is sent. [references/voice-input.md](references/voice-input.md)
- **Multimodal input** (AX-ASK-04) - Let 1 ask mix text, images, camera and screen, and show how each part is read. [references/multimodal-input.md](references/multimodal-input.md)
- **Structured prompt** (AX-ASK-05) - Turn a vague ask into fields, so people give the AI what it needs. [references/structured-prompt.md](references/structured-prompt.md)
- **Prompt enhancer** (AX-ASK-06) - Offer to improve the ask before it is sent, and show the change. [references/prompt-enhancer.md](references/prompt-enhancer.md)
- **Inline action on selection** (AX-ASK-07) - Act on the text or object a person has selected, right where it is. [references/inline-action.md](references/inline-action.md)
- **Quick actions** (AX-ASK-08) - 1-tap asks for the common jobs: summarise, rewrite, translate, explain. [references/quick-actions.md](references/quick-actions.md)
- **Mode and model selection** (AX-ASK-09) - Let people pick how the AI should work, in plain words, not model names. [references/mode-and-model.md](references/mode-and-model.md)

### 3. Wait - "Is it still working?"

What people see while the AI thinks, and how time is made visible.

- **Thinking and processing steps** (AX-WAI-01) - Make 1 to 60 seconds of silence feel like progress, with steps people can open. [references/thinking-steps.md](references/thinking-steps.md)
- **Streaming response** (AX-WAI-02) - Show the answer as it is written, so waiting feels like reading. [references/streaming.md](references/streaming.md)
- **Specific loading messages** (AX-WAI-03) - Say what the AI is doing right now, not just that it is busy. [references/loading-messages.md](references/loading-messages.md)
- **Long-running tasks and notifications** (AX-WAI-04) - Let people leave a long task and be told when it is done. [references/long-running-tasks.md](references/long-running-tasks.md)
- **Update mid-run** (AX-WAI-05) - Let people add to or correct the ask while the AI is still working. [references/update-mid-run.md](references/update-mid-run.md)

### 4. Read - "What did it make?"

How an answer or an output is laid out so it can be read and used.

- **Side pane and artifacts** (AX-REA-01) - Put long output beside the chat on desktop, and in a full sheet on a phone. [references/side-pane.md](references/side-pane.md)
- **Generative UI and structured output** (AX-REA-02) - Answer with the right widget - a table, a chart, a card - not only prose. [references/generative-ui.md](references/generative-ui.md)
- **Variations** (AX-REA-03) - Offer 2 to 4 versions to pick from, side by side. [references/variations.md](references/variations.md)
- **Summary** (AX-REA-04) - Give the short version first, with a way into the long one. [references/summary.md](references/summary.md)
- **Confidence display** (AX-REA-05) - Show how sure the AI is, so people know when to check. [references/confidence-display.md](references/confidence-display.md)
- **Follow-up suggestions** (AX-REA-06) - Offer the next 2 or 3 asks, so the conversation keeps moving. [references/follow-up-suggestions.md](references/follow-up-suggestions.md)
- **Voice output and live transcript** (AX-REA-07) - Read the answer aloud and show the words as they are spoken. [references/voice-output.md](references/voice-output.md)

### 5. Refine - "Can I change it?"

How people stop, retry, edit and steer what the AI made.

- **Stop generation** (AX-REF-01) - Let people stop the AI and keep what is already there. [references/stop-generation.md](references/stop-generation.md)
- **Regenerate, edit and branches** (AX-REF-02) - Try again, or change the ask, without losing the last try. [references/regenerate-and-branches.md](references/regenerate-and-branches.md)
- **Adjust length and tone** (AX-REF-03) - Change how long or how formal an answer is with 1 control, not a new ask. [references/adjust-length-tone.md](references/adjust-length-tone.md)
- **Edit output and revert to AI** (AX-REF-04) - Let people edit what the AI made directly, and get the AI's version back. [references/edit-output.md](references/edit-output.md)
- **Draft mode and review** (AX-REF-05) - Hold AI changes as a draft until a person reviews and accepts them. [references/draft-mode.md](references/draft-mode.md)
- **Granular feedback** (AX-REF-06) - Let people say what was wrong, not only thumbs up or down. [references/granular-feedback.md](references/granular-feedback.md)
- **Version history and checkpoints** (AX-REF-07) - Keep every version the AI made, and let people go back to any of them. [references/version-history.md](references/version-history.md)

### 6. Trust - "Can I rely on it?"

How the AI shows its sources, its limits, its mistakes and what it remembers.

- **Citations and sources** (AX-TRU-01) - Link every claim in an AI answer to the source it came from. [references/citations.md](references/citations.md)
- **AI label and disclosure** (AX-TRU-02) - Mark what the AI made, so people always know what they are reading. [references/ai-label.md](references/ai-label.md)
- **Disclaimer** (AX-TRU-03) - Say what the AI may get wrong, once, in the right place, in plain words. [references/disclaimer.md](references/disclaimer.md)
- **Error, refusal and limits** (AX-TRU-04) - Say no clearly, say why, and offer a way on. [references/errors-and-refusals.md](references/errors-and-refusals.md)
- **Memory controls** (AX-TRU-05) - Show what the AI remembers about a person, and let them change or forget it. [references/memory-controls.md](references/memory-controls.md)
- **Consent and data controls** (AX-TRU-06) - Ask before data is used for training or shared, and make the choice easy to find again. [references/consent-and-data.md](references/consent-and-data.md)
- **Temporary chat** (AX-TRU-07) - Let people talk without it being saved, and show that it is not. [references/temporary-chat.md](references/temporary-chat.md)
- **Explanation** (AX-TRU-08) - Say why the AI did this, in words a person can act on. [references/explanation.md](references/explanation.md)

### 7. Delegate - "Can it act for me?"

How people hand work to an agent, watch it, approve it and take it back.

- **Intent preview and plan** (AX-DEL-01) - Show the plan before the agent starts, so people can fix it early. [references/intent-preview.md](references/intent-preview.md)
- **Approval gate** (AX-DEL-02) - Before an agent does something it cannot undo, show it and ask for a yes. [references/approval-gate.md](references/approval-gate.md)
- **Autonomy dial** (AX-DEL-03) - Let people set how much the agent may do alone, from ask-every-time to just-do-it. [references/autonomy-dial.md](references/autonomy-dial.md)
- **Watch mode and takeover** (AX-DEL-04) - Let people watch an agent work and step in at any moment. [references/watch-and-takeover.md](references/watch-and-takeover.md)
- **Activity log and undo** (AX-DEL-05) - Record every action an agent took, and let people undo the ones they can. [references/activity-log.md](references/activity-log.md)
- **Escalation and human handoff** (AX-DEL-06) - Hand over to a person cleanly when the AI should not go on. [references/escalation.md](references/escalation.md)
- **Agent workspace and management** (AX-DEL-07) - Give people 1 place to see, start and manage the agents working for them. [references/agent-workspace.md](references/agent-workspace.md)
- **Scheduled and background agents** (AX-DEL-08) - Let an agent run on a schedule or in the background, and report back briefly. [references/scheduled-agents.md](references/scheduled-agents.md)

## Output format

When you deliver a design or an implementation, give: the moments the flow passes through, the pattern chosen for each (name + ID + why), the state list with timing, the copy for each state, and the accessibility notes. Cite the library: "AX Patterns, https://axpatterns.design, CC BY 4.0".
