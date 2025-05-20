# Git up on this!

**Spice up your workflow** – every time you `git push`, this extension drops a random 5-second clip of Salt-N-Pepa's *Push It*. You're not just pushing code—you're pushing vibes.

![icon](icon.png)

---

## Features

- Command: `git-music push`
  - Opens a terminal, runs `git push`, and plays a random clip from `push-it.mp3`
- Audio playback uses `ffplay` for maximum compatibility
- Cross-platform support (macOS, Linux, Windows)

---

## Requirements

- [FFmpeg](https://ffmpeg.org/download.html) (specifically, `ffplay`) must be installed and available in your system's `PATH`.

Check by running:
```bash
ffplay -version
```
