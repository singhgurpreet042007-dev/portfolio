import { motion } from "framer-motion";

interface BeamLinesProps {
  variant?: "hero" | "about" | "projects" | "skills" | "certificates" | "contact";
}

const beamConfigs = {
  hero: {
    color: "rgba(0, 200, 220, 0.4)",
    colorFade: "rgba(0, 200, 220, 0.1)",
    lines: [
      { type: "vertical", left: "12%", height: "55%", top: 0, delay: 0 },
      { type: "vertical", right: "18%", height: "65%", top: 0, delay: 0.5 },
    ],
  },
  about: {
    color: "rgba(168, 85, 247, 0.4)",
    colorFade: "rgba(168, 85, 247, 0.1)",
    lines: [
      { type: "vertical", right: "10%", height: "50%", top: 0, delay: 0 },
      { type: "horizontal", bottom: "20%", width: "40%", left: 0, delay: 0.3 },
    ],
  },
  projects: {
    color: "rgba(16, 185, 129, 0.4)",
    colorFade: "rgba(16, 185, 129, 0.1)",
    lines: [
      { type: "vertical", left: "8%", height: "60%", top: 0, delay: 0 },
      { type: "vertical", right: "15%", height: "45%", bottom: 0, delay: 0.4 },
    ],
  },
  skills: {
    color: "rgba(245, 158, 11, 0.4)",
    colorFade: "rgba(245, 158, 11, 0.1)",
    lines: [
      { type: "horizontal", top: "15%", width: "35%", right: 0, delay: 0 },
      { type: "vertical", left: "20%", height: "50%", bottom: 0, delay: 0.3 },
    ],
  },
  certificates: {
    color: "rgba(236, 72, 153, 0.4)",
    colorFade: "rgba(236, 72, 153, 0.1)",
    lines: [
      { type: "vertical", right: "12%", height: "55%", top: 0, delay: 0 },
      { type: "horizontal", bottom: "25%", width: "30%", left: 0, delay: 0.5 },
    ],
  },
  contact: {
    color: "rgba(34, 197, 94, 0.4)",
    colorFade: "rgba(34, 197, 94, 0.1)",
    lines: [
      { type: "vertical", left: "15%", height: "50%", top: 0, delay: 0 },
      { type: "vertical", right: "10%", height: "60%", bottom: 0, delay: 0.4 },
    ],
  },
};

export default function BeamLines({ variant = "hero" }: BeamLinesProps) {
  const config = beamConfigs[variant];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {config.lines.map((line, i) => {
        const isVertical = line.type === "vertical";
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: line.left,
              right: line.right,
              top: line.top !== undefined ? line.top : undefined,
              bottom: line.bottom !== undefined ? line.bottom : undefined,
              width: isVertical ? 1 : line.width,
              height: isVertical ? line.height : 1,
              background: isVertical
                ? `linear-gradient(${line.top !== undefined ? '180deg' : '0deg'}, ${config.color} 0%, ${config.colorFade} 60%, transparent 100%)`
                : `linear-gradient(${line.left !== undefined ? '90deg' : '270deg'}, transparent 0%, ${config.colorFade} 40%, ${config.color} 100%)`,
              boxShadow: `0 0 8px ${config.colorFade}`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: line.delay, ease: "easeOut" }}
          />
        );
      })}

      {/* Subtle animated pulse on beams */}
      {config.lines.slice(0, 1).map((line, i) => {
        const isVertical = line.type === "vertical";
        return (
          <motion.div
            key={`pulse-${i}`}
            className="absolute rounded-full"
            style={{
              left: line.left,
              right: line.right,
              top: line.top !== undefined ? line.top : undefined,
              bottom: line.bottom !== undefined ? line.bottom : undefined,
              width: isVertical ? 3 : 20,
              height: isVertical ? 20 : 3,
              background: config.color,
              filter: "blur(2px)",
            }}
            animate={{
              [isVertical ? 'y' : 'x']: [0, isVertical ? 200 : 150, 0],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: line.delay + 1,
            }}
          />
        );
      })}
    </div>
  );
}
