import axios from 'axios'

const API_URL = 'http://localhost:5000/api/peliculas'

export const getPeliculas = async () => {
  const { data } = await axios.get(API_URL)
  return data
}

export const getPelicula = async (id) => {
  const { data } = await axios.get(`${API_URL}/${id}`)
  return data
}

export const createPelicula = async (pelicula) => {
  const { data } = await axios.post(API_URL, pelicula)
  return data
}

export const updatePelicula = async (id, pelicula) => {
  const { data } = await axios.put(`${API_URL}/${id}`, pelicula)
  return data
}

export const deletePelicula = async (id) => {
  const { data } = await axios.delete(`${API_URL}/${id}`)
  return data
}
