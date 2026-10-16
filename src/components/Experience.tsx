import { EXPERIENCE } from "../data/experience";
import Section from "./Section";

export default function Experience() {
    return <Section id="experience" eyebrow="Experience" title="Two tracks, one skill: making complex things simple.">
        <div className="two">
            {EXPERIENCE.map((e) => (
                <div className="card" key={e.title}>
                    <span className={`pill ${e.kind}`}>{e.pill}</span>
                    <h3>{e.title}</h3>
                    <div className="meta">{e.meta}</div>
                    <ul>
                        {e.points.map((pt) => (
                            <li key={pt}>{pt}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </Section>
}