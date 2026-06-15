import Image from "next/image";

import config, { withBasePath } from "@/config/general";

const Hero = () => {
  return (
    <section className="grid gap-12 py-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center lg:py-14">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-cyan-200/80">
          <span className="h-px w-8 bg-cyan-300/50" />
          {config.brandName}
        </div>

        <div className="space-y-5">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            {config.hero.headline}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            {config.hero.supportingText}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#signup"
            className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/12 px-6 py-3 text-sm font-medium text-slate-50 transition hover:border-cyan-200/50 hover:bg-cyan-300/18"
          >
            {config.hero.primaryCta}
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/8"
          >
            {config.hero.secondaryCta}
          </a>
        </div>

        <p className="max-w-2xl text-sm leading-6 text-slate-400">
          Offline analysis, editable parameters, and musician-controlled
          refinement keep the workflow focused on sound design.
        </p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.35)] shadow-cyan-950/10 backdrop-blur-sm">
        <div className="relative mx-auto aspect-square w-full max-w-[420px]">
          <Image
            src={withBasePath("/neuroscillator-logo.png")}
            alt={`${config.productName} product logo`}
            fill
            priority
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 420px, 420px"
            className="object-contain"
          />
        </div>
        <div className="mt-6 grid gap-3 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-slate-300 sm:grid-cols-2">
          <p>AI-assisted sound matching for synthesis workflows.</p>
          <p>Patch estimates remain editable from the start.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
