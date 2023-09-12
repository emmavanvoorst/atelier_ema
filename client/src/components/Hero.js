import React from "react";
import {styled} from 'styled-components';

const Container = styled.div`
position: relative;
padding-top: 0.5em;
text-align: left;
color: #FCFF56;
font-style: bold;
font-size: 12rem;
`
const Image = styled.img`

`
const Text = styled.div`
  bottom: 50px;
  right: 40px;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
`

const Hero = () => {
    return(
    <Container>
    <Text>ATELIER EMA</Text>
    </Container>
    )
}

export default Hero;