setInterval(() => {
  const elements = document.querySelectorAll("[class*='-0'], .image-1379, .image-1380, .image-1382");
  elements.forEach((el) => {
    el.style.animation = "none"; // Reset animation
    void el.offsetWidth; // Trigger reflow
    el.style.animation = ""; // Reapply animation
  });
}, 3000);
