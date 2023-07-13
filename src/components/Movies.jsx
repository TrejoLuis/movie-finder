function renderMovies(movies) {
  return (
    <ul className='movies'>
      {movies.map(movie => 
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={`${movie.title} poster`} />
        </li>)}
    </ul>
  )
}

function renderNoMovies(){
  return <h3>Movie/s not found</h3>
}

export default function Movies({ movies }){
  return (
    <>
      {
        movies ? renderMovies(movies) : renderNoMovies()
      }
    </>
  )
}
