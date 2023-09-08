import logo from '../imgs/Logo.png'
import { styled } from 'styled-components';

const Container = styled.div`
z-index: 1;
display: flex;
justify-content: space-between;
position: fixed;
align-items: center;
width: 100%;

`
const Logo = styled.img`
width: 10em;
cursor: pointer;
`
const Flex = styled.div`
display: flex;
justify-content: space-between;
`
const NavText = styled.div`
color: yellow;
font-size: 5rem;
padding-left: 2em;
cursor: pointer;
&:hover{
    color: #55B0F1;
}
`
const NavBar = () => {
    return (
<Container>
<Logo src={logo}/>
<Flex>
<NavText>MY ATELIER</NavText>
<NavText>ABOUT</NavText>
</Flex>
</Container>
    )
    
}

export default NavBar;