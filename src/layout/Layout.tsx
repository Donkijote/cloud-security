import type { PropsWithChildren } from "react";

import { FloatingWhatsApp } from "@dxkit-org/react-floating-whatsapp";

import { BackToTopButton } from "@/component/buttons/BackToTopButton";
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
      <FloatingWhatsApp
        phoneNumber="1234567890"
        accountName="Cloud Security"
        avatar="/favicon.svg"
        statusMessage="Typically replies within 1 hour"
        chatMessage="Hello! 👋 How can we help you today?"
        darkMode={true}
        allowClickAway={false}
        allowEsc={true}
        notification={false}
        notificationSound={false}
        chatboxStyle={{ backgroundColor: "transparent" }}
        placeholder={"Type your message..."}
        buttonClassName={"!bottom-20 !right-6 !w-11 !h-11 after:!shadow-none"}
        chatboxClassName={"[&>div]:!opacity-100"}
      />
      <BackToTopButton />
    </div>
  );
};
