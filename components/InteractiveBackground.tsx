"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  radius: number;
  opacity: number;
};

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;

    if (canvasElement === null) {
      return;
    }

    const canvas: HTMLCanvasElement = canvasElement;
    const canvasContext = canvas.getContext("2d");

    if (canvasContext === null) {
      return;
    }

    const context: CanvasRenderingContext2D = canvasContext;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrame: number;
    let particles: Particle[] = [];

    const cursor = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    function createParticles() {
      const particleCount = Math.min(
        90,
        Math.max(45, Math.floor((width * height) / 18000)),
      );

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        velocityX: prefersReducedMotion
          ? 0
          : (Math.random() - 0.5) * 0.12,
        velocityY: prefersReducedMotion
          ? 0
          : (Math.random() - 0.5) * 0.12,
        radius: Math.random() * 1.2 + 0.5,
        opacity: Math.random() * 0.16 + 0.06,
      }));
    }

    function resizeCanvas() {
      const pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        2,
      );

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0,
      );

      createParticles();
    }

    function handlePointerMove(event: PointerEvent) {
      cursor.x = event.clientX;
      cursor.y = event.clientY;
      cursor.active = true;
    }

    function handlePointerLeave() {
      cursor.active = false;
      cursor.x = -1000;
      cursor.y = -1000;
    }

    function drawCursorGlow() {
      if (!cursor.active) {
        return;
      }

      const glow = context.createRadialGradient(
        cursor.x,
        cursor.y,
        0,
        cursor.x,
        cursor.y,
        190,
      );

      glow.addColorStop(
        0,
        "rgba(77, 141, 255, 0.10)",
      );

      glow.addColorStop(
        0.45,
        "rgba(77, 141, 255, 0.035)",
      );

      glow.addColorStop(
        1,
        "rgba(77, 141, 255, 0)",
      );

      context.fillStyle = glow;
      context.beginPath();
      context.arc(
        cursor.x,
        cursor.y,
        190,
        0,
        Math.PI * 2,
      );
      context.fill();
    }

    function drawConnections() {
      const connectionDistance = 120;
      const cursorRadius = 190;

      for (
        let first = 0;
        first < particles.length;
        first++
      ) {
        for (
          let second = first + 1;
          second < particles.length;
          second++
        ) {
          const particleA = particles[first];
          const particleB = particles[second];

          const differenceX =
            particleA.x - particleB.x;

          const differenceY =
            particleA.y - particleB.y;

          const distance = Math.sqrt(
            differenceX * differenceX +
              differenceY * differenceY,
          );

          if (distance > connectionDistance) {
            continue;
          }

          const cursorDistanceA = Math.hypot(
            particleA.x - cursor.x,
            particleA.y - cursor.y,
          );

          const cursorDistanceB = Math.hypot(
            particleB.x - cursor.x,
            particleB.y - cursor.y,
          );

          const closestCursorDistance = Math.min(
            cursorDistanceA,
            cursorDistanceB,
          );

          const cursorInfluence =
            cursor.active &&
            closestCursorDistance < cursorRadius
              ? 1 -
                closestCursorDistance / cursorRadius
              : 0;

          const lineOpacity =
            (1 - distance / connectionDistance) *
            0.08;

          context.beginPath();
          context.moveTo(
            particleA.x,
            particleA.y,
          );

          context.lineTo(
            particleB.x,
            particleB.y,
          );

          if (cursorInfluence > 0) {
            context.strokeStyle = `rgba(77, 141, 255, ${
              lineOpacity + cursorInfluence * 0.28
            })`;
          } else {
            context.strokeStyle = `rgba(161, 161, 170, ${lineOpacity})`;
          }

          context.lineWidth = 0.7;
          context.stroke();
        }
      }
    }

    function drawParticles() {
      const cursorRadius = 190;

      for (const particle of particles) {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;

        if (particle.x < -10) {
          particle.x = width + 10;
        }

        if (particle.x > width + 10) {
          particle.x = -10;
        }

        if (particle.y < -10) {
          particle.y = height + 10;
        }

        if (particle.y > height + 10) {
          particle.y = -10;
        }

        const cursorDistance = Math.hypot(
          particle.x - cursor.x,
          particle.y - cursor.y,
        );

        const cursorInfluence =
          cursor.active &&
          cursorDistance < cursorRadius
            ? 1 - cursorDistance / cursorRadius
            : 0;

        context.beginPath();

        context.arc(
          particle.x,
          particle.y,
          particle.radius +
            cursorInfluence * 0.8,
          0,
          Math.PI * 2,
        );

        if (cursorInfluence > 0) {
          context.fillStyle = `rgba(77, 141, 255, ${
            0.25 + cursorInfluence * 0.7
          })`;
        } else {
          context.fillStyle = `rgba(245, 245, 245, ${particle.opacity})`;
        }

        context.fill();
      }
    }

    function animate() {
      context.clearRect(
        0,
        0,
        width,
        height,
      );

      drawCursorGlow();
      drawConnections();
      drawParticles();

      animationFrame =
        window.requestAnimationFrame(animate);
    }

    resizeCanvas();
    animate();

    window.addEventListener(
      "resize",
      resizeCanvas,
    );

    window.addEventListener(
      "pointermove",
      handlePointerMove,
    );

    document.documentElement.addEventListener(
      "mouseleave",
      handlePointerLeave,
    );

    window.addEventListener(
      "blur",
      handlePointerLeave,
    );

    return () => {
      window.cancelAnimationFrame(
        animationFrame,
      );

      window.removeEventListener(
        "resize",
        resizeCanvas,
      );

      window.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave,
      );

      window.removeEventListener(
        "blur",
        handlePointerLeave,
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}