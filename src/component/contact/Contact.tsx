import { Mail, MapPin } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";

import { ContactForm } from "@/component/form/ContactForm";

export const Contact = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home.contact" });

  return (
    <section
      id={"contact"}
      className="relative py-20 md:py-24 scroll-mt-32 text-(--color-text) bg-(--color-bg)"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          <div className="space-y-10">
            <div className="space-y-3 max-w-xl">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-(--color-primary) dark:text-(--color-text-muted)">
                <Trans t={t} i18nKey={"label"} />
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                <Trans t={t} i18nKey={"title"} />
              </h2>
              <p className="text-lg font-medium text-(--color-text-muted)">
                <Trans t={t} i18nKey={"subtitle"} />
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--color-primary)/10 text-(--color-primary) dark:text-(--color-text-muted)">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-2">
                    <Trans t={t} i18nKey={"location.title"} />
                  </h3>
                  <p className="text-sm text-(--color-text-muted)">
                    <Trans t={t} i18nKey={"location.description"} />
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-12 items-center justify-center rounded-full bg-(--color-primary)/10 text-(--color-primary) dark:text-(--color-text-muted)">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-2">
                    <Trans t={t} i18nKey={"contact.title"} />
                  </h3>
                  <p className="text-sm text-(--color-text-muted) mb-1">
                    <Trans t={t} i18nKey={"contact.description"} />
                  </p>
                  <a
                    href="mailto:contacto@cloud-security.cl"
                    className="text-sm font-medium text-(--color-primary) dark:text-(--color-text-muted) hover:underline"
                  >
                    contacto@cloud-security.cl
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:justify-self-end lg:relative lg:-translate-y-10 xl:-translate-y-16">
            <div className="relative rounded-2xl border border-white/40 bg-white/80 dark:bg-slate-900/70 dark:border-slate-700 shadow-xl shadow-black/10 backdrop-blur-xl px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-linear-to-br from-(--color-primary)/10 via-transparent to-(--color-primary)/10 opacity-70" />
              <div className="relative">
                <h3 className="mb-6 text-2xl font-semibold md:text-[26px]">
                  <Trans t={t} i18nKey={"form.title"} />
                </h3>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
