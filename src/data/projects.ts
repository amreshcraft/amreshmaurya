import type { Project } from "../type/types";

export const PROJECTS: Project[] = [
  {
    title: "MovieFlix",
    image_link: "/projects/filmiflix.png",
    href: "https://filmiflix.netlify.app",
    github: "https://github.com/amreshcraft/movieflix",
    desc: "A movie discovery application featuring dynamic movie listings and detailed movie information, powered by the TMDB API and styled with Tailwind CSS.",
    tech: ["React", "JavaScript", "TMDB API", "Tailwind CSS"],
  },
  {
    title: "Bookstore API",
    image_link: "/projects/bookstore.png",
    href: "https://api.amreshmaurya.com",
    github: "https://github.com/amreshcraft/bookstore",
    desc: "A RESTful backend API built with Spring Boot and PostgreSQL, featuring structured data management and cloud deployment on AWS EC2.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "AWS EC2"],
  },
];
