
const skillGroups = [
  {
  title: "AI Tools",
  skills: [
    { name: "ChatGPT", image: "ChatGPT.png" },
    { name: "Claude", image: "Claude.png" },
    { name: "Gemini", image: "Gemini.png" },
  ],
},
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", image: "Java.png" },
      { name: "Python", image: "Python.png" },
      { name: "JavaScript", image: "JavaScript.png" },
      { name: "C++", image: "cpp.png" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Spring Boot", image: "Spring.png" },
      { name: "React", image: "React.png" },
      { name: "Node.js", image: "Node.js.png" },
      { name: "NumPy", image: "NumPy.png" },
      { name: "TensorFlow", image: "TensorFlow.png" },
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "PostgreSQL", image: "PostgresSQL.png" },
      { name: "AWS", image: "AWS.png" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", image: "Git.png" },
      { name: "HTML5", image: "HTML5.png" },
      { name: "CSS3", image: "CSS3.png" },
      { name: "Linux", image: "ArchLinux.png" },
      { name: "VS Code", image: "VSCode.png" },
    ],
  },
];

import "./style.css"
export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <header className="skills-header">
          <span className="skills-eyebrow">WHAT I WORK WITH</span>
          <h2>Skills & Technologies</h2>
          <p>
            Technologies I use for teaching programming,
            exploring AI, and building software applications.
          </p>
        </header>

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skills-grid">
                {group.skills.map((skill) => (
                  <div className="skill-card" key={skill.name}>
                    <div className="skill-icon">
                      <img
                        src={`/skills/${skill.image}`}
                        alt={skill.name}
                        loading="lazy"
                      />
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
