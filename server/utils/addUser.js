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

const userData = {
  firstName: "Andrew",
  lastName: "Chung",
  graduationYear: 2002,
  company: "Tech Innovations",
  twitter: "@jane_doe",
  // Add other fields as necessary
};

addUser(userData).catch(console.error);
