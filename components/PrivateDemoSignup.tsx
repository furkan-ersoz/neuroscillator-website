import config from "@/config/general";

const PrivateDemoSignup = () => {
  return (
    <section id="signup" className="scroll-mt-24 py-16">
      <div className="rounded-[2rem] border border-cyan-400/15 bg-cyan-300/8 p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_auto] lg:items-center">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/75">
              Private demo
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              Join the Neuroscillator Private Demo
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Get early access updates and help shape the first public version
              of Neuroscillator.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={config.privateDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/12 px-6 py-3 text-sm font-medium text-slate-50 transition hover:border-cyan-200/50 hover:bg-cyan-300/18"
            >
              Join the Private Demo
            </a>
            <p className="text-xs leading-5 text-slate-400">
              Opens the private demo form in a new tab.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateDemoSignup;