import goodResponseResults from '../mocks/goodResult.json'
import { useState, useEffect, useRef } from 'react'

// Custom hook to manage fetching, data mapping, states
export function useMovies () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState()
  const isFirstInput = useRef(true)

  const rawMovies = goodResponseResults?.Search
  const mappedMovies = rawMovies.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  function handleSubmit (e) {
    e.preventDefault()
    console.log(search)
    //FETCHING
  }

  function handleChange (e) {
    const newSearch = e.target.value
    if(newSearch === ' ') return
    setSearch(newSearch)

  }

  useEffect(() => {
    //validating first time input
    if(isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }
    // validating input
    if (search === '') {
      setError('Please write a movie to find')
      return
    }

    if(search.length < 3){
      setError('Please write at least 2 characters')
      return
    }

    setError(null)
  },[search])


  return { movies: mappedMovies, 
    error, 
    search, 
    updateSearch: handleChange,
    submitChange: handleSubmit}
}
