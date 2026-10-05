import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Settings2, Sparkles, Zap } from 'lucide-react';
import { GradientBars } from '../components/GradientBars';

export function BuildLog() {
  return (
    <section id="build-log" className="py-16 sm:py-24 relative overflow-hidden w-full">
      <div id="experience" className="absolute top-0 left-0 pointer-events-none" />
      {/* Dynamic pulsing gradient bars background effect — full bleed across the section */}
      <GradientBars numBars={20} gradientFrom="rgba(234, 88, 12, 0.25)" className="opacity-90" />

      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2
            style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
            className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold text-white font-aribau tracking-tight"
          >
            Where I've contributed
          </h2>
          <p
            style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
            className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto font-aribau font-light leading-relaxed"
          >
            Practical engineering experience, internships, and technical community leadership.
          </p>
        </div>

        <div className="mx-auto mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-left">
          {/* Card 1: CypherVerse */}
          <Card className="group relative border border-white/[0.08] bg-[#121316]/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 hover:bg-[#16171d] hover:border-orange-500/35 hover:shadow-[0_0_35px_rgba(234,88,12,0.14)] transition-all duration-300 flex flex-col justify-between min-h-[340px] sm:min-h-[370px]">
            <CardHeader className="p-0 flex flex-col items-start text-left">
              <div className="size-12 sm:size-14 rounded-2xl bg-orange-500/[0.08] border border-orange-500/20 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-orange-400/50 group-hover:shadow-[0_0_24px_rgba(234,88,12,0.25)] transition-all duration-300">
                <Zap className="size-6 text-orange-400" aria-hidden />
              </div>

              <div>
                <span className="text-xs font-mono text-orange-400/90 tracking-widest uppercase block mb-1.5 font-medium">
                  2026 · AUGUST
                </span>
                <h3 className="font-semibold text-lg sm:text-xl text-white tracking-tight leading-snug">Hackathon Coordinator</h3>
                <p className="text-xs sm:text-sm font-mono text-neutral-400 mt-1">CypherVerse · CGC</p>
              </div>
            </CardHeader>

            <CardContent className="p-0 pt-4 mt-4 border-t border-white/[0.06]">
              <p className="text-xs sm:text-sm text-neutral-300/90 leading-relaxed">
                Coordinated a student-focused hackathon, supporting participants, event operations, and smooth execution throughout the competition.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: ReadyNest */}
          <Card className="group relative border border-white/[0.08] bg-[#121316]/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 hover:bg-[#16171d] hover:border-orange-500/35 hover:shadow-[0_0_35px_rgba(234,88,12,0.14)] transition-all duration-300 flex flex-col justify-between min-h-[340px] sm:min-h-[370px]">
            <CardHeader className="p-0 flex flex-col items-start text-left">
              <div className="size-12 sm:size-14 rounded-2xl bg-orange-500/[0.08] border border-orange-500/20 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-orange-400/50 group-hover:shadow-[0_0_24px_rgba(234,88,12,0.25)] transition-all duration-300">
                <Settings2 className="size-6 text-orange-400" aria-hidden />
              </div>

              <div>
                <span className="text-xs font-mono text-orange-400/90 tracking-widest uppercase block mb-1.5 font-medium">
                  2026 · JUN — JUL
                </span>
                <h3 className="font-semibold text-lg sm:text-xl text-white tracking-tight leading-snug">Full Stack Development Intern</h3>
                <p className="text-xs sm:text-sm font-mono text-neutral-400 mt-1">ReadyNest · Remote</p>
              </div>
            </CardHeader>

            <CardContent className="p-0 pt-4 mt-4 border-t border-white/[0.06]">
              <p className="text-xs sm:text-sm text-neutral-300/90 leading-relaxed">
                Worked on full-stack web applications with a focus on responsive interfaces, REST APIs, and practical product development workflows.
              </p>
            </CardContent>
          </Card>

          {/* Card 3: GDG */}
          <Card className="group relative border border-white/[0.08] bg-[#121316]/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 hover:bg-[#16171d] hover:border-orange-500/35 hover:shadow-[0_0_35px_rgba(234,88,12,0.14)] transition-all duration-300 flex flex-col justify-between min-h-[340px] sm:min-h-[370px]">
            <CardHeader className="p-0 flex flex-col items-start text-left">
              <div className="size-12 sm:size-14 rounded-2xl bg-orange-500/[0.08] border border-orange-500/20 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-orange-400/50 group-hover:shadow-[0_0_24px_rgba(234,88,12,0.25)] transition-all duration-300">
                <Sparkles className="size-6 text-orange-400" aria-hidden />
              </div>

              <div>
                <span className="text-xs font-mono text-orange-400/90 tracking-widest uppercase block mb-1.5 font-medium">
                  2026 · JAN — PRESENT
                </span>
                <h3 className="font-semibold text-lg sm:text-xl text-white tracking-tight leading-snug">Graphics Team</h3>
                <p className="text-xs sm:text-sm font-mono text-neutral-400 mt-1">Google Developer Groups Chandigarh</p>
              </div>
            </CardHeader>

            <CardContent className="p-0 pt-4 mt-4 border-t border-white/[0.06]">
              <p className="text-xs sm:text-sm text-neutral-300/90 leading-relaxed">
                Designing visual brand assets, graphics, and creative media for Google Developer Groups Chandigarh events and community initiatives.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default BuildLog;
