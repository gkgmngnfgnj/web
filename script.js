// Simple entrance animation delays
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el, i) => {
    setTimeout(() => el.classList.add("visible"), i * 200);
  });
});
