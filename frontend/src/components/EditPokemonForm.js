import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePokemon } from '../redux/slices/pokemonSlice';

const EditPokemonForm = ({ currentPokemon, onCancel }) => {

  const [form, setForm] = useState(currentPokemon);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.type || !form.description || !form.attack) {
      alert("All fields are required");
      return;
    }
    dispatch(updatePokemon(form));
    onCancel(); 
  };

  return (

    <form onSubmit={handleSubmit} style={styles.form}>
      <h3 style={styles.heading}> Edit Pokie</h3>

      <div style={styles.field}>
        <label style={styles.label}>Name</label>
        <input
          type='text'
          name='name'
          value={form.name}
          onChange={handleChange}
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
          style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Description</label>
        <input
          type='text'
          name='description'
          value={form.description}
          onChange={handleChange}
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
          style={styles.input}
        />
      </div>

      <div style={styles.btns}>
        <button type='submit' style={styles.updateBtn}> Update</button>
        <button type='button' onClick={onCancel} style={styles.cancelBtn}> Cancel</button>
      </div>
    </form>
  );
};

const styles = {

  form: {
    backgroundColor: '#f1f1f1',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    marginTop: '1rem'
  },


  heading: {
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#333'
  },


  field: {
    marginBottom: '1rem',
  },


  label: {
    display: 'block',
    marginBottom: '0.25rem',
    fontWeight: 'bold',
    color: '#555',
  },


  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },


  btns: {
    display: 'flex',
    justifyContent: 'space-between',
  },


  updateBtn: {
    backgroundColor: '#2e7d32',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },

  
  cancelBtn: {
    backgroundColor: '#d32f2f',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
};

export default EditPokemonForm;
