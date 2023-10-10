import {styled, keyframes} from 'styled-components';

import test from "../imgs/test.jpg";
import test_ from "../imgs/test1.jpg";
import test_two from "../imgs/test2.jpg";
import test_three from "../imgs/test3.jpg";
import test_four from "../imgs/test4.jpg";

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;
const Container = styled.div`
display: flex;
flex-direction: row;
animation: ${scrollAnimation} 90s linear infinite;
overflow-x: auto;
`
const Image = styled.img`
max-height: 90vh;
margin-right: 1em;
`

const OneBlogPost = () => {
return(
<Container> 
<Image src={test}/>
<Image src={test_}/>
<Image src={test_two}/>
<Image src={test_three}/>
<Image src={test_four}/>
</Container> 
   
)
}

export default OneBlogPost;