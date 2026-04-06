import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Folder } from "lucide-react";
import AnimatedBlobs from "./AnimatedBlobs";
import BeamLines from "./BeamLines";

const projects = [
  {
    title: "JudgeNest",
    description:
      "An online code judge platform inspired by HackerRank and LeetCode with code execution, submissions, leaderboards, authentication, and a premium UI direction.",
    image: "/placeholder.svg",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
  },
  {
    title: "Student Performance Prediction System",
    description:
      "An AI-powered student analytics project that predicts final performance, shows risk levels, and provides recommendations using machine learning and a Streamlit interface.",
    image: "/placeholder.svg",
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
    liveUrl: "https://student-performance-ai-mcsybtsshgbzeeyesazvy2.streamlit.app/",
    githubUrl: "https://github.com/singhgurpreet042007-dev/student-performance-ai",
    featured: true,
    gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
  },
  {
    title: "Online Quiz System",
    description:
      "A Java and MySQL based quiz application with login, question management, scoring, and database connectivity for a college DBMS project.",
    image: "/placeholder.svg",
    tech: ["Java", "MySQL", "JDBC"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Study Planner",
    description:
      "A smart academic planning concept focused on organizing study priorities, schedules, and productivity with AI-oriented logic.",
    image: "/placeholder.svg",
    tech: ["Python", "Planning Logic", "UI Design"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A premium personal portfolio with motion effects, glassmorphism cards, and a clean dark visual identity.",
    image: "/placeholder.svg",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Problem Solving Practice",
    description:
      "Regular DSA and logic building practice to strengthen interview readiness and coding fundamentals.",
    image: "/placeholder.svg",
    tech: ["C++", "Java", "DSA"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      ref={ref}
      className="section-bg-projects noise-overlay relative overflow-hidden px-6 py-32 lg:py-40"
    >
      <AnimatedBlobs variant="projects" />
      <BeamLines variant="projects" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400"
          >
            My Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Featured <span className="gradient-text-projects">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground"
          >
            Academic and portfolio projects that reflect my interests in full-stack development, Java-based systems, AI applications, and practical problem solving.
          </motion.p>
        </motion.div>

        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`glass-card relative overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient}`}>
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-bold text-white/[0.03]">
                      {project.title.charAt(0)}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/90 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                    <motion.a
                      href={project.liveUrl}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-6 w-6" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-6 w-6" />
                    </motion.a>
                  </div>

                  <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <ArrowUpRight className="h-5 w-5 text-emerald-400 opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                  </div>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-transparent to-cyan-500/20 blur-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h3 className="mb-8 text-center text-lg font-semibold text-muted-foreground">
            Other Noteworthy Projects
          </h3>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {otherProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card glass-card-hover group rounded-2xl p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10">
                  <Folder className="h-6 w-6 text-teal-400" />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="text-muted-foreground transition-colors hover:text-emerald-400"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-muted-foreground transition-colors hover:text-emerald-400"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <h4 className="mb-2 font-semibold transition-colors group-hover:text-emerald-400">
                {project.title}
              </h4>
              <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
