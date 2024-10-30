import React from "react";
import styled from "styled-components";
import Chip from "./Chip";

const Content_Container = styled.div`
  margin: 12px 0;
  padding: 0 12px;
  gap: 8px;

  h4 {
    font-weight: 500;
    margin-bottom: 12px;
  }
`;

const Card_content = ({ content }) => {
  return (
    <div>
      <Content_Container>
        <h4>Albums:</h4>
        {content}
      </Content_Container>
    </div>
  );
};

export default Card_content;
