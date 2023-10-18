const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
};
("use strict");

/**
 * getItem fetches a blog using the blogId set from the request
 *  parameter from MongoDB and returns in the response the blog.
 * @param request
 * @param response
 */

const getOneBlog = async (request, response) => {
  const client = new MongoClient(MONGO_URI, options);
  const blogId = request.params.blogId;

  console.log("request params", request.params);
  try {
    await client.connect();
    const db = client.db("atelierema");
    console.log("connected!");

    const result = await db
      .collection("blogPost")
      .findOne({ _id: ObjectId(blogId) });
    result
      ? response
          .status(200)
          .json({ status: 200, data: result, message: "One blog found" })
      : response.status(404).json({ status: 404, message: "Not Found" });
  } catch (error) {
    response.status(500).json({
      status: 500,
      message: "Server error",
    });
  } finally {
    client.close();
    console.log("disconnected!");
  }
};

module.exports = { getOneBlog };
