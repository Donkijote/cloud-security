import emailjs, { type EmailJSResponseStatus } from "@emailjs/nodejs";

import type { Email } from "@/domain/services/entity/EmailEntity";

export interface IEmailRepository {
  sendEmail(data: Email): Promise<EmailJSResponseStatus>;
}

export const EmailRepository: IEmailRepository = {
  sendEmail: async (data: Email): Promise<EmailJSResponseStatus> => {
    return emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      { ...data, title: "Cloud Security" },
      {
        publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        privateKey: import.meta.env.VITE_EMAIL_PRIVATE_KEY,
        limitRate: {
          id: "app",
          throttle: 10000,
        },
      },
    );
  },
};
