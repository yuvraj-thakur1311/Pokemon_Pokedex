import React, { useState } from 'react';
import { addPokemon } from '../redux/slices/pokemonSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const PokemonForm = () => {
  const [form, setForm] = useState({
    name: "",
    type: "",
    description: "",
    attack: ""
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.type || !form.description || !form.attack) {
      alert("All fields are required");
      return;
    }

    dispatch(addPokemon({ ...form, id: uuidv4() }));
    setForm({ name: "", type: "", description: "", attack: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}> Add a New Pokémon</h2>

      <div style={styles.field}>
        <label style={styles.label}>Name</label>
        <input
          type='text'
          name='name'
          value={form.name}
          onChange={handleChange}
          placeholder='Name of the Pokiee..'
          style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Type</label>
        <input
          type='text'
          name='type'
          value={form.type}
          onChange={handleChange}
          placeholder='Type of the Pokiee..'
          style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>About Pokémon</label>
        <input
          type='text'
          name='description'
          value={form.description}
          onChange={handleChange}
          placeholder='About Pokiee..'
          style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Special Move</label>
        <input
          type='text'
          name='attack'
          value={form.attack}
          onChange={handleChange}
          placeholder='Famous move/attack of Pokiee..'
          style={styles.input}
        />
      </div>

      <button type='submit' style={styles.submitBtn}> Add Pokémon</button>
    </form>
  );
};

const styles = {
  form: {
    backgroundColor: '#fefefe',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    maxWidth: '500px',
    margin: '2rem auto',
    border: '1px solid #ddd'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#333',
  },
  field: {
    marginBottom: '1.25rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.4rem',
    fontWeight: 'bold',
    color: '#444',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
  submitBtn: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    width: '100%',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  }
};

export default PokemonForm;
