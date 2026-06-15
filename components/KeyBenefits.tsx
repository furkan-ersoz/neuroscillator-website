import config from "@/config/general";

const KeyBenefits = () => {
  return (
    <section id="benefits" className="scroll-mt-24 py-16">
      <div className="mb-8 space-y-3">
        <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/75">
          Benefits
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Key Benefits
        </h2>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {config.benefits.map((benefit) => (
          <li
            key={benefit}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-6 text-sm leading-6 text-slate-200"
          >
            <span className="mb-3 block h-px w-8 bg-cyan-300/60" />
            {benefit}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default KeyBenefits;