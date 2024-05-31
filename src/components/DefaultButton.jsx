import React from "react";
import styled from "styled-components";

export default function DefaultButton({ children, type }) {
  let CurrentButton;
  if (type === "fill") {
    CurrentButton = FillButton;
  } else if (type === "search") {
    CurrentButton = SearchButton;
  } else {
    CurrentButton = BaseButton;
  }

  return <CurrentButton>{children}</CurrentButton>;
}

const BaseButton = styled.button`
  padding: 3px 30px;
  background-color: transparent;
  border-radius: 8px;
  border: none;
  &:hover {
    background-color: #cae2f7;
    cursor: pointer;
  }
`;

const FillButton = styled(BaseButton)`
  background-color: black;
  color: white;
  border-radius: 25px;
  &:hover {
    background-color: #5e5c5c;
    cursor: pointer;
  }
`;

const SearchButton = styled(BaseButton)`
  background-color: lightgreen;
  padding: 15px;
  border-radius: none;
  &:hover {
    background-color: #d88e8e;
    cursor: pointer;
  }
`;
