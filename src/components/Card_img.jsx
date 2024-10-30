import React from "react";
import styled from "styled-components";

//styles

const Image_Container = styled.div`
  max-width: 345px;
  height: 197px;
  border-radius: 12px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

//component
const Card_img = ({ img_src }) => {
  return (
    <div>
      <Image_Container>
        <Image src={img_src} />
      </Image_Container>
    </div>
  );
};

export default Card_img;
