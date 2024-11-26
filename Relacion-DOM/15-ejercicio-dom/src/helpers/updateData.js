import { data } from "../data/data.js";

export const updateData = (newData) => {
    localStorage.setItem('surveyData', JSON.stringify(newData));
};


