import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  FileText,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import AnimatedBlobs from "./AnimatedBlobs";
import BeamLines from "./BeamLines";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Share your email here",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "Add your phone number here",
    href: null,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Punjab, India",
    href: null,
  },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/gurpreet-singh-0891a1337", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: FileText, href: "/resume.pdf", label: "Resume" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section-bg-contact noise-overlay relative overflow-hidden px-6 py-32 lg:py-40"
    >
      <AnimatedBlobs variant="contact" />
      <BeamLines variant="contact" />

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
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            {"Let's"} <span className="gradient-text-contact">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground"
          >
            I&apos;m currently focused on internships, project work, and building my developer profile. Feel free to connect through the contact form or LinkedIn.
          </motion.p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card relative overflow-hidden rounded-3xl p-8 lg:p-10">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-500 via-green-500 to-teal-500" />

              <div className="pl-4">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                    <Sparkles className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                </div>

                <div className="mb-10 space-y-4">
                  {contactInfo.map((info, i) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      {info.href ? (
                        <a
                          href={info.href}
                          className="group flex items-center gap-5 rounded-2xl p-4 transition-all hover:bg-emerald-500/5"
                        >
                          <motion.div
                            className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <info.icon className="h-6 w-6" />
                          </motion.div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              {info.label}
                            </p>
                            <p className="font-semibold transition-colors group-hover:text-emerald-400">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-5 rounded-2xl p-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                            <info.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              {info.label}
                            </p>
                            <p className="font-semibold">{info.value}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-white/5 pt-8">
                  <p className="mb-5 text-sm font-medium text-muted-foreground">
                    Connect with me on social media
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((social, i) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="glass-card flex h-12 w-12 items-center justify-center rounded-xl text-muted-foreground transition-all hover:bg-emerald-500/10 hover:text-emerald-400"
                        whileHover={{ scale: 1.15, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass-card rounded-3xl p-8 lg:p-10">
              <h3 className="mb-8 flex items-center gap-3 text-xl font-semibold">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">
                  <Send className="h-6 w-6 text-green-400" />
                </div>
                Send a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                  >
                    <CheckCircle className="h-10 w-10 text-emerald-400" />
                  </motion.div>
                  <h4 className="mb-2 text-2xl font-bold">Message Drafted!</h4>
                  <p className="mb-6 text-muted-foreground">
                    Thanks for reaching out. This demo form is ready and can be connected to an email service anytime.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm font-medium text-emerald-400 hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-muted-foreground">Name</label>
                      <input id="name" type="text" required className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-emerald-500/40" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-muted-foreground">Email</label>
                      <input id="email" type="email" required className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-emerald-500/40" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-muted-foreground">Subject</label>
                    <input id="subject" type="text" required className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-emerald-500/40" placeholder="Project, internship, collaboration..." />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-muted-foreground">Message</label>
                    <textarea id="message" rows={6} required className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-emerald-500/40" placeholder="Write your message here..." />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="btn-primary flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 font-semibold text-primary-foreground disabled:opacity-60">
                    <Send className="h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
