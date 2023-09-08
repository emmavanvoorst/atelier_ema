import Hero from "./Hero";
import { styled } from "styled-components";
import Carousel from "./Carousel";


const Container = styled.div`
width: 100vw;
height: 100%;
background-color: #CC6063;
`
const Text = styled.div`
color: yellow;
font-size: 25rem;
`
const Home = () => {
return (
<Container>
<Hero/>
<Text>MY ATELIER</Text>
<Carousel/>


</Container>
)
}

export default Home;