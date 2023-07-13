import './App.css'
import Movies from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies'

function App () {
  const { movies } = useMovies()

  return (
    <div className='app'>
      <header>
        <h1>Movie Finder</h1>
        <form>
          <input placeholder='Shrek, The Matrix, Harry Potter...' />
          <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
