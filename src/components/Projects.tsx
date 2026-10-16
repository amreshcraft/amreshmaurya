import { PROJECTS } from "../data/projects";
import ProjectCard from "./project/ProjectCard";
import Section from "./Section";

export default function Projects() {
    return <Section id="projects" eyebrow="Projects" title="Things I've built">
        <div className="projects">
            {PROJECTS.map((p) => (
                <ProjectCard p={p} key={p.title} />
            ))}
        </div>
    </Section>
}