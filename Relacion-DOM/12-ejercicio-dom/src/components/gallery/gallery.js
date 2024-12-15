import "./gallery.css";

// Crear la galería de imágenes
const createGallery = (imageUrls) => {

  //. CONTENEDOR PRINCIPAL 

  const galleryContainer = document.createElement("div");
  galleryContainer.id = "galleryContainer";


  // . LIGHT BOX 

  const modal = document.createElement("div");
  modal.id = "lightboxModal";
  modal.classList.add("hidden");

  const modalImage = document.createElement("img");
  modalImage.id = "modalImage";

  const closeButton = document.createElement("button");
  closeButton.id = "closeButton";
  closeButton.textContent = "×";

  const prevButton = document.createElement("button");
  prevButton.id = "prevButton";
  prevButton.textContent = "◀";

  const nextButton = document.createElement("button");
  nextButton.id = "nextButton";
  nextButton.textContent = "▶";

  modal.appendChild(closeButton);
  modal.appendChild(prevButton);
  modal.appendChild(modalImage);
  modal.appendChild(nextButton);

  document.body.appendChild(modal);


  //. ESTADO 
  let currentIndex = 0;

  //. FUNCIÓN PARA ABRIR EL MODAL 

  const openModal = (index) => {
    currentIndex = index;
    modalImage.src = imageUrls[currentIndex];
    modal.classList.remove("hidden");
  };


  //. FUNCIÓN PARA CERRAR EL MODAL 

  const closeModal = () => {
    modal.classList.add("hidden");
  };


    //. FUNCIÓN PARA IMG ANTERIOR 

  const showPrevImage = () => {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    modalImage.src = imageUrls[currentIndex];
  };


    //. FUNCIÓN PARA SIGUIENTE IMG  

  const showNextImage = () => {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    modalImage.src = imageUrls[currentIndex];
  };


  //. MINIATURAS 

  imageUrls.forEach((url, index) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = url;
    thumbnail.classList.add("thumbnail");
    thumbnail.addEventListener("click", () => openModal(index));
    galleryContainer.appendChild(thumbnail);
  });

  
  
  closeButton.addEventListener("click", closeModal);
  prevButton.addEventListener("click", showPrevImage);
  nextButton.addEventListener("click", showNextImage);

 

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  return galleryContainer;
};

export default createGallery;
