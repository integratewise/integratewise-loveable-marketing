import { AbsoluteFill } from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadJB } from "@remotion/google-fonts/JetBrainsMono";
import { T } from "./theme";

import { ScenePain } from "./scenes/ScenePain";
import { SceneSpine } from "./scenes/SceneSpine";
import { SceneMemory } from "./scenes/SceneMemory";
import { SceneWorkspace } from "./scenes/SceneWorkspace";
import { SceneTwin } from "./scenes/SceneTwin";
import { SceneLoop } from "./scenes/SceneLoop";
import { SceneLockup } from "./scenes/SceneLockup";

loadInter("normal", { weights: ["400", "500", "600", "700"], subsets: ["latin"] });
loadJB("normal", { weights: ["400", "500"], subsets: ["latin"] });

export const FPS = 30;
// scene durations (frames) — sum minus transitions
const D = {
  pain: 105,
  spine: 150,
  memory: 120,
  workspace: 135,
  twin: 165,
  loop: 105,
  lockup: 90,
};
const TR = 18; // transition frames
// total = sum(scenes) - 6*TR = 870 - 108 = 762 ≈ 25.4s
export const DURATION =
  D.pain + D.spine + D.memory + D.workspace + D.twin + D.loop + D.lockup - 6 * TR;

const transition = (
  <TransitionSeries.Transition
    presentation={fade()}
    timing={springTiming({ config: { damping: 200 }, durationInFrames: TR })}
  />
);

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: T.bg, fontFamily: "Inter, sans-serif" }}>
      {/* persistent radial backdrop */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(1200px 800px at 30% 20%, rgba(91,224,198,0.08), transparent 60%), radial-gradient(900px 700px at 80% 80%, rgba(122,183,255,0.07), transparent 60%)",
        }}
      />
      {/* subtle grid */}
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.5,
        }}
      />

      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={D.pain}>
          <ScenePain />
        </TransitionSeries.Sequence>
        {transition}
        <TransitionSeries.Sequence durationInFrames={D.spine}>
          <SceneSpine />
        </TransitionSeries.Sequence>
        {transition}
        <TransitionSeries.Sequence durationInFrames={D.memory}>
          <SceneMemory />
        </TransitionSeries.Sequence>
        {transition}
        <TransitionSeries.Sequence durationInFrames={D.workspace}>
          <SceneWorkspace />
        </TransitionSeries.Sequence>
        {transition}
        <TransitionSeries.Sequence durationInFrames={D.twin}>
          <SceneTwin />
        </TransitionSeries.Sequence>
        {transition}
        <TransitionSeries.Sequence durationInFrames={D.loop}>
          <SceneLoop />
        </TransitionSeries.Sequence>
        {transition}
        <TransitionSeries.Sequence durationInFrames={D.lockup}>
          <SceneLockup />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
