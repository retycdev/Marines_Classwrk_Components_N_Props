import React from "react";
import styled from "styled-components";
import Card_img from "./Card_img";
import Card_title from "./Card_title";
import Card_content from "./Card_content";
import Button from "./Button";

const Card_Container = styled.div`
  width: auto;
  height: auto;
  border: 2px solid black;
  border-radius: 8px;
  padding: 8px 12px;
`;

const Full_Card = ({ img, title, content }) => {
  return (
    <div>
      <Card_Container>
        <Card_img img_src={img} />
        <Card_title text={title} />
        <Card_content content={content} />
        <Button text={"Like"} />
      </Card_Container>
    </div>
  );
};

export default Full_Card;
