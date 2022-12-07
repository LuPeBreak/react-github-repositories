import React from "react";

import { ButtonContainer } from "./styles";

function Button({ handleSearchRepo }) {
  return <ButtonContainer onClick={handleSearchRepo}>Buscar</ButtonContainer>;
}

export default Button;
