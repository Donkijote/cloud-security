import { useEffect, useState } from "react";

import { clsx } from "clsx";

import { Link } from "@tanstack/react-router";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
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
        {
          "bg-[var(--color-surface)]": !scrolled,
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
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="relative transition-colors hover:text-blue-600 dark:hover:text-blue-400"
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
