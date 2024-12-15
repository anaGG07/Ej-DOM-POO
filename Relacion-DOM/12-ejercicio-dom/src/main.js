import createGallery from "./components/gallery/gallery.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  const imageUrls = [
    "https://picsum.photos/200/300?text=Imagen+1",
    "https://picsum.photos/200/300?text=Imagen+2",
    "https://picsum.photos/200/300?text=Imagen+3",
    "https://picsum.photos/200/300?text=Imagen+4",
  ];


  const gallery = createGallery(imageUrls);
  app.appendChild(gallery);
});
