import config from "@/config/general";

const ProductExplanation = () => {
  return (
    <section className="py-16">
      <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:p-10">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/75">
            Product
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            What Neuroscillator does
          </h2>
        </div>

        <div className="space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
          <p>{config.productExplanation}</p>
          <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/6 p-4 text-slate-200">
            It is designed to support faster sound design while keeping the
            musician in control of the final result.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductExplanation;