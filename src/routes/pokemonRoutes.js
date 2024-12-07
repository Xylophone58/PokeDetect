const express = require('express');
const router = express.Router();
const { getPokemonDetails, getPokemonSpecies } = require('../controllers/pokemonController');

// Route for fetching basic Pokémon data
router.get('/:name', getPokemonDetails);

// Route for fetching Pokémon species data
router.get('/pokemon-species/:name', getPokemonSpecies);

module.exports = router;
