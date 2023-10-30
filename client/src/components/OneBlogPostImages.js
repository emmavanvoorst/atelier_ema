import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import test from "../imgs/test.jpg";
import test_ from "../imgs/test1.jpg";
import test_two from "../imgs/test2.jpg";
import test_three from "../imgs/test3.jpg";
import test_four from "../imgs/test4.jpg";

import { PiArrowSquareLeftBold } from "react-icons/pi";
import OneBlogPost from "./OneBlogPost";

const Container = styled.div`
  background-color: #55b0f1;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.div`
display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow-x: auto; /* Enable horizontal scrolling */
  scroll-snap-type: x mandatory;
  cursor: grab;
`;
const Image = styled.img`
  height: 30em;
  padding-left: 1em;
  border-radius: 20%;
  scroll-snap-align: start;
`;
const ArrowIcon = styled(PiArrowSquareLeftBold)`
  cursor: pointer;
  transition: 200ms;
  &:hover {
    margin-right: 1em;
  }
`;
const OneBlogPostImages = () => {
    const [active, setActive] = useState(false);
    const sliderArray = [1,2,3,4,5,6,7]
    const [width, setWidth] = useState(0);
    const dragSlider = useRef()
  

  const handleClick = () => {
    setActive(true);
  };
  return (
    <>
      {active === false ? (
        <Container>
          <ArrowIcon size={100} color="#e7e996" onClick={handleClick} />
          <ImageContainer>
            <Image src={test} />
            <Image src={test} />
            <Image src={test} />
            <Image src={test} />
          </ImageContainer>
        </Container>
      ) : (
        <OneBlogPost />
      )}
    </>
  );
};

export default OneBlogPostImages;
