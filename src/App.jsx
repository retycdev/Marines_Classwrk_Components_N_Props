import React from "react";
import Full_Card from "./components/Full_Card";
import styled from "styled-components";
import Chip from "./components/Chip";
import artists from "./assets/artists";

const App_Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  gap: 16px;
  padding: 48px 64px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 48px 12px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 48px 32px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 48px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const App = () => {
  return (
    <div>
      <h2>Who's your favorite ?</h2>
      <App_Wrapper>
        {artists.map((artist, idx) => {
          return (
            <Full_Card
              key={idx}
              img={artist.image}
              title={artist.name}
              content={artist.albums.map((album, albumIdx) => (
                <Chip key={albumIdx} text={album} />
              ))}
            />
          );
        })}
      </App_Wrapper>
    </div>
  );
};

export default App;
