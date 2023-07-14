import './App.css'
import Movies from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies'

function App () {
  const { movies, error, search, updateSearch, submitChange } = useMovies()

  return (
    <div className='app'>
      <header>
        <h1>Movie Finder</h1>
        <form onSubmit={submitChange}>
          <input onChange={updateSearch} value={search} placeholder='Shrek, The Matrix, Harry Potter...' />
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
