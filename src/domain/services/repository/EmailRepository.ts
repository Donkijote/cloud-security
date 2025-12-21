import emailjs, { type EmailJSResponseStatus } from "@emailjs/nodejs";

import type { Email } from "@/domain/services/entity/EmailEntity";

export interface IEmailRepository {
  sendEmail(data: Email): Promise<EmailJSResponseStatus>;
}

export const EmailRepository: IEmailRepository = {
  sendEmail: async (data: Email): Promise<EmailJSResponseStatus> => {
    return emailjs.send(
      process.env.EMAIL_SERVICE_ID as string,
      process.env.EMAIL_TEMPLATE_ID as string,
      { ...data, title: "Cloud Security" },
      {
        publicKey: process.env.EMAIL_PUBLIC_KEY as string,
        privateKey: process.env.EMAIL_PRIVATE_KEY as string,
        limitRate: {
          id: "app",
          throttle: 10000,
        },
      },
    );
  },
};
