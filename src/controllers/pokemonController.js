const axios = require('axios');

// Existing function to get basic Pokémon data
const getPokemonDetails = async (req, res) => {
    const { name } = req.params;

    try {
        // Make a request to the PokeAPI to fetch the Pokémon details
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        
        const pokemon = {
            name: response.data.name,
            id: response.data.id,
            types: response.data.types.map(typeInfo => typeInfo.type.name),
            abilities: response.data.abilities.map(abilityInfo => abilityInfo.ability.name),
            sprites: response.data.sprites.front_default,
        };

        res.json(pokemon);
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return res.status(404).json({ error: `Pokémon ${name} not found` });
        }
        return res.status(500).json({ error: 'Failed to fetch data from PokeAPI' });
    }
};

// New function to get Pokémon species data
const getPokemonSpecies = async (req, res) => {
    const { name } = req.params;
    console.log(`Fetching species data for: ${name}`);  // Add this line for debugging

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name.toLowerCase()}`);
        const species = {
            name: response.data.name,
            id: response.data.id,
            base_happiness: response.data.base_happiness,
            capture_rate: response.data.capture_rate,
            color: response.data.color.name,
            habitat: response.data.habitat ? response.data.habitat.name : 'Unknown',
            shape: response.data.shape.name,
        };

        res.json(species);
    } catch (error) {
        console.error(error);  // Log the error for better debugging
        if (error.response && error.response.status === 404) {
            return res.status(404).json({ error: `Species data for Pokémon ${name} not found` });
        }
        return res.status(500).json({ error: 'Failed to fetch species data from PokeAPI' });
    }
};


module.exports = { getPokemonDetails, getPokemonSpecies };
