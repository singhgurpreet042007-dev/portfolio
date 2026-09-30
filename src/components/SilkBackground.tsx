"use client";

import React, { useEffect, useRef } from 'react';

interface SilkBackgroundProps {
  theme?: 'cream' | 'dark';
  className?: string;
  speed?: number;
}

export const SilkBackground: React.FC<SilkBackgroundProps> = ({
  theme = 'cream',
  className = '',
  speed = 0.016,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let time = 0;
    const scale = 2.2;
    const noiseIntensity = 0.6;

    // Optimized resolution scaling for 60fps buttery smooth performance
    const renderScale = 0.28; // Render at ~28% internal resolution and upscale with smooth bilinear filter
    let simWidth = Math.max(160, Math.floor(window.innerWidth * renderScale));
    let simHeight = Math.max(120, Math.floor(window.innerHeight * renderScale));

    const resizeCanvas = () => {
      if (!canvas) return;
      simWidth = Math.max(160, Math.floor(canvas.clientWidth * renderScale));
      simHeight = Math.max(120, Math.floor(canvas.clientHeight * renderScale));
      canvas.width = simWidth;
      canvas.height = simHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Fast deterministic noise hash
    const noise = (x: number, y: number) => {
      const G = 2.71828;
      const rx = G * Math.sin(G * x);
      const ry = G * Math.sin(G * y);
      return (rx * ry * (1 + x)) % 1;
    };

    const isCream = theme === 'cream';

    const animate = () => {
      const width = simWidth;
      const height = simHeight;

      if (width <= 0 || height <= 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;
      const tOffset = speed * time;

      for (let y = 0; y < height; y++) {
        const v = (y / height) * scale;

        for (let x = 0; x < width; x++) {
          const u = (x / width) * scale;
          const tex_x = u;
          const tex_y = v + 0.03 * Math.sin(8.0 * tex_x - tOffset);

          const pattern =
            0.58 +
            0.42 *
              Math.sin(
                5.0 *
                  (tex_x +
                    tex_y +
                    Math.cos(3.0 * tex_x + 5.0 * tex_y) +
                    0.02 * tOffset) +
                  Math.sin(20.0 * (tex_x + tex_y - 0.1 * tOffset))
              );

          const rnd = noise(x, y);
          const intensity = Math.min(
            1,
            Math.max(0, pattern - (rnd / 16.0) * noiseIntensity)
          );

          const index = (y * width + x) * 4;

          if (isCream) {
            // Harmonic luxury cream silk: base #F5F2EB modulated with gentle sand/ivory waves
            data[index] = Math.floor(245 - 24 * (1 - intensity)); // R
            data[index + 1] = Math.floor(242 - 26 * (1 - intensity)); // G
            data[index + 2] = Math.floor(235 - 30 * (1 - intensity)); // B
            data[index + 3] = 230;
          } else {
            // Soft mixed charcoal silk: base #141518 modulated with rich graphite slate waves
            data[index] = Math.floor(20 + 32 * intensity); // R
            data[index + 1] = Math.floor(21 + 33 * intensity); // G
            data[index + 2] = Math.floor(24 + 40 * intensity); // B
            data[index + 3] = 240;
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);

      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none select-none w-full h-full object-cover transition-opacity duration-700 ${className}`}
      style={{
        imageRendering: 'auto',
      }}
    />
  );
};

export default SilkBackground;
