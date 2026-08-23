import Reveal from "./Reveal";

const skillGroups = [
  {
    number: "01",
    title: "Machine Learning",
    description:
      "Building classification pipelines from preprocessing and feature preparation through training and evaluation.",
    skills: [
      "Random Forest",
      "Naive Bayes",
      "K-Nearest Neighbours",
      "Classification",
      "Model Evaluation",
    ],
  },
  {
    number: "02",
    title: "Deep Learning & Vision",
    description:
      "Applying convolutional neural networks and transfer learning to medical-image classification problems.",
    skills: [
      "CNNs",
      "MobileNetV2",
      "EfficientNetB0",
      "Transfer Learning",
      "Image Processing",
    ],
  },
  {
    number: "03",
    title: "Application Development",
    description:
      "Turning trained models into usable web applications with clear interfaces and integrated workflows.",
    skills: [
      "Python",
      "Flask",
      "Next.js",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    number: "04",
    title: "Libraries & Workflow",
    description:
      "Working with the tools required to prepare data, train models, evaluate results and manage development.",
    skills: [
      "TensorFlow / Keras",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "GitHub",
      "Google Colab",
      "VS Code",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 border-t border-[#262626] bg-[#080808]/55 px-6 py-28 md:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-16 grid gap-8 lg:grid-cols-[180px_1fr]">
            <div className="flex items-start gap-4">
              <span className="text-xs tracking-[0.25em] text-[#4D8DFF]">
                03
              </span>

              <span className="mt-2 h-px w-12 bg-[#262626]" />
            </div>

            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.22em] text-[#71717A]">
                Technical expertise
              </p>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-6xl">
                From raw data to a{" "}
                <span className="text-[#4D8DFF]">
                  working experience.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#A1A1AA]">
                A practical toolkit covering model development,
                computer vision and application integration.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="border-t border-[#262626]">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.number}
              delay={index * 0.06}
            >
              <article
                data-cursor="interactive"
                className="group grid gap-6 border-b border-[#262626] px-0 py-9 transition duration-300 hover:border-[#353535] md:grid-cols-[70px_0.75fr_1.25fr] md:px-5 lg:py-11"
              >
                <span className="font-mono text-xs text-[#4D8DFF]">
                  {group.number}
                </span>

                <div>
                  <h3 className="text-xl font-medium tracking-[-0.02em] text-[#F5F5F5] transition duration-300 group-hover:translate-x-1">
                    {group.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#A1A1AA]">
                    {group.description}
                  </p>
                </div>

                <div className="flex flex-wrap content-start gap-2 md:justify-end">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-[#262626] bg-[#111111] px-3 py-2 text-xs text-[#A1A1AA] transition duration-300 group-hover:border-[#303030] group-hover:text-[#D4D4D8]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border border-[#262626] bg-[#111111]/60 px-6 py-5 backdrop-blur-md md:px-8">
            <div className="flex items-center gap-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4D8DFF] opacity-30" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4D8DFF]" />
              </span>

              <p className="text-sm text-[#A1A1AA]">
                Currently expanding my knowledge of modern
                deployment and production AI workflows.
              </p>
            </div>

            <a
              href="mailto:workbyabdurrehman@gmail.com"
              className="group flex items-center gap-2 text-sm text-[#F5F5F5] transition hover:text-[#6EA3FF]"
            >
              Discuss an opportunity

              <span className="text-[#4D8DFF] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}