import { styled } from "styled-components";
import footer from "../imgs/footer.png";

import Hero from "./Hero";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #cc6063;
`;
const Text = styled.div`
  font-size: 10rem;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  margin: 0.8em 0 0.8em 0;
`;



const Home = () => {
  return (
    <Container>
 
      <Hero />
      <Text>
        

      </Text>
    </Container>
  );
};

export default Home;
