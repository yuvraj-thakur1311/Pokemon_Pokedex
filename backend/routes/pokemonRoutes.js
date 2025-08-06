const express = require("express");
const router = express.Router();
const { addPokemon, listOfAllPokemon, removePokemon, getPokByName, editPokemon} = require("../controllers/pokemonController");

router.post("/add", addPokemon); 
router.get("/list", listOfAllPokemon); 
router.get("/getPok/:name", getPokByName); 
router.put("/updatePok/:id", editPokemon); 
router.delete("/delPok/:id", removePokemon); 

module.exports = router;
