import { styled } from "styled-components";
import footer from "../imgs/footer.png";

import Hero from "./Hero";
import Carousel from "./Carousel";
import NavBar from "./NavBar";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #cc6063;
`;
const Text = styled.div`
  color: yellow;
  font-size: 15rem;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  /* margin: 0.5em 0 0.8em 0; */
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FooterImg = styled.img`
  height: 90vh;
`;

const Home = () => {
  return (
    <Container>
      <NavBar />
      <Hero />
      <Text>
        WELCOME TO <br />
        MY ATELIER
      </Text>
      <Carousel />
      <Flex>
        <FooterImg src={footer} />
      </Flex>
    </Container>
  );
};

export default Home;
