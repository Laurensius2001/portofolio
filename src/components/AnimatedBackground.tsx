import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160
    };

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      color: string;
    }

    let particles: Particle[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Dynamic count based on screen area, balanced for performance
      const particleCount = Math.min(75, Math.floor((width * height) / 18000));

      const colors = ['rgba(0, 180, 255, ', 'rgba(99, 102, 241, ', 'rgba(14, 165, 233, '];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          size: Math.random() * 2 + 1,
          baseAlpha: Math.random() * 0.4 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    resize();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle ambient glowing mesh in the corners
      const radGrad1 = ctx.createRadialGradient(width * 0.85, height * 0.15, 0, width * 0.85, height * 0.15, width * 0.5);
      radGrad1.addColorStop(0, 'rgba(0, 180, 255, 0.08)');
      radGrad1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radGrad1;
      ctx.fillRect(0, 0, width, height);

      const radGrad2 = ctx.createRadialGradient(width * 0.15, height * 0.85, 0, width * 0.15, height * 0.85, width * 0.45);
      radGrad2.addColorStop(0, 'rgba(99, 102, 241, 0.07)');
      radGrad2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radGrad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction: gentle push
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * force * 1.5;
          p.y -= Math.sin(angle) * force * 1.5;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.baseAlpha + ')';
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pdist = Math.hypot(p.x - p2.x, p.y - p2.y);
          const maxDist = 130;

          if (pdist < maxDist) {
            const lineAlpha = (1 - pdist / maxDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 180, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse if close
        if (dist < mouse.radius) {
          const lineAlpha = (1 - dist / mouse.radius) * 0.25;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 220, 255, ${lineAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: '#050814'
      }}
    />
  );
};

export default AnimatedBackground;
