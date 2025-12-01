import { createFileRoute, Link } from "@tanstack/react-router";

import { Hero } from "@/component/hero/Hero";

import heroImg from "/images/hero.png";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="-mt-20">
      <Hero imageSrc={heroImg} imageAlt="Cloud security hero image">
        <div className="max-w-3xl w-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl rounded-2xl p-6 sm:p-10 text-center flex flex-col items-center gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white drop-shadow-lg">
            Protege lo que más Importa
          </h1>

          <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed">
            Ofrecemos servicios especializados en{" "}
            <span className="font-semibold">
              CCTV • Alarmas de incendios • Alarmas de monitoreo • Cercado
              Eléctrico • Control de Acceso
            </span>
            <span className="hidden md:block">
              complementos esenciales para crear soluciones eficaces de
              seguridad.
            </span>
          </p>
          <Link
            to={"/"}
            hash={"contact"}
            className="cursor-pointer mt-2 inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-white/15 hover:bg-white/20 border border-white/30 text-white font-medium backdrop-blur transition"
          >
            Get started
          </Link>
          <div className="flex flex-wrap gap-4 justify-center">
            <img
              src="https://cloud-security.cl/wp-content/uploads/2025/07/cropped-LOGO-CLOUD-SECURITY.png"
              alt="could-security"
              className="w-[10vw] invert-[1] brightness-0"
            />
          </div>
        </div>
      </Hero>
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-12 pt-[260px] sm:pt-[340px] md:pt-[420px] lg:pt-[520px] xl:pt-[600px] pb-16">
        <div className="grid gap-16 grid-cols-1">
          <section id={"home"} className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-100">
              Why this platform
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Short intro about your cloud security offering…
            </p>
          </section>
          <section id={"services"} className="space-y-6">
            <h2 className="text-xl font-semibold text-slate-100">Services</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Replace with real service cards */}
              <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                <h3 className="font-medium text-slate-50">
                  Cloud posture review
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Baseline assessment of your AWS/Azure/GCP environments.
                </p>
              </article>
              <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                <h3 className="font-medium text-slate-50">Threat monitoring</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Continuous detection and alerting on critical
                  misconfigurations.
                </p>
              </article>
              <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                <h3 className="font-medium text-slate-50">
                  Incident readiness
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Playbooks, simulations, and hardening to reduce impact.
                </p>
              </article>
            </div>
          </section>
          <section id={"about"} className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-100">About us</h2>
            <p className="text-slate-300 text-sm sm:text-base">
              A short story about your background, why you focus on cloud
              security, and what makes you different.
            </p>
          </section>
          <section id={"contact"} className="space-y-6">
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
      </div>
    </div>
  );
}
