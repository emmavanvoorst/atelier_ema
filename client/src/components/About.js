import { styled } from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: #cc6063;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  width: 70vw;
  color: #e7e996;
  font-size: 2rem;
`;

const About = () => {
  return (
    <Container>
      <Text>
        <p>
          Welcome to Atelier Ema, a haven of creativity, where our muse is bold
          colors, whimsical patterns and shape.{" "}
        </p>
        <p>
          {" "}
          Atelier Ema is a space for those who find joy in embracing the
          unconventional, turning fashion into a canvas for self-discovery and
          unabashed self-expression.
        </p>
      </Text>
    </Container>
  );
};

export default About;
