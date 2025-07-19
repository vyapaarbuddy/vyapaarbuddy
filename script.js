const toggleBtn = document.querySelector(".theme-toggle");
const root = document.documentElement;

toggleBtn.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  root.setAttribute("data-theme", currentTheme === "light" ? "dark" : "light");
});
