import React, { useState } from 'react';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonCard } from './PokemonCard';
import Loading from './Loading';

export const PokemonExplorer = () => {
  const [id, setId] = useState(1);
  const { pokemon, loading, error } = usePokemon(id);

  const handlePrev = () => setId((p) => Math.max(1, p - 1));
  const handleNext = () => setId((p) => Math.min(1025, p + 1));

  return (
    <section
      style={{
        padding: '2rem',
        maxWidth: 400,
        margin: '0 auto',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        Explorador de Pokémon
      </h2>

      {loading && <Loading />}
      {error && (
        <p style={{ color: '#f87171', textAlign: 'center' }}>{error}</p>
      )}
      {!loading && !error && pokemon && <PokemonCard pokemon={pokemon} />}

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginTop: '1.5rem',
        }}
      >
        <button onClick={handlePrev} disabled={id <= 1}>
          ← Anterior
        </button>
        <span style={{ display: 'flex', alignItems: 'center' }}>#{id}</span>
        <button onClick={handleNext} disabled={id >= 1025}>
          Siguiente →
        </button>
      </div>
    </section>
  );
};
