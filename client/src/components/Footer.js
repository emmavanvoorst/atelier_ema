import { Link } from "react-router-dom";

import { styled } from "styled-components";


const Container = styled.div`
background-color: #cc6063;
width: 100%;
height: 5em;
font-family: "Lato", sans-serif;
`
const Text = styled.div`
font-weight: bold;
color: #FCFF56;
cursor: pointer;
&:hover{
    color: #55B0F1;
}
`
const StyledLink = styled(Link)`
all: unset;
`
const Footer = () => {
return(
    <Container>
    <StyledLink to="/login"><Text>ADMIN</Text></StyledLink>
    <Text>CONTACT ME</Text>
    </Container>
)
}

export default Footer;