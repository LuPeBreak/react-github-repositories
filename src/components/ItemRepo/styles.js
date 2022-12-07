import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;
  display: flex;

  padding: 20px;
  border: 2px solid #fafafa60;
  border-radius: 20px;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div.links {
    flex-direction: row;
  }

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 12px;
    color: #fafafa60;
  }

  a, button {
    text-decoration: none;
    padding: 0.7rem;
    background-color: #fafafa;
    margin: 0 5px;
    border-radius: 50%;
    cursor: pointer;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
      background-color: #fafafa60 ;
    }
  }

  button {
    color: #ff0000;
  }
`;
