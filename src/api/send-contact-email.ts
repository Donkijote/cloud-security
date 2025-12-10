import { createServerFn } from "@tanstack/react-start";

type ContactData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const sendContactEmail = createServerFn({
  method: "POST",
})
  .inputValidator((data: ContactData) => data)
  .handler(async ({ data }) => {
    console.log("Sending contact email with the following data:", data);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true, message: "Contact email sent successfully." };
  });
