import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	const items = generateItems(200);
	return (
		<>
			<h1>home</h1>
			{items.map((item) => (
				<p key={item.id}>{item.label}</p>
			))}
		</>
	);
}

const generateItems = (n: number, from = 0) => {
	return new Array(n).fill(null).map((_, index) => ({
		id: index + from,
		label: `Label ${index + from}`,
		details: "Details",
		meta: {
			selected: false,
			disabled: false,
		},
	}));
};
