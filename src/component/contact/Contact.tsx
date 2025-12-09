import { Mail, MapPin } from "lucide-react";

export const Contact = () => {
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
                Contáctanos
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Nos encantaría conocer más de tus proyectos…
              </h2>
              <p className="text-lg font-medium text-(--color-text-muted)">
                Estamos para apoyarte en seguridad electrónica, cámaras, alarmas
                y sistemas eléctricos.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--color-primary)/10 text-(--color-primary) dark:text-(--color-text-muted)">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-2">Ubicación</h3>
                  <p className="text-sm text-(--color-text-muted)">
                    Santiago, Región Metropolitana, Chile.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-12 items-center justify-center rounded-full bg-(--color-primary)/10 text-(--color-primary) dark:text-(--color-text-muted)">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-2">Contacto</h3>
                  <p className="text-sm text-(--color-text-muted) mb-1">
                    Nuestro equipo se pondrá en contacto contigo.
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
                  Envíanos un mensaje
                </h3>

                <form method="POST">
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium uppercase tracking-wide text-(--color-text-muted)"
                    >
                      Nombre*
                    </label>
                    <input
                      id={"name"}
                      type="text"
                      name="name"
                      placeholder="Tu nombre"
                      required
                      className="mt-1 w-full border-0 border-b border-slate-200 bg-transparent py-3 text-sm text-(--color-text) placeholder:text-slate-400 focus:border-(--color-primary) focus:outline-none focus:ring-0 dark:border-slate-700 dark:placeholder:text-slate-500"
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium uppercase tracking-wide text-(--color-text-muted)"
                    >
                      Email*
                    </label>
                    <input
                      id={"email"}
                      type="email"
                      name="email"
                      placeholder="usuario@dominio.com"
                      required
                      className="mt-1 w-full border-0 border-b border-slate-200 bg-transparent py-3 text-sm text-(--color-text) placeholder:text-slate-400 focus:border-(--color-primary) focus:outline-none focus:ring-0 dark:border-slate-700 dark:placeholder:text-slate-500"
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="phone"
                      className="block text-xs font-medium uppercase tracking-wide text-(--color-text-muted)"
                    >
                      Teléfono*
                    </label>
                    <input
                      id={"phone"}
                      type="tel"
                      name="phone"
                      placeholder="+56 9 456 78910"
                      required
                      className="mt-1 w-full border-0 border-b border-slate-200 bg-transparent py-3 text-sm text-(--color-text) placeholder:text-slate-400 focus:border-(--color-primary) focus:outline-none focus:ring-0 dark:border-slate-700 dark:placeholder:text-slate-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium uppercase tracking-wide text-(--color-text-muted)"
                    >
                      Mensaje*
                    </label>
                    <textarea
                      id={"message"}
                      name="message"
                      rows={3}
                      placeholder="Escribe tu mensaje"
                      required
                      className="mt-1 w-full resize-none border-0 border-b border-slate-200 bg-transparent py-3 text-sm text-(--color-text) placeholder:text-slate-400 focus:border-(--color-primary) focus:outline-none focus:ring-0 dark:border-slate-700 dark:placeholder:text-slate-500"
                    />
                    <input
                      type="hidden"
                      name="_next"
                      value="https://cloudarmy.cl/contact-ok.html"
                    />
                    <input
                      type="hidden"
                      name="_subject"
                      value="Nuevo mensaje"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-(--color-primary) px-6 py-3 text-sm font-medium text-white shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
