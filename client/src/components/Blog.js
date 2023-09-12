import { styled, keyframes } from "styled-components";
import React, { useEffect, useState } from "react";
import BlogNavBar from "./BlogNavBar";
import logo from "../imgs/logo_yellow.png";
import blogimg from "../imgs/blog-img.jpg";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #e7e996;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 90vw;
  margin-bottom: 1em;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #55b0f1;
  margin-bottom: 1em;
  border-radius: 0.5em;
  height: 15em;
  width: 100vw;
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
const Image = styled.img`
  height: 30em;
  margin: 2em;
`;
const Title = styled.div`
  color: #e7e996;
  font-family: "Lato", sans-serif;
  font-size: 16rem;
  font-weight: bold;
  padding-left: 0.1em;
`;
const Blue = styled.div`
  width: 100vw;
  height: 2em;
  background-color: #55b0f1;
  left: 1em;
  border-radius: 1em;
`;
const BlogPosts = styled.div`
  background-color: #55b0f1;
  width: 100vw;
  border-radius: 1em;
  margin-top: 1em;
`;

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
console.log({blogs})

  useEffect(() => {
  fetch("/api/get-blogposts",{
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
      setBlogs(blogPosts)
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
        <BlogNavBar />
        <TitleContainer>
          <Title>THE</Title> <Logo src={logo} />
          <Title>ATELIER</Title>
        </TitleContainer>
        <Blue />
        <BlogPosts>
        {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div key={index}>
                <div>{blog.title}</div> <div>{blog.text}</div>
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
