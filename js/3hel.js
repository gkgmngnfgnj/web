const glow = document.getElementById("glow");

document.addEventListener("mousemove", e => {
  glow.style.transform = `translate(${e.clientX - 125}px, ${e.clientY - 125}px)`;
});
