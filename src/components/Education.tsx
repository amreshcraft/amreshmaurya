import education from "../data/education";

export const Education = () => {
  return (
    <section
      id="education"
      className="w-full bg-neutral-950 px-6 py-24 text-white sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-white/40">
            Education
          </p>

          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl text-4xl font-normal tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Academic
              <br />
              <span className="text-white/45">background</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-white/45 lg:pb-1">
              My academic journey in computer science, technology, and
              problem-solving.
            </p>
          </div>
        </div>

        {/* Education List */}
        <div className="border-t border-white/10">
          {education.map((edu, index) => (
            <article
              key={edu.id ?? index}
              className="
                group
                border-b
                border-white/10
                py-10
                transition-colors
                hover:bg-white/[0.02]
                sm:py-12
              "
            >
              <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)_120px] lg:items-start lg:gap-12">

                {/* Number */}
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-3 text-sm text-white/35">
                    {edu.period}
                  </p>
                </div>

                {/* Main Content */}
                <div>
                  <h3
                    className="
                      text-2xl
                      font-medium
                      tracking-[-0.025em]
                      text-white
                      transition-colors
                      group-hover:text-blue-400
                      sm:text-3xl
                    "
                  >
                    {edu.degree}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-blue-400">
                    {edu.institution}
                  </p>

                  {edu.description && (
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45">
                      {edu.description}
                    </p>
                  )}
                </div>

                {/* Accent */}
                <div className="hidden justify-end pt-2 lg:flex">
                  <span className="h-2 w-2 rounded-full bg-blue-500/60 transition-colors group-hover:bg-blue-400" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;