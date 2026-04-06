import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function MouseGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for main glow
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  // Slower trail
  const trailConfig = { damping: 35, stiffness: 80, mass: 0.8 };
  const trailX = useSpring(mouseX, trailConfig);
  const trailY = useSpring(mouseY, trailConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Soft outer ambient trail */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: trailX,
          y: trailY,
          width: 500,
          height: 500,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(0, 200, 220, 0.025) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      {/* Main glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: glowX,
          y: glowY,
          width: 350,
          height: 350,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(0, 210, 230, 0.05) 0%, rgba(0, 180, 200, 0.025) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Inner soft core */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: glowX,
          y: glowY,
          width: 150,
          height: 150,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(0, 230, 255, 0.08) 0%, rgba(0, 200, 220, 0.03) 50%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
    </motion.div>
  );
}
