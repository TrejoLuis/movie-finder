import './App.css'
import Movies from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const { search, error, updateSearch } = useSearch()
  const { movies, getMovies } = useMovies({ search })

  function handleSubmit (e) {
    e.preventDefault()
    getMovies()
  }
  function handleChange (e) {
    updateSearch(e.target.value)
  }

  return (
    <div className='app'>
      <header>
        <h1>Movie Finder</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} placeholder='Shrek, The Matrix, Harry Potter...' />
          <button type='submit'>Search</button>
        </form>
        {error &&
          <p style={{ color: 'salmon' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
