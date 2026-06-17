import Image from "next/image";

import config, { withBasePath } from "@/config/general";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 -mx-6 mb-10 border-b border-white/10 bg-[#05070b]/80 px-6 py-4 backdrop-blur-xl lg:-mx-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="relative block h-11 w-52 shrink-0 sm:h-12 sm:w-64 lg:w-72">
            <Image
              src={withBasePath("/brand-logo.png")}
              alt={`${config.brandName} logo`}
              fill
              priority
              sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 288px"
              className="object-contain"
            />
          </span>
          <span className="hidden text-[0.68rem] uppercase tracking-[0.28em] text-slate-400 md:inline">
            {config.productName}
          </span>
        </a>

        <nav className="hidden md:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-8 text-sm text-slate-300">
            {config.navigation.map((item) => {
              const primary = item.label === "Join Demo";

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={
                      primary
                        ? "rounded-full border border-cyan-400/25 bg-cyan-300/10 px-4 py-2 text-slate-50 transition hover:bg-cyan-300/15 hover:text-white"
                        : "transition hover:text-white"
                    }
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="relative md:hidden">
          <details className="group">
            <summary className="list-none cursor-pointer rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10">
              Menu
            </summary>
            <div className="absolute right-0 mt-3 w-[min(18rem,calc(100vw-3rem))] rounded-2xl border border-white/10 bg-[#070b11]/95 p-3 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
              <nav aria-label="Mobile navigation">
                <ul className="flex flex-col gap-1">
                  {config.navigation.map((item) => {
                    const primary = item.label === "Join Demo";

                    return (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className={
                            primary
                              ? "block rounded-xl border border-cyan-400/20 bg-cyan-300/10 px-4 py-3 text-sm text-slate-50"
                              : "block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                          }
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
};

export default Header;
