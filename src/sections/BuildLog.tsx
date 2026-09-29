import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Settings2, Sparkles, Zap } from 'lucide-react';
import { ReactNode } from 'react';
import { GradientBars } from '../components/GradientBars';

export function BuildLog() {
  return (
    <section id="build-log" className="py-12 md:py-18 relative overflow-hidden">
      <div id="experience" className="absolute -top-16 left-0 pointer-events-none" />
      <div id="contributions" className="absolute -top-16 left-0 pointer-events-none" />
      {/* Dynamic pulsing gradient bars background effect — strictly scoped to this section */}
      <GradientBars numBars={16} gradientFrom="rgba(234, 88, 12, 0.25)" className="opacity-90" />

      <div className="@container mx-auto max-w-5xl px-6 relative z-10">
        <div className="text-center">
          <h2
            style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
            className="text-balance text-2xl sm:text-3xl font-semibold lg:text-4xl text-white font-aribau tracking-tight"
          >
            Where I've contributed
          </h2>
          <p
            style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
            className="mt-3 text-xs sm:text-[13.5px] text-neutral-400 max-w-lg mx-auto font-aribau font-light leading-relaxed"
          >
            Practical engineering experience, internships, and technical community leadership.
          </p>
        </div>

        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-6 grid max-w-sm gap-5 *:text-center md:mt-12 md:max-w-none md:grid-cols-3">
          {/* Card 1: CypherVerse */}
          <Card className="group border-0 bg-muted shadow-none rounded-2xl hover:bg-white/[0.05] transition-colors duration-300">
            <CardHeader className="pb-2.5">
              <CardDecorator>
                <Zap className="size-5 text-orange-400" aria-hidden />
              </CardDecorator>

              <div className="mt-4">
                <span className="text-[10px] font-mono text-orange-400/90 tracking-wider uppercase block mb-1">
                  2026 · AUGUST
                </span>
                <h3 className="font-semibold text-base text-white">Hackathon Coordinator</h3>
                <p className="text-[11px] font-mono text-neutral-400 mt-0.5">CypherVerse · CGC Jhanjeri</p>
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-[12.5px] text-neutral-300/90 leading-relaxed">
                Coordinated a student-focused hackathon, supporting participants, event operations, and smooth execution throughout the competition.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: ReadyNest */}
          <Card className="group border-0 bg-muted shadow-none rounded-2xl hover:bg-white/[0.05] transition-colors duration-300">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Settings2 className="size-6 text-orange-400" aria-hidden />
              </CardDecorator>

              <div className="mt-6">
                <span className="text-[11px] font-mono text-orange-400/90 tracking-wider uppercase block mb-1">
                  2026 · JUN — JUL
                </span>
                <h3 className="font-semibold text-lg text-white">Full Stack Development Intern</h3>
                <p className="text-xs font-mono text-neutral-400 mt-0.5">ReadyNest · Remote</p>
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-neutral-300/90 leading-relaxed">
                Worked on full-stack web applications with a focus on responsive interfaces, REST APIs, and practical product development workflows.
              </p>
            </CardContent>
          </Card>

          {/* Card 3: GDG */}
          <Card className="group border-0 bg-muted shadow-none rounded-2xl hover:bg-white/[0.05] transition-colors duration-300">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Sparkles className="size-6 text-orange-400" aria-hidden />
              </CardDecorator>

              <div className="mt-6">
                <span className="text-[11px] font-mono text-orange-400/90 tracking-wider uppercase block mb-1">
                  2026 · JAN — PRESENT
                </span>
                <h3 className="font-semibold text-lg text-white">Social Media & Creative Team</h3>
                <p className="text-xs font-mono text-neutral-400 mt-0.5">GDG · CGC Jhanjeri</p>
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-neutral-300/90 leading-relaxed">
                Contributing to the digital presence and community outreach of Google Developer Groups through creative content and event promotion.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
    <div className="absolute inset-0 [--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-15" />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l border-white/20 rounded-sm">
      {children}
    </div>
  </div>
);

export default BuildLog;
