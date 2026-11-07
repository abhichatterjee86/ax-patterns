# Approval gate

Before an agent does something it cannot undo, show it and ask for a yes.

- ID: AX-DEL-02
- Moment: 7 Delegate - "Can it act for me?"
- Maturity: emerging
- Also called: Confirm action, Human in the loop, Permission prompt
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/approval-gate
- Licence: CC BY 4.0 (text and figures)

## Story

> When an AI agent (an AI that can take actions for me) is about to do something that affects other people or cannot be undone, I want it to stop and show me exactly what it will do. Then I stay in charge of what goes out in my name.

- **Setting:** Kofi asks the agent to chase 3 unpaid invoices.
- **Trigger:** The agent has drafted 3 emails and is about to send them.
- **Without it:** The emails go out at once - 1 of them to a client who paid yesterday.
- **With it:** The agent stops and shows who gets what, and that emails can't be unsent.
- **Outcome:** Kofi checks the 3 names, taps Send 3 emails, and the chat records what he approved.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asked | The ask. | Starts work. | 0 s | - |
| Working | Safe steps run without asking - finding, reading, drafting. | Works. | - | Working |
| Asks first | The agent pauses: "Waiting for you", what it will do, to whom, and whether it can be undone. | Paused - does nothing until answered. | before the action | Needs your approval |
| Answer | The person approves, edits first, or declines. | Paused. | on tap | - |
| Doing it | The action runs, with its name: "Sending 3 emails". | Acts. | - | - |
| Recorded | A past-tense line stays in the chat: "Approved · 3 emails sent" or "Declined · nothing was sent". | Idle. | when done | Done, or Skipped |

## On each device

- **Phone:** The gate sits at the bottom of the thread, by the thumb. It can also arrive as a push notification when the agent works in the background.
- **Tablet:** As on the phone.
- **Desktop:** The gate sits in the thread above the composer. Long details - a full command, a full email - open in an expandable section.

## Use when

- An agent can send, buy, delete, publish, or change something other people see.
- The action cannot be undone, or undoing it is costly.
- The person is responsible for the result - it goes out in their name or with their money.

## Don't use when

- The step is safe and undoable, like reading or drafting. Asking every time trains people to approve without looking. Use Autonomy dial instead.
- People want to see the whole plan before anything starts. Use Intent preview and plan instead.
- People want to watch and step in while it works. Use Watch mode and takeover instead.

## Anatomy

- **A. Paused status:** "Waiting for you" - the agent has stopped and will not go on alone.
- **B. Exactly what:** The action and its targets, in full: who gets the email, which files move.
- **C. Can it be undone:** 1 line on the consequence, in amber when it cannot be undone.
- **D. Approve:** Names the action - "Send 3 emails" - so a tap is a clear choice, not a reflex.
- **E. Decline:** Always there. Declining skips this step and nothing runs.

## Do and Avoid

- **Do:** Says what, to whom, and that it is final. The button names the action. (Send 3 emails?Lumen Studio · Hart & Co · Okafor DesignEmails can’t be unsent.Send 3 emails)
- **Avoid:** "Continue? OK" says nothing about what will happen. People tap it without reading. (Continue?OKCancel)
- **Do:** Safe steps run on their own. The gate appears only before the step that cannot be undone. (✓ Found 3 unpaid invoices✓ Drafted 3 remindersSend 3 emails? - 1 question, at the step that matters)
- **Avoid:** A gate on every step. By the 4th, people approve without reading - including the 1 that matters. (Allow reading invoices? ✓Allow drafting? ✓Allow opening mail? ✓Allow sending? ✓)

## Writing

- Ask as a question with the real numbers: "Send 3 emails?", "Move 42 files to Archive?".
- Name the action on the approve button. Not "OK", "Continue" or "Yes".
- Say whether it can be undone, in 1 line, before the buttons.
- Record the answer in the past tense, with no end punctuation: "Approved · 3 emails sent", "Declined · nothing was sent".

## Accessibility

- Announce "Needs your approval" in the polite status region (the part of the page a screen reader reads out on its own, without interrupting) when the gate appears.
- Do not steal focus. Make the gate the next stop for the Tab key, and reachable from a notification.
- Approve and decline are real buttons, at least 44 px, with the action in their names.
- Never pre-select approve for actions that cannot be undone, and never accept on Enter by default.

## Seen in

- **Claude in Chrome** (Chrome extension, checked Oct 2026): People choose Manually approve, Auto, or Skip all approvals. Per-site prompts offer "Allow this action", "Always allow on site" or "Decline". Some actions, like purchases and permanent deletion, stay blocked. [Claude Help: Chrome permissions guide](https://support.claude.com/en/articles/12902446-claude-in-chrome-permissions-guide)
- **Gemini Task** (Web and apps, checked Oct 2026): The agent confirms before sending, deleting, buying, submitting forms or signing in. If you deny an action, it does not try another route. [Gemini Help: Tasks](https://support.google.com/gemini/answer/16596215)
- **ChatGPT agent** (Web, apps and desktop, checked Jul 2025): The agent asks permission before consequential actions, and uses Watch Mode on critical sites such as email. [OpenAI: Introducing ChatGPT agent (17 Jul 2025)](https://openai.com/index/introducing-chatgpt-agent/)

## Related patterns

- Alternative to Intent preview and plan: Show the whole plan up front, instead of asking at 1 step.
- Often combined with Autonomy dial: Lets people choose which actions need a gate.
- Often combined with Activity log and undo: Where every approved and declined action is recorded.
- Often combined with Watch mode and takeover: Watch the agent work and step in at any time.

## Sources

- [AWS Cloudscape - User authorized actions](https://cloudscape.design/gen-ai/patterns/user-authorized-actions/)
- [Smashing Magazine - Designing agentic AI: practical UX patterns (Feb 2026)](https://smashingmagazine.com/2026/02/designing-agentic-ai-practical-ux-patterns/)
- [Apple ML Research - Mapping the design space of computer-use agents (Feb 2026)](https://machinelearning.apple.com/research/mapping)
- [Apple WWDC26 - Explore advanced App Intents features for Siri and Apple Intelligence](https://developer.apple.com/videos/play/wwdc2026/343/)
- [Apple WWDC26 - Secure your app: mitigate risks to agentic features](https://developer.apple.com/videos/play/wwdc2026/347/)
