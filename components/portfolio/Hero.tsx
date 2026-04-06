import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Play, ChevronDown, FileText } from "lucide-react";
import AnimatedBlobs from "./AnimatedBlobs";
import BeamLines from "./BeamLines";

const floatingBadges = [
  { label: "React", x: "85%", y: "15%", delay: 0 },
  { label: "Node.js", x: "-5%", y: "25%", delay: 0.1 },
  { label: "Python", x: "90%", y: "55%", delay: 0.2 },
  { label: "Java", x: "0%", y: "70%", delay: 0.3 },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/gurpreet-singh-0891a1337", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Mail, href: "#contact", label: "Contact" },
  { icon: FileText, href: "/resume.pdf", label: "Resume" },
];

const codeContent = [
  { key: "name", value: '"Gurpreet Singh"' },
  { key: "role", value: '"B.Tech AI & DS Student"' },
  { key: "focus", value: '"Full Stack + AI Projects"' },
  { key: "available", value: "true", isBoolean: true },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="section-bg-hero relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      <AnimatedBlobs variant="hero" />
      <BeamLines variant="hero" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary">Open to internships and project opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              {"I'm"}{" "}
              <span className="gradient-text-hero inline-block">Gurpreet Singh</span>
              <br />
              <span className="text-muted-foreground">AI & DS Student Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-10 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl"
            >
              I build premium full-stack, Java, and AI-powered academic projects with a strong focus on clean UI, practical logic, and portfolio-ready execution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                className="btn-primary group flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold text-primary-foreground"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#contact"
                className="glass-card glass-card-hover group flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="h-4 w-4 text-primary" />
                {"Let's Connect"}
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex items-center gap-6"
            >
              <span className="text-sm text-muted-foreground">Quick Links</span>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") || social.href.endsWith(".pdf") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") || social.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="glass-card flex h-11 w-11 items-center justify-center rounded-xl text-muted-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:flex lg:items-center lg:justify-center"
        >
          <motion.div
            className="glass-card glow-primary relative w-full max-w-md overflow-hidden rounded-3xl p-8"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-3.5 w-3.5 rounded-full bg-red-500/80" />
              <div className="h-3.5 w-3.5 rounded-full bg-yellow-500/80" />
              <div className="h-3.5 w-3.5 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                student-profile.tsx
              </span>
            </div>

            <div className="font-mono text-sm leading-relaxed">
              <p>
                <span className="text-primary">const</span>{" "}
                <span className="text-accent">developer</span>{" "}
                <span className="text-muted-foreground">= {"{"}</span>
              </p>
              {codeContent.map((line, i) => (
                <motion.p
                  key={line.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.15 }}
                  className="pl-6"
                >
                  <span className="text-muted-foreground">{line.key}:</span>{" "}
                  <span className={line.isBoolean ? "text-primary" : "text-emerald-400"}>
                    {line.value}
                  </span>
                  <span className="text-muted-foreground">,</span>
                </motion.p>
              ))}
              <p className="text-muted-foreground">{"}"}</p>
            </div>

            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/8 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-accent/8 blur-3xl" />
          </motion.div>

          {floatingBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + badge.delay }}
              className="glass-card absolute rounded-full px-4 py-2 text-sm font-medium"
              style={{ left: badge.x, top: badge.y }}
            >
              <motion.span
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="block"
              >
                {badge.label}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-primary"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
