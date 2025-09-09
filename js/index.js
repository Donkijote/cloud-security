const navbarCss =
  "navbar bg-white/40 dark:bg-[#203c5c]/30 backdrop-blur-md shadow-lg";

const handleNavbarColorChange = () => {
  const navbar = document.getElementById("navbar");
  const image = navbar.querySelector("img");
  if (window.scrollY < 50 && navbar.classList.contains("bg-white/40")) {
    navbar.classList.remove(...navbarCss.split(" "));
    navbar.classList.add("text-slate-200");
    navbar.classList.remove("text-[#203c5c]");
    image.classList.add("invert-[1]", "brightness-0");
  }

  if (window.scrollY > 50 && !navbar.classList.contains("bg-white/40")) {
    navbar.classList.add(...navbarCss.split(" "));
    navbar.classList.remove("text-slate-200");
    navbar.classList.add("text-[#203c5c]");
    image.classList.remove("invert-[1]", "brightness-0");
  }
};

window.addEventListener("load", () => {
  const goTopBtn = document.getElementById("goTopBtn");

  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav ul li");

  handleNavbarColorChange();

  window.addEventListener("scroll", () => {
    handleNavbarColorChange();
    if (window.scrollY > 300) {
      goTopBtn.classList.remove("hidden");
    } else {
      goTopBtn.classList.add("hidden");
    }

    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 80) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });

    console.log(current);
  });

  // Smooth scroll to top
  goTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
