import type { PropsWithChildren } from "react";

import { BackToTopButton } from "@/component/buttons/BackToTopButton";
import { WhatsAppButton } from "@/component/buttons/WhatsAppButton";
import { Footer } from "@/component/footer/Footer";
import { Navbar } from "@/component/navbar/Navbar";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-(--color-bg) text-(--color-text)">
      <Navbar />

      <main className="bg-(--color-surface) text-(--color-text)">
        {children}
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
    </div>
  );
};
