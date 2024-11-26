//. ---------- IMPORTACIONES -----------


import { updateData } from "../../helpers/updateData";
import loadGraphic from "../graphic/graphic";
import "./survey.css";

//. ---------- DECLARACIÓN DE FUNCIONES ----------

/**
 * @description Función que establece el nuevo valor a cada respuesta
 * @param {Array<Object>} data 
 * @param {Number} idQuestion 
 * @param {String} groupNameInputs 
 * @returns {Array<Object>} Data actualizada
 */
const setValueAnswers = (data, idQuestion, groupNameInputs) => {
    
    // Obtener el radioButton seleccionado
    const radioChecked = document.querySelector(`input[name="${groupNameInputs}"]:checked`);

    if (!radioChecked) {
        console.error("No se ha seleccionado nada");
        return;
    }

    // Buscar la pregunta seleccionada en la data
    const question = data.find(({ id }) => id === idQuestion);

    if (!question) {
        console.error("Pregunta no encontrada");
        return;
    }

    // Actualizar value de la respuesta seleccionada
    question.answers.forEach((answerObj) => {
        if (answerObj.answer === radioChecked.value) {
            answerObj.value += 1;
        }
    });

    updateData(data);
    return data;
};



/**
 * @description Función para crear un cuestionario dinámico
 * @param { Array<String> } questions
 * @param { Array<String> } answers
 * @returns { HTMLFormElement }
 */
const survey = (data) => {
    const form = document.createElement("form");
    form.id = "formQyA";

    //. RECORRER DATA
    data.forEach(({ id, question, answers }, index) => {
        // Crear contenedor para preguntas y respuestas
        const divQyA = document.createElement("div");
        divQyA.id = `divQA${index}`
        divQyA.className = "divQA"

        // Crear preguntas
        const pQuestion = document.createElement("p");
        pQuestion.id = `pQuest${index}`;
        pQuestion.textContent = `${question}`;

        // Añadir la pregunta al div
        divQyA.appendChild(pQuestion);

        // Inicializar variable "groupNameInput" para pasarla como parametro a la función "setValueAnswers()"
        let groupNameInput = `group${index}`;

        //. RECORRER RESPUESTAS
        answers.forEach(({ answer }, indexAns) => {
            
            // Crear contenedor para input y label
            const labelInputContainer = document.createElement("div");
            labelInputContainer.className = "labelInput";

            // Crear input
            const inputAnswers = document.createElement("input");
            inputAnswers.id = `inputAnswer${index}-${indexAns}`; // ID único
            inputAnswers.className = "inputAnswer";
            inputAnswers.setAttribute("type", "radio");
            inputAnswers.setAttribute("name", groupNameInput);
            inputAnswers.setAttribute("value", answer);

            // Crear label
            const labelInput = document.createElement("label");
            labelInput.setAttribute("for", inputAnswers.id); // Vincula label con input
            labelInput.textContent = answer;

            // Añadir input y label al contenedor
            labelInputContainer.appendChild(inputAnswers);
            labelInputContainer.appendChild(labelInput);

            // Añadir contenedor al div principal
            divQyA.appendChild(labelInputContainer);
        });

        // Crear boton para enviar formulario
        const button = document.createElement("button");
        button.id = "formButton"
        button.setAttribute("type", "button");
        button.textContent = "Enviar";


        //Añadir el botón al formulario
        divQyA.appendChild(button);

        button.addEventListener("click", () => {
            setValueAnswers(data, id, groupNameInput);
            const graphic = loadGraphic(data, id);
            divQyA.appendChild(graphic);
        });

        // Añadir al formulario las cajas con Q&A
        form.appendChild(divQyA);
    });


    
  return form;
};

export default survey;
