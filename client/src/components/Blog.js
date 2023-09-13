import { styled, keyframes } from "styled-components";
import React, { useEffect, useState } from "react";
import logo from "../imgs/logo_yellow.png";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 3.5em;
  background-color: #e7e996;
`;
const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-content: center;
  padding: 1em;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #55b0f1;
  margin-bottom: 1em;
  border-radius: 0.5em;
  height: 15em;
`;
const spinAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;
const Logo = styled.img`
  width: 12em;
  height: 12em;
  margin-left: 1em;
  animation: ${spinAnimation} 10s linear infinite;
`;

const Title = styled.div`
  color: #e7e996;
  font-family: "Lato", sans-serif;
  font-size: 16rem;
  font-weight: bold;
  padding-left: 0.1em;
`;
const Blue = styled.div`
  height: 2em;
  background-color: #55b0f1;
  left: 1em;
  border-radius: 1em;
`;
const BlogPosts = styled.div`
  display: flex;
  justify-content: center;
  background-color: #55b0f1;
  border-radius: 1em;
  margin-top: 1em;
  flex-wrap: wrap;
  min-height: 100vh;
`;
const OneBlog = styled.div`
  display: flex;

  width: 40em;
  margin: 4em 0 4em 4em;
`;
const Image = styled.img`
  height: 30em;
`;
const Subtitle = styled.div`
  color: #e7e996;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 3rem;
`;
const Text = styled.div`
  color: #e7e996;
  font-family: "Lato", sans-serif;
`;

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  console.log({ blogs });

  useEffect(() => {
    fetch("/api/get-blogposts", {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((blogPosts) => {
        setBlogs(blogPosts.blogs);
        console.log(blogPosts);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <Title>THE</Title> <Logo src={logo} />
          <Title>ATELIER</Title>
        </TitleContainer>
        <Blue />
        <BlogPosts>
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div key={index}>
                <OneBlog>
                  <Image src={`data:image/png;base64, ${blog.image}`} />
                  <Subtitle>{blog.title}</Subtitle>
                </OneBlog>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </BlogPosts>
      </Container>
    </Wrapper>
  );
};

export default Blog;
