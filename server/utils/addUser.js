// addUser.js
const { connectDB } = require('../config/db');

async function addUser(userData) {
  const client = await connectDB();
  try {
    const db = client.db("cba-database"); // Replace with your actual database name
    const result = await db.collection("cba-alumni").insertOne(userData);
    console.log(`New user added with the following id: ${result.insertedId}`);
  } catch (error) {
    console.error("Could not add user to MongoDB", error);
  } finally {
    await client.close();
  }
}

// Include the CID in the image URL
const imageUrl = `https://gateway.pinata.cloud/ipfs/QmdUC9ofZbi2vqpR6j8nHmr5qLbq473UXdVGHpfy4WExpH`;
const userData = {
  firstName: "Andrew",
  lastName: "Chung",
  graduationYear: 2002,
  company: "Tech Innovations",
  twitter: "@jane_doe",
  imageUrl: imageUrl, // Add the imageUrl field to your userData object
};

addUser(userData).catch(console.error);
