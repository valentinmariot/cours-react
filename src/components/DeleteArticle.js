import React from "react";
import axios from "axios";

const DeleteArticle = ({ id }) => {
  const handleDelete = () => {
    axios.delete("http://localhost:3003/articles/" + id);
    window.location.reload();
  };

  return (
    <button
      onClick={() => {
        if (window.confirm("Confirmer la suppression de l'article ?")) {
          handleDelete();
        }
      }}
    >
      Supprimer
    </button>
  );
};

export default DeleteArticle;
