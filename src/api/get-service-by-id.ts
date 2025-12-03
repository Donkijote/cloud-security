import { notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

import { ServiceRepository } from "@/domain/services/repository/ServiceRepository";

export const getServiceById = createServerFn({
  method: "GET",
})
  .inputValidator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    const services = await ServiceRepository.readServices();

    const service = services.find(({ id }) => id === data.id);

    if (!service) {
      throw notFound();
    }

    return service;
  });
