'use client';
import React, { useEffect, useRef } from 'react';

export default function SplashCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system for cursor trail
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;
    }> = [];

    const colors = ['#7043EC', '#8B5CF6', '#A78BFA', '#C4B5FD', '#DDD6FE'];

    const addParticle = (x: number, y: number, vx: number, vy: number) => {
      particles.push({
        x,
        y,
        vx: vx * 0.5 + (Math.random() - 0.5) * 2,
        vy: vy * 0.5 + (Math.random() - 0.5) * 2,
        life: 1,
        maxLife: 60 + Math.random() * 40,
        size: 20 + Math.random() * 30,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    };

    let lastX = 0;
    let lastY = 0;
    let lastTime = Date.now();

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dt = now - lastTime;
      lastTime = now;

      const vx = (e.clientX - lastX) / Math.max(dt, 1);
      const vy = (e.clientY - lastY) / Math.max(dt, 1);

      const speed = Math.sqrt(vx * vx + vy * vy);
      if (speed > 0.1) {
        addParticle(e.clientX, e.clientY, vx, vy);
      }

      lastX = e.clientX;
      lastY = e.clientY;
    };

    const animate = () => {
      // Clear canvas completely (transparent)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.95;
        p.vy *= 0.95;

        const alpha = 1 - p.life / p.maxLife;
        const radius = Math.max(0, p.size * alpha); // Ensure radius is never negative
        
        if (radius > 0) { // Only draw if radius is positive
          ctx.save();
          ctx.globalAlpha = alpha * 0.6;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
      <canvas ref={canvasRef} className="w-full h-full" style={{ background: 'transparent' }} />
    </div>
  );
}
