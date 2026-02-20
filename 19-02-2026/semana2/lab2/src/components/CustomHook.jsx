import React from 'react'
import { useCounter } from '../hooks/useCounter';
import Loading from './Loading';
import { Card } from './Card';
import { useFetch } from '../hooks/useFetch';

export const CustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter(1);
    const { data, isLoadinig, hasError } = useFetch(`https://devsapihub.com/api-players/${counter}`);
  const imgSrc = data?.imgSrc ? [data.imgSrc] : [];

  return (
    <>
      <h1>Jugadores NBA</h1>
      <h2>Nombre: {data?.name}</h2>
      {hasError && <p className="alert alert-danger">Error: {hasError}</p>}
      {isLoadinig ? <Loading />
        : data && (<Card id={data.id} name={data.name} sprites={imgSrc} position={data.position} />)}
        <button className='btn btn-primary' onClick={() => increment()}>Siguiente</button>
        <button className='btn btn-primary' onClick={() => decrement()}>Anterior</button>
        <button className='btn btn-primary' onClick={() => reset()}>Reset</button>
    </>
  )
}
