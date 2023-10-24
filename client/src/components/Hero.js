import React from "react";
import {styled, keyframes} from 'styled-components';
import bags from "../imgs/bags.png";
import logo from '../imgs/logo_yellow.png';

const Container = styled.div`
display: flex;
text-align: left;
color: #e7e996;
font-style: bold;
font-size: 12rem;
@media screen and (max-width:1500px){
  font-size: 8rem;
}
`
const Flex = styled.div`
display: flex;
flex-direction: column;
`
const Image = styled.img`
height: 100vh;
@media screen and (max-width:1500px){
  height: 80vh;
}
`
const spinAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`
const Logo = styled.img`
height: 1em;
width: 1em;
margin-left: 0.4em;
animation: ${spinAnimation} 10s linear infinite;
`
const Text = styled.div`
  margin: 1.5em 0 0 0.5em;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
`

const Hero = () => {
    return(
    <Container>
      <Image src={bags}/>
      <Flex>
      
    <Text>ATELIER <br/>EMA<Logo src={logo}/></Text>
    </Flex>
    </Container>
    )
}

export default Hero;