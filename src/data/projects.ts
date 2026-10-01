export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Bookstore Backend API",
        description:
            "A RESTful backend application for managing books and users with validation, exception handling, database persistence, and API-based operations.",
        image: "/projects/bookstore.png",
        tags: [
            "Java",
            "Spring Boot",
            "REST API",
            "PostgreSQL",
            "Spring Data JPA",
        ],
        liveUrl: "https://api.amreshmaurya.com",
        githubUrl: "https://github.com/amreshcraft/bookstore",
    },

    {
        id: 2,
        title: "MovieFlix",
        description:
            "A full-stack movie application combining a Spring Boot REST API with a React frontend and PostgreSQL database.",
        image: "/projects/filmiflix.png",
        tags: [

            "React",
            "JavaScript",
            "Tailwind CSS",

        ],
        liveUrl: "https://filmiflix.netlify.app",
        githubUrl: "https://github.com/amreshcraft/filmiflix",
    },
];

export default projects;