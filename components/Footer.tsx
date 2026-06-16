import Image from "next/image";

import config, { withBasePath } from "@/config/general";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/10 py-10">
      <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
        <div className="space-y-4">
          <a href="#top" className="block w-fit">
            <span className="relative block h-10 w-56">
              <Image
                src={withBasePath("/brand-logo.png")}
                alt={`${config.brandName} logo`}
                fill
                sizes="(max-width: 640px) 224px, 256px"
                className="object-contain"
              />
            </span>
          </a>
          <div className="max-w-xl space-y-2 text-sm leading-7 text-slate-300">
            <p className="font-medium text-slate-100">{config.productName}</p>
            <p>{config.companyDescription}</p>
          </div>
        </div>

        <div className="space-y-2 text-sm text-slate-400 md:text-right">
          <p className="uppercase tracking-[0.25em] text-slate-500">Links</p>
          <div className="flex flex-wrap gap-4 md:justify-end">
            {config.navigation.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-slate-200">
                {item.label}
              </a>
            ))}
          </div>
          <p className="pt-4 text-xs text-slate-500">
            © {currentYear} Computational Instruments Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
