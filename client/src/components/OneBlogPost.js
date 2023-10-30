import { styled } from "styled-components";
import { useState } from "react";

import OneBlogPostImages from "./OneBlogPostImages";

import { PiArrowSquareRightBold } from 'react-icons/pi';


const Container = styled.div`
  height: 100vh;
  background-color: #55b0f1;
`;
const TitleFlex = styled.div`
padding-top: 6em;
display: flex;
align-items: center;
`
const Title = styled.div`
padding-left : 0.1em;
  font-size: 10rem;
  color: #e7e996;
  font-weight: bold;
  font-family: "Lato", sans-serif;
  
`;
const Image = styled.img`
  height: 40em;
  width: auto;
  border: solid 1em #e7e996;
  border-radius: 20%;
`;
const Paragraph = styled.div`
  width: 80vw;
  margin: 0.4em 1em 1em 1em;
  font-size: 2rem;
  color: #e7e996;
  font-weight: bold;
  font-family: "Lato", sans-serif;
`;
const ArrowIcon = styled(PiArrowSquareRightBold)`
cursor: pointer;
transition: 200ms;
&:hover{
  margin-left: 1em;
}
`
const OneBlogPost = () => {
  const [active, setActive] = useState(false);
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

const handleClick = () => {
  setActive(true)
}

  return (
    <>
    {active === false ?(
      <Container>
        <TitleFlex>
          <div>
          <Title>
            BAKLAVA
            <br /> BALACLAVA
          </Title>
        

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph></div>
        <ArrowIcon size={100} color="#e7e996" onClick={handleClick}/>
        </TitleFlex>
        
      </Container>
      ) :(
        <OneBlogPostImages />
      )
      }
    </>
  );
};

export default OneBlogPost;
