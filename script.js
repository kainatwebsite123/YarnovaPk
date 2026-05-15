console.log("Yarnova is preparing for launch 🚀");

/* Floating stars effect */

const stars = document.querySelector(".stars");

let position = 0;

setInterval(() => {
  position += 1;
  stars.style.backgroundPosition = `${position}px ${position}px`;
}, 50);
