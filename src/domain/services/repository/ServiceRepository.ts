import SERVICES_DATA from "@/domain/services/db/services.json";
import type { Service } from "@/domain/services/entity/ServiceEntity";

export interface IServiceRepository {
  readServices(): Promise<Service[]>;
}

export const ServiceRepository: IServiceRepository = {
  readServices: async (): Promise<Array<Service>> => {
    return new Promise<Service[]>((resolve) => resolve(SERVICES_DATA));
  },
};
