# Watch mode and takeover

Let people watch an agent work and step in at any moment.

- ID: AX-DEL-04
- Moment: 7 Delegate - "Can it act for me?"
- Maturity: emerging
- Also called: Watch mode, Take over, Live view
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/watch-and-takeover
- Licence: CC BY 4.0 (text and figures)

## Story

> When an AI agent (an AI that can take actions for me) works in a website or app for me, I want to watch what it does and take the controls the moment it goes wrong. Then I can fix 1 thing without starting over.

- **Setting:** Hannah asks the agent to renew her residents' parking permit on the council site.
- **Trigger:** The agent picks a car from last year's permit - the car she sold in May.
- **Without it:** A spinner runs, then says Done. She finds the old car on the form only at the end.
- **With it:** She sees "Choosing the car: WR11 KTE" in the live view, taps Take over and picks the new car.
- **Outcome:** She taps Hand back. The agent carries on from her choice and stops at payment.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Asked | The ask. | Starts. | 0 s | - |
| Live view | The page the agent is using, and 1 line of what it is doing now. | Works and narrates. | while it works | Working. Live view open |
| Narrating | Each choice in words, as it happens: "Choosing the car: WR11 KTE". | Works. | each step | - |
| Taken over | "You're in control · the agent is paused". The agent's cursor is gone. | Paused. Does not touch the page. | on tap, at any moment | You have control. The agent is paused |
| You fix it | The person changes what they need to. The log shows what they did. | Paused. | - | - |
| Handed back | "Carrying on with YB24 LMN" - the agent says it saw the change. | Resumes from the person's state, not from the start. | on tap | Agent resumed |
| Done | A past-tense result, stopped before payment. | Idle. | when done | Done |

## On each device

- **Phone:** The narration sits in the thread and the live view is a card under it. Take over opens the page full screen. Long tasks often run elsewhere and send a notification when they need the person.
- **Tablet:** As on desktop.
- **Desktop:** The chat and narration on the left, the live page on the right. Take over and Stop sit under the live view, always visible.

## Use when

- The agent clicks and types in real websites or apps, where a wrong field is easy to miss.
- Some steps need the person's own hands - a sign-in, a password, a card number.
- People are new to the agent and want to see it work before they trust it.

## Don't use when

- The work takes an hour or runs at night. Nobody will watch it - report back instead. Use Scheduled and background agents instead.
- Only 1 step needs a person, and it is known in advance. Stop and ask at that step. Use Approval gate instead.
- There is no page to watch, only text. Show the steps instead. Use Thinking and processing steps instead.

## Anatomy

- **A. Live view:** The real page the agent is using, updated as it works.
- **B. Narration:** 1 line of what the agent is doing now, with the real value.
- **C. Take over:** Pauses the agent and gives the person the controls. Always there.
- **D. Stop:** Ends the task. Different from take over - nothing resumes.
- **E. Where it is:** The field the agent is working in, marked so the eye finds it.

## Do and Avoid

- **Do:** Take over pauses the agent and keeps the work so far. (✓ Filled in your address● Choosing the car: WR11 KTETake overStop)
- **Avoid:** Stop is the only way in. To fix 1 field, the person loses everything and starts again. (✓ Filled in your address● Choosing the car: WR11 KTEStop)
- **Do:** After hand back, the agent names the change and carries on from there. (✎ You chose YB24 LMN● Carrying on with YB24 LMN)
- **Avoid:** The agent starts again from the top and may pick the old car again. (✎ You chose YB24 LMN● Opening the permits page)

## Writing

- Narrate in the present tense with the real value: "Choosing the car: WR11 KTE".
- Say who is in control in plain words: "You're in control · the agent is paused".
- After hand back, name what changed: "Carrying on with YB24 LMN".
- Keep "Take over" and "Stop" as 2 different words, because they do 2 different things.

## Accessibility

- Put narration in a polite live region (the part of the page a screen reader reads out on its own, without interrupting). Announce only changes of step, not every keystroke.
- Announce control changes: "You have control. The agent is paused" and "Agent resumed".
- Take over and Stop are real buttons, reachable by keyboard at all times, not only on hover.
- Show who is in control with words and an icon, not only a coloured border.

## Seen in

- **ChatGPT agent** (Web, apps and desktop, checked Jul 2025): The agent narrates on screen. People can interrupt or take over the browser at any time, and Watch Mode is used for critical tasks such as email. OpenAI has since moved the agent into ChatGPT Work. [OpenAI: Introducing ChatGPT agent (17 Jul 2025)](https://openai.com/index/introducing-chatgpt-agent/)
- **Gemini Task** (Web and apps, checked Nov 2026): "View live" opens the browser Gemini is using. "Take over task" gives you the controls, and "Go back to Gemini" hands them back. Tasks pause at sign-in steps until you take over. [Gemini Help: Tasks](https://support.google.com/gemini/answer/16596215)
- **Windows Copilot Actions** (Windows, checked Nov 2025): The agent works in a separate Agent Workspace desktop. People can check in on progress or take over the task at any time. [Windows Insider Blog (17 Nov 2025)](https://blogs.windows.com/windows-insider/2025/11/17/copilot-on-windows-copilot-actions-begins-rolling-out-to-windows-insiders/)

## Related patterns

- Often combined with Approval gate: The agent stops at the risky step even while being watched.
- Often combined with Stop generation: Stop ends the run. Take over pauses it.
- Often combined with Activity log and undo: Records what the agent did and what the person did during takeover.
- Alternative to Intent preview and plan: Agree the steps first, instead of watching them happen.

## Sources

- [Google PAIR - Errors + Graceful Failure](https://pair.withgoogle.com/chapter/errors-failing/)
- [Apple ML Research - Mapping the design space of computer-use agents (Feb 2026)](https://machinelearning.apple.com/research/mapping)
