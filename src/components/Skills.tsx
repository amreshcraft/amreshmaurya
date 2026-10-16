import { SKILLS } from "../data/skills";
import Chips from "./Chips";
import Section from "./Section";

export default function Skills() {
    return <Section id="skills" eyebrow="Skills" title="What I work with">
        <div className="skills">
            {SKILLS.map((s) => (
                <div className="card" key={s.title}>
                    <h3>{s.title}</h3>
                    <Chips items={s.items} />
                </div>
            ))}
        </div>
    </Section>
}