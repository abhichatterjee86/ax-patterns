---
name: agent-approval-gates
description: Design and implement how people hand work to an AI agent and stay in control - intent preview and plans, approval gates before irreversible actions, autonomy levels, watch mode and takeover, activity logs with undo, escalation to a human, agent workspaces, scheduled and background agents. Use when building agentic features, tool-using assistants, browser or computer-use agents, automations that send, pay, delete or publish, human-in-the-loop flows, permission prompts, or when the user asks how an agent should ask before acting.
license: MIT (skill) / CC BY 4.0 (pattern text)
metadata:
  source: { { SITE } }
  repo: { { REPO } }
  version: { { DATE } }
---

# Delegate: "Can it act for me?"

An agent earns autonomy the way a new colleague does: it shows the plan, asks before anything final, lets you watch, keeps a record, and hands over cleanly when it should not go on. Full text in `references/`.

## Pick the pattern by the risk and the moment

| Situation                                                                            | Pattern                                                            |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 3+ steps, a wrong early step spoils the rest, or the ask is ambiguous                | **Intent preview and plan** (AX-DEL-01) - before anything starts   |
| 1 step that cannot be undone: send, buy, delete, publish, change shared things       | **Approval gate** (AX-DEL-02) - at that step only                  |
| The same kinds of jobs repeat, some riskier than others                              | **Autonomy dial** (AX-DEL-03) - a lasting setting with a real line |
| Agent clicks and types in real sites or apps; some steps need the person's own hands | **Watch mode and takeover** (AX-DEL-04)                            |
| Agent changed several things; some can be reversed                                   | **Activity log and undo** (AX-DEL-05)                              |
| The AI can't finish, the topic is risky, or the person asks for a human              | **Escalation and human handoff** (AX-DEL-06)                       |
| 3+ agents, or the same agent many times; waiting agents cost time                    | **Agent workspace** (AX-DEL-07)                                    |
| The task repeats on a timetable and the result matters only when something changed   | **Scheduled and background agents** (AX-DEL-08)                    |

Plus, from Wait: **Update mid-run** (AX-WAI-05) to steer without stopping, and **Long-running tasks** (AX-WAI-04) when the person should be free to leave.

## The approval gate, exactly

- Gate only the step that cannot be undone. Safe, undoable steps (read, draft, compare) just run. A gate on every step trains people to approve without reading - including the 1 that matters.
- Ask as a question with the real numbers: "Send 3 emails?", "Move 42 files to Archive?", "Book 6 rooms at Sea Breeze, 14-15 March?"
- Say what, to whom, how much, and whether it can be undone, in 1 line before the buttons.
- The approve button names the action: "Send 3 emails", "Book 6 rooms". Never "OK", "Continue", "Yes", "Confirm".
- The decline is plain and safe: "Not now" / "Don't send". Never a guilt-trip label.
- Record the answer in the past tense, no end punctuation: "Approved · 3 emails sent", "Declined · nothing was sent".
- Announce "Needs your approval" politely; never steal focus; the gate is the next thing in tab order and reachable from a notification.
- Never pre-select approve; never accept on Enter by default; approve and decline at least 44 px.

## Plans, autonomy, watching

- Plan steps are a verb and real numbers: "Book a coach for 36", not "Handle transport" and not tool calls. Say the goal back with the details filled in. Name what the agent will use ("school card", "parent emails"). Start button carries the size: "Start · 4 steps". The approved plan becomes the progress list - done / now / next with icons and words.
- Autonomy levels are named by what happens - "Ask every time", "Ask for big ones", "Just do it" - never Low / Medium / High. The rule names the real line: "Refunds over ₦20,000", "Emails to people outside the team". Every result is tagged "Done alone" or "Approved by you". Some actions always ask, whatever the dial says: paying someone new, deleting for good. Build it as a radio group, not a stepless slider.
- Watch mode narrates in the present tense with the real value: "Choosing the car: WR11 KTE". Take over pauses the agent and keeps the work; "You're in control · the agent is paused". After hand back, the agent names the change and carries on from there - it does not restart from the top. "Take over" and "Stop" are 2 different buttons because they do 2 different things.

## The record, the handoff, the fleet

- Activity log: 1 line per action, past-tense verb + target ("Declined Design review with Ama"), oldest first, each with its own Undo named with the action. Say once in the header how long undo works. For irreversible actions say "Sent · can't undo" and offer the next best thing. An undo is a new line starting with "You". Never an "Undo all" that pretends to unsend an email.
- Escalation: say what the AI can't do, then offer a person at once: "I can't refund payments. A person in Billing can." Name the team, say it is a person, give the wait in minutes or place in line - never "shortly". The human's first message uses the facts already gathered. Don't loop; don't make people guess the magic words; don't time them out while they wait. If nobody is on hand, don't promise a person - say what they can do next.
- Workspace: name agents by their job ("Invoice chaser"), not a model. 4 status words everywhere: "Needs you", "Stopped", "Running", "Done". Sort by what needs a person first, not newest first. Progress as step + action: "Step 3 of 5 · drafting reminders". Why it stopped, in 1 line.
- Scheduled: the first line of the report is the news, with numbers: "3 new jobs · 1 fits your rate" - it must work on a lock screen. When stuck: which step, what is done, what it needs. Show the next run as a day and time. Each run that would send, pay or delete with nobody there must ask first - or not be scheduled.

## Implementation rules

- Every approval, takeover, undo, pause and edit control is a real button with the action and its target in the name: "Undo: Declined Design review with Ama", "Edit step 3, Book 32 pupil tickets".
- Status is a word in the row's name, not a dot. "Done alone" / "Waiting for you" / "Needs you" are text.
- Announce control changes: "You have control. The agent is paused", "Agent resumed", "Action undone". Announce "1 agent needs you" once when an agent starts waiting, not on every progress change.
- Narration goes in a polite live region and announces step changes only, not keystrokes.
- Plans are ordered lists so screen readers say "3 of 4".

## Don't

- Run anything irreversible without a yes. Gate everything. Label the gate "Continue? OK".
- Show the plan as tool calls, or make it vanish once approved.
- Offer Stop as the only way in when a person needs to fix 1 field.
- Log without undo, or undo without saying what can't be undone.
- Say "an agent" will help when it might be another bot.
