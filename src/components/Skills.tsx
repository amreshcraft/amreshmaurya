import categories from "../data/categories";
import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="w-full bg-neutral-950 px-6 py-24 text-white sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-white/40">
            Skills
          </p>

          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl text-4xl font-normal tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Technologies I
              <br />
              <span className="text-white/45">work with</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-white/45 lg:pb-1">
              A practical stack covering programming, web development,
              backend systems, databases, cloud, and modern computing tools.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="border-t border-white/10">
          {categories.map((category, index) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category
            );

            if (categorySkills.length === 0) {
              return null;
            }

            return (
              <SkillCategory
                key={category}
                category={category}
                index={index}
                skills={categorySkills}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface SkillCategoryProps {
  category: string;
  index: number;
  skills: typeof skills;
}

const SkillCategory = ({
  category,
  index,
  skills: categorySkills,
}: SkillCategoryProps) => {
  return (
    <div className="group border-b border-white/10 py-10 sm:py-12">
      <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">

        {/* Category */}
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/25">
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3 className="mt-3 text-lg font-medium text-white">
            {category}
          </h3>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 md:grid-cols-4">
          {categorySkills.map((skill) => (
            <div
              key={skill.id}
              className="
                flex
                items-center
                gap-3
                rounded-lg
                px-3
                py-3
                transition-colors
                hover:bg-white/[0.04]
              "
            >
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] ring-1 ring-white/[0.06]">
                <img
                  src={skill.path}
                  alt={skill.name}
                  className=" h-16 w-16 object-contain"
                />
              </div>

              <span
                className="
                  min-w-0
                  truncate
                  text-sm
                  font-medium
                  text-white/55
                  transition-colors
                  group-hover:text-white/70
                  hover:text-white
                "
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;