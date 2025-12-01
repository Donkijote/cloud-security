import type { PropsWithChildren } from "react";

import { Navbar } from "@/component/navbar/Navbar";

const year = new Date().getFullYear();

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />

      <main className="py-6 bg-[var(--color-surface)] text-[var(--color-text)]">
        {children}
      </main>

      <footer className="px-4 sm:px-6 lg:px-8 xl:px-12 py-4 text-center bg-[var(--color-primary-800)] text-[var(--color-text)]">
        <p>My Footer © {year}</p>
      </footer>
    </div>
  );
};
