
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  // Existing Projects
  {
    id: 1,
    title: "StayNest",
    description:
      "Developed a full-stack rental platform featuring property listings, user interactions, listing management, and role-based admin controls.",
    image: "/projects/Project(1).png",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Forever",
    description:
      "Built a full-stack e-commerce application with product listings, shopping cart functionality, and secure user authentication.",
    image: "/projects/Project(2).png",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Postify",
    description:
      "Developed a full-stack blogging platform supporting blog management, user interactions, and role-based administrative controls.",
    image: "/projects/Project(3).png",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },

  // Java Full Stack Projects
  {
    id: 4,
    title: "ShopSphere",
    description:
      "Built a full-stack e-commerce application with Spring Boot and React, featuring REST APIs, JWT authentication, Spring Security, Redis caching, database optimization, and Docker containerization.",
    image: "/projects/project4.png",
    tags: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "Redis",
      "Docker",
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Task Manager",
    description:
      "Developed a full-stack task management application with CRUD REST APIs, a React frontend, server-side validation, and exception handling.",
    image: "/projects/project6.png",
    tags: ["Java", "Spring Boot", "React", "MySQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Shatify - Music Player",
    description:
      "Built a responsive music player with reusable React components, music browsing, playback, playlists, and Firebase Firestore integration.",
    image: "/projects/project7.png",
    tags: ["React", "JavaScript", "Firebase", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative px-4 py-20 sm:py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            My Work
          </p>

          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            Explore my full-stack applications built with Java,
            Spring Boot, React, Node.js, and modern database technologies.
            Each project demonstrates practical development,
            API integration, and problem-solving skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden bg-secondary sm:h-52">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.visibility = "hidden";
                  }}
                />
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                {/* Technology Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>

                {/* Project Links */}
                <div className="flex items-center gap-4 border-t border-border/60 pt-4">
                  {project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                    >
                      <ExternalLink size={17} />
                      Live Demo
                    </a>
                  )}

                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                    >
                      <Github size={17} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="mt-12 text-center">
          <a
            className="cosmic-button mx-auto inline-flex w-fit items-center gap-2"
            href="https://github.com/SyedShahidAhamed"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore My GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
