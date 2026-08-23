"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "motion/react";

const navigation = [
  {
    label: "Home",
    href: "#home",
    id: "home",
  },
  {
    label: "Projects",
    href: "#projects",
    id: "projects",
  },
  {
    label: "Skills",
    href: "#skills",
    id: "skills",
  },
  {
    label: "About",
    href: "#about",
    id: "about",
  },
  {
    label: "Contact",
    href: "#contact",
    id: "contact",
  },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  useEffect(() => {
    const sections = navigation
      .map((item) =>
        document.getElementById(item.id),
      )
      .filter(
        (
          section,
        ): section is HTMLElement =>
          section !== null,
      );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio -
              first.intersectionRatio,
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id,
          );
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [
          0,
          0.1,
          0.25,
          0.5,
          0.75,
        ],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[#262626] bg-[#080808]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-6 md:px-12">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-lg font-semibold tracking-[-0.03em] text-[#F5F5F5]"
        >
          AR

          <span className="text-[#4D8DFF]">
            .
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => {
            const active =
              activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                className={`group relative py-2 text-sm transition duration-300 ${
                  active
                    ? "text-[#F5F5F5]"
                    : "text-[#A1A1AA] hover:text-[#F5F5F5]"
                }`}
              >
                {item.label}

                <span
                  className={`absolute bottom-0 left-0 h-px bg-[#4D8DFF] transition-all duration-300 ${
                    active
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Abdur-Rehman-170"
            target="_blank"
            rel="noreferrer"
            className="group hidden items-center gap-2 rounded-md border border-[#262626] bg-[#111111] px-4 py-2.5 text-xs uppercase tracking-[0.12em] text-[#D4D4D8] transition duration-300 hover:-translate-y-0.5 hover:border-[#3A3A3A] hover:bg-[#171717] sm:flex"
          >
            GitHub

            <span className="text-[#4D8DFF] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen((open) => !open)
            }
            className="relative flex h-11 w-11 items-center justify-center rounded-md border border-[#262626] bg-[#111111] md:hidden"
          >
            <span
              className={`absolute h-px w-5 bg-[#F5F5F5] transition duration-300 ${
                menuOpen
                  ? "rotate-45"
                  : "-translate-y-1.5"
              }`}
            />

            <span
              className={`absolute h-px w-5 bg-[#F5F5F5] transition duration-300 ${
                menuOpen
                  ? "opacity-0"
                  : "opacity-100"
              }`}
            />

            <span
              className={`absolute h-px w-5 bg-[#F5F5F5] transition duration-300 ${
                menuOpen
                  ? "-rotate-45"
                  : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -12,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-0 right-0 top-full border-b border-[#262626] bg-[#0C0C0C]/98 p-6 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <nav className="divide-y divide-[#262626]">
              {navigation.map((item, index) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between py-5"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-[#4D8DFF]">
                      0{index + 1}
                    </span>

                    <span
                      className={`text-base ${
                        activeSection === item.id
                          ? "text-[#F5F5F5]"
                          : "text-[#A1A1AA]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>

                  <span className="text-[#4D8DFF]">
                    →
                  </span>
                </a>
              ))}
            </nav>

            <a
              href="https://github.com/Abdur-Rehman-170"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="mt-6 flex items-center justify-center gap-3 rounded-md bg-[#4D8DFF] px-5 py-3.5 text-sm font-medium text-white"
            >
              Visit GitHub
              <span>↗</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}