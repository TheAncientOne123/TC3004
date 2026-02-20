import React from 'react';

export const PokemonCard = ({ pokemon }) => {
  if (!pokemon) return null;

  const { id, name, sprite, types, height, weight } = pokemon;

  return (
    <article
      style={{
        padding: '1.5rem',
        borderRadius: '12px',
        background: 'linear-gradient(145deg, #2d2d2d, #1f1f1f)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        textAlign: 'center',
        minWidth: 200,
      }}
    >
      <img
        src={sprite}
        alt={name}
        style={{ width: 120, height: 120, imageRendering: 'pixelated' }}
      />
      <h3 style={{ margin: '0.5rem 0', textTransform: 'capitalize' }}>
        #{id} - {name}
      </h3>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {types.map((t) => (
          <span
            key={t}
            style={{
              padding: '0.25rem 0.75rem',
              borderRadius: '999px',
              background: '#646cff',
              fontSize: '0.85rem',
              textTransform: 'capitalize',
            }}
          >
            {t}
          </span>
        ))}
      </div>
      <p style={{ margin: '0.5rem 0', fontSize: '0.9rem', opacity: 0.8 }}>
        Alt: {height} dm · Peso: {weight} hg
      </p>
    </article>
  );
};
