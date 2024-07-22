// Get the slideshow containers and images
const slideshowContainers = document.querySelectorAll(
  ".slideshow-container, .slideshow-container1, .slideshow-container2,.slideshow-container3,.slideshow-container4,.slideshow-container5,.slideshow-container6,.slideshow-container7"
);
const images = slideshowContainers.forEach((container) =>
  container.querySelectorAll("img")
);

// Set the initial active image for each slideshow
slideshowContainers.forEach((container, index) => {
  container.querySelector("img").classList.add("active");
});

// Set the interval for each slideshow container
slideshowContainers.forEach((container, index) => {
  const interval = container.getAttribute("data-interval");

  // Function to change the active image
  function changeImage() {
    const activeImage = container.querySelector("img.active");
    const nextImage =
      activeImage.nextElementSibling ||
      container.querySelector("img:first-child");
    activeImage.classList.remove("active");
    nextImage.classList.add("active");
  }

  // Set the interval for the slideshow
  setInterval(changeImage, interval);
});
