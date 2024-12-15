
const createCrhonometer = (updateTime) => {
    let time = 0; 
    let intervalId = null;
  
    // Formatea el tiempo como mm:ss
    const formatTime = () => {
      const minutes = Math.floor(time / 60).toString().padStart(2, "0");
      const seconds = (time % 60).toString().padStart(2, "0");
      return `${minutes}:${seconds}`;
    };
  
    // Inicia el cronómetro
    const start = () => {
      if (intervalId) return;
      intervalId = setInterval(() => {
        time++;
        updateTime(formatTime());
      }, 1000);
    };
  
    // Pausa el cronómetro
    const pause = () => {
      clearInterval(intervalId);
      intervalId = null;
    };
  
    // Reinicia el cronómetro
    const reset = () => {
      pause();
      time = 0;
      updateTime(formatTime());
    };
  
    return { start, pause, reset };
  };
  
  export default createCrhonometer;
  