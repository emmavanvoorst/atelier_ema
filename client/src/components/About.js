import { styled } from "styled-components";
import logo from "../imgs/logo_yellow.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #cc6063;
  display: flex;
  justify-content: center;
  align-self: center;
`;
const Logo = styled.img`
  max-height: 30em;
  margin-top: 10em;
`;
const About = () => {
  return (
    <Container>

      <Logo src={logo} />
    </Container>
  );
};

export default About;
