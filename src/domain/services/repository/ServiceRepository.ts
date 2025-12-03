import type { Service } from "@/domain/services/entity/ServiceEntity";

import fs from "node:fs";

const SERVICES_DATA = "src/domain/services/db/services.json";

export interface IServiceRepository {
  readServices(): Promise<Service[]>;
}

export const ServiceRepository: IServiceRepository = {
  readServices: async (): Promise<Array<Service>> => {
    return JSON.parse(
      await fs.promises
        .readFile(SERVICES_DATA, "utf-8")
        .catch(() => JSON.stringify([], null, 2)),
    );
  },
};
