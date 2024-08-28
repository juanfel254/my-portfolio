import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  targetX: number;
  targetY: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePosition = useRef<{ x: number; y: number }>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    const particlesArray: Particle[] = [];
    const numberOfParticles = 100;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Recalcula la posición del mouse al centro de la pantalla cuando la pantalla es redimensionada
      mousePosition.current.x = canvas.width / 2;
      mousePosition.current.y = canvas.height / 2;
    };

    resizeCanvas();

    class ParticleClass implements Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      targetX: number;
      targetY: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        this.size = Math.random() * 7 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.targetX = this.x;
        this.targetY = this.y;
      }

      update() {
        // Lentamente ajusta la velocidad para alejarse de la posición del mouse
        this.targetX -= (mousePosition.current.x - this.targetX) * 0.01;
        this.targetY -= (mousePosition.current.y - this.targetY) * 0.01;

        this.x += (this.targetX - this.x) * 0.05;
        this.y += (this.targetY - this.y) * 0.05;

        // Desvanecer el tamaño lentamente
        if (this.size > 0.2) this.size -= 0.05;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fill();
      }
    }

    const initParticles = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new ParticleClass());
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle, index) => {
        particle.update();
        particle.draw(ctx);

        // Eliminar partículas pequeñas y reemplazarlas con nuevas
        if (particle.size <= 0.2) {
          particlesArray.splice(index, 1);
          particlesArray.push(new ParticleClass());
        }
      });

      requestAnimationFrame(animateParticles);
    };

    initParticles();
    animateParticles();

    const handleMouseMove = (event: MouseEvent) => {
      if (window.innerWidth > 1024) {
        mousePosition.current.x = event.clientX;
        mousePosition.current.y = event.clientY;
      } else {
        // Si la pantalla es menor a 1024px, el mouse siempre se considerará en el centro
        mousePosition.current.x = canvas.width / 2;
        mousePosition.current.y = canvas.height / 2;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full bg-transparent -z-10" />;
};

export default ParticlesBackground;
