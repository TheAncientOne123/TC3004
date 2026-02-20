import React from 'react'
import { useCounter } from '../hooks/useCounter';
import Loading from './Loading';
import { Card } from './Card';
import { useFetch } from '../hooks/useFetch';

export const CustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter(1);
    const { data, isLoadinig, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
  const sprites = data?.sprites ? [
    data.sprites.front_default,
    data.sprites.front_shiny,
    data.sprites.back_default,
    data.sprites.back_shiny
  ].filter(Boolean) : [];

  return (
    <>
      <h1>Fetch API de Pokemon</h1>
      <h2>Nombre: {data?.name}</h2>
      {hasError && <p className="alert alert-danger">Error: {hasError}</p>}
      {isLoadinig ? <Loading />
        : data && (<Card id={counter} name={data.name} sprites={sprites} />)}
        <button className='btn btn-primary' onClick={() => increment()}>Siguiente</button>
        <button className='btn btn-primary' onClick={() => decrement()}>Anterior</button>
        <button className='btn btn-primary' onClick={() => reset()}>Reset</button>
    </>
  )
}
