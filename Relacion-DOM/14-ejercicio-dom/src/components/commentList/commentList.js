import "./commentList.css";


const createCommentList = (initialComments) => {

  //. CONTENEDOR PRINCIPAL 
  const container = document.createElement("div");
  container.id = "commentContainer";


  //. CREAR COMENTARIOS 
  const createComment = (text) => {


    //. CONTENEDOR DE COMENTARIOS 
    const comment = document.createElement("div");
    comment.className = "comment";

    const commentText = document.createElement("p");
    commentText.textContent = text;
    commentText.className = "commentText";


    //. BTN RESPONDER 
    const replyButton = document.createElement("button");
    replyButton.textContent = "Responder";
    replyButton.className = "replyButton";


    //. BTN ELIMINAR 
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.className = "deleteButton";


    //. CONTENEDOR DE RESPUESTAS 
    const replyContainer = document.createElement("div");
    replyContainer.className = "replyContainer";



    //. EVENTO PARA RESPONDER 
    replyButton.addEventListener("click", () => {
    
      if (!replyContainer.hasChildNodes()) {

        const replyInput = document.createElement("input");
        replyInput.type = "text";
        replyInput.placeholder = "Escribe tu respuesta";
        replyInput.className = "replyInput";

        const saveReplyButton = document.createElement("button");
        saveReplyButton.textContent = "Guardar Respuesta";
        saveReplyButton.className = "saveReplyButton";


        //. EVENTO PARA GUARDAR LA RESPUESTA 

        saveReplyButton.addEventListener("click", () => {
          const replyText = replyInput.value.trim();

          if (replyText) {
            const reply = document.createElement("p");
            reply.textContent = replyText;
            reply.className = "replyText";


            //. BTN PARA ELIMINAR RESPUESTAS 

            const deleteReplyButton = document.createElement("button");
            deleteReplyButton.textContent = "Eliminar Respuesta";
            deleteReplyButton.className = "deleteButton";

            deleteReplyButton.addEventListener("click", () => {
              replyContainer.innerHTML = "";
            });

            replyContainer.innerHTML = ""; 
            replyContainer.appendChild(reply);
            replyContainer.appendChild(deleteReplyButton);
          }
        });

        replyContainer.appendChild(replyInput);
        replyContainer.appendChild(saveReplyButton);
      }
    });

   
    deleteButton.addEventListener("click", () => {
      comment.remove();
    });


    comment.appendChild(commentText);
    comment.appendChild(replyButton);
    comment.appendChild(deleteButton);
    comment.appendChild(replyContainer);

    return comment;
  };


  initialComments.forEach((text) => {
    const comment = createComment(text);
    container.appendChild(comment);
  });

  return container;
};

export default createCommentList;
