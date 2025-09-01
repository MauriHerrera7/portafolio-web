'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
}

const HeroParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to cover the hero section
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neon cyan particle colors
    const neonColors = ['#00ffff', '#00e6e6', '#00cccc', '#0099ff', '#66ffff'];

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 30; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 2,
          speed: Math.random() * 3 + 1,
          opacity: Math.random() * 0.7 + 0.3,
          color: neonColors[Math.floor(Math.random() * neonColors.length)]
        });
      }
    };

    initParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update particle position
        particle.y += particle.speed;
        particle.opacity -= 0.002;

        // Reset particle if it goes off screen or fades out
        if (particle.y > canvas.height || particle.opacity <= 0) {
          particle.y = -10;
          particle.x = Math.random() * canvas.width;
          particle.opacity = Math.random() * 0.7 + 0.3;
        }

        // Draw particle with neon glow effect
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add extra glow
        ctx.shadowBlur = 40;
        ctx.globalAlpha = particle.opacity * 0.5;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default HeroParticles;
