import { styled } from "styled-components";
import footer from "../imgs/footer.png";

import Hero from "./Hero";
import Carousel from "./Carousel";


const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #cc6063;
`;
const Text = styled.div`
  color: #FCFF56;
  font-size: 10rem;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  margin: 0.8em 0 0.8em 0;
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
 
      <Hero />
      {/* <Text>
        WELCOME TO <br />
        MY ATELIER
      </Text> */}
      {/* <Carousel />
      <Flex>
        <FooterImg src={footer} />
      </Flex> */}
    </Container>
  );
};

export default Home;
