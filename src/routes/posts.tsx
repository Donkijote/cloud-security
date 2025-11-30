import { createFileRoute } from "@tanstack/react-router";

import { Posts } from "@/pages/posts.tsx";

export const Route = createFileRoute("/posts")({
	component: Posts,
});
