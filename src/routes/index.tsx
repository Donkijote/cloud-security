import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/component/hero/Hero";

import heroImg from "/images/hero.png";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div
      className="
        grid
        grid-cols-1
        grid-rows-[minmax(260px,380px)_auto_auto_auto_auto]
        gap-y-16
        px-4 sm:px-6 lg:px-8 xl:px-12
        py-10
      "
    >
      <Hero imageSrc={heroImg} imageAlt="Cloud security hero image">
        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
          Cloud security that lets you sleep at night.
        </h1>

        <p className="max-w-2xl text-sm text-slate-200 sm:text-base">
          Assess, harden, and monitor your cloud environments with confidence.
        </p>
      </Hero>

      <section id={"home"} className="row-[2/3] col-[1/2] space-y-4">
        <h2 className="text-xl font-semibold text-slate-100">
          Why this platform
        </h2>
        <p className="text-slate-300 text-sm sm:text-base">
          Short intro about your cloud security offering, who it’s for, and the
          main value prop.
        </p>
      </section>
      <section id={"services"} className="row-[3/4] col-[1/2] space-y-6">
        <h2 className="text-xl font-semibold text-slate-100">Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Replace with real service cards */}
          <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <h3 className="font-medium text-slate-50">Cloud posture review</h3>
            <p className="mt-2 text-sm text-slate-300">
              Baseline assessment of your AWS/Azure/GCP environments.
            </p>
          </article>
          <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <h3 className="font-medium text-slate-50">Threat monitoring</h3>
            <p className="mt-2 text-sm text-slate-300">
              Continuous detection and alerting on critical misconfigurations.
            </p>
          </article>
          <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <h3 className="font-medium text-slate-50">Incident readiness</h3>
            <p className="mt-2 text-sm text-slate-300">
              Playbooks, simulations, and hardening to reduce impact.
            </p>
          </article>
        </div>
      </section>
      <section id={"about"} className="row-[4/5] col-[1/2] space-y-4">
        <h2 className="text-xl font-semibold text-slate-100">About us</h2>
        <p className="text-slate-300 text-sm sm:text-base">
          A short story about your background, why you focus on cloud security,
          and what makes you different.
        </p>
      </section>
      <section id={"contact"} className="row-[5/6] col-[1/2] space-y-6">
        <h2 className="text-xl font-semibold text-slate-100">Contact</h2>
        <p className="text-slate-300 text-sm sm:text-base">
          How people can reach you or book a call.
        </p>

        <form className="grid gap-4 sm:max-w-lg">
          <input
            type="email"
            placeholder="Work email"
            className="rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
          <textarea
            rows={4}
            placeholder="Tell us briefly about your environment and needs…"
            className="rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-sky-500 text-slate-950 hover:bg-sky-400 transition"
          >
            Send message
          </button>
        </form>
      </section>
    </div>
  );
}
