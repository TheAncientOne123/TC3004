import React from 'react'
import { useCallbac, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';


export const CallBackHook = () => {
    const [counter, setCounter] = useState(10);

    const incrementP = ()=> {setCounter(counter + 1);
console.log(counter);}
  return (
    <>
        <h1>useCallback Hook: { counter }</h1>
        <hr />
        <ShowIncrement increment={ incrementP } />

    </>
  )
}
