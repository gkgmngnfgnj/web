// Cursor glow follow effect
const glow = document.getElementById("cursor-glow");
document.addEventListener("mousemove", (e) => {
  glow.style.transform = `translate(${e.clientX - 40}px, ${e.clientY - 40}px)`;
});

// Fade-in delay sequencing
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.3}s`;
  });

  // Try autoplay music with a fade-in
  const music = document.getElementById("musicPlayer");
  const fadeIn = () => {
    music.volume = 0;
    music.play().then(() => {
      let vol = 0;
      const fade = setInterval(() => {
        if (vol < 1) {
          vol += 0.02;
          music.volume = vol;
        } else clearInterval(fade);
      }, 100);
    }).catch(() => {
      console.log("Autoplay blocked — user must click once.");
    });
  };
  fadeIn();
});
