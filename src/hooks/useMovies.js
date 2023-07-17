import { searchMovies } from '../services/movies'
import { useState } from 'react'

// Custom hook to manage fetching, data mapping, states
export function useMovies ({ search }) {
  const [moviesRes, setMoviesRes] = useState([])

  function getMovies () {
    console.log(search)
    searchMovies({search})
      .then(movies => setMoviesRes(movies))
  }

  return {
    movies: moviesRes,
    getMovies
  }
}
