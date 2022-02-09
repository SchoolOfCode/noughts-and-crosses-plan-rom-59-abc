import styled from "styled-components";

export const Button = styled.button`
  height: 195px;
  width: 195px;
  margin: auto;
  background-color: #e1e1e1;
  border: none;
  font-size: 150px;
  ${(props) => {
    if (props.color === "X") {
      return `color: #f5426c;`;
    } else {
      return `color:#b3d943;`;
    }
  }}

  &:hover {
    background-color: #c1c1c1;
  }
  }
`;
