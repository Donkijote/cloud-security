import { Activity, useState } from "react";

import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { Trans } from "react-i18next";

import { Link } from "@tanstack/react-router";

import { ThemeToggle } from "@/component/theme/ThemToggle";

const NAV_LINKS = [
  { to: "/", hash: "home" },
  { to: "/", hash: "services" },
  { to: "/", hash: "about" },
  { to: "/", hash: "contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={clsx(
          "sticky top-0 z-50 px-4 sm:px-6 lg:px-8 xl:px-12 min-h-20 flex items-center transition-all duration-100",
          "border-b backdrop-blur-sm transition-[background-color,border-color,box-shadow] duration-100",
          "bg-white/10 dark:bg-slate-900/70 border-slate-100/10 dark:border-slate-800/50 shadow-md  dark:text-slate-100",
        )}
      >
        <div className="flex w-full items-center">
          <div className="flex items-center gap-2">
            <Link to={"/"}>
              <img
                src="/logo.png"
                alt="could-security"
                width={"80"}
                className={clsx(
                  "transition-all duration-100",
                  "dark:invert-[1] dark:brightness-0 dark:navbar-invert-[0] dark:navbar-brightness-100",
                )}
              />
            </Link>
          </div>

          <div className="flex-1 flex justify-center">
            <ul className="hidden md:flex gap-8 text-sm font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.hash}>
                  <Link
                    to={link.to}
                    hash={link.hash}
                    className={clsx(
                      "relative transition-colors",
                      "hover:text-blue-600 dark:hover:text-blue-400",
                    )}
                    activeOptions={{
                      includeHash: true,
                    }}
                    activeProps={{
                      className:
                        "text-blue-600 dark:text-blue-400 font-semibold",
                    }}
                  >
                    <Trans i18nKey={`navbar.${link.hash}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className={clsx(
                "cursor-pointer inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm md:hidden",
                "border-slate-200/60 bg-(--color-surface) shadow-sm backdrop-blur",
                "hover:bg-white/90 dark:border-slate-700 dark:bg-slate-800/90 dark:hover:bg-slate-700",
              )}
              onClick={() => setIsOpen(true)}
              aria-label={"Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>
      <Activity name={"backdrop"} mode={isOpen ? "visible" : "hidden"}>
        <button
          className={
            "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity md:hidden opacity-100 pointer-events-auto"
          }
          onClick={() => setIsOpen(false)}
          type={"button"}
        />
      </Activity>
      <aside
        id={"mobile-nav"}
        className={clsx(
          "fixed inset-y-0 right-0 z-50 w-64 sm:w-80 md:hidden",
          "bg-(--color-surface) border-l border-slate-200/80 dark:border-slate-800/80",
          "shadow-xl transform transition-transform duration-200 ease-out",
          {
            "translate-x-0": isOpen,
            "translate-x-full": !isOpen,
          },
        )}
      >
        <nav className="px-5 pb-4">
          <ul className="flex flex-col gap-3 text-sm font-medium">
            <div className={"flex items-center justify-end h-20"}>
              <button
                type="button"
                className={clsx(
                  "cursor-pointer inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm md:hidden",
                  "border-slate-200/60 bg-white/60 shadow-sm backdrop-blur",
                  "hover:bg-white/90 dark:border-slate-700 dark:bg-slate-800/90 dark:hover:bg-slate-700",
                )}
                onClick={() => setIsOpen(false)}
                aria-label={"Close navigation menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {NAV_LINKS.map((link) => (
              <li key={link.hash}>
                <Link
                  to={link.to}
                  hash={link.hash}
                  className={clsx(
                    "block rounded-lg px-3 py-2 transition-colors",
                    "text-slate-700 hover:bg-slate-100 hover:text-blue-600",
                    "dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-blue-400",
                  )}
                  activeOptions={{
                    includeHash: true,
                  }}
                  activeProps={{
                    className:
                      "block rounded-lg px-3 py-2 bg-slate-200 text-blue-600 dark:bg-slate-800 dark:text-blue-400 font-semibold",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <Trans i18nKey={`navbar.${link.hash}`} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};
