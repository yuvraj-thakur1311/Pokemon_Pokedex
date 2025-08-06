const express = require("express")
require("dotenv").config();
const cors = require("cors")
const ConnectDB = require("./config/database")
const pokemonRoutes  = require("./routes/pokemonRoutes")

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json())
app.use(cors())

ConnectDB();

app.use("/api/poke", pokemonRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
