"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

export default function CustomCursor() {
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);

  const smoothX = useSpring(pointerX, {
    stiffness: 500,
    damping: 32,
    mass: 0.4,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 500,
    damping: 32,
    mass: 0.4,
  });

  const [visible, setVisible] =
    useState(false);

  const [interactive, setInteractive] =
    useState(false);

  const [pressed, setPressed] =
    useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(pointer: fine)",
    );

    if (!finePointer.matches) {
      return;
    }

    document.documentElement.classList.add(
      "custom-cursor-enabled",
    );

    function handlePointerMove(
      event: PointerEvent,
    ) {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      setVisible(true);
    }

    function handlePointerOver(
      event: PointerEvent,
    ) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const isInteractive = Boolean(
        target.closest(
          "a, button, [data-cursor='interactive']",
        ),
      );

      setInteractive(isInteractive);
    }

    function handlePointerLeave() {
      setVisible(false);
      setInteractive(false);
    }

    function handlePointerDown() {
      setPressed(true);
    }

    function handlePointerUp() {
      setPressed(false);
    }

    window.addEventListener(
      "pointermove",
      handlePointerMove,
    );

    window.addEventListener(
      "pointerover",
      handlePointerOver,
    );

    window.addEventListener(
      "pointerdown",
      handlePointerDown,
    );

    window.addEventListener(
      "pointerup",
      handlePointerUp,
    );

    document.documentElement.addEventListener(
      "mouseleave",
      handlePointerLeave,
    );

    return () => {
      document.documentElement.classList.remove(
        "custom-cursor-enabled",
      );

      window.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      window.removeEventListener(
        "pointerover",
        handlePointerOver,
      );

      window.removeEventListener(
        "pointerdown",
        handlePointerDown,
      );

      window.removeEventListener(
        "pointerup",
        handlePointerUp,
      );

      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave,
      );
    };
  }, [pointerX, pointerY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100]"
      style={{
        x: smoothX,
        y: smoothY,
      }}
      animate={{
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <motion.div
        className="relative -translate-x-1/2 -translate-y-1/2 rounded-full border backdrop-blur-[1px]"
        animate={{
          width: interactive ? 34 : 18,
          height: interactive ? 34 : 18,
          scale: pressed ? 0.82 : 1,
          borderColor: interactive
            ? "rgba(77, 141, 255, 0.9)"
            : "rgba(245, 245, 245, 0.55)",
          backgroundColor: interactive
            ? "rgba(77, 141, 255, 0.10)"
            : "rgba(245, 245, 245, 0.025)",
        }}
        transition={{
          duration: 0.22,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5F5F5]" />
      </motion.div>
    </motion.div>
  );
}