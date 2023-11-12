document.addEventListener("DOMContentLoaded", function () {
  // Fetch the JSON data
  fetch("/assets/material/gallery.json")
    .then((response) => response.json())
    .then((data) => {
      const galleryCambrainContainer = document.getElementById(
        "gallery-cambrain-container"
      );
      data.Cambrian.forEach((item) => {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");
        createImageContainer(galleryItem, item);
        galleryCambrainContainer.appendChild(galleryItem);
      });

      const galleryOrdovicianContainer = document.getElementById(
        "gallery-ordovician-container"
      );
      data.Ordovician.forEach((item) => {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");
        createImageContainer(galleryItem, item);
        galleryOrdovicianContainer.appendChild(galleryItem);
      });

      const gallerySilurianContainer = document.getElementById(
        "gallery-silurian-container"
      );
      data.Silurian.forEach((item) => {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");
        createImageContainer(galleryItem, item);
        gallerySilurianContainer.appendChild(galleryItem);
      });

      data.Ordovician.forEach((item) => {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");
        createImageContainer(galleryItem, item);

        // Append the gallery item to the gallery container
        galleryContainer.appendChild(galleryItem);
      });
    })
    .catch((error) => console.error("Error fetching JSON:", error));

  function createImageContainer(galleryItem, item) {
    const image = document.createElement("img");
    image.src = item.src;
    image.alt = item.alt;

    const name = document.createElement("p");
    name.textContent = item.name;

    // Append the image and name to the gallery item
    galleryItem.appendChild(image);
    galleryItem.appendChild(name);
  }
});
