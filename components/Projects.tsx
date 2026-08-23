import Reveal from "./Reveal";

const fypModules = [
  {
    number: "01",
    title: "Symptom Intelligence",
    model: "Random Forest",
    description:
      "Classifies diseases from textual symptoms and provides follow-up questions, confidence scores, precautions and medicine recommendations.",
  },
  {
    number: "02",
    title: "Skin Classification",
    model: "MobileNetV2",
    description:
      "Uses transfer learning to classify acne, chickenpox, impetigo, psoriasis and tinea from uploaded skin images.",
  },
  {
    number: "03",
    title: "Chest X-ray Analysis",
    model: "EfficientNetB0",
    description:
      "Classifies chest X-rays as normal, pneumonia or tuberculosis through a unified web interface.",
  },
];

const additionalProjects = [
  {
    number: "02",
    category: "Machine Learning · NLP",
    title: "Spam Email Classifier",
    description:
      "A text-classification model designed to identify whether an email message is spam or legitimate. The project included dataset preparation, model training and result evaluation using a Naive Bayes classifier.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Naive Bayes",
      "Google Colab",
    ],
  },
  {
    number: "03",
    category: "Machine Learning · Classification",
    title: "Student Pass/Fail Prediction",
    description:
      "A classification system that predicts whether a student is likely to pass or fail using previous quiz scores, study hours and attendance as input features.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "Pandas",
      "Google Colab",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 border-t border-[#262626] bg-[#080808]/55 px-6 py-28 md:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <Reveal>
          <div className="mb-16 grid gap-8 lg:grid-cols-[180px_1fr]">
            <div className="flex items-start gap-4">
              <span className="text-xs tracking-[0.25em] text-[#4D8DFF]">
                02
              </span>

              <span className="mt-2 h-px w-12 bg-[#262626]" />
            </div>

            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.22em] text-[#71717A]">
                Selected work
              </p>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-6xl">
                Projects built through{" "}
                <span className="text-[#4D8DFF]">
                  practical learning.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#A1A1AA]">
                A selection of artificial-intelligence and
                machine-learning projects covering healthcare,
                text classification and predictive modelling.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Featured FYP */}
        <Reveal delay={0.12}>
          <article
            data-cursor="interactive"
            className="group overflow-hidden rounded-[14px] border border-[#262626] bg-[#111111] shadow-[0_30px_90px_rgba(0,0,0,0.25)] transition duration-500 ease-out hover:-translate-y-1 hover:border-[#353535] hover:shadow-[0_35px_100px_rgba(0,0,0,0.4)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#262626] px-6 py-5 md:px-8">
              <div className="flex items-center gap-4">
                <span className="h-2 w-2 rounded-full bg-[#4D8DFF]" />

                <p className="text-xs uppercase tracking-[0.2em] text-[#A1A1AA]">
                  Featured Final Year Project
                </p>
              </div>

              <p className="font-mono text-xs text-[#71717A]">
                2025 — 2026
              </p>
            </div>

            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              {/* FYP information */}
              <div className="p-7 md:p-10 lg:p-12">
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#4D8DFF]">
                  Multimodal healthcare AI
                </p>

                <h3 className="text-3xl font-semibold tracking-[-0.035em] text-[#F5F5F5] md:text-5xl">
                  AI Healthcare Assistant
                </h3>

                <p className="mt-6 max-w-2xl text-base leading-8 text-[#A1A1AA]">
                  An end-to-end healthcare decision-support
                  application combining textual symptoms, skin
                  images and chest X-rays in one Flask-based
                  user experience.
                </p>

                <div className="mt-10 border-t border-[#262626]">
                  {fypModules.map((module) => (
                    <div
                      key={module.number}
                      className="grid gap-4 border-b border-[#262626] py-6 md:grid-cols-[55px_1fr]"
                    >
                      <span className="font-mono text-xs text-[#4D8DFF]">
                        {module.number}
                      </span>

                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-medium text-[#F5F5F5]">
                            {module.title}
                          </h4>

                          <span className="font-mono text-[11px] text-[#71717A]">
                            {module.model}
                          </span>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-[#A1A1AA]">
                          {module.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-5">
                  <a
                    href="https://github.com/Abdur-Rehman-170/ai-healthcare-assistant"
                    target="_blank"
                    rel="noreferrer"
                    className="group/link flex items-center gap-3 rounded-md bg-[#4D8DFF] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-[#6EA3FF] hover:shadow-[0_12px_30px_rgba(77,141,255,0.22)]"
                  >
                    View FYP repository

                    <span className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                      ↗
                    </span>
                  </a>

                  <p className="text-xs text-[#71717A]">
                    Source code, trained models and setup guide
                  </p>
                </div>
              </div>

              {/* FYP abstract visual */}
              <div className="relative min-h-[480px] overflow-hidden border-t border-[#262626] bg-[#0C0C0C] lg:min-h-full lg:border-l lg:border-t-0">
                <div
                  className="absolute inset-0 opacity-[0.16]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#262626 1px, transparent 1px), linear-gradient(90deg, #262626 1px, transparent 1px)",
                    backgroundSize: "52px 52px",
                  }}
                />

                <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#262626]" />

                <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4D8DFF]/20 transition duration-700 group-hover:border-[#4D8DFF]/35" />

                <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#4D8DFF]/45 bg-[#111111] shadow-[0_0_40px_rgba(77,141,255,0.05)]">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#71717A]">
                    Unified
                  </span>

                  <strong className="mt-1 text-4xl font-semibold text-[#F5F5F5]">
                    AI
                  </strong>

                  <span className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#4D8DFF]">
                    Decision support
                  </span>
                </div>

                <div className="absolute left-6 top-16 border border-[#262626] bg-[#111111]/95 px-4 py-3 backdrop-blur-md md:left-10">
                  <span className="font-mono text-[10px] text-[#4D8DFF]">
                    01
                  </span>

                  <p className="mt-1 text-xs text-[#D4D4D8]">
                    Symptoms
                  </p>
                </div>

                <div className="absolute right-6 top-24 border border-[#262626] bg-[#111111]/95 px-4 py-3 backdrop-blur-md md:right-10">
                  <span className="font-mono text-[10px] text-[#4D8DFF]">
                    02
                  </span>

                  <p className="mt-1 text-xs text-[#D4D4D8]">
                    Skin images
                  </p>
                </div>

                <div className="absolute bottom-14 left-1/2 -translate-x-1/2 border border-[#262626] bg-[#111111]/95 px-4 py-3 backdrop-blur-md">
                  <span className="font-mono text-[10px] text-[#4D8DFF]">
                    03
                  </span>

                  <p className="mt-1 whitespace-nowrap text-xs text-[#D4D4D8]">
                    Chest X-rays
                  </p>
                </div>

                <div className="absolute bottom-6 right-6 font-mono text-[9px] uppercase tracking-[0.18em] text-[#52525B]">
                  Python · Flask · TensorFlow
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Additional projects */}
        <Reveal delay={0.16}>
          <div className="mt-24">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#71717A]">
                  Additional projects
                </p>

                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#F5F5F5] md:text-4xl">
                  Earlier machine-learning work
                  <span className="text-[#4D8DFF]">.</span>
                </h3>
              </div>

              <p className="font-mono text-xs text-[#71717A]">
                02 PROJECTS
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {additionalProjects.map((project) => (
                <article
                  key={project.number}
                  data-cursor="interactive"
                  className="group relative flex min-h-[370px] flex-col overflow-hidden rounded-[12px] border border-[#262626] bg-[#111111] p-7 transition duration-400 ease-out hover:-translate-y-1 hover:border-[#353535] hover:shadow-[0_25px_70px_rgba(0,0,0,0.3)] md:p-9"
                >
                  <div className="absolute right-0 top-0 h-px w-0 bg-[#4D8DFF] transition-all duration-500 group-hover:w-24" />

                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs text-[#4D8DFF]">
                      {project.number}
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#71717A]">
                      {project.category}
                    </span>
                  </div>

                  <h4 className="mt-12 text-2xl font-medium tracking-[-0.025em] text-[#F5F5F5] transition duration-300 group-hover:translate-x-1 md:text-3xl">
                    {project.title}
                  </h4>

                  <p className="mt-5 text-sm leading-7 text-[#A1A1AA]">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-10">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-[#262626] bg-[#171717] px-3 py-2 text-[11px] text-[#A1A1AA] transition duration-300 group-hover:border-[#303030] group-hover:text-[#D4D4D8]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}