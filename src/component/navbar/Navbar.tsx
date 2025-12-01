import { useEffect, useState } from "react";

import { clsx } from "clsx";

import { Link } from "@tanstack/react-router";

const NAV_LINKS = [
  { to: "/", label: "Home", hash: "home" },
  { to: "/", label: "Services", hash: "services" },
  { to: "/", label: "About Us", hash: "about" },
  { to: "/", label: "Contact", hash: "contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={clsx(
        "sticky top-0 z-50 px-4 sm:px-6 lg:px-8 xl:px-12 min-h-[80px] flex items-center transition-all duration-300",
        "text-slate-900 dark:text-slate-100",
        "border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300",
        {
          "bg-[var(--color-surface)] border-b-transparent": !scrolled,
          "bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-md border-b-slate-200/60 dark:border-b-slate-800/60":
            scrolled,
        },
      )}
    >
      <div className="flex w-full items-center">
        <div className="flex items-center gap-2">
          <Link to={"/"}>
            <img
              src="https://cloud-security.cl/wp-content/uploads/2025/07/cropped-LOGO-CLOUD-SECURITY.png"
              alt="could-security"
              width="80"
              className={
                "invert-[1] brightness-0 navbar-invert-[0] navbar-brightness-100"
              }
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
      </div>
    </nav>
  );
};
