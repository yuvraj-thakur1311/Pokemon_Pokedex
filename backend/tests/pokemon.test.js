const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const pokemonRoutes = require("../routes/pokemonRoutes");
const Pokemon = require("../model/Pokemon");

dotenv.config({ path: ".env.test" });

const app = express();
app.use(express.json());
app.use("/api/poke", pokemonRoutes);

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterEach(async () => {
  await Pokemon.deleteMany(); 
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe("Pokémon API Test Suite", () => {

  it(" Add a new Pokémon", async () => {

    await Pokemon.deleteOne({ name: "Pikachu" });

    const res = await request(app).post("/api/poke/add").send({
      name: "Pikachu",
      type: "Electric",
      description: "Electric mouse Pokémon",
      attack: "Thunderbolt",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.pokemon.name).toBe("Pikachu");
    expect(res.body.message).toMatch(/created successfully/i);
  });

  it("List all Pokémon", async () => {

    await Pokemon.create({
      name: "Bulbasaur",
      type: "Grass",
      description: "Seed Pokémon",
      attack: "Vine Whip",
    });

    const res = await request(app).get("/api/poke/list");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.pokemons)).toBe(true);
    expect(res.body.pokemons.length).toBeGreaterThan(0);
  });

  it("Edit a Pokémon", async () => {

    const pokemon = await Pokemon.create({

      name: "Charmander",
      type: "Fire",
      description: "Lizard Pokémon",
      attack: "Flamethrower",
    });

    const res = await request(app)
      .put(`/api/poke/updatePok/${pokemon._id}`)
      .send({
        name: "Charmeleon",
        type: "Fire",
        description: "Evolved form",
        attack: "Flame Burst",
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.pokemon.name).toBe("Charmeleon");
    expect(res.body.message).toMatch(/updated successfully/i);
  });

  it(" Remove a Pokémon", async () => {
    const pokemon = await Pokemon.create({
      name: "Squirtle",
      type: "Water",
      description: "Tiny Turtle Pokémon",
      attack: "Water Gun",
    });

    const res = await request(app).delete(`/api/poke/delPok/${pokemon._id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toMatch(/deleted successfully/i);
  });
});
