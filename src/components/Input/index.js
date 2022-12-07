import React from "react";

import { InputContainer } from "./styles";

function Input({ currentRepo, setCurrentRepo }) {
  return (
    <InputContainer>
      <input
        value={currentRepo}
        onChange={(event) => {
          setCurrentRepo(event.target.value);
        }}
        type="text"
      />
    </InputContainer>
  );
}

export default Input;
