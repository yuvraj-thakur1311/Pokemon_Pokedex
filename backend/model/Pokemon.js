const mongoose = require("mongoose");

const PokemonModel = new mongoose.Schema({

    name : {
        type    : String,
        require : true,
        unique  : true
    }, 

    type : {

        type   : [String],
        unique : true
    }, 

    description : {

        type : String
    }, 

    attack : {

        type : String
    }, 
}, 
{
    timestamps : true
})

module.exports = mongoose.model("Pokemon", PokemonModel);