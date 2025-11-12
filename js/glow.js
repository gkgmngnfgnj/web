const glow = document.getElementById("glow");

document.addEventListener("mousemove", e => {
  glow.style.transform = `translate(${e.clientX - 100}px, ${e.clientY - 100}px)`;
});
