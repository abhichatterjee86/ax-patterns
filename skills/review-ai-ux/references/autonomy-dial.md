# Autonomy dial

Let people set how much the agent may do alone, from ask-every-time to just-do-it.

- ID: AX-DEL-03
- Moment: 7 Delegate - "Can it act for me?"
- Maturity: emerging
- Also called: Autonomy level, Auto-approve, Permission mode
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/autonomy-dial
- Licence: CC BY 4.0 (text and figures)

## Story

> When an AI agent does the same kinds of jobs for me every day, I want to choose which ones it may do alone and which ones wait for me, so I am not asked about small things and not surprised by big ones.

- **Setting:** Amara lets the shop assistant handle customer messages - replies and refunds.
- **Trigger:** 3 messages come in: 1 question, 1 small refund and 1 big refund.
- **Without it:** The agent asks about all 3. By the third tap she approves without reading - or she turns asking off for everything.
- **With it:** The dial is set to "Ask for big ones". The reply and the small refund just happen. Only ₦45,000 waits.
- **Outcome:** She approves 1 refund and sees which 2 the agent did alone.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Dial set | The current level and its rule in words: "Refunds over ₦20,000 wait for you." | Idle. | set once, change any time | - |
| Working | Each job, tagged "Done alone" or "Waiting for you". | Acts below the line, stops above it. | - | Working |
| Waiting | Only the jobs above the line, with the action named on the button. | Paused on those jobs only. | when a job crosses the line | Needs your approval |
| Approve | The person approves or says not now. | Paused. | on tap | - |
| Report | A count of what was done alone and with you: "3 done · 2 alone, 1 with you". | Idle. | when done | Done |

## On each device

- **Phone:** The dial is a 3-step control at the top of the agent's screen. The rule for the current level sits under it in 1 line.
- **Tablet:** As on desktop.
- **Desktop:** The dial sits in a column beside the work, so people see the setting and its effect together. More detail - 1 dial per kind of job - can open in settings.

## Use when

- The agent does the same kinds of jobs again and again, and some are riskier than others.
- People's trust grows over time - they want to start careful and loosen up.
- There is a clear line people understand: an amount, "to people outside my team", "can it be undone".

## Don't use when

- The action must always ask, whatever the dial says - paying someone new, deleting for good. Use Approval gate instead.
- Every job is safe and undoable. Let it act, and show what it did. Use Activity log and undo instead.
- It is a 1-off task. Agree this run's steps instead of a lasting setting. Use Intent preview and plan instead.

## Anatomy

- **A. Dial:** 2 to 4 levels, from ask every time to just do it. The current 1 is filled.
- **B. Rule in words:** What the level means for this agent, with the real line: ₦20,000.
- **C. Done alone:** A tag on each job the agent did without asking.
- **D. Waiting:** Only the jobs above the line stop here.
- **E. Approve:** Names the action and the amount.

## Do and Avoid

- **Do:** Each level says what it does. The rule names the real line. (How much can it do alone?Ask every timeAsk for big onesJust do itRefunds over ₦20,000 wait for you.)
- **Avoid:** "Medium" says nothing about which refunds will go out alone. (AutonomyLowMediumHighMedium)
- **Do:** Each job says whether the agent did it alone or with you. (✓ Reply to Chidi · Done alone✓ Refund ₦8,000 · Done aloneRefund ₦45,000? · Waiting for you)
- **Avoid:** People can't tell what the dial let through, so they can't tell if it is set right. (All done ✓3 messages handled)

## Writing

- Name levels by what happens: "Ask every time", "Ask for big ones", "Just do it". Not "Low", "Medium", "High".
- Put the real line in the rule: "Refunds over ₦20,000", "Emails to people outside the team".
- Tag results "Done alone" or "Approved by you", so people can check the setting.
- Say the level can change: 1 short line and a link to the dial.

## Accessibility

- Build the dial as a radio group with a visible label, not as a slider with no steps.
- Each option's name says what it does, so it reads well on its own.
- "Done alone" and "Waiting for you" are words, not only colour dots.
- Announce "Needs your approval" when a job stops, and the count when there are several.

## Seen in

- **Claude in Chrome** (Chrome extension, checked Nov 2026): A drop-down on the chat input sets the mode: "Manually approve", "Automatically approve" (a safety check reviews each action) or "Skip all approvals". Some actions ask in every mode. [Claude Help: Chrome permissions guide](https://support.claude.com/en/articles/12902446-claude-in-chrome-permissions-guide)
- **ChatGPT Work** (Web, apps and desktop, checked Jul 2026): People decide what the agent can access, when it needs approval before acting, and when it should check in. [OpenAI: ChatGPT for your most ambitious work (9 Jul 2026)](https://openai.com/index/chatgpt-for-your-most-ambitious-work/)

## Related patterns

- Often combined with Approval gate: What a job above the line looks like when it stops.
- Often combined with Activity log and undo: Where people check what the agent did alone.
- Alternative to Intent preview and plan: Agree each run's plan instead of a lasting level.
- Often combined with Scheduled and background agents: Agents that run without you need a level set in advance.

## Sources

- [Smashing Magazine - Designing agentic AI: practical UX patterns (Feb 2026)](https://smashingmagazine.com/2026/02/designing-agentic-ai-practical-ux-patterns/)
- [Feng, McDonald, Zhang - Levels of Autonomy for AI Agents (arXiv, 2025)](https://arxiv.org/abs/2506.12469)
- [Apple WWDC25 - What’s new in Xcode 26](https://developer.apple.com/videos/play/wwdc2025/247/)
- [Apple WWDC26 - Inside Apple Intelligence and Xcode: Special Presentation](https://developer.apple.com/videos/play/wwdc2026/382/)
