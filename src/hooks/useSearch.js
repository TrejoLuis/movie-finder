import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState()
  const isFirstInput = useRef(true)

  useEffect(() => {
    // validating first time input
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    // validating input
    if (search === '') {
      setError('Please write a movie to find')
      return
    }

    if (search.length < 3) {
      setError('Please write at least 2 characters')
      return
    }

    setError(null)
  }, [search])

  function updateSearch (newSearch) {
    if (newSearch === ' ') return
    setSearch(newSearch)
    console.log(newSearch)
  }

  return {
    search,
    inputError: error,
    updateSearch
  }
}
