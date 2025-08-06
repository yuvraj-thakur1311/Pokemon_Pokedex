const Pokemon = require("../model/Pokemon");

exports.addPokemon = async (req, res) => {

  try {

    const { name, type, description, attack } = req.body;

    if (!name || !type || !description || !attack) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const isPokExist = await Pokemon.findOne({ name });
    if (isPokExist) {
      return res.status(409).json({
        message: "This Pokémon already exists.",
      });
    }

    const newPokemon = new Pokemon({ name, type, description, attack });
    const savedPokemon = await newPokemon.save();

    return res.status(201).json({
      message: "Yayy...Pokémon created successfully!",
      pokemon: savedPokemon,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Didnt create Pokémon.",
    });
  }
};

exports.removePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Pokemon.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        message: "Pokémon not found.",
      });
    }

    return res.json({
      message: "Pokémon deleted successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in deleting Pokémon.",
    });
  }
};

exports.listOfAllPokemon = async (req, res) => {
  try {
    const allPok = await Pokemon.find();

    return res.status(200).json({
      message: "Fetched all Pokémon successfully.",
      pokemons: allPok,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch Pokémonss.",
    });
  }
};

exports.getPokByName = async (req, res) => {
  try {
    const name = req.params.name;
    const pokemon = await Pokemon.findOne({ name });

    if (!pokemon) {
      return res.status(404).json({
        message: "No such Pokémon found.",
      });
    }

    return res.status(200).json({
      message: "Pokémon found successfully.",
      pokemon,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching Pokémon.",
    });
  }
};

exports.editPokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, description, attack } = req.body;

    const updated = await Pokemon.findByIdAndUpdate(
      id,
      { name, type, description, attack },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        message: "Pokémon not found.",
      });
    }

    res.setHeader("Content-Type", "application/json");
    
    return res.status(200).json({
      message: "Pokémon updated successfully...",
      pokemon: updated,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Failed to update Pokémon.",
    });
  }
};
