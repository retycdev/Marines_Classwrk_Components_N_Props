import React, { useState } from "react";
import styled from "styled-components";

const Btn = styled.button`
  height: 40px;
  padding: 0 24px;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${({ $bg_color }) => ($bg_color ? "purple" : "black")};

  color: white;
`;

const Button = ({ text }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <Btn
        $bg_color={isClicked}
        onClick={() => {
          setIsClicked((prev) => !prev);
        }}
      >
        {isClicked ? "Liked This" : text}
      </Btn>
    </div>
  );
};

export default Button;
