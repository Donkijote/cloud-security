const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 xl:px-12 py-4 text-center bg-[var(--color-primary-800)] text-[var(--color-text)]">
      <p>My Footer © {year}</p>
    </footer>
  );
};
