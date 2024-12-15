import createCommentList from "./components/commentList/commentList.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  // Lista inicial de comentarios
  const initialComments = [
    "Comentario 1",
    "Comentario 2",
    "Comentario 3",
  ];

  // Crear y agregar la lista de comentarios al DOM
  const commentList = createCommentList(initialComments);
  app.appendChild(commentList);
});
