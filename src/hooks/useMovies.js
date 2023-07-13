import goodResponseResults from '../mocks/goodResult.json'

// Custom hook to manage fetching, data mapping, states
export function useMovies () {
  const rawMovies = goodResponseResults?.Search
  const mappedMovies = rawMovies.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { movies: mappedMovies }
}
