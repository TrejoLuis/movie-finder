import './App.css'
import responseResults from './mocks/goodResult.json'
import Movies from './components/Movies.jsx'

function App () {

  const rawMovies = responseResults?.Search 
  console.log(rawMovies)
  const movies = rawMovies.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))
  
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
