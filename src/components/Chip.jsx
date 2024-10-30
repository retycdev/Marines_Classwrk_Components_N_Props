import React from "react";
import styled from "styled-components";

const Chip_Container = styled.div`
  height: 40px;
  padding: 0 12px;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 12px;
  background: transparent;
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  p {
    margin-right: 12px;
  }
`;

const Chip = ({ text }) => {
  return (
    <div>
      <Chip_Container>
        <p>{text}</p>
      </Chip_Container>
    </div>
  );
};

export default Chip;
