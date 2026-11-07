# Voice output and live transcript

Read the answer aloud and show the words as they are spoken.

- ID: AX-REA-07
- Moment: 4 Read - "What did it make?"
- Maturity: established
- Also called: Read aloud, Voice mode, Transcript
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/voice-output
- Licence: CC BY 4.0 (text and figures)

## Story

> When my hands are busy and the AI answers out loud, I want to see the words as they are spoken and cut in with my voice, so I can catch a number I missed and steer it without touching the screen.

- **Setting:** Fatima has dough on her hands. She asks out loud for the next step.
- **Trigger:** The answer has 2 times to remember: 10 minutes and 20 minutes.
- **Without it:** An orb (a glowing ball on the screen) talks. Halfway through kneading she forgets the time and asks again.
- **With it:** Each word appears in the chat as it is spoken. A glance shows "10 minutes".
- **Outcome:** She ends the voice chat with a knuckle. The steps stay in the chat for later.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Voice on | The text box becomes a voice bar: "Listening", mute and End. | Listens. | 0 s | Voice chat on. Listening |
| Person speaks | Her words appear in her bubble as she says them. | Listens. | while she talks | - |
| AI speaks | Each word appears as it is spoken. The current word is highlighted. The bar says "Speaking". | Speaks. | about 2-3 words a second | Speaking |
| Cut in | She speaks. The AI stops at once. Its line ends with "stopped, you spoke". | Stops and listens. | within a moment | Listening |
| Short answer | A short answer to the new question, shown and spoken. | Speaks. | - | Speaking |
| Done talking | The full answer as text. The bar goes back to "Listening". | Listens. | after the last word | Listening |
| Ended | "Voice chat ended". The words stay in the thread. The text box is back. | Idle. | on End | Voice chat ended |

## On each device

- **Phone:** The main place for voice. The text box becomes a voice bar with status, mute and End, near the thumb. Words appear in the thread above.
- **Tablet:** As on the phone. A tablet is often propped up, so the text must be readable at arm's length.
- **Desktop:** The same voice in the chat. End or Stop stays in 1 place and works from the keyboard too.

## Use when

- People's hands or eyes are busy - cooking, driving, fixing something.
- People find listening easier than reading - low vision, reading difficulty, tiredness.
- Answers are short and work spoken - steps, directions, quick facts.

## Don't use when

- The answer is a table, code or a long list. It does not work spoken. Use Generative UI and structured output instead.
- The place is quiet or shared - an office, a ward at night. Start in text and offer read aloud.
- People want to speak their ask but read the answer. Use Voice input instead.

## Anatomy

- **A. Her words:** What the AI heard, shown as she speaks, so a mishearing is caught early.
- **B. Live words:** The answer as text, word by word, in time with the voice. The current word is marked.
- **C. Voice bar:** Says "Listening" or "Speaking" in words, with a moving wave.
- **D. End:** Ends the voice chat. Always visible, always in the same place.

## Do and Avoid

- **Do:** The words are on screen as they are spoken. A glance gets back what was missed. (Next, knead the dough for 10 minutes.〰 Speaking · End)
- **Avoid:** An orb with no words. A number said once is gone, and people ask again. (Speaking)
- **Do:** Speaking stops it at once, and the new answer is short. (Next, knead the dough for- stopped, you spoke10 minutes, until it is smooth.)
- **Avoid:** It talks to the end of the answer while she tries to ask. She has to touch the screen. (Next, knead the dough for 10 minutes. Then cover it and let it rest for 20 minutes…(still talking over her))

## Writing

- Write for the ear: short sentences, the action first, 1 number per sentence. "Knead for 10 minutes."
- Say numbers as people say them: "10 minutes", not "10 min".
- Keep spoken answers short, then offer more: "Want the next step?"
- Show status in words - "Listening", "Speaking" - not only a moving shape.

## Accessibility

- Show every spoken word as text, in time with the voice. People who are deaf or hard of hearing need it.
- Speech starts only when the person starts it, and can be paused or stopped at once.
- Announce only state changes: "Listening", "Speaking", "Voice chat ended". Never read the transcript (the written words) out through the status region (the part of the page a screen reader announces on its own). It would talk over the voice.
- End and mute are real buttons, at least 44 px, reachable by keyboard and by switch (a 1-button control some people use instead of touch). The words stay after the voice chat ends.

## Seen in

- **ChatGPT voice** (Web and mobile, checked Nov 2025): Since 25 Nov 2025, voice runs inside the chat: a live transcript and visuals such as maps appear in the thread, and you tap "end" to stop. The old full-screen orb is still there as "Separate mode" in settings. [TechCrunch, 25 Nov 2025](https://techcrunch.com/2025/11/25/chatgpts-voice-mode-is-no-longer-a-separate-interface/)
- **Claude voice mode** (Web, desktop and mobile, checked Oct 2026): Hands-free or push-to-talk. People can speak to interrupt, transcripts are saved, and a Stop button sits at the bottom right on web and desktop. [Claude Help: Use voice mode](https://support.claude.com/en/articles/11101966-use-voice-mode.md)
- **Gemini Live** (Android (beta), checked Apr 2026): A redesign drops the full screen. A waveform bar takes the place of the text box, with a transcript button, camera and screen share, mute, and a keyboard icon to leave. [9to5Google, 19 Apr 2026](https://9to5google.com/2026/04/19/gemini-live-app-redesign/)

## Related patterns

- Often combined with Voice input: The other half of a voice chat: speaking the ask.
- Often combined with Stop generation: Speaking over the AI is a stop, by voice.
- Often combined with Streaming response: The live words fill in like streamed text (text that arrives word by word), in time with the voice.

## Sources

- [W3C WAI - Captions/Subtitles](https://www.w3.org/WAI/media/av/captions/)
- [W3C - Understanding WCAG 2.2: Audio control (1.4.2)](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html)
- [Apple WWDC20 - Evaluate and optimize voice interaction for your app](https://developer.apple.com/videos/play/wwdc2020/10071/)
