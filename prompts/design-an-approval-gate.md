# Design an approval gate

Paste this, then list the actions your agent can take.

---

Using the AX Patterns for delegation (https://axpatterns.design/moments/delegate - Intent preview and plan, Approval gate, Autonomy dial, Watch mode and takeover, Activity log and undo, Escalation), design how my agent asks before it acts.

For each action I list, decide: safe and undoable (just run it and log it), risky (approval gate before it), or always-ask whatever the settings say (paying someone new, deleting for good). Then write:

1. The plan preview, if the task has 3+ steps: each step as a verb and real numbers, the start button with the size of the job ("Start · 4 steps").
2. Each approval gate: the question with the real numbers ("Send 3 emails?"), the 1 line that says what, to whom and whether it can be undone, the approve button named with the action, the plain decline, and the past-tense record ("Approved · 3 emails sent").
3. The autonomy levels, named by what happens ("Ask every time", "Ask for big ones", "Just do it") with the real line in the rule, and the tag on every result ("Done alone" / "Approved by you").
4. The activity log lines (past-tense verb + target, each with its own Undo, "can't undo" where true).
5. The accessibility notes: announcement, focus, button names, 44 px, no pre-selected approve, no accept on Enter.

Never gate safe steps - approval fatigue is the failure. Never label the gate "OK" or "Continue".

My agent and its actions:

[list every action, who it affects, whether it can be undone, what it costs]
