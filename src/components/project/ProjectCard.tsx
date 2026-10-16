import type { Project } from "../../type/types";
import "./style.css"
import Chips from "../Chips";


// export default function ProjectCard({ p }: { p: Project }) {
//   const body = (
//     <>
//       <h3>
//         {p.title}
//         {p.href ? " ↗" : ""}
//         <a href={p.github} className="btn m-2" >Github Code</a>
//       </h3>
//       <p>{p.desc}</p>
//       <Chips items={p.tech} />
//     </>
//   );
//   return p.href ? (
//     <a className="card" href={p.href} target="_blank" rel="noopener noreferrer">
//       {body}
//     </a>
//   ) : (
//     <div className="card">{body}</div>
//   );
// }



// import type { Project } from "../type/types";
// // import Chips from "./Chips";
// import "./ProjectCard.css";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.33c-2.23.48-2.7-1.07-2.7-1.07-.36-.93-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.72 1.23 1.88.88 2.34.67.07-.52.28-.88.51-1.08-1.78-.2-3.65-.89-3.65-3.96 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.08-1.87 3.76-3.66 3.96.29.25.54.74.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export default function ProjectCard({ p }: { p: Project }) {
  const hasLinks = Boolean(p.href || p.github);

  return (
    <article className="card project">
      <header className="project__head">
        <h3>{p.title}</h3>
        {p.href && <span className="project__live">Live</span>}
      </header>

      <p className="project__desc">{p.desc}</p>

      <Chips items={p.tech} />

      {hasLinks && (
        <footer className="project__links">
          {p.href && (
            <a className="project__link project__link--primary" href={p.href} {...external}>
              View live ↗
            </a>
          )}
          {p.github && (
            <a className="project__link" href={p.github} {...external}>
              <GithubIcon />
              Source code
            </a>
          )}
        </footer>
      )}
    </article>
  );
}