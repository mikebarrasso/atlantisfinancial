"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "motion/react";
import type { CSSProperties, ReactNode } from "react";

type Publication = {
  name: string;
  file: string;
};

const publications: ReadonlyArray<Publication> = [
  { name: "MoneySense", file: "moneysense.svg" },
  { name: "Financial Post", file: "financial-post.png" },
  { name: "Yahoo Finance Canada", file: "yahoo-finance.svg" },
  { name: "Maclean's", file: "macleans.png" },
  { name: "Canadian Business", file: "canadian-business.svg" },
  { name: "Ottawa Citizen", file: "ottawa-citizen.svg" },
  { name: "Vancouver Sun", file: "vancouver-sun.svg" },
  { name: "Winnipeg Sun", file: "winnipeg-sun.svg" },
  { name: "Regina Leader-Post", file: "regina-leader-post.svg" },
];

/**
 * Each logo renders as a CSS mask, so the visible shape is driven by the SVG/PNG
 * but the color comes from `background-color`. That makes the logos
 * automatically render in the right brand color for the active theme
 * (foreground = navy in light mode, cream in dark mode), with a gold accent
 * on hover. No `dark:invert` hacks needed.
 */
function LogoCell({ logo }: { logo: Publication }): ReactNode {
  const maskStyle: CSSProperties = {
    WebkitMaskImage: `url(/images/publications/${logo.file})`,
    maskImage: `url(/images/publications/${logo.file})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "contain",
    maskSize: "contain",
  };

  return (
    <div
      className="flex h-10 w-36 shrink-0 items-center justify-center"
      title={logo.name}
    >
      <div
        role="img"
        aria-label={logo.name}
        className="bg-foreground/55 hover:bg-gold h-7 w-full transition-colors duration-300"
        style={maskStyle}
      />
    </div>
  );
}

export function PublicationsMarquee(): ReactNode {
  const xPercent = useMotionValue(0);
  const x = useTransform(xPercent, (v) => `${v}%`);

  useAnimationFrame((_time, delta) => {
    const speed = 0.8; // percent per second, gentle, doesn't dominate the hero
    const moveBy = (speed * delta) / 1000;
    const newX = xPercent.get() - moveBy;
    if (newX <= -50) {
      xPercent.set(0);
    } else {
      xPercent.set(newX);
    }
  });

  return (
    <div className="relative flex w-full overflow-hidden py-2">
      <motion.div className="flex shrink-0 gap-12 pr-12" style={{ x }}>
        {publications.map((logo, i) => (
          <LogoCell key={`a-${i}`} logo={logo} />
        ))}
        {publications.map((logo, i) => (
          <LogoCell key={`b-${i}`} logo={logo} />
        ))}
      </motion.div>
      <motion.div
        className="flex shrink-0 gap-12 pr-12"
        style={{ x }}
        aria-hidden="true"
      >
        {publications.map((logo, i) => (
          <LogoCell key={`c-${i}`} logo={logo} />
        ))}
        {publications.map((logo, i) => (
          <LogoCell key={`d-${i}`} logo={logo} />
        ))}
      </motion.div>

      {/* Edge fade overlays, uses bg-background so it adapts to theme */}
      <div
        aria-hidden="true"
        className="from-background pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r to-transparent sm:w-32"
      />
      <div
        aria-hidden="true"
        className="from-background pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l to-transparent sm:w-32"
      />
    </div>
  );
}
