import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
display: flex;
  position: sticky;
  top: 0.5em;
  left: 0.5em;
  margin-bottom: 1em;
  background-color: #55b0f1;
  border-radius: 0.5em;
  border: 4px #e7e996 solid;
  font-family: "Lato", sans-serif;
  height: 3.5em;
  width: 100vw;
  font-weight: bold;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavText = styled.div`
  color: #e7e996;
  font-size: 1.5rem;
  padding-left: 2em;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    transform: scale(1.1);
  }
`;
const NavLink = styled(Link)`
  all: unset;
`;
const BlogNavBar = () => {
  return (
    <Container>
      <Flex>
        <div>
          <NavLink to="/">
            <NavText>ATELIER EMA</NavText>
          </NavLink>
        </div>

        <Flex>
          <NavText>
            <NavLink to="/blog">MY ATELIER</NavLink>
          </NavText>
          <NavLink to="/about"><NavText>ABOUT</NavText></NavLink>
        </Flex>
      </Flex>
    </Container>
  );
};

export default BlogNavBar;
