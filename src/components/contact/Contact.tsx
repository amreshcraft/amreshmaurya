
import { LINKS } from "../../data/links";
import Section from "../Section";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiExternalLink,
} from "react-icons/fi";

import "./style.css"

const socials = [
  {
    label: "GitHub",
    description: "Explore my projects",
    href: LINKS.github,
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    description: "Connect professionally",
    href: LINKS.linkedin,
    icon: FiLinkedin,
  },
  {
    label: "Instagram",
    description: "Connect with me",
    href: LINKS.instagram,
    icon: FiInstagram,
  },
  {
    label: "Topmate",
    description: "Connect and book a session",
    href: LINKS.topmate,
    icon: FiExternalLink,
  },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="GET IN TOUCH"
      title="Let's connect and collaborate."
      className="contact"
    >
      <div className="contact-content">
        <p className="contact-intro">
          Open to teaching opportunities, software development roles,
          and meaningful collaborations in programming and AI.
          Have an opportunity or an idea? Let's talk.
        </p>

        <div className="contact-actions">
          {LINKS.email && (
            <a
              className="btn primary"
              href={`mailto:${LINKS.email}`}
            >
              <FiMail />
              Email me
            </a>
          )}
        </div>

        <div className="contact-socials">
          {socials.map(({ label, description, href, icon: Icon }) => (
            <a
              className="contact-social-card"
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-social-icon">
                <Icon />
              </span>

              <span className="contact-social-text">
                <strong>{label}</strong>
                <small>{description}</small>
              </span>

              <FiExternalLink className="contact-social-arrow" />
            </a>
          ))}
        </div>

        <p className="contact-footer">
          Usually happy to discuss ideas, opportunities, and technology.
        </p>
      </div>
    </Section>
  );
}
