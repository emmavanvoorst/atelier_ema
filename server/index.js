"use strict";

const express = require("express");
const morgan = require("morgan");

const {getBlogPosts} = require("./handlers/getBlogPosts");
const {getOneBlog} = require("./handlers/getOneBlog")

const PORT = process.env.PORT || 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  //REST endpoints

  //get all blog posts
  .get("/api/get-blogposts", getBlogPosts)
  //get one blog post\
  .get("/api/blog/:blogId", getOneBlog)

.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});