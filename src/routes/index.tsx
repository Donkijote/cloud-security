import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const items = generateItems(100);
  return (
    <>
      <section id={"home"} className={"pt-20"}>
        <h1>home</h1>

        {items.map((item) => (
          <p key={item.id}>{item.label}</p>
        ))}
      </section>
      <section id={"services"} className={"pt-20"}>
        <h1>Services</h1>

        {items.map((item) => (
          <p key={item.id}>{item.label}</p>
        ))}
      </section>
      <section id={"about"} className={"pt-20"}>
        <h1>About Us</h1>

        {items.map((item) => (
          <p key={item.id}>{item.label}</p>
        ))}
      </section>
      <section id={"contact"} className={"pt-20"}>
        <h1>Contact</h1>

        {items.map((item) => (
          <p key={item.id}>{item.label}</p>
        ))}
      </section>
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
