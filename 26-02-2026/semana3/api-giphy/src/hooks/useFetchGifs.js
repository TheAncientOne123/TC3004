import React from 'react'
import { getGifs } from '../helpers/getGifs'
import { useEffect } from 'react'

export const useFetchGifs = ( category ) => {
  const [images, setImages] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages( newImages );
    setLoading( false );
  }

  useEffect(()=>{
    getImages();
  },[])

  return {
    images,
    loading
  }
}

