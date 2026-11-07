# Multimodal input

Let 1 ask mix text, images, camera and screen, and show how each part is read.

- ID: AX-ASK-04
- Moment: 2 Ask - "How do I tell it what I want?"
- Maturity: emerging
- Also called: Vision input, Camera, Screen share
- Updated: 2026-11-05
- Source: https://axpatterns.design/patterns/multimodal-input
- Licence: CC BY 4.0 (text and figures)

## Story

> When it is easier to show than to describe, I want to add a photo, my camera or my screen to my ask and see what the AI read from it, so I can trust the answer is about the right thing.

- **Setting:** Nomvula's new router has 4 lights. 1 is orange and the internet is down.
- **Trigger:** She doesn't know the light's name, so she takes a photo instead.
- **Without it:** "Orange usually means something is wrong. Try restarting." She can't tell which light it looked at, and restarting doesn't help.
- **With it:** "From your photo: 4 lights. WAN is orange." The WAN light is marked on her photo.
- **Outcome:** She clicks the fibre cable in properly. 2 minutes later the light turns green.

## States over time

| State | The person sees | The AI is | When | Screen reader |
|---|---|---|---|---|
| Add | The + offers Photo, Live camera and Share screen, each with its own icon. | Idle. | on tap | - |
| Added | A photo becomes a chip. Live camera or screen shows an "on" bar with Stop, the whole time. | Idle, or watching while live. | - | "Photo attached", or "Camera sharing on" |
| Asks | Words that point at the picture: "Why is this light orange?" | Idle. | - | - |
| Looking | "Looking at your photo" - says which input it is reading. | Reads the image. | 1-3 s | Looking at your photo |
| Says what it saw | 1 line on what it read from the image, and that part marked on the image. Then the answer. | Writes. | - | Generating a response |
| Done | People can check the answer against the marked part. | Idle. | when done | Response complete |
| Off | "Camera off · was on for 0:24" stays in the chat. | No longer sees anything. | on Stop, or when the app is left | Camera sharing off |

## On each device

- **Phone:** The camera is the main use: photo or live. The on bar sits at the top. The OS indicator (the phone's own camera-on dot) shows too. Screen sharing stops when the screen locks.
- **Tablet:** As on the phone, plus screen sharing of the app beside it in split view.
- **Desktop:** Paste or drop a screenshot, or share 1 window - never the whole screen by default. The on bar names what is shared.

## Use when

- The thing is hard to name or describe - a light, a rash, a part, an error on screen.
- A picture holds the facts - a label, a chart, a form, a receipt.
- People are doing something with their hands and can point the camera at it.

## Don't use when

- People only need to attach documents to read - files are enough. Use Attachments and context chips instead.
- Speech alone does the job - a spoken ask with no picture. Use Voice input instead.
- The AI must act on the screen, not only look - that needs an agent (an AI that can take actions for you) people can watch. Use Watch mode and takeover instead.

## Anatomy

- **A. The image in the ask:** The photo stays in the sent message, so the answer has its source.
- **B. Marked part:** The part of the image the answer is about, outlined.
- **C. What I read:** 1 line in plain words: "From your photo: 4 lights. WAN is orange."
- **D. The answer:** Comes after what it read, so people can check the reading first.

## Do and Avoid

- **Do:** Says what it read before answering. A wrong reading is easy to spot. (From your photo: WAN is orange.An orange WAN light means the router can’t reach your provider.)
- **Avoid:** An answer with no reading. People can't tell if it looked at the right thing. (Orange usually means something is wrong. Try restarting.)
- **Do:** A live input shows it is on, how to stop it, and when it ended. (● Camera on · StopCamera off · was on for 0:24)
- **Avoid:** No sign the camera is on. People stop trusting the app with their camera at all. ((camera still on in the background)Ask anything)

## Writing

- Start the reply with what was read, naming the input: "From your photo: …".
- Name live inputs plainly while on: "Camera on", "Sharing your screen".
- Record when they end: "Camera off · was on for 0:24".
- If the image is unclear, say what is missing and ask for a better 1: "I can't read the label - can you move closer?"

## Accessibility

- Give a sent photo the alt text (the words a screen reader says for an image) the AI read from it, so people who use a screen reader get the same reading.
- Announce "Camera sharing on" and "Camera sharing off" in the polite status region (the part of the page a screen reader announces on its own).
- Stop is a real button, reachable at any time, at least 44 px.
- Never make an image the only way to ask - typing and voice always work too.

## Seen in

- **Gemini Live** (Android, checked Nov 2026): People tap Camera to share it and tap again to stop. Screen sharing shows a "Screen Sharing" card in the notification area with Stop sharing, and both stop when the screen locks. [Gemini Apps Help: Talk naturally with Gemini Live](https://support.google.com/gemini/answer/15274899)
- **Gemini Live (beta redesign)** (Android, checked Apr 2026): The prompt box becomes a pill with a waveform. Camera and screen sharing sit on its left, mute on its right. [9to5Google, 19 Apr 2026](https://9to5google.com/2026/04/19/gemini-live-app-redesign/)
- **Gemini Apps** (Web, checked Nov 2026): 1 prompt can carry up to 10 files, including video (up to 5 minutes) and audio (up to 10 minutes), with more on paid plans. [Gemini Apps Help: Upload & analyze files](https://support.google.com/gemini/answer/14903178)

## Related patterns

- Alternative to Attachments and context chips: For documents to read, not things to show.
- Often combined with Voice input: Point the camera and speak, hands free.
- Often combined with Citations and sources: The marked part of the image works like a citation.
- Often combined with Consent and data controls: Say what is sent and kept when the camera or screen is on.

## Sources

- [Apple HIG - Generative AI (updated Jun 2026)](https://developer.apple.com/design/human-interface-guidelines/generative-ai)
- [AWS Cloudscape - In-chat context](https://cloudscape.design/gen-ai/patterns/in-chat-context/)
- [Apple WWDC26 - Best practices for integrating visual intelligence in your app](https://developer.apple.com/videos/play/wwdc2026/297/)
- [Apple WWDC26 - Create high-quality images using Image Playground](https://developer.apple.com/videos/play/wwdc2026/375/)
