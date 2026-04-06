import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Trophy,
  Award,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import AnimatedBlobs from "./AnimatedBlobs";
import BeamLines from "./BeamLines";

const skills = [
  { name: "React / Next.js", level: 84, color: "from-amber-500 to-orange-500" },
  { name: "Node.js / Express", level: 80, color: "from-orange-500 to-red-500" },
  { name: "Java", level: 82, color: "from-yellow-500 to-amber-500" },
  { name: "Python", level: 85, color: "from-amber-400 to-yellow-500" },
  { name: "MySQL / MongoDB", level: 78, color: "from-orange-400 to-amber-500" },
  { name: "DSA / Problem Solving", level: 76, color: "from-yellow-400 to-orange-400" },
];

const achievements = [
  {
    icon: Trophy,
    title: "Hack-N-Win 3.0",
    description: "Participated in a hackathon experience focused on solution building and teamwork.",
    year: "2026",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Award,
    title: "Job Simulation Certificates",
    description: "Completed industry-style learning experiences in software engineering and analytics.",
    year: "2026",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    icon: Star,
    title: "Project Portfolio",
    description: "Built full-stack, Java, and AI-focused academic projects for placement growth.",
    year: "2026",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Target,
    title: "Core Focus",
    description: "Actively improving in AI & DS, frontend development, backend APIs, and coding practice.",
    year: "2026",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "Consistently working on resume-building projects and practical development skills.",
    year: "2026",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Experience working on hackathon and college project workflows with peers.",
    year: "2026",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="section-bg-skills noise-overlay relative overflow-hidden px-6 py-32 lg:py-40"
    >
      <AnimatedBlobs variant="skills" />
      <BeamLines variant="skills" />

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
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-amber-400"
          >
            Skills & Achievements
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            What I <span className="gradient-text-skills">Bring</span> to the Table
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground"
          >
            A growing mix of technical skills, academic project execution, and a strong willingness to keep learning.
          </motion.p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card rounded-3xl p-8 lg:p-10">
              <h3 className="mb-10 flex items-center gap-3 text-xl font-semibold">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10">
                  <Star className="h-5 w-5 text-amber-400" />
                </div>
                Technical Skills
              </h3>
              <div className="space-y-8">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        className="text-sm font-semibold text-amber-400"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="relative h-3 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                      />
                      <motion.div
                        className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${skill.color} blur-sm`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                        style={{ opacity: 0.5 }}
                      />
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
          >
            <h3 className="mb-10 flex items-center gap-3 text-xl font-semibold">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10">
                <Trophy className="h-5 w-5 text-orange-400" />
              </div>
              Achievements
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card glass-card-hover group rounded-2xl p-6"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <motion.div
                      className={`${achievement.bg} flex h-11 w-11 items-center justify-center rounded-xl ${achievement.color}`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <achievement.icon className="h-5 w-5" />
                    </motion.div>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                      {achievement.year}
                    </span>
                  </div>
                  <h4 className="mb-1 font-semibold">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
