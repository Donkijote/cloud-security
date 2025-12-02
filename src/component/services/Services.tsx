import { getRouteApi } from "@tanstack/react-router";

export const Services = () => {
  const services = getRouteApi("/").useLoaderData();

  return (
    <section id={"services"} className="py-16 md:py-24 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10 md:mb-14 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text)]">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-muted)]">
            Ofrecemos soluciones integrales de seguridad orientadas a proteger
            tus espacios mediante la instalación de sistemas avanzados de
            videovigilancia, alarmas contra incendios, cercos eléctricos y
            control de accesos. Incorporamos tecnologías de última generación
            que garantizan una protección continua, confiable y adaptada a las
            necesidades de tu hogar o negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map(({ id, imgUrl, title, description }) => (
            <div
              key={id}
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-[1.03]"
            >
              <img
                src={imgUrl}
                alt={id}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/35 backdrop-blur-[4px] flex flex-col justify-end p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-slate-200">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
