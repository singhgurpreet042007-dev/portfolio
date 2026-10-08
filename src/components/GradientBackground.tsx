import type React from "react";

export type GradientTheme = "blue" | "yellow" | "burgundy" | "lavender";

interface GradientBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  theme?: GradientTheme;
}

const GRADIENT_THEMES: Record<GradientTheme, string> = {
  // Blue (Fluxora) - Soft, faded oceanic cyan-blue
  blue: "linear-gradient(180deg, #000000 0%, #030914 25%, #052638 52%, #08475c 78%, #11657e 100%)",

  // Yellow (DeployFlow) - Soft, faded golden amber-yellow
  yellow: "linear-gradient(180deg, #000000 0%, #080702 25%, #201a06 52%, #3d320b 78%, #6b5714 100%)",

  // Burgundy (Aegis-AI) - Rich, faded wine / burgundy crimson
  burgundy: "linear-gradient(180deg, #000000 0%, #0a0305 25%, #220810 52%, #420f1e 78%, #6e1730 100%)",

  // Lavender (Smart Campus) - Soft, faded royal lavender violet
  lavender: "linear-gradient(180deg, #000000 0%, #06040a 25%, #18112a 52%, #302052 78%, #523886 100%)",
};

export function GradientBackground({
  children,
  className = "",
  theme = "blue",
}: GradientBackgroundProps) {
  const gradientStyle = GRADIENT_THEMES[theme] || GRADIENT_THEMES.blue;

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {/* Main gradient background with theme color fade */}
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{
          background: gradientStyle,
        }}
      />

      {/* Micro-texture tile */}
      <div
        className="absolute inset-0 opacity-5 bg-repeat pointer-events-none"
        style={{
          backgroundImage:
            'url("https://cdn.21st.dev/assets/mirror/f5/f55dfc553c100e6da0ad95258a042b4100f0ff4bb03a5313d1f541984275e262.png")',
          backgroundSize: "149.76px",
        }}
      />

      {/* Geometric grid overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Diagonal lines overlay for additional texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default GradientBackground;
