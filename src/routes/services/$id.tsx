import { clsx } from "clsx";

import { createFileRoute } from "@tanstack/react-router";

import { getServiceById } from "@/api/get-service-by-id";
import { Hero } from "@/component/hero/Hero";

export const Route = createFileRoute("/services/$id")({
  component: ServicePage,
  loader: ({ params: { id } }) => getServiceById({ data: { id } }),
  notFoundComponent: () => {
    return <p>Service not found!</p>;
  },
});

function ServicePage() {
  const service = Route.useLoaderData();

  return (
    <div className="-mt-20 bg-[var(--color-bg)]">
      <Hero imageSrc={service.heroUrl} imageAlt={service.title} />
      <div className="relative z-10 pt-[420px] lg:pt-[520px] xl:pt-[600px]">
        <div className="grid gap-16 grid-cols-1">
          <section
            id={"title"}
            className="w-full px-4 py-12 sm:py-16 lg:py-18 text-[var(--color-text)]"
          >
            <div className="mx-auto max-w-5xl text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--color-text)]">
                {service.title}
              </h2>
            </div>
          </section>
        </div>
        {service.sections.map((section, index) => (
          <section
            key={section.title}
            className="py-20 md:py-28 text-[var(--color-text)]"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div
                  className={clsx(
                    "relative h-72 sm:h-80 md:h-full rounded-3xl overflow-hidden shadow-lg bg-[var(--color-surface)]",
                    {
                      "order-1": index % 2 === 0,
                      "order-2": index % 2 !== 0,
                    },
                  )}
                >
                  <img
                    src={section.imgUrl}
                    alt={section.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[var(--color-primary)]/10" />
                </div>

                <div
                  className={clsx("flex flex-col justify-start", {
                    "order-2": index % 2 === 0,
                    "order-1": index % 2 !== 0,
                  })}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                    {section.title}
                  </h2>

                  <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed text-center">
                    {section.description}
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
