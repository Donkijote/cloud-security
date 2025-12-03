import { createServerFn } from "@tanstack/react-start";

import { ServiceRepository } from "@/domain/services/repository/ServiceRepository";

export const getServices = createServerFn({
  method: "GET",
}).handler(async () => await ServiceRepository.readServices());
