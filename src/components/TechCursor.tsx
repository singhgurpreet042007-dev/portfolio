"use client";

import React, { useEffect, useRef } from "react";

interface TechImage {
  name: string;
  src: string;
  image: HTMLImageElement;
}

interface Particle {
  x: number;
  y: number;
  alpha: number;
  scale: number;
  image: HTMLImageElement;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

const icons: { name: string; src: string }[] = [
  {
    name: "JavaScript",
    src: "/tech-icons/javascript.png",
  },
  {
    name: "TypeScript",
    src: "/tech-icons/typescript.png",
  },
  {
    name: "React",
    src: "/tech-icons/react.svg",
  },
  {
    name: "Next.js",
    src: "/tech-icons/nextjs.svg",
  },
  {
    name: "HTML",
    src: "/tech-icons/html.png",
  },
  {
    name: "CSS",
    src: "/tech-icons/css.png",
  },
];

export const TechCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const techImagesRef = useRef<TechImage[]>([]);
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  const lastSpawnTime = useRef<number>(0);

  useEffect(() => {
    let animId: number;
    let isCancelled = false;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // High-DPI crisp canvas resize
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    // Preload icons immediately from local public folder
    icons.forEach(({ name, src }) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (!isCancelled) {
          if (!techImagesRef.current.some((item) => item.name === name)) {
            techImagesRef.current.push({ name, src, image: img });
          }
        }
      };
      if (img.complete && img.naturalWidth !== 0) {
        if (!techImagesRef.current.some((item) => item.name === name)) {
          techImagesRef.current.push({ name, src, image: img });
        }
      }
    });

    const spawnParticle = (x: number, y: number) => {
      const pool = techImagesRef.current;
      if (pool.length === 0) return;

      const randomIcon = pool[Math.floor(Math.random() * pool.length)];

      const particle: Particle = {
        x,
        y,
        // 100% full vibrant opacity
        alpha: 1.0,
        scale: 1.0,
        image: randomIcon.image,
        update() {
          this.y -= 0.4;
          this.alpha -= 0.024;
          this.scale = Math.max(0.75, this.scale - 0.008);
        },
        draw(c: CanvasRenderingContext2D) {
          if (this.alpha <= 0 || !this.image) return;
          c.save();
          c.globalAlpha = Math.max(0, this.alpha);

          // Increased vertical rectangle badge dimensions
          const badgeW = 70 * this.scale;
          const badgeH = 96 * this.scale;
          const radius = 12 * this.scale;
          const startX = this.x - badgeW / 2;
          const startY = this.y - badgeH / 2;

          // 1. Clean pure white vertical rectangle card with realistic soft shadow
          c.beginPath();
          c.roundRect(startX, startY, badgeW, badgeH, radius);
          c.fillStyle = "#ffffff";
          c.shadowColor = "rgba(0, 0, 0, 0.15)";
          c.shadowBlur = 12 * this.scale;
          c.shadowOffsetY = 4 * this.scale;
          c.fill();

          // 2. Crisp subtle border around the white card
          c.strokeStyle = "rgba(0, 0, 0, 0.14)";
          c.lineWidth = 1;
          c.stroke();

          // 3. Prominent, vibrant tech icon centered inside dark vertical card (48px)
          const iconSize = 48 * this.scale;
          try {
            c.drawImage(
              this.image,
              this.x - iconSize / 2,
              this.y - iconSize / 2,
              iconSize,
              iconSize
            );
          } catch {
            // ignore draw errors if image not ready
          }

          c.restore();
        },
      };

      particlesRef.current.push(particle);
      // Keep maximum particle count balanced
      if (particlesRef.current.length > 35) {
        particlesRef.current.shift();
      }
    };

    // Render loop
    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        if (p.alpha <= 0) {
          particles.splice(i, 1);
        }
      }
      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleMove = (clientX: number, clientY: number) => {
      // Find "What I work with" section bounds
      const section =
        document.getElementById("capabilities-section") ||
        document.getElementById("capabilities");

      if (section) {
        const rect = section.getBoundingClientRect();
        // Active when cursor is vertically within the "What I work with" section
        if (clientY < rect.top - 20 || clientY > rect.bottom + 20) {
          lastPos.current = null;
          return;
        }
      }

      const now = Date.now();
      // Low throttle (20ms) so movement feels natural and responsive
      if (now - lastSpawnTime.current < 20) {
        return;
      }

      if (!lastPos.current) {
        lastPos.current = { x: clientX, y: clientY };
        lastSpawnTime.current = now;
        spawnParticle(clientX, clientY);
        return;
      }

      const dx = clientX - lastPos.current.x;
      const dy = clientY - lastPos.current.y;
      const dist = Math.hypot(dx, dy);

      // Balanced gap for larger dark cards
      const minGap = 26;
      if (dist >= minGap) {
        spawnParticle(clientX, clientY);
        lastPos.current = { x: clientX, y: clientY };
        lastSpawnTime.current = now;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none z-50"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default TechCursor;
