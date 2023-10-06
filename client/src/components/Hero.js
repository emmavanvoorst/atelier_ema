import React from "react";
import {styled, keyframes} from 'styled-components';
import pink from "../imgs/pink_balaclava.jpg";
import logo from '../imgs/Logo.png'

const Container = styled.div`
display: flex;
position: relative;
text-align: left;
color: #FCFF56;
font-style: bold;
font-size: 12rem;
`
const Flex = styled.div`
display: flex;
flex-direction: column;
`
const Image = styled.img`
height: 100vh;
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
      <Image src={pink}/>
      <Flex>
      
    <Text>ATELIER <br/>EMA<Logo src={logo}/></Text>
    </Flex>
    </Container>
    )
}

export default Hero;