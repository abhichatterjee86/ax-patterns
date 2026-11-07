---
name: ai-ux-copy
description: Write the words inside an AI product - button labels, placeholders, loading and thinking lines, stop and error messages, suggested prompts, approval questions, citations, labels, disclaimers, notifications, memory and consent copy - following the writing rules of all 50 AX Patterns. Use when writing or reviewing UX copy, microcopy, UX writing, content design or strings for a chat, assistant, copilot or agent, or when the user asks what a button, status or message in an AI feature should say.
license: MIT (skill) / CC BY 4.0 (pattern text)
metadata:
  source: { { SITE } }
  repo: { { REPO } }
  version: { { DATE } }
---

# Writing for AI interactions

The words are the interface. In an AI product, most of what a person sees while it works, stops, asks or refuses is a line of copy. These rules come from every pattern in the AX Patterns library; the per-pattern rules are listed at the end so you can find the exact line for the state you are writing. Full pattern text in `references/`.

## House rules (apply to every string)

1. **Verb + the real thing.** "Reading lease.pdf", "Searching 3 sites", "Send 3 emails?". Never "Processing…", "Working on it", "Continue".
2. **The person's words, not the model's.** Their file names, their dates, their numbers. Modes are "Fast / Thinking / Research", never model names. Never "prompt", "generate", "tokens", "hallucination", "parameters" in the UI.
3. **Numbers where there are numbers.** "45 → 26 words", "page 20 of 40", "3 versions", "about 10 minutes", "Used 2 memories". Say numbers as people say them: "10 minutes", not "10 min".
4. **Buttons name what they do** - to the thing, in the person's name. "Stop", "Use the Warm version", "Replace", "Insert below", "Book 6 rooms", "Don't allow", "Restore", "Not now". Never "OK", "Yes", "Submit", "Magic", "Sounds good", "Maybe later".
5. **1 line, then the way on.** Lead with what happened. Then the reason in 1 line. Then 1 next step that works now.
6. **Record results in the past tense, no end punctuation.** "Approved · 3 emails sent", "Shortened to 5 lines · Undo", "2 accepted · 1 rejected", "Declined · nothing was sent".
7. **Say what was used and what was kept.** "From your photo: …", "I kept your date change", "Includes your update", "Summarised with AI".
8. **No fake promises.** No "Almost done" unless it is. No "anything", "genius", "always". No "An agent will help you shortly" when it might be a bot or an hour.
9. **No exclamation marks, no "please", no "please wait", sentence case.** Hints invite ("Ask anything"), they don't instruct ("Enter your prompt").
10. **Same words for the same thing everywhere.** 1 name for the AI, 4 status words, 1 word for undo.
11. **Write for the ear when it will be spoken.** Short sentences, action first, 1 number per sentence: "Knead for 10 minutes."
12. **Say the limits where they bite**, not in a pop-up: how many files, how big, which types, "3 left today", "Undo works for 24 hours".

## The strings every AI feature needs

| State            | Write                                                                                                                 | Don't write                                |
| ---------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Empty composer   | Ask anything · What should we work on?                                                                                | Enter your prompt                          |
| Suggested prompt | A whole ask a person would type, ~6 words, with the parts to change marked: "Plan a 3-day trip to [Kyoto] in [April]" | Travel · Productivity · Ask me anything    |
| Capability card  | 1 line: what it is and what it works from. 3 cans, 2 can'ts, each can't with a next step                              | A list of technology                       |
| Working, 1-3 s   | Reading lease.pdf                                                                                                     | Processing…                                |
| Working, steps   | Reading the 3 files you attached → Checking March dates → Comparing 6 resorts; done: "Thought for 8 s"                | Analyzing · Thinking · Generating insights |
| Long task        | About 10 minutes. It keeps going if you close the app.                                                                | This may take a while                      |
| Stop             | Stop (square icon). After: "You stopped this answer. What is written is kept." Continue · Try again                   | Cancel                                     |
| Error            | The answer stopped part-way. Connection lost after 2.1 s. What was written is kept. Try again                         | Error 503. Something went wrong.           |
| Limit            | You've used today's deep research. Resets at 9:00 tomorrow. Fast answers still work.                                  | Rate limit exceeded                        |
| Refusal          | 1 short no, 1 line why, then what it can do                                                                           | A paragraph about policy                   |
| Regenerate       | Try again · 2 / 2 with arrows                                                                                         | Regenerate · Version A                     |
| Tone / length    | Shorter · Longer · More formal · More friendly; result: "45 → 26 words" · Undo                                        | Rewrite · Adjust                           |
| Versions         | Short · Warm · With details - "3 versions - pick 1 to use." Use this · 3 more                                         | Option 1 · Option 2                        |
| Draft changes    | Draft · 3 to review · nothing is changed yet; each change named: "14 March to 15 March"; Accept · Reject              | Edit 2 · Apply all                         |
| Citation list    | Sources - with site name and date                                                                                     | References · Citations · [source]          |
| No sources       | No sources found - check this before you use it                                                                       | (nothing)                                  |
| AI label         | Summarised with AI · Drafted with AI; after an edit: Edited by Priya                                                  | ✦ AI                                       |
| Caveat           | Deposit rules differ by city and state. Find free tenant help near you.                                               | AI can make mistakes (as the only caveat)  |
| Quiet line       | AI can make mistakes. Check important info. (under 8 words)                                                           | A paragraph of legal text                  |
| Confidence       | 4 fields read · 1 to check. Check this - the scan is blurry here                                                      | 81% confidence                             |
| Explanation      | KSh 4,200 is over the KSh 3,000 limit. To send it, add a reason.                                                      | Risk score 0.82                            |
| Memory           | Used 2 memories · each memory 1 sentence: "Runs before work, around 6:00"                                             | Personalised for you                       |
| Consent          | Used: your messages and files. Never used: temporary chats. Allow · Don't allow                                       | Help us improve · Maybe later              |
| Temporary chat   | Temporary chat - not saved to your history or memory, and not used for training                                       | Incognito                                  |
| Plan             | Start · 4 steps; steps as "Book a coach for 36"                                                                       | OK; "Handle transport"                     |
| Approval         | Send 3 emails? Can't be undone. Send 3 emails · Not now                                                               | Continue? OK                               |
| Autonomy         | Ask every time · Ask for big ones · Just do it; the rule: "Refunds over ₦20,000"                                      | Low · Medium · High                        |
| Takeover         | You're in control · the agent is paused; after: Carrying on with YB24 LMN                                             | Agent interrupted                          |
| Activity log     | Declined Design review with Ama · Undo; Sent · can't undo                                                             | Action 3 completed                         |
| Handoff          | I can't refund payments. A person in Billing can. Passing you to Billing - a person will reply here, about 4 minutes  | An agent will be with you shortly          |
| Notification     | Supplier research is ready · Supplier research needs you; body: the result or the question                            | You have an update                         |
| Nudge            | This email is 412 words. Shorten it to 5 lines? Shorten · Not now · Stop these tips                                   | Need help? · No, I like long emails        |
| Voice            | Listening · Tap to stop · Check the words, then send · Speaking                                                       | Speech recognition active                  |

## Per-pattern writing rules

The exact writing rules of every pattern, grouped by moment, are in [references/writing-rules.md](references/writing-rules.md). Open it when you write for a specific state - it has the line for that state. The full pattern pages are in `references/<slug>.md`.
