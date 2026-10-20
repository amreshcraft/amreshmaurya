import { LINKS } from "../data/links";
import { STATS } from "../data/stats";

export default function Hero() {

  return <header className="hero">
    <div className="wrap">
      <span className="tag">
        <span className="dot" />
        Open to teaching &amp; backend roles · Delhi NCR
      </span>
      <h1>
        I teach <span className="hl-w">code</span> and
        <br />
        build <span className="hl-a">backends</span>.
      </h1>
      <p className="lead">
      Computer Science teacher who teaches Python programming and Artificial Intelligence to students. I simplify complex concepts through practical examples, hands-on activities, and real-world applications to make learning engaging and effective.
      </p>
      <div className="cta">
        <a className="btn primary" href="#contact">Get in touch</a>
        <a className="btn" href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <a className="btn" href={LINKS.topmate} target="_blank" rel="noopener noreferrer">Book Session ↗</a>

      </div>
      <div className="stats">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </header>

}