const flames = document.querySelectorAll(".flames,.flames2,.flames3");

flames.forEach((flame) => {
  flame.addEventListener("click", () => {
    flame.classList.toggle("off");
  });
});
