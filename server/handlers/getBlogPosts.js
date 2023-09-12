const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const DB_NAME = "atelierema";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const getBlogPosts = async (req, res) => {
const client = new MongoClient(MONGO_URI, options);

try {
    await client.connect();
    const db = client.db(DB_NAME);
    const blogPostCollection = db.collection("blogPost");

    console.log("Retrieving blog posts...");

    const blogs = await blogPostCollection.find().toArray();

    res.status(200).json({ status: 200, blogs}) 
} catch (error) {
        console.error("An error occurred while retrieving blogs:", error);
        res.status(500).json({ status: 500, message: "Internal server error" });
      } finally {
        client.close();
      }
    };
    
    module.exports = { getBlogPosts };
    