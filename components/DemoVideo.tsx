import config from "@/config/general";

const DemoVideo = () => {
  return (
    <section id="demo" className="scroll-mt-24 py-16">
      <div className="mb-8 max-w-3xl space-y-3">
        <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/75">
          Demo
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          See Neuroscillator in action
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          Watch Neuroscillator analyze a target sound and generate an editable
          synthesizer starting point.
        </p>
      </div>

      <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
        <div className="aspect-video">
          <iframe
            title="Neuroscillator demo video"
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${config.demoVideoId}`}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;