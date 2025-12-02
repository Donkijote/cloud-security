import type { PropsWithChildren } from "react";

import { Footer } from "@/component/footer/Footer";
import { Navbar } from "@/component/navbar/Navbar";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />

      <main className="bg-[var(--color-surface)] text-[var(--color-text)]">
        {children}
      </main>

      <Footer />
    </div>
  );
};
