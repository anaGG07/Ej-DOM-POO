//. ---------- IMPORTACIONES ----------- 

import survey from "./components/survey/survey.js";
import { data } from "./data/data.js"


//. CONSTRUIR LA ENCUESTA 

document.addEventListener("DOMContentLoaded", () =>{
    const app = document.getElementById("app");

    const loadSurvey = survey(data);
    app.appendChild(loadSurvey);
})