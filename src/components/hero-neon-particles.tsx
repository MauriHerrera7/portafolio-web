"use client";

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  opacity: number;
  color: string;
  glowIntensity: number;
}

export default function HeroNeonParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar canvas para que cubra toda la HeroSection
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Colores neón cyan
    const neonColors = [
      '#00ffff', // Cyan puro
      '#00e6e6', // Cyan medio
      '#00cccc', // Cyan oscuro
      '#66ffff', // Cyan claro
      '#33ffff', // Cyan brillante
    ];

    // Crear partículas
    const createParticles = () => {
      particlesRef.current = [];
      const numParticles = 80; // Más partículas para mejor efecto

      for (let i = 0; i < numParticles; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - 200, // Empiezan más arriba
          dx: (Math.random() - 0.5) * 0.3, // Movimiento horizontal más sutil
          dy: Math.random() * 3 + 1.5, // Velocidad de caída más rápida y variable
          size: Math.random() * 4 + 0.5, // Tamaños más variados
          opacity: Math.random() * 0.9 + 0.1, // Opacidad inicial
          color: neonColors[Math.floor(Math.random() * neonColors.length)],
          glowIntensity: Math.random() * 15 + 8, // Intensidad del resplandor aumentada
        });
      }
    };

    createParticles();

    // Función de animación
    const animate = () => {
      // Limpiar canvas con fondo transparente
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Actualizar y dibujar partículas
      particlesRef.current.forEach((particle) => {
        // Aceleración gravitacional futurista
        particle.dy += 0.02; // Acelera gradualmente
        
        // Actualizar posición
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Efecto de fluctuación en la opacidad más dinámico
        particle.opacity += (Math.random() - 0.5) * 0.03;
        particle.opacity = Math.max(0.1, Math.min(1.0, particle.opacity));

        // Resetear partícula cuando sale de la pantalla con efecto más futurista
        if (particle.y > canvas.height + 100) {
          particle.x = Math.random() * canvas.width;
          particle.y = -100 - Math.random() * 100; // Respawn más arriba y aleatorio
          particle.dy = Math.random() * 2 + 1; // Reset velocidad
          particle.opacity = Math.random() * 0.9 + 0.1;
        }

        if (particle.x < -100 || particle.x > canvas.width + 100) {
          particle.x = Math.random() * canvas.width;
        }

        // Configurar el contexto para el efecto neón
        ctx.save();
        ctx.globalAlpha = particle.opacity;

        // Crear efecto de resplandor neón
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.glowIntensity;
        ctx.fillStyle = particle.color;

        // Dibujar estela futurista (cola de la partícula)
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = particle.size * 0.5;
        ctx.lineCap = 'round';
        ctx.shadowBlur = particle.glowIntensity * 0.5;
        
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y - particle.dy * 8); // Inicio de la cola
        ctx.lineTo(particle.x, particle.y); // Final de la cola
        ctx.stroke();

        // Dibujar la partícula principal
        ctx.globalAlpha = particle.opacity;
        ctx.shadowBlur = particle.glowIntensity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Añadir resplandor adicional más intenso
        ctx.shadowBlur = particle.glowIntensity * 3;
        ctx.globalAlpha = particle.opacity * 0.2;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{
        background: 'transparent',
      }}
    />
  );
}
