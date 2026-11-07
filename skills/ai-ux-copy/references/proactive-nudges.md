# Proactive nudges

Let the AI offer help at the right moment, and make it easy to say no.

- ID: AX-DIS-05
- Moment: 1 Discover - "What can it do?"
- Maturity: emerging
- Also called: Proactive suggestions, AI tips, Smart prompts
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/proactive-nudges
- Licence: CC BY 4.0 (text and figures)

## Story

> When the AI notices something it could help with, I want it to offer once, at a pause, with 1 clear offer, so I can say yes or no without losing my place.

- **Setting:** Sipho is finishing a long status email for the site team.
- **Trigger:** He stops typing. The email is 412 words - long for people on site.
- **Without it:** A box pops up over his text mid-sentence. He loses his place, and the short version misses next week's plan.
- **With it:** Below the email: "This email is 412 words. Shorten it to 5 lines?" with Shorten, Not now, and Stop these tips.
- **Outcome:** He taps Shorten, checks the 5 lines, and sends. Undo is there if he wants it back.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Working | Only the work. The AI watches for 1 clear signal - here, length. | Watching. | - | - |
| A pause | The person stops typing. Nothing appears yet. | Waits about 1 s. | after typing stops | - |
| The nudge | 1 small card below the work: why now, 1 offer, yes, not now, stop these tips. | Waits for an answer, or none. | at a pause | Suggestion: shorten this email |
| Answer | 1 tap either way. Ignoring it is also an answer - it fades when typing starts again. | Idle. | on tap | - |
| Doing it | "Shortening to 5 lines", in place. | Writes. | - | - |
| Recorded | "Shortened to 5 lines · Undo", or "Not now · I won't suggest this again for this email". | Idle. | when done | Email shortened, or Suggestion dismissed |

## On each device

- **Phone:** The nudge is 1 line above the keyboard with 1 action and an X. Never a pop-up over the text being typed.
- **Tablet:** As on desktop.
- **Desktop:** A small card under the text or in the margin. It never takes focus, and it goes away when typing starts again.

## Use when

- The AI can see a clear, specific chance to help - a long email, an event date, a repeated task.
- The help saves real time, and 1 tap is enough to accept it.
- People may not know the feature exists.

## Don't use when

- People are in the middle of typing or a task with a deadline - wait, or offer it when they ask. Use Inline action on selection instead.
- The offer is general, like "Need help?" - show example asks instead. Use Suggested prompts instead.
- The AI would act, not just offer - ask first, before acting. Use Approval gate instead.

## Anatomy

- **A. Why now:** The fact that triggered it: "This email is 412 words."
- **B. 1 specific offer:** What it will do, with a number: shorten to 5 lines.
- **C. Accept:** Names the action. Does it in place, with Undo after.
- **D. Not now:** 1 tap. The nudge does not come back for this piece of work.
- **E. Stop these tips:** Turns this kind of nudge off for good, without a trip to settings.

## Do and Avoid

- **Do:** Waits for a pause, and sits below the work. (…if it stays dry.412 words. Shorten to 5 lines?Shorten · Not now · Stop these tips)
- **Avoid:** Same offer, but it arrives mid-sentence and covers the text. People lose their place. (Next week we pour th412 words. Shorten to 5 lines?Shown over the text, mid-sentence)
- **Do:** Says why it is showing and what it will do. (This email is 412 words.Shorten it to 5 lines for the site team?Shorten · Not now)
- **Avoid:** A vague offer that is a sales pitch in disguise. People learn to close every nudge without reading. (✦ Want me to help?Try AI Pro free for 7 daysTry it · ✕)

## Writing

- Start with the fact that triggered it: "This email is 412 words."
- Make 1 offer, as a question with a number: "Shorten it to 5 lines?"
- Use "Not now" to refuse, and "Stop these tips" to turn it off. Never "No, I like long emails".
- Record the answer in the past tense: "Shortened to 5 lines · Undo".

## Accessibility

- Announce the nudge once through a live region (the part of the page a screen reader announces on its own), without interrupting: "Suggestion: shorten this email". Never move focus to it.
- Make it reachable as the next item after the text field, and dismissable with Escape.
- Do not hide it on a timer while a screen reader user may still be reaching it. Hide it when typing starts.
- Buttons are at least 44 px on touch screens, and name the action: Shorten, Not now.

## Seen in

- **Gemini in Gmail** (Web, checked Nov 2026): When Gemini finds event details in an email, an Add to calendar button appears above the email. [Gmail Help: Collaborate with Gemini in Gmail](https://support.google.com/mail/answer/14355636)
- **Gmail summary cards** (Gmail, checked May 2025): Long emails get a Gemini summary card at the top without being asked. People turn it off with Smart features in settings. [TechCrunch, 30 May 2025](https://techcrunch.com/2025/05/30/gemini-will-now-automatically-summarize-your-long-emails-unless-you-opt-out)
- **Outlook Text Predictions** (Outlook, checked Dec 2021): A tip says "Outlook gives you writing suggestions as you type", with "Got it" and a button to stop the predictions. [Microsoft HAX Toolkit example (screenshot from Dec 2021)](https://www.microsoft.com/en-us/haxtoolkit/example/outlook-g1-a-introductory-blurb-and-g17-provide-global-controls/)

## Related patterns

- Alternative to Suggested prompts: Offer help in the empty state, when people are ready to ask.
- Alternative to Inline action on selection: Help that waits on the selected thing until people ask for it.
- Often combined with Autonomy dial: Lets people choose how often the AI offers, or acts by itself.
- Conflicts with Approval gate: A nudge only offers. If the AI would act, it needs a gate, not a nudge.

## Sources

- [Shape of AI - Nudges](https://www.shapeof.ai/patterns/nudges)
- [Google PAIR Guidebook - Mental models](https://pair.withgoogle.com/chapter/mental-models/)
- [Microsoft HAX Toolkit - Guidelines for Human-AI Interaction](https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/)
- [Apple WWDC23 - Make features discoverable with TipKit](https://developer.apple.com/videos/play/wwdc2023/10229/)
- [Apple WWDC20 - Design for intelligence: Discover new opportunities](https://developer.apple.com/videos/play/wwdc2020/10088/)
