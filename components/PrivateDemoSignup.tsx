"use client";

import { FormEvent, useRef, useState } from "react";

const appsScriptUrl =
  "https://script.google.com/macros/s/AKfycbwIhY-QMwggbYakhEsgRhWQh0x5gUOcV1R1_Sz9r07dNyw-EQ6fGGZ0bMvFH-qWbPNLbQ/exec";

const PrivateDemoSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submissionLockRef = useRef(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submissionLockRef.current) {
      return;
    }

    submissionLockRef.current = true;
    setIsSubmitting(true);
    setStatus("");

    try {
      const payload = new URLSearchParams({
        email: email.trim(),
        name: name.trim(),
        website,
        source: "neuroscillator-website",
      });

      const response = await fetch(appsScriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload.toString(),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus(
        "You're on the list. We'll contact you when the private demo is ready."
      );
      setName("");
      setEmail("");
      setWebsite("");
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      submissionLockRef.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <section id="signup" className="scroll-mt-24 py-16">
      <div className="rounded-[2rem] border border-cyan-400/15 bg-cyan-300/8 p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_minmax(19rem,24rem)] lg:items-center">
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

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-black/20 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-sm"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                id="private-demo-name"
                autoComplete="name"
                placeholder="Name (optional)"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/8"
              />
              <input
                type="email"
                name="email"
                id="private-demo-email"
                autoComplete="email"
                placeholder="Email *"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/8"
              />
            </div>

            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
              className="absolute left-[-9999px] h-px w-px opacity-0"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/12 px-6 py-3 text-sm font-medium text-slate-50 transition hover:border-cyan-200/50 hover:bg-cyan-300/18 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Joining..." : "Join the Private Demo"}
            </button>

            <div
              aria-live="polite"
              className="min-h-6 text-sm leading-6 text-slate-300"
            >
              {status}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PrivateDemoSignup;