import React from "react";
import { useState } from "react";
import { styled } from "styled-components";
import pink from "../imgs/pink_balaclava.jpg";
import blue from "../imgs/blue_bag.jpg";
import couch from "../imgs/couch_balaclava.jpg";
import footer from "../imgs/footer.png"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Image = styled.img`
height: 80vh;
`
const WaitingImage = styled.img`
filter: blur(0.5rem);
`
const FooterImg = styled.img`
height: 90vh;
`
const Button = styled.button`
all: unset;
color: yellow;
cursor: pointer;
&:hover{
    color: #55B0F1;
}
margin: 5em;
`


const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [pink, blue, couch];
  
    const handleRightClick = () => {
      // Calculate the index of the next image
      const nextIndex = (currentImageIndex + 1) % images.length;
  
      // Update the current image index
      setCurrentImageIndex(nextIndex);
    };
    const handleLeftClick = () => {
        // Calculate the index of the next image
        const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    
        // Update the current image index
        setCurrentImageIndex(prevIndex);
      };
      const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
      const nextIndex = (currentImageIndex + 1) % images.length;
    return (
        <>
      <Container>
     
        <WaitingImage src={images[prevIndex]} alt={`Previous`} />
         <Button onClick={handleLeftClick}>
          <FaArrowAltCircleLeft size={100} />
        </Button>
        <Image src={images[currentImageIndex]} alt={`Current`} />
         <Button onClick={handleRightClick}>
          <FaArrowAltCircleRight size={100} />
        </Button>
        <WaitingImage src={images[nextIndex]} alt={`Next`} />
       
      </Container>
      <FooterImg src={footer}/>
      </>
    );
  };
  

export default Carousel;
