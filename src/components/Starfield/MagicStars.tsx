import React, { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

export const MagicStars: React.FC = () => {
  const starRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      const ease = 0.15;
      pos.current.x += (mouse.current.x - pos.current.x) * ease;
      pos.current.y += (mouse.current.y - pos.current.y) * ease;

      if (starRef.current) {
        starRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={starRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none text-blue-400 transition-opacity duration-300"
    >
      <Sparkles className="w-6 h-6 animate-spin" />
    </div>
  );
};
