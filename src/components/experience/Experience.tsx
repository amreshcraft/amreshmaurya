import type { CSSProperties } from "react";
import "./style.css";
import Section from "../Section";
import { EXPERIENCE } from "../../data/experience";

export default function Experience() {
    return (
        <Section
            id="experience"
            eyebrow="Experience"
            title="Building backends, teaching people, simplifying the complex."
        >
            <div className="exp-grid">
                {EXPERIENCE.map((e, i) => (
                    <article
                        className={`exp-card ${e.kind}`}
                        key={e.title}
                        style={{ "--i": i } as CSSProperties}
                    >
                        <header className="exp-head">
                            <span className={`pill ${e.kind}`}>{e.pill}</span>
                            <span className="exp-index">{String(i + 1).padStart(2, "0")}</span>
                        </header>

                        <h3 className="exp-title">{e.title}</h3>
                        <div className="exp-meta">{e.meta}</div>

                        <ul className="exp-points">
                            {e.points.map((pt) => (
                                <li key={pt}>{pt}</li>
                            ))}
                        </ul>

                        {e.link && (
                            <a
                                className="exp-link"
                                href={e.link?.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {e.link?.label} <span aria-hidden>→</span>
                            </a>
                        )}
                    </article>
                ))}
            </div>
        </Section>
    );
}