# AX Patterns

**50 AI interaction patterns, as Markdown, agent skills and prompts.**
From [axpatterns.design](https://axpatterns.design) - a free library of AI interaction patterns (AI UX patterns) organised by the 7 moments of a conversation: Discover, Ask, Wait, Read, Refine, Trust, Delegate.

Every pattern has the story, every state over time, every device, when to use it and when not to, anatomy, do and avoid, writing and accessibility rules, the products it was seen in, related patterns and sources. The site has the same pages with live demos.

## Install the skills

```bash
npx skills add abhichatterjee86/ax-patterns
```

That installs all 6 skills into your AI coding tool (Claude Code, Cursor, Codex, GitHub Copilot, Gemini CLI, Windsurf, Cline, Kiro and 50+ others). Install 1 skill only with `--skill ax-patterns`. Then just ask in plain words - "design the waiting states for my research agent" - and the tool loads the matching skill by itself.

No `npx`? Copy a folder from `skills/` into your tool's skills directory (`.claude/skills/`, `.cursor/skills/`, `.agents/skills/`), or paste its `SKILL.md` into your rules file.

## The skills

| Skill                                                            | Use it when                                                                                                                                 |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [ax-patterns](skills/ax-patterns/SKILL.md)                       | Designing or building any AI interaction. The 7 moments, the index of all 50 patterns, the rules that hold everywhere. Start here. |
| [review-ai-ux](skills/review-ai-ux/SKILL.md)                     | Auditing an existing AI feature. Walks the moments, scores findings Blocker / Major / Minor, names the fix and the pattern.                 |
| [ai-wait-states](skills/ai-wait-states/SKILL.md)                 | Loading lines, thinking steps, streaming, stop, long tasks, mid-run updates - with timings and copy.                                        |
| [ai-trust-and-citations](skills/ai-trust-and-citations/SKILL.md) | Citations per claim, AI labels, disclaimers that get read, errors and refusals, confidence, explanations, memory, consent, temporary chats. |
| [agent-approval-gates](skills/agent-approval-gates/SKILL.md)     | Plans, approval gates, autonomy levels, watch and takeover, activity logs with undo, escalation, scheduled agents.                          |
| [ai-ux-copy](skills/ai-ux-copy/SKILL.md)                         | The words: buttons, placeholders, statuses, errors, labels, notifications - with the writing rules of every pattern.                        |

Each skill folder also carries the full text of the patterns it uses, under `references/`, so it works offline and never depends on the site being up.

## The patterns

[patterns/](patterns/README.md) - 1 Markdown file per pattern, in 7 moment folders. [patterns/ax-patterns-full.md](patterns/ax-patterns-full.md) is the whole library in 1 file (good for pasting into a chat or a RAG index).

### 1. Discover - "What can it do?"

How people find the AI, learn what it can do, and take a first step.

- **Entry point and AI button** (AX-DIS-01) - Give the AI 1 clear door in the product, so people know where it lives. [patterns/01-discover/entry-point.md](patterns/01-discover/entry-point.md)
- **Capability disclosure** (AX-DIS-02) - Say what the AI can and cannot do before the first ask. [patterns/01-discover/capability-disclosure.md](patterns/01-discover/capability-disclosure.md)
- **Suggested prompts** (AX-DIS-03) - Offer 3 or 4 example asks, so people know what to type and what the AI can do. [patterns/01-discover/suggested-prompts.md](patterns/01-discover/suggested-prompts.md)
- **Templates and example gallery** (AX-DIS-04) - Show finished examples people can start from, instead of a blank box. [patterns/01-discover/templates-gallery.md](patterns/01-discover/templates-gallery.md)
- **Proactive nudges** (AX-DIS-05) - Let the AI offer help at the right moment, and make it easy to say no. [patterns/01-discover/proactive-nudges.md](patterns/01-discover/proactive-nudges.md)
- **Smart onboarding** (AX-DIS-06) - Learn what a person needs in 1 or 2 questions, then set the AI up for them. [patterns/01-discover/smart-onboarding.md](patterns/01-discover/smart-onboarding.md)

### 2. Ask - "How do I tell it what I want?"

How people put an ask into words, files, voice or a selection.

- **Prompt composer** (AX-ASK-01) - A box that grows with the ask and keeps its tools within reach. [patterns/02-ask/prompt-composer.md](patterns/02-ask/prompt-composer.md)
- **Attachments and context chips** (AX-ASK-02) - Let people add files, images and context to the ask, and see what is attached. [patterns/02-ask/attachments.md](patterns/02-ask/attachments.md)
- **Voice input** (AX-ASK-03) - Let people speak the ask, and show them what was heard before it is sent. [patterns/02-ask/voice-input.md](patterns/02-ask/voice-input.md)
- **Multimodal input** (AX-ASK-04) - Let 1 ask mix text, images, camera and screen, and show how each part is read. [patterns/02-ask/multimodal-input.md](patterns/02-ask/multimodal-input.md)
- **Structured prompt** (AX-ASK-05) - Turn a vague ask into fields, so people give the AI what it needs. [patterns/02-ask/structured-prompt.md](patterns/02-ask/structured-prompt.md)
- **Prompt enhancer** (AX-ASK-06) - Offer to improve the ask before it is sent, and show the change. [patterns/02-ask/prompt-enhancer.md](patterns/02-ask/prompt-enhancer.md)
- **Inline action on selection** (AX-ASK-07) - Act on the text or object a person has selected, right where it is. [patterns/02-ask/inline-action.md](patterns/02-ask/inline-action.md)
- **Quick actions** (AX-ASK-08) - 1-tap asks for the common jobs: summarise, rewrite, translate, explain. [patterns/02-ask/quick-actions.md](patterns/02-ask/quick-actions.md)
- **Mode and model selection** (AX-ASK-09) - Let people pick how the AI should work, in plain words, not model names. [patterns/02-ask/mode-and-model.md](patterns/02-ask/mode-and-model.md)

### 3. Wait - "Is it still working?"

What people see while the AI thinks, and how time is made visible.

- **Thinking and processing steps** (AX-WAI-01) - Make 1 to 60 seconds of silence feel like progress, with steps people can open. [patterns/03-wait/thinking-steps.md](patterns/03-wait/thinking-steps.md)
- **Streaming response** (AX-WAI-02) - Show the answer as it is written, so waiting feels like reading. [patterns/03-wait/streaming.md](patterns/03-wait/streaming.md)
- **Specific loading messages** (AX-WAI-03) - Say what the AI is doing right now, not just that it is busy. [patterns/03-wait/loading-messages.md](patterns/03-wait/loading-messages.md)
- **Long-running tasks and notifications** (AX-WAI-04) - Let people leave a long task and be told when it is done. [patterns/03-wait/long-running-tasks.md](patterns/03-wait/long-running-tasks.md)
- **Update mid-run** (AX-WAI-05) - Let people add to or correct the ask while the AI is still working. [patterns/03-wait/update-mid-run.md](patterns/03-wait/update-mid-run.md)

### 4. Read - "What did it make?"

How an answer or an output is laid out so it can be read and used.

- **Side pane and artifacts** (AX-REA-01) - Put long output beside the chat on desktop, and in a full sheet on a phone. [patterns/04-read/side-pane.md](patterns/04-read/side-pane.md)
- **Generative UI and structured output** (AX-REA-02) - Answer with the right widget - a table, a chart, a card - not only prose. [patterns/04-read/generative-ui.md](patterns/04-read/generative-ui.md)
- **Variations** (AX-REA-03) - Offer 2 to 4 versions to pick from, side by side. [patterns/04-read/variations.md](patterns/04-read/variations.md)
- **Summary** (AX-REA-04) - Give the short version first, with a way into the long one. [patterns/04-read/summary.md](patterns/04-read/summary.md)
- **Confidence display** (AX-REA-05) - Show how sure the AI is, so people know when to check. [patterns/04-read/confidence-display.md](patterns/04-read/confidence-display.md)
- **Follow-up suggestions** (AX-REA-06) - Offer the next 2 or 3 asks, so the conversation keeps moving. [patterns/04-read/follow-up-suggestions.md](patterns/04-read/follow-up-suggestions.md)
- **Voice output and live transcript** (AX-REA-07) - Read the answer aloud and show the words as they are spoken. [patterns/04-read/voice-output.md](patterns/04-read/voice-output.md)

### 5. Refine - "Can I change it?"

How people stop, retry, edit and steer what the AI made.

- **Stop generation** (AX-REF-01) - Let people stop the AI and keep what is already there. [patterns/05-refine/stop-generation.md](patterns/05-refine/stop-generation.md)
- **Regenerate, edit and branches** (AX-REF-02) - Try again, or change the ask, without losing the last try. [patterns/05-refine/regenerate-and-branches.md](patterns/05-refine/regenerate-and-branches.md)
- **Adjust length and tone** (AX-REF-03) - Change how long or how formal an answer is with 1 control, not a new ask. [patterns/05-refine/adjust-length-tone.md](patterns/05-refine/adjust-length-tone.md)
- **Edit output and revert to AI** (AX-REF-04) - Let people edit what the AI made directly, and get the AI's version back. [patterns/05-refine/edit-output.md](patterns/05-refine/edit-output.md)
- **Draft mode and review** (AX-REF-05) - Hold AI changes as a draft until a person reviews and accepts them. [patterns/05-refine/draft-mode.md](patterns/05-refine/draft-mode.md)
- **Granular feedback** (AX-REF-06) - Let people say what was wrong, not only thumbs up or down. [patterns/05-refine/granular-feedback.md](patterns/05-refine/granular-feedback.md)
- **Version history and checkpoints** (AX-REF-07) - Keep every version the AI made, and let people go back to any of them. [patterns/05-refine/version-history.md](patterns/05-refine/version-history.md)

### 6. Trust - "Can I rely on it?"

How the AI shows its sources, its limits, its mistakes and what it remembers.

- **Citations and sources** (AX-TRU-01) - Link every claim in an AI answer to the source it came from. [patterns/06-trust/citations.md](patterns/06-trust/citations.md)
- **AI label and disclosure** (AX-TRU-02) - Mark what the AI made, so people always know what they are reading. [patterns/06-trust/ai-label.md](patterns/06-trust/ai-label.md)
- **Disclaimer** (AX-TRU-03) - Say what the AI may get wrong, once, in the right place, in plain words. [patterns/06-trust/disclaimer.md](patterns/06-trust/disclaimer.md)
- **Error, refusal and limits** (AX-TRU-04) - Say no clearly, say why, and offer a way on. [patterns/06-trust/errors-and-refusals.md](patterns/06-trust/errors-and-refusals.md)
- **Memory controls** (AX-TRU-05) - Show what the AI remembers about a person, and let them change or forget it. [patterns/06-trust/memory-controls.md](patterns/06-trust/memory-controls.md)
- **Consent and data controls** (AX-TRU-06) - Ask before data is used for training or shared, and make the choice easy to find again. [patterns/06-trust/consent-and-data.md](patterns/06-trust/consent-and-data.md)
- **Temporary chat** (AX-TRU-07) - Let people talk without it being saved, and show that it is not. [patterns/06-trust/temporary-chat.md](patterns/06-trust/temporary-chat.md)
- **Explanation** (AX-TRU-08) - Say why the AI did this, in words a person can act on. [patterns/06-trust/explanation.md](patterns/06-trust/explanation.md)

### 7. Delegate - "Can it act for me?"

How people hand work to an agent, watch it, approve it and take it back.

- **Intent preview and plan** (AX-DEL-01) - Show the plan before the agent starts, so people can fix it early. [patterns/07-delegate/intent-preview.md](patterns/07-delegate/intent-preview.md)
- **Approval gate** (AX-DEL-02) - Before an agent does something it cannot undo, show it and ask for a yes. [patterns/07-delegate/approval-gate.md](patterns/07-delegate/approval-gate.md)
- **Autonomy dial** (AX-DEL-03) - Let people set how much the agent may do alone, from ask-every-time to just-do-it. [patterns/07-delegate/autonomy-dial.md](patterns/07-delegate/autonomy-dial.md)
- **Watch mode and takeover** (AX-DEL-04) - Let people watch an agent work and step in at any moment. [patterns/07-delegate/watch-and-takeover.md](patterns/07-delegate/watch-and-takeover.md)
- **Activity log and undo** (AX-DEL-05) - Record every action an agent took, and let people undo the ones they can. [patterns/07-delegate/activity-log.md](patterns/07-delegate/activity-log.md)
- **Escalation and human handoff** (AX-DEL-06) - Hand over to a person cleanly when the AI should not go on. [patterns/07-delegate/escalation.md](patterns/07-delegate/escalation.md)
- **Agent workspace and management** (AX-DEL-07) - Give people 1 place to see, start and manage the agents working for them. [patterns/07-delegate/agent-workspace.md](patterns/07-delegate/agent-workspace.md)
- **Scheduled and background agents** (AX-DEL-08) - Let an agent run on a schedule or in the background, and report back briefly. [patterns/07-delegate/scheduled-agents.md](patterns/07-delegate/scheduled-agents.md)

## The prompts

[prompts/](prompts/README.md) - ready-to-paste prompts for ChatGPT, Claude, Gemini or Copilot, no install needed: critique my AI flow, pick the patterns for my product, write the waiting states, design an approval gate, write the AI UX copy, accessibility check.

## For AI tools and agents

- Every pattern as Markdown: `https://axpatterns.design/patterns/<slug>/markdown`; as JSON: `https://axpatterns.design/patterns/<slug>/json`
- The whole library in 1 file: `https://axpatterns.design/llms-full.txt`; the index: `https://axpatterns.design/llms.txt`
- A free, read-only MCP server: `https://axpatterns.design/mcp` (tools: `search_patterns`, `get_pattern`, `list_patterns`)

## How this repo is made

The content is generated from the site's own source, so it never drifts from [axpatterns.design](https://axpatterns.design). Fixes to a pattern's text go through the site: press **Suggest** on any pattern page, or open an issue here. Pull requests that change `patterns/` or `references/` directly will be overwritten by the next sync; pull requests for the skills and prompts are welcome.

Last synced: 2026-11-07.

## Licence

- Pattern text and figures (`patterns/`, `references/`): [CC BY 4.0](LICENSE-CONTENT.md) - quote, teach, build on them, with credit and a link.
- Skills, prompts and scripts: [MIT](LICENSE).

Written by [Abhi Chatterjee](https://axpatterns.design/about), Lead UX/UI Designer. Cite as: "AX Patterns by Abhi Chatterjee, https://axpatterns.design, CC BY 4.0".
