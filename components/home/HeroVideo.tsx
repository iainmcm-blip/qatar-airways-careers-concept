"use client";

import { useEffect, useRef } from "react";

// Plays a muted, looping, autoplaying background video. Handles both HLS
// (.m3u8) streams via hls.js and plain progressive files (.mp4/.webm) natively.
// Used for the official Qatar Airways / Qatari Tourism Scene7 hero videos (open CORS).
export function HeroVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Respect reduced-motion: hold the poster frame, never autoplay.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let hls: import("hls.js").default | undefined;
    let cancelled = false;
    const play = () => video.play().catch(() => {});

    // Progressive files (.mp4/.webm) play natively — no hls.js needed.
    // preload="none" means metadata never loads on its own, so don't wait for
    // loadedmetadata — call play() directly; muted autoplay is allowed and
    // play() forces the resource to load.
    if (!src.includes(".m3u8")) {
      video.src = src;
      play();
      return () => {
        cancelled = true;
        video.removeAttribute("src");
        video.load();
      };
    }

    // Prefer hls.js wherever MSE is available (Chrome/Firefox/Edge). Chromium
    // reports canPlayType('…mpegurl') === 'maybe' but can't actually play HLS,
    // so native playback is only a fallback for real Safari / iOS.
    import("hls.js").then(({ default: Hls }) => {
      if (cancelled) return;
      if (Hls.isSupported()) {
        hls = new Hls({ capLevelToPlayerSize: true, startLevel: -1 });
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, play);
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
        video.addEventListener("loadedmetadata", play, { once: true });
      }
    });

    return () => {
      cancelled = true;
      hls?.destroy();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden
      tabIndex={-1}
    />
  );
}
