
import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Backend Development
  { name: "Java", level: 85, category: "backend" },
  { name: "Spring Boot", level: 85, category: "backend" },
  { name: "Spring Security & JWT", level: 80, category: "backend" },
  { name: "Hibernate / JPA", level: 80, category: "backend" },
  { name: "REST API Development", level: 85, category: "backend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },

  // Frontend Development
  { name: "React.js", level: 90, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "HTML5 & CSS3", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },

  // Databases & Caching
  { name: "MySQL & SQL", level: 85, category: "database" },
  { name: "MongoDB", level: 75, category: "database" },
  { name: "Redis Caching", level: 75, category: "database" },

  // Testing & API Tools
  { name: "JUnit & Mockito", level: 80, category: "testing" },
  { name: "MockMvc", level: 80, category: "testing" },
  { name: "Postman & Swagger", level: 90, category: "testing" },

  // Development Tools
  { name: "Git & GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "Maven", level: 80, category: "tools" },

  // Core Computer Science
  { name: "OOP & Java Collections", level: 85, category: "core" },
  { name: "Data Structures & Algorithms", level: 80, category: "core" },
  { name: "DBMS & SQL Optimization", level: 80, category: "core" },
];

const categories = [
  { label: "All Skills", value: "all" },
  { label: "Backend", value: "backend" },
  { label: "Frontend", value: "frontend" },
  { label: "Database", value: "database" },
  { label: "Testing", value: "testing" },
  { label: "Tools", value: "tools" },
  { label: "Core CS", value: "core" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" ||
      skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="relative bg-secondary/30 px-4 py-20 sm:py-24"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            What I Work With
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Technical <span className="text-primary">Skills</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
            Building full-stack applications using Java,
            Spring Boot, React, Node.js, Express.js, MongoDB,
            and modern development tools.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => setActiveCategory(category.value)}
              aria-pressed={activeCategory === category.value}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium",
                "transition-all duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                activeCategory === category.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-secondary/70 text-foreground hover:border-primary hover:bg-primary/10"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-xl border border-border/60 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg sm:p-6"
            >
              <div className="mb-4 flex min-h-10 items-center">
                <h3 className="text-base font-semibold sm:text-lg">
                  {skill.name}
                </h3>
              </div>

              {/* Skill Progress Bar */}
              <div
                className="h-2 w-full overflow-hidden rounded-full bg-secondary"
                role="progressbar"
                aria-label={`${skill.name} proficiency`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={skill.level}
              >
                <div
                  className="h-full rounded-full bg-primary transition-all duration-700 ease-out group-hover:brightness-110"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Skill Level */}
              <div className="mt-2 text-right">
                <span className="text-xs text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
