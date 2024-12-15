import "./geolocation.css";

// Crear el componente de geolocalización
const createGeolocationComponent = () => {

  //. CONTENEDOR PRINCIPAL
  const container = document.createElement("div");
  container.id = "geolocationContainer";


  const locationDisplay = document.createElement("p");
  locationDisplay.id = "locationDisplay";
  locationDisplay.textContent = "Ubicación no disponible";



  //. BOTÓN PARA OBTENER LA LOCALIZACIÓN

  const button = document.createElement("button");
  button.id = "getLocationButton";
  button.textContent = "Obtener Ubicación";


  
  //. FUNCIÓN PARA ERRORES 

  const handleError = (error) => {
    let errorMessage = "";
    switch (error.code) {
      case error.PERMISSION_DENIED:
        errorMessage = "Permiso denegado para obtener la ubicación.";
        break;
      case error.POSITION_UNAVAILABLE:
        errorMessage = "Ubicación no disponible.";
        break;
      case error.TIMEOUT:
        errorMessage = "El tiempo para obtener la ubicación se agotó.";
        break;
      default:
        errorMessage = "Ocurrió un error desconocido.";
    }
    locationDisplay.textContent = errorMessage;
  };



  //. FUNCIÓN PARA OBTENER LA POSICIÓN DEL USUARIO 

  const updateLocation = () => {
    if (!navigator.geolocation) {
      locationDisplay.textContent = "La geolocalización no está disponible";
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        locationDisplay.textContent = `Latitud: ${latitude}, Longitud: ${longitude}`;
      },
      handleError
    );
  };


  button.addEventListener("click", updateLocation);

  container.appendChild(locationDisplay);
  container.appendChild(button);


  return container;
};

export default createGeolocationComponent;
