import { LINKS } from "../data/links";
import Section from "./Section";

export default function Contact(){

return  <Section id="contact" eyebrow="Contact" title="Let's work together" className="contact">
          <p>Hiring for a teaching role, a backend position, or both? I'd like to hear about it.</p>
          <div className="cta">
            {LINKS.email && (
              <a className="btn primary" href={`mailto:${LINKS.email}`}>Email me</a>
            )}
            <a
              className={`btn ${LINKS.email ? "" : "primary"}`}
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a className="btn" href={"mailto:"+LINKS.site} target="_blank" rel="noopener noreferrer">
              amreshmaurya.com
            </a>
          </div>
        </Section>

}