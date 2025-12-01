import { createFileRoute, Link } from "@tanstack/react-router";

import { Hero } from "@/component/hero/Hero";
import { Services } from "@/component/services/Services";

import heroImg from "/images/hero.png";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="-mt-20">
      <Hero imageSrc={heroImg} imageAlt="Cloud security hero image">
        <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl px-3 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 text-center flex flex-col items-center gap-4 sm:gap-5">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white drop-shadow-lg leading-tight">
            Protege lo que más Importa
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-200/90 leading-relaxed max-w-md">
            Ofrecemos servicios especializados en{" "}
            <span className="font-semibold">
              CCTV • Alarmas de incendios • Alarmas de monitoreo • Cercado
              Eléctrico • Control de Acceso
            </span>
            <span className="hidden lg:inline">
              {" "}
              complementos esenciales para crear soluciones eficaces de
              seguridad.
            </span>
          </p>

          <Link
            to={"/"}
            hash={"contact"}
            className="cursor-pointer inline-flex items-center justify-center px-5 py-2 rounded-xl bg-white/15 hover:bg-white/20 border border-white/30 text-white font-medium backdrop-blur transition text-xs sm:text-sm md:text-base"
          >
            Get started
          </Link>

          <img
            src="https://cloud-security.cl/wp-content/uploads/2025/07/cropped-LOGO-CLOUD-SECURITY.png"
            alt="cloud-security"
            className="hidden sm:block h-8 md:h-10 lg:h-12 invert-[1] brightness-0 mt-1"
          />
        </div>
      </Hero>
      <div className="relative z-10 pt-[420px] lg:pt-[520px] xl:pt-[600px] pb-16">
        <div className="grid gap-16 grid-cols-1">
          <section
            id={"home"}
            className="w-full px-4 py-12 sm:py-16 lg:py-20 text-[var(--color-text)]"
          >
            <div className="mx-auto max-w-5xl text-center space-y-6">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
                Reliable protection for real-world spaces
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--color-text)]">
                Smart security systems for homes and businesses
              </h2>

              <p className="mx-auto max-w-3xl text-sm sm:text-base leading-relaxed text-[var(--color-text-muted)]">
                We design, install and maintain complete security solutions:
                CCTV cameras, alarm systems, fire detection, access control and
                structured electrical circuits. Our goal is simple — keep your
                people, property and infrastructure protected 24/7 with systems
                that are reliable, easy to use and tailored to your space.
              </p>
            </div>
          </section>

          <Services />
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
