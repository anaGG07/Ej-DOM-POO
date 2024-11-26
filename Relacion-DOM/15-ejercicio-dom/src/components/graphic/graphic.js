import './graphic.css'


const loadGraphic = (data, idQuestion) =>{

     // Eliminar canvas previo si existe
     const oldCanvas = document.getElementById("canvas");
     if (oldCanvas) {
         oldCanvas.remove();
     }

     //. OBTENER DATOS PARA LA GRÁFICA (answer, value)

     const question = data.find(({ id }) => id === idQuestion); 

     if (!question) {
         console.error("No existe la pregunta");
         return;
     }
 
     const answers = question.answers; 
     const labels = answers.map(({ answer }) => answer); 
     const values = answers.map(({ value }) => value);


    //. CONFIGURACIÓN DE LA GRÁFICA (CANVAS) 

    const canvas = document.createElement("canvas");
    canvas.id = "canvas";

    // Establecer contexto bidimensional
    const getContext = canvas.getContext("2d");

    // Dimensiones de las barras
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const barWidth = 40;
    const gap = 50;
    const maxValue = Math.max(...values);


    //. DIBUJAR LAS BARRAS 

    values.forEach((value, index) => {
        const barHeight = (value / maxValue) * (canvasHeight - 45);  // Escala el valor al tamaño del canvas
        const x = gap + index * (barWidth + gap);                   // Posición X de la barra
        const y = canvasHeight - barHeight - 20;                     // Posición Y de la barra

        // Dibujar la barra
        getContext.fillStyle = "#fce304";
        getContext.fillRect(x, y, barWidth, barHeight+10);

        // Dibujar el valor encima de la barra
        getContext.fillStyle = "black";
        getContext.font = "12px Arial";
        getContext.textAlign = "center";
        getContext.fillText(value, x + barWidth / 2, y - 5);

        // Dibujar la etiqueta        
        getContext.fillText(labels[index], x + barWidth / 2, canvasHeight - 10);
        
    });

    return canvas;
}

export default loadGraphic;