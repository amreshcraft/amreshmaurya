import experiences from "../data/experiences";

export const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="w-full bg-neutral-950 px-6 py-24 text-white sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-white/40">
            Experience
          </p>

          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl text-4xl font-normal tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Where I’ve
              <br />
              <span className="text-white/45">worked & contributed</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-white/45 lg:pb-1">
              A look at the roles, responsibilities, and technical work that
              shaped my experience across software and education.
            </p>
          </div>
        </div>

        {/* Experience List */}
        <div className="border-t border-white/10">
          {experiences.map((exp, index) => (
            <article
              key={exp.id ?? index}
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
              <div className="grid gap-8 lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-12">

                {/* Period */}
                <div className="flex items-start justify-between lg:block">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-3 text-sm leading-6 text-white/40">
                      {exp.period}
                    </p>
                  </div>

                  {/* Mobile accent */}
                  <span
                    className="
                      mt-1
                      h-2
                      w-2
                      shrink-0
                      rounded-full
                      bg-blue-500
                      opacity-50
                      transition-opacity
                      group-hover:opacity-100
                      lg:hidden
                    "
                  />
                </div>

                {/* Main Content */}
                <div>
                  {/* Role */}
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
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
                      {exp.role}
                    </h3>

                    <span className="text-sm text-blue-400">
                      {exp.company}
                    </span>
                  </div>

                  {/* Accent line */}
                  <div className="mt-6 h-px w-10 bg-blue-500/70 transition-all duration-300 group-hover:w-16" />

                  {/* Responsibilities */}
                  <ul className="mt-7 max-w-3xl space-y-4">
                    {exp.responsibilities.map((item, i) => (
                      <li
                        key={i}
                        className="
                          flex
                          gap-4
                          text-sm
                          leading-7
                          text-white/50
                          transition-colors
                          group-hover:text-white/60
                        "
                      >
                        <span
                          className="
                            mt-[11px]
                            h-1
                            w-1
                            shrink-0
                            rounded-full
                            bg-white/30
                          "
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};