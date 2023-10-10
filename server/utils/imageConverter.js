const fs = require("fs");
require("dotenv").config();
const { MongoClient, ObjectId } = require("mongodb");
const { MONGO_URI } = process.env;

const DB_NAME = "atelierema";
const imagePaths = ["./imgs/bags.png"];

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const updateObjectsWithImages = async () => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    console.log("Connecting to the client");
    await client.connect();
    console.log("Connected");

    const db = client.db(DB_NAME);
    const collection = db.collection("blogPost");

    for (let image = 0; image < imagePaths.length; image++) {
      const imagePath = imagePaths[image];
      const imageBase64 = fs.readFileSync(imagePath, "base64");

      const objectIdToUpdate = new ObjectId('650090b75d755bb33616a277');
      const updateResult = await collection.updateOne(
        { _id: objectIdToUpdate },
        {
          $set: {
            image: 'data:image/png;base64,' + imageBase64
          },
        }
      );
      if (updateResult.matchedCount === 1) {
        console.log(`Image ${image + 1} inserted successfully.`);
      } else {
        console.error(`Failed to insert image ${image + 1}.`);
      }
    }

    console.log("All images inserted successfully.");
  } catch (err) {
    console.error(err.message);
  } finally {
    client.close();
  }
};

updateObjectsWithImages();
