import type { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
	return (
		<div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
			<nav className="sticky top-0 z-50 bg-gray-800 text-white px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-4 min-h-[80px] flex items-center">
				<h1 className="text-xl font-semibold">My Navbar</h1>
			</nav>

			<main className="bg-gray-100 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6">
				{children}
			</main>

			<footer className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-4 text-center">
				<p>My Footer © {new Date().getFullYear()}</p>
			</footer>
		</div>
	);
};
