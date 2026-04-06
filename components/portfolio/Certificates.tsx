import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Award, Sparkles, Crown, ChevronRight, ExternalLink } from "lucide-react";
import AnimatedBlobs from "./AnimatedBlobs";

const certificates = [
  {
    id: "hackwin",
    title: "Hack-N-Win 3.0 Participation",
    issuer: "Hack-N-Win",
    date: "2026",
    image: "/hackwin.png",
    description: "Hackathon participation highlight representing teamwork, creativity, and practical problem solving under time constraints.",
    featured: true,
  },
  {
    id: "cert1",
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    date: "2026",
    image: "/cert1.png",
    description: "Certificate related to modern AI concepts and fundamentals.",
  },
  {
    id: "cert2",
    title: "Data Analytics Job Simulation",
    issuer: "Google Cloud/ Simplelearn",
    date: "2026",
    image: "/cert2.png",
    description: "Industry-style simulation experience focused on analytics tasks and practical problem solving.",
  },
  {
    id: "cert3",
    title: "Programming Fundamentals Using Python Part-1",
    issuer: "Infosys",
    date: "2025",
    image: "/cert3.png",
    description: "Foundational programming certificate covering Python basics, data structures, and problem-solving skills aligned with coding and AI learning goals.",
  },
  {
    id: "cert4",
    title: "Software Engineering Job Simulation",
    issuer: "Forage",
    date: "2026",
    image: "/cert4.png",
    description: "Practical software engineering simulation experience focused on coding, debugging, and project collaboration skills relevant to placements.",
  },
  {
    id: "cert5",
    title: "Professional Learning Certificate",
    issuer: "Infosys Springboard",
    date: "2026",
    image: "/cert5.png",
    description: "Additional professional certificate included as part of the portfolio showcase.",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<(typeof certificates)[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredCert = certificates.find((c) => c.featured);
  const gridCerts = certificates.filter((c) => !c.featured);

  return (
    <section
      id="certificates"
      ref={ref}
      className="section-bg-certificates noise-overlay relative overflow-hidden px-6 py-32 lg:py-40"
    >
      <AnimatedBlobs variant="certificates" />

      <div className="pointer-events-none absolute right-[20%] top-0 h-[500px] w-px">
        <div className="h-full w-full bg-gradient-to-b from-pink-500/40 via-fuchsia-500/20 to-transparent" />
        <motion.div
          className="absolute top-0 h-32 w-full bg-gradient-to-b from-pink-400 to-transparent"
          animate={{ y: [0, 500], opacity: [1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-[15%] h-[400px] w-px">
        <div className="h-full w-full bg-gradient-to-t from-fuchsia-500/30 via-pink-500/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-pink-500/20 bg-pink-500/5 px-5 py-2 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-pink-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500" />
            </span>
            <span className="text-sm font-medium tracking-wide text-pink-300">
              Certifications & Achievements
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Professional{" "}
            <span className="relative inline-block">
              <span className="gradient-text-certificates">Credentials</span>
              <motion.span
                className="absolute -right-8 -top-6"
                animate={{ rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="h-6 w-6 text-pink-400" />
              </motion.span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mx-auto max-w-2xl text-pretty text-lg text-neutral-400"
          >
            Certificates and participation highlights that strengthen my academic portfolio and placement profile.
          </motion.p>
        </motion.div>

        {featuredCert && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-20"
          >
            <motion.div
              onClick={() => setSelectedCert(featuredCert)}
              className="group relative cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-pink-500/20 via-fuchsia-500/20 to-rose-500/20 opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-100" />

              <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-1.5 backdrop-blur-xl">
                <div className="overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-neutral-900/90 to-neutral-950/90">
                  <div className="absolute right-6 top-6 z-20">
                    <motion.div
                      className="flex items-center gap-2.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 px-5 py-2.5 text-sm font-bold text-neutral-900 shadow-lg shadow-amber-500/30"
                      animate={{ boxShadow: ["0 10px 30px -5px rgba(245, 158, 11, 0.3)", "0 10px 40px -5px rgba(245, 158, 11, 0.5)", "0 10px 30px -5px rgba(245, 158, 11, 0.3)"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Crown className="h-4 w-4" />
                      Featured Highlight
                    </motion.div>
                  </div>

                  <div className="grid gap-0 lg:grid-cols-2">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-pink-500/5 via-transparent to-fuchsia-500/5 p-8 lg:aspect-auto lg:p-10">
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
                      </div>

                      <div className="relative h-full w-full">
                        <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-pink-500/20 via-fuchsia-500/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-2xl">
                          <img
                            src={featuredCert.image}
                            alt={featuredCert.title}
                            className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </div>
                      </div>

                      <motion.div
                        className="absolute left-6 top-6"
                        animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <Sparkles className="h-6 w-6 text-pink-400/60" />
                      </motion.div>
                      <motion.div
                        className="absolute bottom-6 right-6"
                        animate={{ y: [5, -5, 5], rotate: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      >
                        <Sparkles className="h-5 w-5 text-fuchsia-400/60" />
                      </motion.div>
                    </div>

                    <div className="flex flex-col justify-center p-8 lg:p-12">
                      <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2">
                        <Award className="h-4 w-4 text-pink-400" />
                        <span className="text-sm font-medium text-pink-300">Portfolio Highlight</span>
                      </div>

                      <h3 className="mb-3 text-3xl font-bold tracking-tight lg:text-4xl">
                        {featuredCert.title}
                      </h3>
                      <p className="mb-4 text-lg text-pink-300/80">
                        {featuredCert.issuer}
                      </p>
                      <p className="mb-6 text-neutral-400">{featuredCert.description}</p>
                      <div className="flex items-center gap-4 text-sm text-neutral-500">
                        <span>{featuredCert.date}</span>
                        <span>-</span>
                        <span>Click to enlarge</span>
                      </div>
                      <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-pink-300">
                        View certificate
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gridCerts.map((cert, i) => (
            <motion.button
              key={cert.id}
              type="button"
              onClick={() => setSelectedCert(cert)}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-white/[0.01] text-left backdrop-blur-xl transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.06]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black/20 p-5">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute right-4 top-4 rounded-full bg-black/40 p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ExternalLink className="h-4 w-4 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold">{cert.title}</h3>
                <p className="mb-1 text-sm text-pink-300/80">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground">{cert.date}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-neutral-950"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid lg:grid-cols-[1fr_320px]">
                <div className="flex items-center justify-center bg-black/20 p-8">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-h-[70vh] w-auto rounded-xl object-contain"
                  />
                </div>
                <div className="border-l border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-8">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1.5">
                    <Award className="h-4 w-4 text-pink-400" />
                    <span className="text-sm text-pink-300">Certificate</span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">{selectedCert.title}</h3>
                  <p className="mb-2 text-lg text-pink-300/80">{selectedCert.issuer}</p>
                  <p className="mb-6 text-sm text-muted-foreground">{selectedCert.date}</p>
                  <p className="leading-relaxed text-neutral-300">{selectedCert.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
