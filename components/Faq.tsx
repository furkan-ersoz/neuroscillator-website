import config from "@/config/general";

const Faq = () => {
  return (
    <section id="faq" className="scroll-mt-24 py-16">
      <div className="mb-8 space-y-3">
        <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/75">
          FAQ
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {config.faq.map((item) => (
          <details
            key={item.question}
            className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-slate-100 marker:hidden">
              <span>{item.question}</span>
              <span className="text-cyan-200 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Faq;
