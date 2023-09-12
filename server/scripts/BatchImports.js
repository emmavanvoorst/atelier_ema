const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const DB_NAME = "atelierema";
const fs = require("fs");

const blogPost = fs.readFileSync("./data/blogPost.json", "utf8");

const blogs = JSON.parse(blogPost);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    console.log("Connecting to the client");
    await client.connect();
    console.log("Connected");

    const db = client.db(DB_NAME);
    console.log("Inserting data");
    const blogArray = Object.keys(blogs).map((blog) => ({
      title: blogs[blog].title,
      text: blogs[blog].text,
    }));
    await db.collection("blogPost").insertMany(blogArray);

    console.log("Data insertion successful");
  } catch (err) {
    console.error(err.message);
  } finally {
    client.close();
  }
};

batchImport();
