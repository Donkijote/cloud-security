import { clsx } from "clsx";
import { Trans, useTranslation } from "react-i18next";

import { Link } from "@tanstack/react-router";

import { LanguageSwitcher } from "./LanguageSwitcher";

const year = new Date().getFullYear();

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-(--color-border-subtle) bg-(--color-surface) text-(--color-text-muted)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-6">
          <div className="space-y-6 flex flex-col items-center col-span-2">
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
              <Trans t={t} i18nKey={"footer.description"} />
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide text-(--color-text)">
              <Trans t={t} i18nKey={"footer.us.title"} />
            </h3>
            <nav className="space-y-2 text-sm">
              <Link
                to="/"
                hash={"home"}
                className="block hover:text-(--color-primary) transition-colors"
              >
                <Trans t={t} i18nKey={"footer.us.home"} />
              </Link>
              <Link
                to="/"
                hash={"about"}
                className="block hover:text-(--color-primary) transition-colors"
              >
                <Trans t={t} i18nKey={"footer.us.about"} />
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide text-(--color-text)">
              <Trans t={t} i18nKey={"footer.services.title"} />
            </h3>
            <nav className="space-y-2 text-sm">
              <Link
                to={"/"}
                hash={"services"}
                className="block hover:text-(--color-primary) transition-colors"
              >
                <Trans t={t} i18nKey={"footer.services.link"} />
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide text-(--color-text)">
              <Trans t={t} i18nKey={"footer.contact.title"} />
            </h3>
            <nav className="space-y-2 text-sm">
              <Link
                to="/"
                hash={"contact"}
                className="block hover:text-(--color-primary) transition-colors"
              >
                <Trans t={t} i18nKey={"footer.contact.link"} />
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <LanguageSwitcher />
          </div>
        </div>

        <div className="mt-10 border-t border-(--color-border-subtle) pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs sm:text-sm">
            <div className="flex flex-wrap gap-4">
              <Link
                to={"/"}
                className="hover:text-(--color-primary) transition-colors"
              >
                <Trans t={t} i18nKey={"footer.privacy"} />
              </Link>
              <Link
                to={"/"}
                className="hover:text-(--color-primary) transition-colors"
              >
                <Trans i18nKey={"footer.terms"} />
              </Link>
            </div>

            <div className="text-(--color-text-muted)">
              <Trans t={t} i18nKey={"footer.rights"} values={{ year }} />
            </div>

            <div className="text-(--color-text-muted) text-center md:text-right">
              <Trans t={t} i18nKey={"footer.developer"} />{" "}
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
