import React from "react";
import { Link } from "react-router-dom";
import { styled, keyframes } from "styled-components";
import bags from "../imgs/bags.png";
import logo from "../imgs/logo_yellow.png";

const Container = styled.div`
  display: flex;
  text-align: left;
  color: #e7e996;
  font-style: bold;
  font-size: 10rem;
  @media screen and (max-width: 1500px) {
    font-size: 7rem;
  }
`;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  object-fit: cover;
  height: 100vh;
  @media screen and (max-width: 1500px) {
    height: 100vh;
    width: 40vw;
  }
`;
const spinAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;
const Logo = styled.img`
  height: 1em;
  width: 1em;
  margin-left: 0.4em;
  animation: ${spinAnimation} 10s linear infinite;
`;
const Text = styled.div`
  margin: 1em 0 0 0.5em;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  @media screen and (max-width: 1500px) {
    margin: 2em 0 0 0.5em;
  }
`;
const DefContainer = styled.div`
  margin: 0 1em 0.1em 0.5em;
`;
const Word = styled.div`
  font-size: 3rem;
`;
const Pronounciation = styled.div`
  font-size: 1.5rem;
`;
const TypeofWord = styled.div`
  font-size: 1rem;
`;
const Definition = styled.div`
  font-size: 2rem;
`;
const Button = styled(Link)`
  all: unset;
  cursor: pointer;
  margin: 1em 2.7em;
  font-size: 2rem;
  font-weight: bold;
  border: solid 1.5px #e7e996;
  padding: 0.5em;
  transition: 200ms;
  &:hover {
    color: #cc6063;
    background-color: #e7e996;
  }
  @media screen and (max-width: 1500px) {
    margin: 1em 1.7em;
  }
`;
const Hero = () => {
  return (
    <Container>
      <Image src={bags} />
      <Flex>
        <Text>
          ATELIER <br />
          EMA
          <Logo src={logo} />
        </Text>
        <DefContainer>
          {" "}
          <Word>at·el·ier</Word>
          <Pronounciation>/ˌadlˈyā,əˈtelˌyā/</Pronounciation>
          <TypeofWord>noun</TypeofWord>
          <Definition>
            a workshop or studio, especially one used by an artist or designer.
          </Definition>
        </DefContainer>
        <Button to="/blog">Check out the Atelier</Button>
      </Flex>
    </Container>
  );
};

export default Hero;
