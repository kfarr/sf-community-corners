# Hero video — drop your timelapse here

The hero is built to show a background **timelapse video** (à la karlthefog.com / gggp.org). Until you
have one, the hero falls back to `assets/img/hero-poster.svg`, so the page looks complete either way.

## To enable the video
1. Add your file(s) here, e.g. `hero.mp4` (H.264) and ideally `hero.webm` (VP9/AV1) for smaller size.
2. In `index.html`, find `<!-- TODO: hero video -->` and **uncomment** the `<video>` block. It's already
   configured: `autoplay muted loop playsinline preload="none"` with the SVG as its `poster`.

## Recommended specs
- **Aspect:** 16:9, **resolution:** 1920×1080 (1280×720 is fine for smaller files).
- **Length:** 10–30s seamless loop. **No audio** (it's muted; you can strip the track to save space).
- **Size:** aim < 5 MB. Compress with e.g. `ffmpeg -i in.mov -vcodec libx264 -crf 28 -an -movflags +faststart hero.mp4`.
- **Content:** fog rolling over the neighborhood, a sunset, native plants moving in the wind, or a corner
  coming to life — the "true SF beauty" mood.
- Respect `prefers-reduced-motion`: `main.js` pauses the video for visitors who request reduced motion.
