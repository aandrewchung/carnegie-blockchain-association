// getUsers.js
const { connectDB } = require('../config/db');

async function getUsers() {
  const client = await connectDB();
  try {
    const db = client.db("cba-database"); // Use your actual database name
    const users = await db.collection("cba-alumni").find({}).toArray(); // Convert the cursor to an array
    console.log(users); // Log users to console (or return them from this function if using elsewhere)
    return users; // Return the array of users
  } catch (error) {
    console.error("Could not retrieve users from MongoDB", error);
  } finally {
    await client.close();
  }
}

// If you want to run this script directly, uncomment the line below
getUsers().catch(console.error);

module.exports = { getUsers };
