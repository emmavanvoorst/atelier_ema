import React from "react";
import heroimg from '../imgs/peach.jpg'
import {styled} from 'styled-components';

const Container = styled.div`
position: relative;
text-align: left;
color: yellow;
font-style: bold;
font-size: 10rem;
`
const Image = styled.img`
object-fit: cover;
width: 100vw;
height: 70vh;
`
const Text = styled.div`
position: absolute;
  bottom: 50px;
  right: 40px;


`

const Hero = () => {
    return(
    <Container>
    <Image src={heroimg}/>
    <Text>ATELIER EMA</Text>
    </Container>
    )
}

export default Hero;