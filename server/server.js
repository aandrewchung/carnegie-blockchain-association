const express = require('express');
const cors = require('cors');

const { getUsers } = require('./utils/getUsers'); // Update the path according to your project structure

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get('/users', async (req, res) => {
    try {
      const users = await getUsers();
      res.json(users);
    } catch (error) {
      console.error("Failed to get users", error);
      res.status(500).send("Error retrieving users from the database.");
    }
});

if (require.main === module) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;