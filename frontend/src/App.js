
import PokemonForm from './components/PokemonForm';
import React from 'react';
import PokemonList from './components/PokemonList';

function App() {

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Ash's Pokie Space</h1>

      <div style={styles.griddd}>
        <div style={styles.leftCol}>
          <PokemonForm />
        </div>

        <div style={styles.rightCol}>
          <div style={styles.scrlArea}>
            <PokemonList />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {

  container: {
    backgroundColor: '#ffffffff',
    minHeight: '100vh',
    padding: '2rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
  },


  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: '#000000ff',
  },


  griddd: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start',
  },


  leftCol: {
    flex: '0 0 650px',
    position: 'sticky',
    top: '2rem',
    height: 'fit-content',
    backgroundColor: '#ffffff',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },


  rightCol: {
    flex: '1',
    height: '80vh',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },


  scrlArea: {
    height: '100%',
    overflowY: 'auto',
    paddingRight: '1rem',
  },


  subheading: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#34495e',
  },
};

export default App;
