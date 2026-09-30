import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Settings2, Sparkles, Zap } from 'lucide-react';
import { ReactNode } from 'react';
import { GradientBars } from '../components/GradientBars';

export function BuildLog() {
  return (
    <section id="build-log" className="pt-28 sm:pt-36 md:pt-44 pb-20 sm:pb-28 md:pb-36 relative overflow-hidden w-full">
      <div id="experience" className="absolute -top-24 left-0 pointer-events-none" />
      <div id="contributions" className="absolute -top-24 left-0 pointer-events-none" />
      {/* Dynamic pulsing gradient bars background effect — full bleed across the expanded section */}
      <GradientBars numBars={20} gradientFrom="rgba(234, 88, 12, 0.28)" className="opacity-95" />

      <div className="w-full max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2
            style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
            className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white font-aribau tracking-tight"
          >
            Where I've contributed
          </h2>
          <p
            style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto font-aribau font-light leading-relaxed"
          >
            Practical engineering experience, internships, and technical community leadership.
          </p>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 text-center">
          {/* Card 1: CypherVerse */}
          <Card className="group relative border border-white/[0.08] bg-[#121316]/90 backdrop-blur-md rounded-3xl p-3 sm:p-4 hover:bg-[#16171d] hover:border-orange-500/35 hover:shadow-[0_0_40px_rgba(234,88,12,0.15)] transition-all duration-300 flex flex-col justify-between min-h-[460px] sm:min-h-[500px]">
            <CardHeader className="p-6 sm:p-8 pb-3 sm:pb-4 flex flex-col items-center text-center">
              <CardDecorator>
                <Zap className="size-7 sm:size-8 text-orange-400" aria-hidden />
              </CardDecorator>

              <div className="mt-6 sm:mt-8">
                <span className="text-xs sm:text-[13px] font-mono text-orange-400/90 tracking-widest uppercase block mb-2 font-medium">
                  2026 · AUGUST
                </span>
                <h3 className="font-semibold text-xl sm:text-2xl text-white tracking-tight">Hackathon Coordinator</h3>
                <p className="text-xs sm:text-sm font-mono text-neutral-400 mt-1.5">CypherVerse · CGC Jhanjeri</p>
              </div>
            </CardHeader>

            <CardContent className="p-6 sm:p-8 pt-2 sm:pt-3 text-center flex-1 flex flex-col justify-between">
              <p className="text-sm sm:text-base text-neutral-300/90 leading-relaxed">
                Coordinated a student-focused hackathon, supporting participants, event operations, and smooth execution throughout the competition.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: ReadyNest */}
          <Card className="group relative border border-white/[0.08] bg-[#121316]/90 backdrop-blur-md rounded-3xl p-3 sm:p-4 hover:bg-[#16171d] hover:border-orange-500/35 hover:shadow-[0_0_40px_rgba(234,88,12,0.15)] transition-all duration-300 flex flex-col justify-between min-h-[460px] sm:min-h-[500px]">
            <CardHeader className="p-6 sm:p-8 pb-3 sm:pb-4 flex flex-col items-center text-center">
              <CardDecorator>
                <Settings2 className="size-7 sm:size-8 text-orange-400" aria-hidden />
              </CardDecorator>

              <div className="mt-6 sm:mt-8">
                <span className="text-xs sm:text-[13px] font-mono text-orange-400/90 tracking-widest uppercase block mb-2 font-medium">
                  2026 · JUN — JUL
                </span>
                <h3 className="font-semibold text-xl sm:text-2xl text-white tracking-tight">Full Stack Development Intern</h3>
                <p className="text-xs sm:text-sm font-mono text-neutral-400 mt-1.5">ReadyNest · Remote</p>
              </div>
            </CardHeader>

            <CardContent className="p-6 sm:p-8 pt-2 sm:pt-3 text-center flex-1 flex flex-col justify-between">
              <p className="text-sm sm:text-base text-neutral-300/90 leading-relaxed">
                Worked on full-stack web applications with a focus on responsive interfaces, REST APIs, and practical product development workflows.
              </p>
            </CardContent>
          </Card>

          {/* Card 3: GDG */}
          <Card className="group relative border border-white/[0.08] bg-[#121316]/90 backdrop-blur-md rounded-3xl p-3 sm:p-4 hover:bg-[#16171d] hover:border-orange-500/35 hover:shadow-[0_0_40px_rgba(234,88,12,0.15)] transition-all duration-300 flex flex-col justify-between min-h-[460px] sm:min-h-[500px]">
            <CardHeader className="p-6 sm:p-8 pb-3 sm:pb-4 flex flex-col items-center text-center">
              <CardDecorator>
                <Sparkles className="size-7 sm:size-8 text-orange-400" aria-hidden />
              </CardDecorator>

              <div className="mt-6 sm:mt-8">
                <span className="text-xs sm:text-[13px] font-mono text-orange-400/90 tracking-widest uppercase block mb-2 font-medium">
                  2026 · JAN — PRESENT
                </span>
                <h3 className="font-semibold text-xl sm:text-2xl text-white tracking-tight">Social Media & Creative Team</h3>
                <p className="text-xs sm:text-sm font-mono text-neutral-400 mt-1.5">GDG · CGC Jhanjeri</p>
              </div>
            </CardHeader>

            <CardContent className="p-6 sm:p-8 pt-2 sm:pt-3 text-center flex-1 flex flex-col justify-between">
              <p className="text-sm sm:text-base text-neutral-300/90 leading-relaxed">
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
  <div
    aria-hidden
    className="relative mx-auto size-40 sm:size-44 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] [WebkitMaskImage:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] select-none pointer-events-none"
  >
    <div className="absolute inset-0 [--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:28px_28px] opacity-15" />
    <div className="bg-[#0e0f13] absolute inset-0 m-auto flex size-14 sm:size-16 items-center justify-center border border-white/20 rounded-2xl shadow-inner group-hover:scale-110 group-hover:border-orange-400/50 group-hover:shadow-[0_0_25px_rgba(234,88,12,0.3)] transition-all duration-300">
      {children}
    </div>
  </div>
);

export default BuildLog;
