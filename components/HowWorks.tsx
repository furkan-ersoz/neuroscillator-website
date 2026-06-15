import config from "@/config/general";

const HowWorks = () => {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/75">
            Process
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            How It Works
          </h2>
        </div>
      </div>

      <ol className="grid gap-4 lg:grid-cols-3">
        {config.howItWorks.map((item, index) => (
          <li
            key={item.title}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
          >
            <div className="mb-5 flex items-center justify-between text-sm text-cyan-200/80">
              <span>Step {index + 1}</span>
              <span className="h-px flex-1 bg-white/10 ml-3" />
            </div>
            <h3 className="text-xl font-medium text-slate-50">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default HowWorks;
