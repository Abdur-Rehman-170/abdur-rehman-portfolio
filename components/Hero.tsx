"use client";

import Image from "next/image";

import {
  motion,
  useReducedMotion,
} from "motion/react";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  function entrance(delay: number) {
    return {
      initial: reduceMotion
        ? false
        : {
            opacity: 0,
            y: 22,
          },
      animate: {
        opacity: 1,
        y: 0,
      },
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    };
  }

  return (
    <section
      id="home"
      className="relative z-10 mx-auto min-h-[calc(100vh-82px)] max-w-7xl px-6 py-16 md:px-12 lg:py-20"
    >
      <div className="grid min-h-[calc(100vh-220px)] items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Content */}
        <div className="relative">
          <motion.div
            {...entrance(0.1)}
            className="mb-9 flex items-center gap-4"
          >
            <span className="text-xs tracking-[0.25em] text-[#4D8DFF]">
              01
            </span>

            <span className="h-px w-12 bg-[#262626]" />

            <p className="text-xs uppercase tracking-[0.22em] text-[#71717A]">
              Portfolio · 2026
            </p>
          </motion.div>

          <motion.div
            {...entrance(0.2)}
            className="mb-6 flex items-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4D8DFF] opacity-40" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4D8DFF]" />
            </span>

            <p className="text-xs uppercase tracking-[0.2em] text-[#A1A1AA]">
              Available for opportunities
            </p>
          </motion.div>

          <motion.h1
            {...entrance(0.3)}
            className="max-w-3xl text-5xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#F5F5F5] md:text-6xl lg:text-[76px]"
          >
            Engineering intelligence into{" "}
            <span className="relative whitespace-nowrap">
              useful systems
              <span className="absolute -bottom-2 left-0 h-px w-full bg-[#4D8DFF]/70" />
            </span>
            <span className="text-[#4D8DFF]">.</span>
          </motion.h1>

          <motion.p
            {...entrance(0.4)}
            className="mt-8 max-w-xl text-base leading-8 text-[#A1A1AA] md:text-lg"
          >
            I&apos;m Abdur Rehman, a computer engineer
            building machine-learning, deep-learning and
            web applications that turn trained models into
            practical user experiences.
          </motion.p>

          <motion.div
            {...entrance(0.5)}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-md bg-[#4D8DFF] px-6 py-3.5 text-sm font-medium text-white transition duration-300 ease-out hover:-translate-y-1 hover:bg-[#6EA3FF] hover:shadow-[0_12px_30px_rgba(77,141,255,0.22)]"
            >
              Explore my work

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="mailto:workbyabdurrehman@gmail.com"
              className="group flex items-center gap-3 rounded-md border border-[#262626] bg-[#111111]/70 px-6 py-3.5 text-sm text-[#F5F5F5] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-1 hover:border-[#3A3A3A] hover:bg-[#171717]"
            >
              Start a conversation

              <span className="text-[#4D8DFF] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </motion.div>

          <motion.div
            {...entrance(0.6)}
            className="mt-14 grid max-w-xl grid-cols-2 border-y border-[#262626]"
          >
            <div className="py-5 pr-6">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#71717A]">
                Specialisation
              </p>

              <p className="mt-2 text-sm text-[#D4D4D8]">
                AI/ML · Computer Vision
              </p>
            </div>

            <div className="border-l border-[#262626] py-5 pl-6">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#71717A]">
                Based in
              </p>

              <p className="mt-2 text-sm text-[#D4D4D8]">
                Islamabad, Pakistan
              </p>
            </div>
          </motion.div>
        </div>

        {/* Portrait composition */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: 28,
                }
          }
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            delay: reduceMotion ? 0 : 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[470px]"
        >
          <span className="absolute -right-6 -top-12 font-mono text-[110px] font-light leading-none text-[#171717]">
            01
          </span>

          <div className="absolute -left-8 top-10 h-32 w-px bg-gradient-to-b from-transparent via-[#4D8DFF]/70 to-transparent" />

          <div className="absolute -right-8 bottom-14 h-36 w-px bg-[#262626]" />

          <motion.div
            data-cursor="interactive"
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -6,
                  }
            }
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative h-[590px] overflow-hidden rounded-[14px] border border-[#262626] bg-[#111111] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
          >
            <Image
              src="/profile.jpeg"
              alt="Portrait of Abdur Rehman"
              fill
              priority
              className="object-cover object-center grayscale-[18%] transition duration-700 ease-out hover:scale-[1.025] hover:grayscale-0"
              sizes="(max-width: 1024px) 90vw, 470px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-75" />

            <div className="portrait-scan pointer-events-none absolute left-0 top-0 h-px w-full bg-[#4D8DFF]/50 shadow-[0_0_12px_rgba(77,141,255,0.3)]" />

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">
              <div>
                <p className="text-base font-medium text-[#F5F5F5]">
                  Abdur Rehman
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#A1A1AA]">
                  Computer Engineer
                </p>
              </div>

              <span className="h-2 w-2 rounded-full bg-[#4D8DFF] shadow-[0_0_10px_rgba(77,141,255,0.45)]" />
            </div>
          </motion.div>

          <div className="absolute -bottom-6 -left-6 flex items-center gap-3 border border-[#262626] bg-[#111111]/95 px-4 py-3 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4D8DFF]" />

            <p className="text-[10px] uppercase tracking-[0.18em] text-[#A1A1AA]">
              Building multimodal AI
            </p>
          </div>

          <div className="absolute -right-5 top-16 border border-[#262626] bg-[#111111]/95 px-3 py-2 backdrop-blur-md">
            <p className="font-mono text-[10px] text-[#4D8DFF]">
              PY · TF · NEXT
            </p>
          </div>
        </motion.div>
      </div>

      <motion.a
        {...entrance(0.8)}
        href="#projects"
        className="absolute bottom-5 left-6 hidden items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[#71717A] transition hover:text-[#A1A1AA] md:left-12 lg:flex"
      >
        <span className="h-10 w-px bg-[#262626]" />
        Scroll to explore
      </motion.a>
    </section>
  );
}