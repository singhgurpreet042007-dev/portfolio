import { motion } from "framer-motion";

interface AnimatedBlobsProps {
  variant?: "hero" | "about" | "projects" | "skills" | "certificates" | "contact";
}

const blobConfigs = {
  hero: {
    colors: [
      "rgba(0, 200, 220, 0.08)",
      "rgba(0, 180, 160, 0.06)",
    ],
    positions: [
      { top: "-15%", left: "-5%", size: 500 },
      { top: "40%", right: "-10%", size: 400 },
    ],
  },
  about: {
    colors: [
      "rgba(168, 85, 247, 0.07)",
      "rgba(99, 102, 241, 0.05)",
    ],
    positions: [
      { top: "10%", right: "-5%", size: 450 },
      { bottom: "10%", left: "-8%", size: 380 },
    ],
  },
  projects: {
    colors: [
      "rgba(16, 185, 129, 0.07)",
      "rgba(6, 182, 212, 0.05)",
    ],
    positions: [
      { top: "5%", left: "-8%", size: 480 },
      { bottom: "5%", right: "-5%", size: 400 },
    ],
  },
  skills: {
    colors: [
      "rgba(245, 158, 11, 0.07)",
      "rgba(249, 115, 22, 0.05)",
    ],
    positions: [
      { top: "0%", right: "10%", size: 420 },
      { bottom: "10%", left: "-5%", size: 380 },
    ],
  },
  certificates: {
    colors: [
      "rgba(236, 72, 153, 0.07)",
      "rgba(217, 70, 239, 0.05)",
    ],
    positions: [
      { top: "5%", left: "10%", size: 450 },
      { bottom: "0%", right: "-5%", size: 400 },
    ],
  },
  contact: {
    colors: [
      "rgba(34, 197, 94, 0.07)",
      "rgba(16, 185, 129, 0.05)",
    ],
    positions: [
      { top: "10%", right: "-5%", size: 420 },
      { bottom: "5%", left: "5%", size: 380 },
    ],
  },
};

export default function AnimatedBlobs({ variant = "hero" }: AnimatedBlobsProps) {
  const config = blobConfigs[variant];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {config.positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            bottom: pos.bottom,
            width: pos.size,
            height: pos.size,
            background: `radial-gradient(circle, ${config.colors[i]} 0%, transparent 65%)`,
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 20, -15, 25, 0],
            y: [0, -25, 20, -15, 0],
            scale: [1, 1.05, 0.98, 1.03, 1],
          }}
          transition={{
            duration: 18 + i * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 3,
          }}
        />
      ))}
    </div>
  );
}
