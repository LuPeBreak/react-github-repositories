import React from "react";
import { ItemContainer } from "./styles";
import { FaGithub, FaTrash } from "react-icons/fa";

function ItemRepo({ repo, handleRemoveRepo }) {
  return (
    <ItemContainer>
      <div>
        <img src={repo.owner.avatar_url} width={72} alt="" />
      </div>
      <div>
        <h3> {repo.name} </h3>
        <p> {repo.full_name} </p>
      </div>
      <div className="links">
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          <FaGithub size={24} />
        </a>
        <br />
        <button
          onClick={() => handleRemoveRepo(repo.id)}
          href="#"
          className="remover"
        >
          <FaTrash size={24} />
        </button>
      </div>
    </ItemContainer>
  );
}

export default ItemRepo;
