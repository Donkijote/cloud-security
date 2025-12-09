import { clsx } from "clsx";

import { Link } from "@tanstack/react-router";

import { ThemeToggle } from "@/component/theme/ThemToggle";

const NAV_LINKS = [
  { to: "/", label: "Home", hash: "home" },
  { to: "/", label: "Services", hash: "services" },
  { to: "/", label: "About Us", hash: "about" },
  { to: "/", label: "Contact", hash: "contact" },
];

export const Navbar = () => {
  return (
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
          <ul className="flex gap-8 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
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
                    className: "text-blue-600 dark:text-blue-400 font-semibold",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
};
