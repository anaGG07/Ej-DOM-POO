//. EJERCICIO 1 

import { Tarea, TareaClass } from "./helpers/Ejercicio1";

//' ---- Funciones constructoras ---- 

const tarea1 = new Tarea("Aprender JavaScript");
const tarea2 = new Tarea("Aprender React");

tarea1.info();
tarea1.toggleCompletada();
tarea1.info();
tarea2.info();



//' ---- Clases ---- 


const tarea1Clases = new TareaClass("Aprender JavaScript Clase");
const tarea2Clases = new TareaClass("Aprender React Clase");

tarea1Clases.info();
tarea1Clases.toggleCompletada();
tarea1Clases.info();
tarea2Clases.info();