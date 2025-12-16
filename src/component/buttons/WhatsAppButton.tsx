import { clsx } from "clsx";

import { FloatingWhatsApp } from "@dxkit-org/react-floating-whatsapp";

import { useLocalStorage } from "@/application/hooks/useLocalStorage";
import { LocalStorageKeys } from "@/application/storage/LocalStorage";

export const WhatsAppButton = () => {
  const goBackButton =
    useLocalStorage(LocalStorageKeys.GO_BACK_BUTTON) === "true";

  return (
    <FloatingWhatsApp
      phoneNumber="1234567890"
      accountName="Cloud Security"
      avatar="/favicon.svg"
      statusMessage="Usualmente responde en minutos"
      chatMessage="¡Hola! 👋¿Cómo puedo ayudarte hoy?"
      darkMode={true}
      allowClickAway={false}
      allowEsc={true}
      notification={false}
      notificationSound={false}
      chatboxStyle={{ backgroundColor: "transparent" }}
      placeholder={"Escriba su mensaje..."}
      buttonClassName={clsx(
        "!bottom-4 md:!bottom-6 !right-2 md:!right-4 !w-11 !h-11 after:!shadow-none transition-all duration-300",
        {
          "!bottom-18 md:!bottom-20": goBackButton,
        },
      )}
      chatboxClassName={"[&>div]:!opacity-100"}
    />
  );
};
