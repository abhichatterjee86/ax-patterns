# Voice input

Let people speak the ask, and show them what was heard before it is sent.

- ID: AX-ASK-03
- Moment: 2 Ask - "How do I tell it what I want?"
- Maturity: established
- Also called: Dictation, Speech to text, Mic
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/voice-input
- Licence: CC BY 4.0 (text and figures)

## Story

> When my hands are busy or typing is slow, I want to speak my ask and see the words before they are sent, so a misheard word doesn't give me a wrong answer.

- **Setting:** Joseph is in his field and wants to know how much fertiliser to buy.
- **Trigger:** He taps the mic and says "2 acres". It hears "10".
- **Without it:** The message goes as soon as he stops. The answer is for 10 acres, and he nearly buys 5 times too much.
- **With it:** The words land in the box. "10" is marked as unsure. He taps it and picks "2".
- **Outcome:** He sends, and gets the amounts for his 2 acres.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Ready | A mic in the box, with a hint: "Tap the mic and speak". | Idle. | - | - |
| Listening | A pulsing dot, a timer, a level meter and the words as they are heard. Stop and Cancel are always visible. | Turns speech into text. | while speaking | Listening |
| Check the words | The words sit in the box, not sent. Unsure words are marked. | Idle. | on stop | Stopped listening. Check the text, then send |
| Fix 1 word | Tapping a marked word offers other words it might be. 1 tap fixes it. | Idle. | on tap | - |
| Sent at once | The avoid version: the message goes as soon as listening stops, mistakes and all. | Reads the misheard ask. | on stop | Message sent |
| Answering | The sent message is marked "Spoken". The answer streams in. | Writes. | - | Generating a response |
| Done | An answer for what he meant. | Idle. | when done | Response complete |

## On each device

- **Phone:** The mic sits next to Send, by the thumb. Hold to talk suits noisy places; tap to start and stop suits longer asks.
- **Tablet:** As on the phone. In split view, the listening bar stays inside the app's own box.
- **Desktop:** The mic sits in the box with a keyboard shortcut. Typing while listening stops listening and keeps the words.

## Use when

- People's hands or eyes are busy - cooking, driving, working outside.
- Typing is slow or hard for people - on a phone, in a second language, or with a motor disability.
- Asks are long and spoken words come more easily than typed ones.

## Don't use when

- People want a spoken conversation, with the AI talking back - that is voice mode. Use Voice output and live transcript instead.
- People need to show something as well as say it. Use Multimodal input instead.
- The ask is a short choice from a list - taps are faster than speech. Use Quick actions instead.

## Anatomy

- **A. Stop:** The mic turns into a stop button, with a label: "Tap to stop" or "Release to stop".
- **B. Listening status:** A pulsing dot and a timer. People always know the mic is on.
- **C. Live words:** The words appear as they are heard, so mistakes show early.
- **D. Cancel:** Throws the recording away. Nothing is sent or kept.
- **E. Level meter:** Moves with the voice, so people know they are being heard - or not.

## Do and Avoid

- **Do:** The words wait in the box, and the unsure 1 is marked. (Check the words, then send.…for 10 acres of maize?)
- **Avoid:** Sent at once. A misheard number becomes a wrong answer before anyone can see it. (…for 10 acres of maize?Sent as soon as he stopped.)
- **Do:** Shows it is listening, for how long, the words so far, and how to stop or cancel. (How much fertiliser do I need…● 0:03 · Tap to stop · ✕)
- **Avoid:** Just a dot. People can't tell if they are heard, or how to stop without sending. (…●)

## Writing

- Label the state, not the tech: "Listening", not "Speech recognition active".
- Name how to stop: "Tap to stop", "Release to stop".
- Say what to do next when listening ends: "Check the words, then send."
- Mark spoken messages in the thread: "Spoken".

## Accessibility

- Announce "Listening" and "Stopped listening" in the polite status region. Never read the live words out while the person speaks.
- The mic button's name changes with its state: "Start dictation", "Stop dictation".
- Keep a visible label on every button that matches its name, so voice control users can say it.
- Never auto-send on silence. People who speak slowly, stammer or pause to think need time.

## Seen in

- **ChatGPT** (Not stated, checked Nov 2026): Dictation turns the recording into text that people can edit before sending as a message. [OpenAI Help: Voice dictation FAQ](https://help-lb.openai.com/en/articles/12168547-voice-dictation-faq)
- **Claude** (iOS and Android, checked Nov 2026): A mic on the right of the box turns speech into text in the chat; people tap the arrow to send or "X" to cancel. 12 languages, most in beta. [Claude Help: Use dictation on Claude Mobile](https://support.claude.com/en/articles/10065434-use-dictation-on-claude-mobile)
- **Claude voice mode** (Web, desktop and mobile, checked Nov 2026): Hands-free listens and answers at natural pauses; push-to-talk is for noisy places. Text transcripts are saved in the chat. [Claude Help: Use voice mode](https://support.claude.com/en/articles/11101966-use-voice-mode)
- **ChatGPT voice** (Web and mobile, checked Nov 2025): Voice runs inside the chat, so people see answers appear while they talk. They tap "end" to stop; the old full screen is a setting. [TechCrunch, 25 Nov 2025](https://techcrunch.com/2025/11/25/chatgpts-voice-mode-is-no-longer-a-separate-interface/)

## Related patterns

- Part of Prompt composer: The mic is 1 of the composer's tools.
- Often combined with Voice output and live transcript: The AI speaks back, for a full spoken conversation.
- Often combined with Multimodal input: Speak and show at the same time.
- Often combined with Stop generation: In voice, speaking over the AI should stop it.

## Sources

- [Meta Horizon OS - Voice (updated Mar 2026)](https://developers.meta.com/vr/design/voice/)
- [W3C - Understanding Label in Name (WCAG 2.2)](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)
- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [Apple WWDC25 - Bring advanced speech-to-text to your app with SpeechAnalyzer](https://developer.apple.com/videos/play/wwdc2025/277/)
