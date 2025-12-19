import { Trans } from "react-i18next";

import { createFileRoute, Link } from "@tanstack/react-router";

import { getServices } from "@/api/get-services";
import { Contact } from "@/component/contact/Contact";
import { Hero } from "@/component/hero/Hero";
import { Services } from "@/component/services/Services";

export const Route = createFileRoute("/")({
  component: App,
  loader: async () => await getServices(),
});

function App() {
  return (
    <div className="-mt-20">
      <Hero imageSrc={"/images/hero.png"} imageAlt="Cloud security hero image">
        <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl px-3 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 text-center flex flex-col items-center gap-4 sm:gap-5">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white drop-shadow-lg leading-tight">
            <Trans i18nKey={"home.hero.title"} />
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-200/90 leading-relaxed max-w-md">
            <Trans
              i18nKey={"home.hero.description"}
              components={{
                bold: <span className={"font-semibold"} />,
              }}
            />
            <Trans
              i18nKey={"home.hero.secondaryDescription"}
              components={{
                span: <span className={"hidden lg:inline"} />,
              }}
            />
          </p>

          <Link
            to={"/"}
            hash={"contact"}
            className="cursor-pointer inline-flex items-center justify-center px-5 py-2 rounded-xl bg-white/15 hover:bg-white/20 border border-white/30 text-white font-medium backdrop-blur transition text-xs sm:text-sm md:text-base"
          >
            <Trans i18nKey={"home.hero.button"} />
          </Link>

          <img
            src="/logo.png"
            alt="cloud-security"
            className="hidden sm:block h-8 md:h-10 lg:h-12 invert-[1] brightness-0 mt-1"
          />
        </div>
      </Hero>
      <div className="relative z-10 pt-[70vh] xl:pt-[90vh]">
        <div className="grid gap-16 grid-cols-1">
          <section
            id={"home"}
            className="w-full px-4 py-12 sm:py-16 lg:py-20 text-(--color-text)"
          >
            <div className="mx-auto max-w-5xl text-center space-y-6">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide bg-(--color-surface) border border-(--color-border) text-(--color-text-muted)">
                <Trans i18nKey={"home.introduction.label"} />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-(--color-text)">
                <Trans i18nKey={"home.introduction.title"} />
              </h2>

              <p className="mx-auto max-w-3xl text-sm sm:text-base leading-relaxed text-(--color-text-muted)">
                <Trans i18nKey={"home.introduction.description"} />
              </p>
            </div>
          </section>

          <Services />
          <section id={"about"} className="py-20 md:py-28 text-(--color-text)">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid items-start gap-12 md:grid-cols-2">
                <div className="relative h-72 sm:h-80 md:h-full rounded-3xl overflow-hidden shadow-lg bg-(--color-surface)">
                  <img
                    src="/images/about.png"
                    alt="Equipo de seguridad trabajando en terreno"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-(--color-primary)/20" />
                </div>

                <div className="flex flex-col justify-start">
                  <p className="text-sm font-semibold uppercase tracking-wide text-(--color-primary) dark:text-(--color-text-muted) mb-3 text-center">
                    ¿Quiénes somos?
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                    Más de 25 años de experiencia en seguridad integral
                  </h2>

                  <p className="mt-2 text-(--color-text-muted) leading-relaxed text-left">
                    En{" "}
                    <span className="font-semibold text-(--color-text)">
                      Cloud Security
                    </span>{" "}
                    cuidamos lo que más te importa.
                  </p>

                  <p className="mt-4 text-(--color-text-muted) leading-relaxed text-left">
                    Somos especialistas en seguridad electrónica y ofrecemos
                    soluciones integrales: diseño de proyectos, instalaciones en
                    las distintas líneas de seguridad, implementación a la
                    medida y soporte continuo.
                  </p>

                  <p className="mt-4 text-(--color-text-muted) leading-relaxed text-left">
                    Con tecnología certificada, equipos profesionales y un trato
                    personalizado, tu seguridad está en las mejores manos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Contact />
        </div>
      </div>
    </div>
  );
}
