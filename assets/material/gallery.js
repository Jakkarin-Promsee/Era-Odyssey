document.addEventListener("DOMContentLoaded", function () {
  const interval = 150; // Set your desired interval here

  fetch("/assets/material/gallery.json")
    .then((response) => response.json())
    .then((data) => {
      const galleryContainer = document.getElementById("gallery-container");

      // Create image containers for each image set
      data.imageSets.forEach((imageSet) => {
        createImageContainer(galleryContainer, imageSet.images, interval);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));

  function createImageContainer(parentContainer, imageArray, interval) {
    const container = document.createElement("div");
    container.className = "image-container";

    const gallery = document.createElement("img");
    gallery.src = imageArray[0];
    gallery.alt = "Gallery Image";

    container.appendChild(gallery);
    parentContainer.appendChild(container);

    let currentIndex = 0;
    setInterval(() => {
      currentIndex = (currentIndex + 1) % imageArray.length;
      gallery.src = imageArray[currentIndex];
    }, interval);
  }
});
