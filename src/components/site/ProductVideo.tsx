/**
 * ProductVideo — section container + custom HTML5 player for the
 * "day in the life" walkthrough (Apps → Spine → Memory → Workbench →
 * Twin → Approval → Memory updates).
 *
 * Behaviour:
 *  - Desktop (≥768px): autoplay muted when scrolled into view via
 *    IntersectionObserver. Custom Play/Pause + progress bar overlay.
 *  - Mobile (<768px): no autoplay. Renders a poster thumbnail with a
 *    big Play icon; tapping it loads and plays the video inline.
 *
 * Styling: 16:9 frame wrapped in a faux browser-window chrome (traffic
 * lights + URL pill) so it sits visually next to the existing Workbench
 * mockups without competing with them. Calm, operator-first — no
 * autoplaying overlays, no flashy chrome.
 *
 * Asset: pass `src` (MP4) and optional `webm` + `poster`. When the final
 * walkthrough MP4 ships, swap the defaults in HomePage / ProductPage.
 */
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Badge } from "@/components/site/Badge";

/**
 * Chapter on the walkthrough timeline. `start` is a fraction of total
 * duration (0..1) so we don't have to hard-code seconds before the final
 * cut lands. When the real MP4 ships, swap to absolute seconds by passing
 * a `chapters` prop with `startSeconds`.
 */
export interface VideoChapter {
  id: string;
  label: string;
  /** 0..1 fraction of total duration where this chapter begins. */
  start: number;
  /** Optional absolute seconds; overrides `start` when provided. */
  startSeconds?: number;
}

/**
 * Default chapter map — mirrors the locked architecture beats the
 * walkthrough is scripted to: Apps → Spine → Workspace → Twin →
 * Approval → Loop. Even spacing is a placeholder until the final cut
 * timings are known.
 */
const DEFAULT_CHAPTERS: VideoChapter[] = [
  { id: "apps", label: "Apps", start: 0 / 6 },
  { id: "spine", label: "Spine", start: 1 / 6 },
  { id: "workspace", label: "Workspace", start: 2 / 6 },
  { id: "twin", label: "Twin", start: 3 / 6 },
  { id: "approval", label: "Approval", start: 4 / 6 },
  { id: "loop", label: "Loop", start: 5 / 6 },
];

interface Props {
  eyebrow?: string;
  title: string;
  subline: string;
  src: string;
  webm?: string;
  poster?: string;
  /** Faux browser URL shown in the chrome bar. */
  urlLabel?: string;
  alt?: boolean;
  /** Override the default Apps→Spine→Workspace→Twin→Approval→Loop chapters. */
  chapters?: VideoChapter[];
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isMobile;
}

export function ProductVideo({
  eyebrow = "Product walkthrough",
  title,
  subline,
  src,
  webm,
  poster,
  urlLabel = "workspace.integratewise.app/accounts",
  alt = false,
  chapters = DEFAULT_CHAPTERS,
}: Props) {
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Desktop: autoplay muted on scroll-into-view.
  useEffect(() => {
    if (isMobile) return;
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            video.play().catch(() => {
              // Autoplay can be blocked even when muted; ignore.
            });
          } else {
            video.pause();
          }
        }
      },
      { threshold: [0, 0.4, 0.8] },
    );
    io.observe(wrapper);
    return () => io.disconnect();
  }, [isMobile]);

  // Wire up native video events to drive custom controls.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onPlay = () => {
      setIsPlaying(true);
      setHasStarted(true);
    };
    const onPause = () => setIsPlaying(false);
    const onTime = () => {
      if (!video.duration) return;
      setProgress((video.currentTime / video.duration) * 100);
    };
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("timeupdate", onTime);
    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("timeupdate", onTime);
    };
  }, []);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      // On mobile first tap: unmute so user actually hears the walkthrough
      // if/when narration is added later. Today the asset is silent so
      // this is a no-op aurally but the right default.
      if (isMobile && !hasStarted) video.muted = false;
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    video.currentTime = video.duration * Math.max(0, Math.min(1, ratio));
  }

  const showVideoElement = !isMobile || hasStarted;

  return (
    <Section alt={alt}>
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Badge variant="muted">{eyebrow}</Badge>
          <h2 className="heading-h2 mt-4">{title}</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">{subline}</p>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-6xl">
          <div
            ref={wrapperRef}
            className="card-iw overflow-hidden p-0"
            style={{ background: "var(--surface-elev-1, hsl(var(--card)))" }}
          >
            {/* Faux browser chrome */}
            <div className="flex items-center gap-3 border-b border-border/60 bg-background/40 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <div className="mx-auto flex max-w-md flex-1 items-center justify-center rounded-md border border-border/60 bg-background/60 px-3 py-1 text-[12px] font-mono text-text-secondary">
                {urlLabel}
              </div>
              <div className="w-12" />
            </div>

            {/* 16:9 stage */}
            <div className="relative aspect-video w-full bg-black">
              {showVideoElement ? (
                <video
                  ref={videoRef}
                  className="absolute inset-0 h-full w-full object-cover"
                  src={src}
                  poster={poster}
                  muted
                  playsInline
                  loop
                  preload={isMobile ? "none" : "metadata"}
                >
                  {webm ? <source src={webm} type="video/webm" /> : null}
                  <source src={src} type="video/mp4" />
                </video>
              ) : (
                // Mobile poster-only state, no video bytes loaded yet.
                <button
                  type="button"
                  onClick={togglePlay}
                  className="group absolute inset-0 flex items-center justify-center"
                  aria-label="Play product walkthrough"
                >
                  {poster ? (
                    <img
                      src={poster}
                      alt="IntegrateWise Workbench preview"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-background to-background/40" />
                  )}
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-foreground/95 text-background shadow-2xl transition-transform duration-300 ease-out group-active:scale-95">
                    <Play size={26} className="ml-1" fill="currentColor" />
                  </span>
                </button>
              )}

              {/* Custom controls (desktop + post-tap mobile) */}
              {showVideoElement ? (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-foreground/95 text-background shadow-lg transition-transform duration-200 ease-out hover:scale-105"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause size={16} fill="currentColor" />
                    ) : (
                      <Play size={16} className="ml-0.5" fill="currentColor" />
                    )}
                  </button>
                  <div
                    onClick={seek}
                    className="pointer-events-auto h-1.5 flex-1 cursor-pointer overflow-hidden rounded-full bg-white/15"
                    role="progressbar"
                    aria-valuenow={Math.round(progress)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-full rounded-full bg-brand-accent transition-[width] duration-150 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
