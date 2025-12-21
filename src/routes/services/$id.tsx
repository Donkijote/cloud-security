import { clsx } from "clsx";
import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";

import { getServiceById } from "@/api/get-service-by-id";
import { Hero } from "@/component/hero/Hero";
import { assetWithBase } from "@/helpers/assets";
import { translate } from "@/helpers/i18n-db";

export const Route = createFileRoute("/services/$id")({
  component: ServicePage,
  loader: ({ params: { id } }) => getServiceById({ data: { id } }),
  notFoundComponent: () => {
    return <p>Service not found!</p>;
  },
});

function ServicePage() {
  const service = Route.useLoaderData();
  const { i18n } = useTranslation();

  const language = i18n.resolvedLanguage ?? i18n.language;

  return (
    <div className="-mt-20 bg-(--color-bg)">
      <Hero
        imageSrc={assetWithBase(service.heroUrl)}
        imageAlt={translate(service.title, language)}
      />
      <div className="relative z-10 pt-[70vh] xl:pt-[90vh]">
        <div className="grid gap-16 grid-cols-1">
          <section
            id={"title"}
            className="w-full px-4 py-12 sm:py-16 lg:py-18 text-(--color-text)"
          >
            <div className="mx-auto max-w-5xl text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-(--color-text)">
                {translate(service.title, language)}
              </h2>
            </div>
          </section>
        </div>
        {service.sections.map((section, index) => (
          <section
            key={translate(section.title, language)}
            className="py-20 md:py-28 text-(--color-text)"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div
                  className={clsx(
                    "relative h-72 sm:h-80 md:h-full rounded-3xl overflow-hidden shadow-lg bg-(--color-surface)",
                    {
                      "order-1": index % 2 === 0,
                      "order-2": index % 2 !== 0,
                    },
                  )}
                >
                  <img
                    src={assetWithBase(section.imgUrl)}
                    alt={translate(section.title, language)}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-(--color-primary)/10" />
                </div>

                <div
                  className={clsx("flex flex-col justify-start", {
                    "order-2": index % 2 === 0,
                    "order-1": index % 2 !== 0,
                  })}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                    {translate(section.title, language)}
                  </h2>

                  <p className="mt-4 text-(--color-text-muted) leading-relaxed text-center">
                    {translate(section.description, language)}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
