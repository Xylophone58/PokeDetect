const express = require('express');
const app = express();
const pokemonRoutes = require('./routes/pokemonRoutes'); // Make sure this path is correct

app.use('/api/pokemon', pokemonRoutes); // Set the base route for pokemon-related requests

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});