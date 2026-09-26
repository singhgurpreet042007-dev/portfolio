'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  ArrowUp,
  Mail,
  Terminal,
  Sparkles,
  Copy,
  Check,
  CheckCircle2,
  Send,
  Phone,
  FileText,
} from 'lucide-react';

export interface FooterStickyRevealProps {
  className?: string;
}

const INQUIRY_TYPES = [
  'Full-Time Role',
  'Zero-Trust / AI Security',
  'Full-Stack / SaaS',
  'Consultation / Project',
];

const LiveTelemetryTime: React.FC = React.memo(() => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span className="text-accent font-medium">{time || 'Asia/Kolkata'}</span>;
});

LiveTelemetryTime.displayName = 'LiveTelemetryTime';

export const FooterStickyReveal: React.FC<FooterStickyRevealProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [selectedType, setSelectedType] = useState('Full-Time Role');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const email = 'singh.gurpreet042007@gmail.com';
  const phone = '+91 9882776796';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xbjnbqrg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...formData,
          inquiryType: selectedType,
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const subject = encodeURIComponent(`[${selectedType}] Portfolio Inquiry from ${formData.name}`);
        const body = encodeURIComponent(
          `${formData.message}\n\nSender Email: ${formData.email}\nInquiry Type: ${selectedType}`
        );
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        setStatus('success');
      }
    } catch {
      const subject = encodeURIComponent(`[${selectedType}] Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `${formData.message}\n\nSender Email: ${formData.email}\nInquiry Type: ${selectedType}`
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      setStatus('success');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={containerRef}
      id="footer"
      className={`relative w-full bg-[#050507] border-t border-white/[0.08] select-none z-20 ${className}`}
      style={{
        background: 'radial-gradient(ellipse 70% 240px at 50% 0%, rgba(255, 255, 255, 0.05), transparent), #050507',
      }}
    >
      {/* Anchor for Contact */}
      <div id="contact" className="absolute -top-16 left-0 pointer-events-none" />

      {/* Top border glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent pointer-events-none" />

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0.9, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-page mx-auto px-6 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 flex flex-col justify-between space-y-12 sm:space-y-16"
      >
        {/* ─── TOP SECTION: AVAILABILITY BANNER & HEADING ─── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[11px] font-mono mb-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Q4 2026 roles &amp; Engineering Collaborations</span>
            </div>
            <h2
              style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
              className="text-2xl sm:text-3xl md:text-4xl font-aribau font-bold text-white tracking-tight leading-tight"
            >
              Let's engineer something resilient.
            </h2>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white/80 hover:text-white text-xs font-mono transition-colors cursor-pointer group"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* ─── EMBEDDED DIRECT CONTACT FORM & INFORMATION TERMINAL ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start py-2">
          {/* Left Column: Direct Contact Details & Resume */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 block mb-1.5 font-medium">
                DIRECT CHANNELS
              </span>
              <h3
                style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
                className="text-xl sm:text-2xl font-aribau font-bold text-white tracking-tight"
              >
                Get in Touch Directly
              </h3>
              <p className="mt-2 text-xs sm:text-[13px] font-aribau text-neutral-400 leading-relaxed">
                Open for full-time software engineering roles, zero-trust security architecture, and high-impact technical initiatives.
              </p>
            </div>

            {/* Direct Information Rows */}
            <div className="space-y-4 pt-4 border-t border-white/[0.08]">
              {/* Direct Email with Copy */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all">
                <span className="block text-[10px] font-mono text-white/40 uppercase tracking-wider mb-1">
                  Email Address
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${email}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-emerald-400 transition-colors truncate"
                  >
                    {email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded-md hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy email"
                  >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all">
                <span className="block text-[10px] font-mono text-white/40 uppercase tracking-wider mb-1">
                  Direct Line (IST)
                </span>
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between text-xs sm:text-sm font-mono text-white hover:text-emerald-400 transition-colors"
                >
                  <span>{phone}</span>
                  <Phone size={14} className="text-neutral-400" />
                </a>
              </div>

              {/* Resume Download */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all">
                <span className="block text-[10px] font-mono text-white/40 uppercase tracking-wider mb-1">
                  Curriculum Vitae
                </span>
                <a
                  href="/Gurpreet Singh-2420720.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs sm:text-sm font-medium text-white hover:text-emerald-400 transition-colors"
                >
                  <span className="font-semibold underline underline-offset-4 decoration-white/30 hover:decoration-emerald-400">
                    Download Official Resume (PDF)
                  </span>
                  <FileText size={14} className="text-neutral-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Formspree Contact Form */}
          <div className="lg:col-span-7 p-5 sm:p-7 rounded-2xl bg-white/[0.025] border border-white/[0.08] backdrop-blur-sm">
            <div className="mb-5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block mb-1">
                DISPATCH // SEND A NOTE
              </span>
              <h4
                style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
                className="text-xl sm:text-2xl font-aribau font-bold text-white tracking-tight"
              >
                Direct Message Terminal
              </h4>
            </div>

            {/* Inquiry Type Chips */}
            <div className="mb-5">
              <label className="block text-[10.5px] font-mono uppercase tracking-wider text-white/40 mb-2">
                Inquiry Topic
              </label>
              <div className="flex flex-wrap gap-2">
                {INQUIRY_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      selectedType === type
                        ? 'bg-white text-black font-semibold shadow-sm'
                        : 'bg-white/[0.05] text-neutral-300 hover:bg-white/[0.1] hover:text-white border border-white/[0.06]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="py-10 text-center space-y-3 border-t border-white/10"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 size={20} />
                  </div>
                  <h4
                    style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
                    className="text-lg font-aribau font-bold text-white"
                  >
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400 max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your message has been routed to my direct inbox. I'll get back to you within 12 hours.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 px-4 py-1.5 rounded-full text-xs font-mono text-emerald-400 hover:text-emerald-300 underline underline-offset-4 cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10.5px] font-mono uppercase tracking-wider text-white/40 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] focus:bg-white/[0.08] border border-white/10 focus:border-white/30 text-white text-xs sm:text-sm font-sans focus:outline-none transition-all placeholder:text-neutral-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[10.5px] font-mono uppercase tracking-wider text-white/40 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] focus:bg-white/[0.08] border border-white/10 focus:border-white/30 text-white text-xs sm:text-sm font-sans focus:outline-none transition-all placeholder:text-neutral-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10.5px] font-mono uppercase tracking-wider text-white/40 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Tell me about your team, problem space, or role..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] focus:bg-white/[0.08] border border-white/10 focus:border-white/30 text-white text-xs sm:text-sm font-sans focus:outline-none transition-all placeholder:text-neutral-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs sm:text-sm font-aribau font-bold transition-all shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <span>Sending note...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={13} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ─── MIDDLE NAVIGATION & INFORMATION GRID ─── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 my-auto py-2 border-t border-white/[0.06] pt-8">
          {/* Column 1: Navigation */}
          <div>
            <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.15em] block mb-3 font-medium">
              Navigation
            </span>
            <ul
              style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
              className="space-y-2 text-[13px] font-aribau font-light text-white/60"
            >
              <li>
                <a href="#hero" className="hover:text-white transition-colors block">Hero Overview</a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors block">Selected Projects</a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors block">Capabilities &amp; Skills</a>
              </li>
              <li>
                <a href="#build-log" className="hover:text-white transition-colors block">Engineering Log</a>
              </li>
              <li>
                <a href="#thoughts" className="hover:text-white transition-colors block">Thoughts &amp; Principles</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors block">Contact Terminal</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Featured Systems */}
          <div>
            <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.15em] block mb-3 font-medium">
              Systems
            </span>
            <ul
              style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
              className="space-y-2 text-[13px] font-aribau font-light text-white/60"
            >
              <li>
                <a href="#work" className="hover:text-accent transition-colors block">Aegis-AI (Zero-Trust)</a>
              </li>
              <li>
                <a href="#work" className="hover:text-accent transition-colors block">Fluxora (Sprint SaaS)</a>
              </li>
              <li>
                <a href="#work" className="hover:text-accent transition-colors block">DeployFlow (VS Code)</a>
              </li>
              <li>
                <a href="#work" className="hover:text-accent transition-colors block">Smart Campus (Utility)</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Connect */}
          <div>
            <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.15em] block mb-3 font-medium">
              Connect
            </span>
            <ul
              style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
              className="space-y-2 text-[13px] font-aribau font-light text-white/60"
            >
              <li>
                <a
                  href="https://github.com/singhgurpreet042007-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/gurpreet-singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=gurpreet-singh-dev.deployflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Terminal size={14} className="shrink-0" />
                  <span>Marketplace</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Mail size={14} className="shrink-0" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Telemetry & Location */}
          <div>
            <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.15em] block mb-3 font-medium">
              Telemetry
            </span>
            <div className="space-y-2 font-mono text-[11.5px]">
              <div>
                <span className="text-white/30">LOC: </span>
                <span className="text-white/80">New Delhi, India</span>
              </div>
              <div>
                <span className="text-white/30">TIME: </span>
                <LiveTelemetryTime />
              </div>
              <div>
                <span className="text-white/30">STATUS: </span>
                <span className="text-emerald-400 font-medium">Operational</span>
              </div>
              <div>
                <span className="text-white/30">STACK: </span>
                <span className="text-white/70">React 19 · Next · Motion</span>
              </div>
            </div>
          </div>
        </div>

        {/* Giant Brand Typography / Watermark */}
        <div className="w-full select-none pointer-events-none py-2 border-y border-white/[0.06] flex items-center justify-center overflow-hidden">
          <h1
            style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
            className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-aribau font-bold tracking-tight text-center whitespace-nowrap bg-gradient-to-b from-white/20 via-white/10 to-transparent bg-clip-text text-transparent"
          >
            GURPREET SINGH
          </h1>
        </div>

        {/* Bottom Copyright & Attribution Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-center sm:text-left text-[11px] sm:text-[11.5px] font-mono text-white/40 pt-2 pb-2 sm:pb-0">
          <span>© {currentYear} Gurpreet Singh. Designed with precision &amp; intention.</span>
          <span className="flex items-center gap-1.5 text-white/35">
            <Sparkles size={11} className="text-accent" />
            <span>Built with React 19 &amp; Framer Motion</span>
          </span>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterStickyReveal;
