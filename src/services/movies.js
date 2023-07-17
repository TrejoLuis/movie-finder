const API_KEY = 'bdb4d822'

export function searchMovies ({ search }) {
  if (search === '') return
  return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=${search}`)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP Error: ${res.status}`)
      return res.json()
    })
    .then(movies => {
      return movies?.Search?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
      }))
    })
    .catch((error) => {
      console.error(error)
    })
}
