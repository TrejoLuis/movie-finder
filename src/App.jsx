import './App.css'
import responseResults from './mocks/goodResult.json'

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
        {
          movies 
            ? <ul className='movies'>
                {movies.map(movie => 
                  <li key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    <img src={movie.poster} alt={`${movie.title} poster`} />
                  </li>)}
              </ul>
            : <h3>Movie/s not found</h3>
        }
      </main>
    </div>
  )
}

export default App
