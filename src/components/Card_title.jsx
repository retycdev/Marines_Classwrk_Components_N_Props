import React from "react";
import styled from "styled-components";

const Title_Container = styled.div`
  height: 56px;
  padding: 12px;
  font-size: 22px;
  font-weight: 500;
`;

const Card_title = ({ text }) => {
  return (
    <div>
      <Title_Container>
        <h3>{text}</h3>
      </Title_Container>
    </div>
  );
};

export default Card_title;
