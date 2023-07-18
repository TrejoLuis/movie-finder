import { searchMovies } from '../services/movies'
import { useState } from 'react'

// Custom hook to manage fetching, data mapping, states
export function useMovies ({ search }) {
  const [moviesRes, setMoviesRes] = useState([])
  const [loading, setLoading] = useState()
  const [error, setError] = useState(null)

  async function getMovies () {
    try{
      setLoading(true)
      setError(null)
      console.log(loading)
      const data = await searchMovies( { search })
      setMoviesRes(data)
    }catch(error){
      setError(error)
    }finally{
      setLoading(false)
    }
  }

  return {
    movies: moviesRes,
    getMovies,
    moviesError: error,
    loading
  }
}
