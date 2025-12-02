import { createServerFn } from "@tanstack/react-start";

import fs from "node:fs";

const SERVICES_DATA = "src/data/services.json";

type Service = {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
};

const readServices = async (): Promise<Array<Service>> => {
  return JSON.parse(
    await fs.promises
      .readFile(SERVICES_DATA, "utf-8")
      .catch(() => JSON.stringify([], null, 2)),
  );
};

export const getServices = createServerFn({
  method: "GET",
}).handler(async () => await readServices());
