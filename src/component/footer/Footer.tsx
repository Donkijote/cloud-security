import { clsx } from "clsx";

import { Link } from "@tanstack/react-router";

const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="border-t border-(--color-border-subtle) bg-(--color-surface) text-(--color-text-muted)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-6 flex flex-col items-center">
            <Link to="/" className="inline-flex items-center justify-center">
              <img
                src="/logo.png"
                alt="could-security"
                width={"120"}
                className={clsx(
                  "transition-all duration-100",
                  "dark:invert-[1] dark:brightness-0 dark:navbar-invert-[0] dark:navbar-brightness-100",
                )}
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed">
              Soluciones de seguridad a medida para proteger tus espacios,
              activos y personas.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide text-(--color-text)">
              Nosotros
            </h3>
            <nav className="space-y-2 text-sm">
              <Link
                to="/"
                hash={"home"}
                className="block hover:text-(--color-primary) transition-colors"
              >
                Inicio
              </Link>
              <Link
                to="/"
                hash={"about"}
                className="block hover:text-(--color-primary) transition-colors"
              >
                Sobre nosotros
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide text-(--color-text)">
              Servicios
            </h3>
            <nav className="space-y-2 text-sm">
              <Link
                to={"/"}
                hash={"services"}
                className="block hover:text-(--color-primary) transition-colors"
              >
                Nuestros servicios
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide text-(--color-text)">
              Contacto
            </h3>
            <nav className="space-y-2 text-sm">
              <Link
                to="/"
                hash={"contact"}
                className="block hover:text-(--color-primary) transition-colors"
              >
                Conocer más
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-(--color-border-subtle) pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs sm:text-sm">
            <div className="flex flex-wrap gap-4">
              <Link
                to={"/"}
                className="hover:text-(--color-primary) transition-colors"
              >
                Políticas de privacidad
              </Link>
              <Link
                to={"/"}
                className="hover:text-(--color-primary) transition-colors"
              >
                Términos y servicios
              </Link>
            </div>

            <div className="text-(--color-text-muted)">
              © {year} Cloud Security. Todos los derechos reservados.
            </div>

            <div className="text-(--color-text-muted) text-center md:text-right">
              Desarrollado por{" "}
              <a
                href="https://www.linkedin.com/in/manuel-jos%C3%A9-gon%C3%A7alves-castellano-6b7151150/"
                target={"_blank"}
                className="hover:text-(--color-primary) font-medium transition-colors"
                rel="noopener"
              >
                Donkijote
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
