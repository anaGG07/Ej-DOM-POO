import createCrhonometer from "../chronometer/chronometer.js";
import "./chronometer.css";


const createCronometroView = () => {
  // Crear contenedor principal
  const container = document.createElement("div");
  container.id = "cronometroContainer";

  // Crear elementos del cronómetro
  const timeDisplay = document.createElement("div");
  timeDisplay.id = "timeDisplay";
  timeDisplay.textContent = "00:00";

  const startButton = document.createElement("button");
  startButton.textContent = "Iniciar";

  const pauseButton = document.createElement("button");
  pauseButton.textContent = "Pausar";

  const resetButton = document.createElement("button");
  resetButton.textContent = "Reiniciar";

  // Agregar elementos al contenedor
  container.appendChild(timeDisplay);
  container.appendChild(startButton);
  container.appendChild(pauseButton);
  container.appendChild(resetButton);

  // Inicializar lógica del cronómetro
  const cronometro = createCrhonometer((time) => {
    timeDisplay.textContent = time;
  });

  // Asignar eventos a los botones
  startButton.addEventListener("click", cronometro.start);
  pauseButton.addEventListener("click", cronometro.pause);
  resetButton.addEventListener("click", cronometro.reset);

  return container;
};

export default createCronometroView;
