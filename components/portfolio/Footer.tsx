import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp, Sparkles, FileText } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/gurpreet-singh-0891a1337", label: "LinkedIn" },
  { icon: Mail, href: "#contact", label: "Email" },
  { icon: FileText, href: "/resume.pdf", label: "Resume" },
];

const focusAreas = [
  "Full-Stack Projects",
  "AI & DS Learning",
  "Java Applications",
  "Problem Solving",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 px-6 py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.a
              href="#home"
              className="mb-5 inline-flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-bold">
                <span className="gradient-text">Gurpreet Singh</span>
              </span>
            </motion.a>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Building portfolio-ready full-stack, Java, and AI-based projects with modern design and practical implementation.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") || social.href.endsWith(".pdf") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") || social.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-semibold">Focus Areas</h4>
            <ul className="space-y-3">
              {focusAreas.map((area) => (
                <li key={area}>
                  <span className="text-sm text-muted-foreground">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-semibold">Education</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-muted-foreground">
                  B.Tech in AI & DS
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  CGC Jhanjeri
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Current CGPA: 7.55
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/5 pt-8 sm:flex-row">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            &copy; {currentYear} Gurpreet Singh. Made with{" "}
            <Heart className="h-4 w-4 text-rose-500" fill="currentColor" /> and persistence.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
