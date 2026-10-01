import { BiGlobe } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import projects, { type Project } from "../data/projects";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-neutral-950 px-6 py-24 text-white sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-white/40">
            Projects
          </p>

          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl text-4xl font-normal tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Things I’ve
              <br />
              <span className="text-white/45">built</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-white/45 lg:pb-1">
              A selection of software projects covering backend development,
              full-stack applications, and practical web systems.
            </p>
          </div>
        </div>

        {/* Project List */}
        <div className="border-t border-white/10">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectItemProps {
  project: Project;
  index: number;
}

const ProjectItem = ({ project, index }: ProjectItemProps) => {
  const isReversed = index % 2 !== 0;

  return (
    <article className="group border-b border-white/10 py-12 sm:py-16 lg:py-20">
      <div
        className={`
          grid
          items-center
          gap-10
          lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)]
          lg:gap-16
          ${isReversed ? "lg:grid-cols-[minmax(320px,0.7fr)_minmax(0,1.3fr)]" : ""}
        `}
      >
        {/* Image */}
        <div className={isReversed ? "lg:order-2" : ""}>
          <div
            className="
              overflow-hidden
              rounded-2xl
              bg-white/[0.04]
              ring-1
              ring-white/10
            "
          >
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="
                block
                aspect-[16/10]
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.02]
              "
            />
          </div>
        </div>

        {/* Details */}
        <div className={isReversed ? "lg:order-1" : ""}>

          {/* Label */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-blue-500" />

            <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/30">
              Project {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Title */}
          <h3
            className="
              mt-5
              text-3xl
              font-medium
              tracking-[-0.03em]
              text-white
              transition-colors
              group-hover:text-blue-400
              sm:text-4xl
            "
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-5 max-w-lg text-sm leading-7 text-white/45">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-7 flex max-w-lg flex-wrap gap-x-5 gap-y-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-white/45"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-9 flex items-center gap-6">
            <ProjectLink
              href={project.githubUrl}
              label="GitHub"
              icon={<BsGithub size={16} />}
            />

            <ProjectLink
              href={project.liveUrl}
              label="Live Demo"
              icon={<BiGlobe size={18} />}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

interface ProjectLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const ProjectLink = ({
  href,
  label,
  icon,
}: ProjectLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex
        items-center
        gap-2
        border-b
        border-white/20
        pb-1
        text-sm
        font-medium
        text-white/65
        transition-colors
        hover:border-blue-400
        hover:text-blue-400
      "
    >
      {icon}
      {label}
    </a>
  );
};

export default Projects;