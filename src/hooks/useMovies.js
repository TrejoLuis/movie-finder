import { searchMovies } from '../services/movies'
import { useState, useRef } from 'react'

// Custom hook to manage fetching, data mapping, states
export function useMovies ({ search }) {
  const [moviesRes, setMoviesRes] = useState([])
  const [loading, setLoading] = useState()
  const [error, setError] = useState(null)
  const prevSearch = useRef(search)

  async function getMovies ( {search}) {
    if(prevSearch.current === search) return

    try{
      setLoading(true)
      setError(null)
      prevSearch.current = search
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
