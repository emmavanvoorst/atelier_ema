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
  // const [blogs, setBlogs] = useState([]);
  // console.log({ blogs });

  // useEffect(() => {
  //   fetch("/api/get-blogposts", {
  //     method: "GET",
  //     headers: {
  //       "Cache-Control": "no-cache",
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json(); // Parse the response as JSON
  //     })
  //     .then((blogPosts) => {
  //       setBlogs(blogPosts.blogs);
  //       console.log(blogPosts);
  //     })
  //     .catch((error) => {
  //       // Handle any errors that occurred during the fetch
  //       console.error("Fetch error:", error);
  //     });
  // }, []);

return(
<>
<Container> 
<Image src={test}/>
<Image src={test_}/>
<Image src={test_two}/>
<Image src={test_three}/>
<Image src={test_four}/>
</Container>
<p>
  
  </p> 
   </>
)
}

export default OneBlogPost;