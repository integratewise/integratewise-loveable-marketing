import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

// Snappy fade-in + slight rise
export function useEnter(delay = 0, dur = 22) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const f = Math.max(0, frame - delay);
  const opacity = interpolate(f, [0, dur], [0, 1], { extrapolateRight: "clamp" });
  const s = spring({ frame: f, fps, config: { damping: 22, stiffness: 180 } });
  const y = interpolate(s, [0, 1], [12, 0]);
  return { opacity, y, s };
}

export function useScale(delay = 0) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 18, stiffness: 160 } });
  return interpolate(s, [0, 1], [0.94, 1]);
}

// Sustained breathing motion so static-looking text never sits perfectly still
export function useBreath(amp = 2, period = 90) {
  const frame = useCurrentFrame();
  return Math.sin((frame / period) * Math.PI * 2) * amp;
}
