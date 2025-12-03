import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/$id")({
  component: ServicePage,
});

function ServicePage() {
  return <div>Hello "/services/$id"!</div>;
}
