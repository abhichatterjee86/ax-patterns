# Write the waiting states

Paste this, then describe your feature and how long the AI usually takes.

---

Using the AX Patterns for waiting (https://axpatterns.design/moments/wait - Specific loading messages, Thinking and processing steps, Streaming response, Long-running tasks, Update mid-run - plus Stop generation at https://axpatterns.design/patterns/stop-generation), write every state a person sees while my AI works.

Rules: nothing under 1 s; 1 specific line (verb + the real thing) for 1-3 s; open-able steps for 3-60 s that fold to "Thought for N s" when the answer starts; let the person leave and notify them for minutes-long tasks; Stop the whole time, and stopping keeps what is written. Never "Processing…", never a fake progress bar, never "Cancel".

Give me a table with: state, when it appears (timing), what the person sees (exact copy, using my nouns), what the Send/Stop button shows, what a screen reader is told (only: generating, complete, stopped, failed), and what happens under reduced motion. Include: sent, quiet, first line or steps, first words, streaming, done, stopped, error, and - if my task runs for minutes - leaving and the notification.

My feature and timings:

[what the AI does, what it reads or searches, typical time to first word, typical total time, whether it can run for minutes]
