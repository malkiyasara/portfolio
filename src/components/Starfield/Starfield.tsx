import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  twinkleSpeed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
}

interface StarfieldProps {
  isDecrypted: boolean;
}

export const Starfield: React.FC<StarfieldProps> = ({ isDecrypted }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const starCount = Math.floor((canvas.width * canvas.height) / 3000);
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          alpha: Math.random(),
          twinkleSpeed: Math.random() * 0.02 + 0.005,
        });
      }
    };

    const addShootingStar = () => {
      if (shootingStars.length < 3 && Math.random() < 0.01) {
        shootingStars.push({
          x: Math.random() * canvas.width * 0.8,
          y: 0,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 8 + 4,
          angle: Math.PI / 4 + (Math.random() * 0.1 - 0.05),
          alpha: 1,
        });
      }
    };

    const interpolateColor = (
      color1: string,
      color2: string,
      factor: number,
    ) => {
      const hex = (x: string) => parseInt(x.replace("#", ""), 16);
      const r1 = (hex(color1) >> 16) & 255,
        g1 = (hex(color1) >> 8) & 255,
        b1 = hex(color1) & 255;
      const r2 = (hex(color2) >> 16) & 255,
        g2 = (hex(color2) >> 8) & 255,
        b2 = hex(color2) & 255;
      const r = Math.round(r1 + factor * (r2 - r1));
      const g = Math.round(g1 + factor * (g2 - g1));
      const b = Math.round(b1 + factor * (b2 - b1));
      return `rgb(${r}, ${g}, ${b})`;
    };

    const draw = () => {
      const targetProgress = isDecrypted ? 1 : 0;
      progressRef.current += (targetProgress - progressRef.current) * 0.05;

      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height,
      );

      if (progressRef.current < 0.01) {
        ctx.fillStyle = "#03030c";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        const currentStop0 = interpolateColor(
          "#03030c",
          "#060f26",
          progressRef.current,
        );
        const currentStop1 = interpolateColor(
          "#03030c",
          "#0a1b3a",
          progressRef.current,
        );
        const currentStop2 = interpolateColor(
          "#03030c",
          "#122854",
          progressRef.current,
        );

        gradient.addColorStop(0, currentStop0);
        gradient.addColorStop(0.5, currentStop1);
        gradient.addColorStop(1, currentStop2);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      stars.forEach((star) => {
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1 || star.alpha < 0) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.2, star.alpha)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      addShootingStar();
      shootingStars = shootingStars.filter((ss) => ss.alpha > 0);

      shootingStars.forEach((ss) => {
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.alpha -= 0.015;

        if (ss.alpha > 0) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${ss.alpha})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(ss.x, ss.y);
          ctx.lineTo(
            ss.x - Math.cos(ss.angle) * ss.length,
            ss.y - Math.sin(ss.angle) * ss.length,
          );
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDecrypted]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full block pointer-events-none z-0"
    />
  );
};
