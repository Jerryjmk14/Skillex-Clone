import React from "react";
import { Stack, Container, Box, Typography } from "@mui/material";
import { headerText, heroText, heroImages } from "../constants/data";
import styled from "styled-components";

export default function Hero() {
  return (
    <div>
      <HeroContainer>
        <HeroText>
          {headerText.map((text) => (
            <Container key={text}>
              <h1>{text}</h1>
            </Container>
          ))}
        </HeroText>

        <HeroImages direction="row" spacing={3}>
          {heroImages.map((data) => {
            return (
              <div key={data.id}>
                <Image src={data.image} alt="image" />
              </div>
            );
          })}
        </HeroImages>
      </HeroContainer>
      <Typography
        variant="h3"
        sx={{ color: "black", textAlign: "center", wordSpacing: "8px" }}>
        Unlimited access to 1000+ instructors
      </Typography>

      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
          listStyle: "none",
          my: "20px",
        }}>
        {heroText.map((texts) => (
          <li key={texts}>
            <a href="#" style={{ color: "black" }}>
              {texts}
            </a>
          </li>
        ))}
      </Container>
    </div>
  );
}

const HeroContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 95%;
  margin: 2rem auto;
  padding: 20px 0;
`;

const HeroText = styled(Box)`
  font-size: 2rem;
  line-height: 1.5rem;
  text-align: left;
`;

const HeroImages = styled(Stack)`
  width: 100%;
`;

const Image = styled.img`
  height: 65vh;
  width: 100vh;
  border-radius: 5px;
`;
