import { EDUCATION } from "../data/education";
import Section from "./Section";

export default function () {

    return <Section id="education" eyebrow="Education" title="Background">
        <div className="edu">
            {EDUCATION.map((e) => (
                <div className="row" key={e.degree}>
                    <div>
                        <b>{e.degree}</b>
                        <br />
                        <span>{e.school}</span>
                    </div>
                </div>
            ))}
        </div>
    </Section>

}