import logo from '../imgs/Logo.png'
import { styled, keyframes} from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
z-index: 1;
display: flex;
justify-content: space-between;
position: fixed;
margin-top: 1em;
align-items: center;
width: 100%;
`
// Define a keyframes animation for the spinning effect
const spinAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;
const Logo = styled.img`
margin-left: 2em;
width: 7em;
cursor: pointer;
transition: transform 0.3s; 
  
  &:hover {
    animation: ${spinAnimation} 5s linear infinite; 
  }
`;
const Flex = styled.div`
display: flex;
justify-content: space-between;
`
const NavText = styled.div`
color: #e7e996;
text-align: center;
font-size: 2rem;
font-weight: bold;
margin: 0 2em 0 2em;
cursor: pointer;
background-color: #55B0F1;
width: 6em;

&:hover{
    color: #55B0F1;
    background-color: #FCFF56;
}
`
const NavLink = styled(Link)`
all:unset;
`
const NavBar = () => {
    return (
<Container>
<NavLink to="/"><Logo src={logo}/></NavLink>
<Flex>
<NavText><NavLink to="/blog">MY ATELIER</NavLink></NavText>
<NavLink to="/about"><NavText>ABOUT</NavText></NavLink>
</Flex>
</Container>
    )
    
}

export default NavBar;