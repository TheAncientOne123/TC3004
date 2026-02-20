import { useState, useEffect } from 'react';

const POKE_API = 'https://pokeapi.co/api/v2/pokemon';

export const usePokemon = (id = 1) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id || id < 1) {
      setError('ID inválido');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(`${POKE_API}/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Pokémon #${id} no encontrado`);
        return res.json();
      })
      .then((data) => {
        setPokemon({
          id: data.id,
          name: data.name,
          sprite: data.sprites?.front_default,
          spriteShiny: data.sprites?.front_shiny,
          types: data.types?.map((t) => t.type.name) ?? [],
          height: data.height,
          weight: data.weight,
        });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setPokemon(null);
        setLoading(false);
      });
  }, [id]);

  return { pokemon, loading, error };
};
