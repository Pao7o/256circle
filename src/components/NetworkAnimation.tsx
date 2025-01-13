import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function NetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create points
    const points: Point[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1
    }));

    // Animation
    let animationFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw center circle
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const centerRadius = 100;
      
      // Glowing center circle
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, centerRadius
      );
      gradient.addColorStop(0, 'rgba(139, 92, 246, 0.2)');
      gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, centerRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Update and draw points
      points.forEach((point, i) => {
        // Update position
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139, 92, 246, 0.5)';
        ctx.fill();

        // Draw connections
        points.forEach((otherPoint, j) => {
          if (i === j) return;
          
          const dx = otherPoint.x - point.x;
          const dy = otherPoint.y - point.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        // Draw connections to center
        const dxCenter = centerX - point.x;
        const dyCenter = centerY - point.y;
        const distanceToCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);

        if (distanceToCenter < 250) {
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(centerX, centerY);
          ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - distanceToCenter / 250)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ background: 'transparent' }}
    />
  );
}