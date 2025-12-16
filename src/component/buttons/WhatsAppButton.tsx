import { FloatingWhatsApp } from "@dxkit-org/react-floating-whatsapp";

export const WhatsAppButton = () => {
  return (
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
  );
};
