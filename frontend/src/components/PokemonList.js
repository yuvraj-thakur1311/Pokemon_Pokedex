import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removePokemon } from '../redux/slices/pokemonSlice';
import EditPokemonForm from './EditPokemonForm';

const PokemonList = () => {

  const dispatch = useDispatch();
  const listOfPokemon = useSelector((state) => state.pokemon);
  const [editId, setEditId] = useState(null);

  const handleRemove = (id) => {
    dispatch(removePokemon(id));
  };

  const editHandle = (id) => {
    setEditId(id);
  };

  const CancelHandle = () => {
    setEditId(null);
  };

  if (listOfPokemon.length === 0) {
    return <p style={{ fontStyle: 'italic', color: '#888' }}>No Pokémon added yet.</p>;
  }

  return (

    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}> Ash's Pokie List </h2>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {listOfPokemon.map((pok) => (
          <li
            key={pok.id}
            style={{
              background: '#f9f9f9',
              borderRadius: '10px',
              padding: '1rem 1.5rem',
              marginBottom: '1.5rem',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              borderLeft: '6px solid #ffcb05',
            }}
          >
            {editId === pok.id ? (
              <EditPokemonForm currentPokemon={pok} onCancel={CancelHandle} />
            ) : (
              <>
                <p><strong>Name:</strong> {pok.name}</p>
                <p><strong>Type:</strong> {pok.type}</p>
                <p><strong>Description:</strong> {pok.description}</p>
                <p><strong>Special Move:</strong> {pok.attack}</p>
                <div style={{ marginTop: '1rem' }}>

                  <button
                    onClick={() => editHandle(pok.id)}
                    style={{
                      backgroundColor: '#1976d2',
                      color: 'white',
                      padding: '6px 12px',
                      border: 'none',
                      borderRadius: '4px',
                      marginRight: '10px',
                      cursor: 'pointer'
                    }}
                  >
                     Edit
                  </button>
                  <button
                    onClick={() => handleRemove(pok.id)}
                    style={{
                      backgroundColor: '#d32f2f',
                      color: 'white',
                      padding: '6px 12px',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                     Remove
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
