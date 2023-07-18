import './App.css'
import Movies from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { useCallback } from 'react'
import  debounce from 'just-debounce-it'

function App () {
  const { search, inputError, updateSearch } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search })

  const debouncedSearch = useCallback(debounce((search) => {
    getMovies( {search })
  }, 400)
  ,[])

  function handleSubmit (e) {
    e.preventDefault()
    getMovies({ search })
  }
  function handleChange (e) {
    const newSearch = e.target.value
    updateSearch(newSearch)
    console.log(newSearch)
    debouncedSearch(newSearch)
  }

  return (
    <div className='app'>
      <header>
        <h1>Movie Finder</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} placeholder='Shrek, The Matrix, Harry Potter...' />
          <button type='submit'>Search</button>
        </form>
        {inputError &&
          <p style={{ color: 'salmon' }}>{inputError}</p>}
      </header>
      <main>
        {
          loading
            ? <h2>LOADING...</h2>
            : <Movies movies={movies}/>
        }
      </main>
    </div>
  )
}

export default App
