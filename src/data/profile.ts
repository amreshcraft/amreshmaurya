export interface NavLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  logo: string;
  image: string;

  availability: {
    label: string;
    text: string;
  };

  navigation: NavLink[];

  badge: {
    label: string;
    text: string;
  };

  hero: {
    title: string;
    titleLine2: string;
    description: string;
  };

  actions: {
    primary: {
      label: string;
      href: string;
    };
    secondary: {
      label: string;
      href: string;
    };
  };

  expertise: {
    title: string;
    items: string[];
  };

  social: {
    github: string;
    linkedin: string;
    topmate: string;
    email: string;
  };
}

const profile: Profile = {
  name: "Amresh Maurya",

  logo: "/amresh.png",
  image: "/amresh.png",

  availability: {
    label: "Available",
    text: "Open to software engineering opportunities",
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
  ],

  badge: {
    label: "Software Engineer",
    text: "Building reliable software across the stack",
  },

  hero: {
    title: "Building Software",
    titleLine2: "That Solves Problems",
    description:
      "I work across backend development, web technologies, Linux, networking, and modern software systems. I enjoy understanding how things work underneath and turning that knowledge into practical solutions.",
  },

  actions: {
    primary: {
      label: "View My Work",
      href: "#projects",
    },
    secondary: {
      label: "Let's Connect",
      href: "mailto:amresh.terminal@gmail.com",
    },
  },

  expertise: {
    title: "Working across",
    items: [
      "Backend Development",
      "Java & Spring Boot",
      "React & Web",
      "Linux & Networking",
      "Cloud & AWS",
    ],
  },

  social: {
    github: "https://github.com/amreshcraft",
    linkedin: "https://www.linkedin.com/amreshpro",
    topmate: "https://topmate.io/amreshpro",
    email: "mailto:amresh.terminal@gmail.com",
  },
};

export default profile;