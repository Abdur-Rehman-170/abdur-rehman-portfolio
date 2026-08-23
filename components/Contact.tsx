import Reveal from "./Reveal";

const socialLinks = [
  {
    name: "GitHub",
    description: "View code and repositories",
    href: "https://github.com/Abdur-Rehman-170",
  },
  {
    name: "LinkedIn",
    description: "Connect professionally",
    href: "https://www.linkedin.com/in/abdur-rehman-5760783a9",
  },
  {
    name: "Email",
    description: "Send me a message",
    href: "mailto:workbyabdurrehman@gmail.com",
  },
];

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="relative z-10 border-t border-[#262626] bg-[#080808]/55 px-6 py-28 md:px-12 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[180px_1fr]">
              <div className="flex items-start gap-4">
                <span className="text-xs tracking-[0.25em] text-[#4D8DFF]">
                  05
                </span>

                <span className="mt-2 h-px w-12 bg-[#262626]" />
              </div>

              <div>
                <div className="mb-7 flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4D8DFF] opacity-30" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4D8DFF]" />
                  </span>

                  <p className="text-xs uppercase tracking-[0.22em] text-[#71717A]">
                    Available for opportunities
                  </p>
                </div>

                <h2 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#F5F5F5] md:text-7xl">
                  Have an opportunity or an idea?{" "}

                  <span className="text-[#4D8DFF]">
                    Let&apos;s talk.
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-base leading-8 text-[#A1A1AA] md:text-lg">
                  I&apos;m open to AI/ML, software-development
                  and web-development opportunities where I can
                  contribute, continue learning and help build
                  useful products.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="mailto:workbyabdurrehman@gmail.com"
                    className="group flex items-center gap-3 rounded-md bg-[#4D8DFF] px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-[#6EA3FF] hover:shadow-[0_12px_30px_rgba(77,141,255,0.22)]"
                  >
                    Send an email

                    <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>

                  <a
                    href="/Abdur-Rehman-CV.pdf"
                    download
                    className="group flex items-center gap-3 rounded-md border border-[#262626] bg-[#111111] px-6 py-3.5 text-sm text-[#F5F5F5] transition duration-300 hover:-translate-y-1 hover:border-[#353535] hover:bg-[#171717]"
                  >
                    Download CV

                    <span className="text-[#4D8DFF] transition-transform duration-300 group-hover:translate-y-1">
                      ↓
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-20 border-t border-[#262626]">
            {socialLinks.map((link, index) => (
              <Reveal
                key={link.name}
                delay={index * 0.06}
              >
                <a
                  data-cursor="interactive"
                  href={link.href}
                  target={
                    link.name === "Email"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    link.name === "Email"
                      ? undefined
                      : "noreferrer"
                  }
                  className="group grid items-center gap-4 border-b border-[#262626] py-7 transition duration-300 hover:border-[#353535] md:grid-cols-[180px_1fr_auto] md:px-5"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-[#71717A]">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="text-xl font-medium text-[#F5F5F5] transition duration-300 group-hover:translate-x-1 group-hover:text-[#6EA3FF]">
                      {link.name}
                    </h3>

                    <p className="mt-1 text-sm text-[#71717A]">
                      {link.description}
                    </p>
                  </div>

                  <span className="text-lg text-[#4D8DFF] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#262626] bg-[#080808]/80 backdrop-blur-xl px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <a
            href="#home"
            className="text-lg font-semibold text-[#F5F5F5]"
          >
            AR

            <span className="text-[#4D8DFF]">
              .
            </span>
          </a>

          <p className="text-xs uppercase tracking-[0.16em] text-[#52525B]">
            © 2026 Abdur Rehman. All rights reserved.
          </p>

          <a
            href="#home"
            className="group flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#71717A] transition hover:text-[#F5F5F5]"
          >
            Back to top

            <span className="text-[#4D8DFF] transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>
      </footer>
    </>
  );
}