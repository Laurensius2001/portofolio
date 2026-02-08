import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let planes: Airplane[] = [];
    let explosions: (ExplosionParticle | Shockwave)[] = [];
    let lastCollisionTime = 0;
    let shakeAmount = 0;
    let flashAlpha = 0;
    let gradient: CanvasGradient | null = null;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gradient = ctx.createRadialGradient(
        canvas.width * 0.8, canvas.height * 0.2, 0,
        canvas.width * 0.8, canvas.height * 0.2, canvas.width
      );
      gradient.addColorStop(0, '#001a33');
      gradient.addColorStop(1, '#000811');
    };

    class Shockwave {
      x: number;
      y: number;
      radius: number = 0;
      maxRadius: number;
      life: number = 40;
      maxLife: number = 40;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.maxRadius = Math.max(window.innerWidth, window.innerHeight) * 0.4;
      }

      update() {
        this.radius += this.maxRadius / this.maxLife;
        this.life--;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${Math.max(0, this.life / this.maxLife * 0.15)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    class ExplosionParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      color: string;
      size: number;
      type: 'fire' | 'smoke' | 'spark';

      constructor(x: number, y: number, type: 'fire' | 'smoke' | 'spark') {
        this.x = x;
        this.y = y;
        this.type = type;
        const angle = Math.random() * Math.PI * 2;
        let speed = 0;

        if (type === 'fire') speed = Math.random() * 5 + 2;
        else if (type === 'spark') speed = Math.random() * 10 + 5;
        else speed = Math.random() * 2 + 0.5;

        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;

        this.maxLife = type === 'smoke' ? Math.random() * 50 + 30 : Math.random() * 25 + 10;
        this.life = this.maxLife;

        if (type === 'fire') this.color = `rgba(255, ${Math.floor(Math.random() * 80 + 100)}, 0, `;
        else if (type === 'spark') this.color = `rgba(255, 255, 255, `;
        else this.color = `rgba(40, 40, 40, `; // Darker smoke

        this.size = type === 'smoke' ? Math.random() * 6 + 3 : Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.type === 'smoke') {
          this.vy -= 0.02;
          this.vx *= 0.99;
          this.size += 0.05;
        } else {
          this.vy += 0.06;
          this.vx *= 0.96;
        }
        this.life--;
      }

      draw() {
        if (!ctx) return;
        const alpha = Math.max(0, this.life / this.maxLife);
        ctx.fillStyle = this.color + alpha + ')';
        ctx.beginPath();
        const currentSize = this.type === 'smoke' ? this.size : this.size * alpha;
        ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class Airplane {
      x: number;
      y: number;
      speedX: number;
      direction: number;
      isCollisionPlane: boolean;
      targetX?: number;
      hasExploded: boolean = false;
      blinkTimer: number = 0;
      opacity: number;

      constructor(isCollision = false, customY?: number, customDir?: number) {
        this.isCollisionPlane = isCollision;
        this.direction = customDir || (Math.random() > 0.5 ? 1 : -1);
        this.x = this.direction === 1 ? -250 : (canvas?.width || 0) + 250;
        this.y = customY !== undefined ? customY : Math.random() * (canvas?.height || 0);
        this.speedX = (isCollision ? 5.5 : Math.random() * 1.5 + 1) * this.direction;
        this.opacity = isCollision ? 1 : Math.random() * 0.4 + 0.3;
        if (isCollision) this.targetX = (canvas?.width || 0) / 2;
      }

      update() {
        if (this.hasExploded) return;
        this.x += this.speedX;
        this.blinkTimer += 0.12;

        if (this.isCollisionPlane && this.targetX !== undefined) {
          if (Math.abs(this.x - this.targetX) < 10) {
            this.hasExploded = true;
            triggerBigBang(this.x, this.y);
          }
        } else {
          const limit = (canvas?.width || 0) + 400;
          if (this.x > limit || this.x < -400) {
            this.x = this.direction === 1 ? -250 : limit - 150;
            this.y = Math.random() * (canvas?.height || 0);
          }
        }
      }

      draw() {
        if (!ctx || this.hasExploded) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        if (this.direction === -1) ctx.scale(-1, 1);

        const bodySize = this.isCollisionPlane ? 22 : 12;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-bodySize, -bodySize / 3.5);
        ctx.lineTo(-bodySize, bodySize / 3.5);
        ctx.closePath();
        ctx.fill();

        if (Math.sin(this.blinkTimer) > 0.5) {
          ctx.fillStyle = '#ff3300';
          ctx.beginPath();
          ctx.arc(-bodySize / 4, 0, this.isCollisionPlane ? 4 : 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    const triggerBigBang = (x: number, y: number) => {
      shakeAmount = 10;
      flashAlpha = 0.6;
      explosions.push(new Shockwave(x, y));
      for (let i = 0; i < 30; i++) explosions.push(new ExplosionParticle(x, y, 'fire'));
      for (let i = 0; i < 20; i++) explosions.push(new ExplosionParticle(x, y, 'spark'));
      for (let i = 0; i < 40; i++) explosions.push(new ExplosionParticle(x, y, 'smoke'));
    };

    const init = () => {
      const planeCount = Math.max(4, Math.floor(window.innerWidth / 200));
      planes = [];
      for (let i = 0; i < planeCount; i++) {
        const p = new Airplane();
        p.x = Math.random() * (canvas?.width || 800);
        planes.push(p);
      }
    };

    const animate = (time: number) => {
      if (!ctx || !canvas) return;

      if (time - lastCollisionTime > 12000 + Math.random() * 8000) {
        const collisionY = Math.random() * (canvas.height * 0.4) + canvas.height * 0.3;
        planes.push(new Airplane(true, collisionY, 1));
        planes.push(new Airplane(true, collisionY, -1));
        lastCollisionTime = time;
      }

      if (gradient) {
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.save();
      if (shakeAmount > 0.1) {
        ctx.translate(Math.random() * shakeAmount - shakeAmount / 2, Math.random() * shakeAmount - shakeAmount / 2);
        shakeAmount *= 0.88;
      } else {
        shakeAmount = 0;
      }

      planes = planes.filter(p => !p.hasExploded);
      for (const p of planes) {
        p.update();
        p.draw();
      }

      const smokeItems = explosions.filter(e => e.life > 0 && (!(e instanceof ExplosionParticle) || e.type === 'smoke'));
      const fireItems = explosions.filter(e => e.life > 0 && e instanceof ExplosionParticle && e.type !== 'smoke');

      ctx.globalCompositeOperation = 'source-over';
      for (const e of smokeItems) { e.update(); e.draw(); }

      ctx.globalCompositeOperation = 'lighter';
      for (const e of fireItems) { e.update(); e.draw(); }

      ctx.globalCompositeOperation = 'source-over';
      explosions = explosions.filter(e => (e as any).life > 0);

      ctx.restore();

      if (flashAlpha > 0.01) {
        ctx.fillStyle = `rgba(255, 255, 255, ${flashAlpha})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        flashAlpha *= 0.65;
      } else {
        flashAlpha = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', () => {
      resizeCanvas();
      init();
    });

    resizeCanvas();
    init();
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
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
        zIndex: -1,
        pointerEvents: 'none',
        background: '#000811',
        willChange: 'transform'
      }}
    />
  );
};

export default AnimatedBackground;
