import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 border-t border-[#262626] bg-[#080808]/55 px-6 py-28 md:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[180px_0.85fr_1.15fr]">
            <div className="flex items-start gap-4">
              <span className="text-xs tracking-[0.25em] text-[#4D8DFF]">
                04
              </span>

              <span className="mt-2 h-px w-12 bg-[#262626]" />
            </div>

            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.22em] text-[#71717A]">
                About me
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
                Engineering background.
                <br />

                <span className="text-[#4D8DFF]">
                  Applied mindset.
                </span>
              </h2>
            </div>

            <div className="max-w-2xl lg:pt-9">
              <p className="text-xl leading-9 tracking-[-0.015em] text-[#D4D4D8]">
                I focus on building AI systems that move beyond
                notebooks and become understandable, usable
                applications.
              </p>

              <p className="mt-6 text-base leading-8 text-[#A1A1AA]">
                My work combines machine learning, deep learning,
                medical-image classification and web development.
                I enjoy understanding how each part of a system
                works, connecting those parts together and
                presenting the final result through a clear user
                experience.
              </p>

              <p className="mt-5 text-base leading-8 text-[#A1A1AA]">
                I&apos;m especially interested in applied AI,
                model integration, computer vision and the
                deployment of intelligent applications.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal delay={0.1}>
            <article
              data-cursor="interactive"
              className="group h-full border border-[#262626] bg-[#111111] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#353535] md:p-9"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#262626] pb-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[#71717A]">
                  Education
                </p>

                <span className="font-mono text-xs text-[#4D8DFF]">
                  2022 — 2026
                </span>
              </div>

              <div className="pt-8">
                <h3 className="max-w-xl text-2xl font-medium tracking-[-0.025em] text-[#F5F5F5] md:text-3xl">
                  Bachelor of Science in Computer Engineering
                </h3>

                <p className="mt-5 text-base text-[#D4D4D8]">
                  COMSATS University Islamabad
                </p>

                <p className="mt-2 text-sm text-[#71717A]">
                  Abbottabad Campus · Abbottabad, Pakistan
                </p>
              </div>

              <div className="mt-10 flex items-center gap-3">
                <span className="h-px w-8 bg-[#4D8DFF]" />

                <p className="text-xs uppercase tracking-[0.18em] text-[#A1A1AA]">
                  Computer Engineering
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.18}>
            <article
              data-cursor="interactive"
              className="group h-full border border-[#262626] bg-[#111111] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#353535] md:p-9"
            >
              <p className="border-b border-[#262626] pb-6 text-xs uppercase tracking-[0.2em] text-[#71717A]">
                Languages
              </p>

              <div className="divide-y divide-[#262626]">
                <div className="flex items-center justify-between py-6">
                  <span className="text-[#F5F5F5]">
                    Pashto
                  </span>

                  <span className="text-xs uppercase tracking-[0.16em] text-[#71717A]">
                    Native
                  </span>
                </div>

                <div className="flex items-center justify-between py-6">
                  <span className="text-[#F5F5F5]">
                    Urdu
                  </span>

                  <span className="text-xs uppercase tracking-[0.16em] text-[#71717A]">
                    Native
                  </span>
                </div>

                <div className="flex items-center justify-between py-6">
                  <span className="text-[#F5F5F5]">
                    English
                  </span>

                  <span className="text-xs uppercase tracking-[0.16em] text-[#4D8DFF]">
                    Proficient
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}