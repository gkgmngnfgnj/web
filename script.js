// ✨ Cursor Glow
const glow = document.getElementById("cursor-glow");
document.addEventListener("mousemove", (e) => {
  glow.style.transform = `translate(${e.clientX - 40}px, ${e.clientY - 40}px)`;
});

// 🎧 Auto Music + Fade In
document.addEventListener("DOMContentLoaded", () => {
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
      // If autoplay blocked, wait for first click
      document.body.addEventListener("click", () => {
        fadeIn();
      }, { once: true });
    });
  };

  fadeIn();
});
