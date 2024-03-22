//db.js
require('dotenv').config();

const { MongoClient, ServerApiVersion } = require('mongodb');

async function connectDB() {
  let client;
  try {
    // Use the environment variables from your .env file
    const uri = `mongodb+srv://${process.env.CBA_USER}:${process.env.CBA_PASSWORD}@cluster0.megdrz7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    return client;
  } finally {
    if (client) {
      await client.close(); // Close the client if it's defined
    }
  }
}

// connectDB().catch(console.dir);

module.exports = { connectDB };
