import './App.css'
import Movies from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const { search, inputError, updateSearch } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search })

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
