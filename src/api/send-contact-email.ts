import { createServerFn } from "@tanstack/react-start";

import type { Email } from "@/domain/services/entity/EmailEntity";
import { EmailRepository } from "@/domain/services/repository/EmailRepository";

export const sendContactEmail = createServerFn({
  method: "POST",
})
  .inputValidator((data: Email) => data)
  .handler(async ({ data }) => {
    try {
      await EmailRepository.sendEmail(data);
      return { status: "success" };
    } catch (error) {
      console.error("Error sending email:", error);
      return { status: "error" };
    }
  });
