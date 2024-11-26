import { updateData } from "../helpers/updateData";

const defaultData = [
    {
        id: 0,  
        question: "¿Cuál es tu lenguaje favorito?",
        answers: [
            {
                answer : "javascript",
                value : 0,
            },
            {
                answer : "python",
                value : 0,
            },
            {
                answer : "java",
                value : 0,
            },
        ]
    },
    {
        id: 1,  
        question: "¿Cuál es tu IDE favorito?",
        answers: [
            {
                answer : "Visual Studio Code",
                value : 0,
            },
            {
                answer : "IntelliJ",
                value : 0,
            },
            {
                answer : "NetBeans",
                value : 0,
            },
        ]
    },
];


//. SIMULAR UNA LECTURA DE ARCHIVO data.js 

// Verifica si hay datos almacenados en localStorage
const storedData = localStorage.getItem('surveyData');

// Si no existen datos en localStorage, guarda los datos predeterminados
export const data = storedData
    ? JSON.parse(storedData) 
    : (localStorage.setItem('surveyData', JSON.stringify(defaultData)), defaultData);
