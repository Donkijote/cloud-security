import { createFileRoute } from "@tanstack/react-router";

import { getServiceById } from "@/api/get-service-by-id";

export const Route = createFileRoute("/services/$id")({
  component: ServicePage,
  loader: ({ params: { id } }) => getServiceById({ data: { id } }),
  notFoundComponent: () => {
    return <p>Service not found!</p>;
  },
});

function ServicePage() {
  const service = Route.useLoaderData();
  console.log("ServicePage", service);
  return <div>Hello "/services/$id"!</div>;
}
