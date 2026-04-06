import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Palette, Rocket, Zap, Sparkles, GraduationCap } from "lucide-react";
import AnimatedBlobs from "./AnimatedBlobs";
import BeamLines from "./BeamLines";

const highlights = [
  {
    icon: Code2,
    title: "Problem Solving",
    description: "Building logic-driven academic and development projects with practical implementation.",
    gradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: Palette,
    title: "Premium UI",
    description: "Creating polished portfolio-style interfaces with clean layouts, motion, and visual hierarchy.",
    gradient: "from-fuchsia-500/20 to-pink-500/20",
    iconColor: "text-fuchsia-400",
  },
  {
    icon: Rocket,
    title: "Project Execution",
    description: "Turning ideas like JudgeNest, quiz systems, and student AI tools into working products.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: Zap,
    title: "Continuous Learning",
    description: "Actively improving in React, Java, Python, backend development, and interview-ready coding skills.",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
  },
];

const stats = [
  { value: "7.55", label: "Current CGPA", icon: GraduationCap },
  { value: "3+", label: "Main Projects", icon: Code2 },
  { value: "2028", label: "Target Graduation", icon: Sparkles },
  { value: "AI & DS", label: "Core Domain", icon: Zap },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="section-bg-about noise-overlay relative overflow-hidden px-6 py-32 lg:py-40"
    >
      <AnimatedBlobs variant="about" />
      <BeamLines variant="about" />

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
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-violet-400"
          >
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Building a strong foundation in{" "}
            <span className="gradient-text-about">development and AI</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground lg:text-xl"
          >
            I am a B.Tech student in Artificial Intelligence & Data Science focused on building modern projects that combine strong logic, clean code, and polished presentation.
          </motion.p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card relative overflow-hidden rounded-3xl p-8 lg:p-10">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-violet-500 via-purple-500 to-fuchsia-500" />

              <div className="space-y-6 pl-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Hello! I&apos;m <span className="text-violet-400">Gurpreet Singh</span>, currently pursuing B.Tech in <span className="text-purple-400">Artificial Intelligence & Data Science</span> at <span className="text-fuchsia-400">CGC Jhanjeri</span>.
                </p>
                <p className="leading-relaxed">
                  My main focus is building portfolio-ready projects such as full-stack platforms, AI-based student systems, and Java desktop or database-driven applications that solve practical problems.
                </p>
                <p className="leading-relaxed">
                  I enjoy improving my skills in React, Node.js, Java, Python, data structures, and modern UI design while continuously working on projects that strengthen my placement profile.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="group text-center"
                  >
                    <motion.div
                      className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <stat.icon className="h-5 w-5 text-violet-400" />
                    </motion.div>
                    <div className="gradient-text-about text-3xl font-bold">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card glass-card-hover group relative overflow-hidden rounded-2xl p-6"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity group-hover:opacity-100`} />

                <div className="relative">
                  <motion.div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ${item.iconColor}`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <item.icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
