import { useEffect, useState } from 'react'
import { movies } from './movies'
import Movie from './Movie'

import './movies.css'

const fetchMovies = () => {
    return movies
}

function MovieContainer () {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const data = fetchMovies()
        setMovies(data)
    }, [])

    return (
        <div className='movie-container'>
            <h2>Movie Container</h2>
            <ul className='movie-list'>
                {movies.map(movie => (
                    <Movie.Root key={movie.id}>
                        <Movie.Image poster={movie.poster} title={movie.title} />
                        <Movie.Description title={movie.title} year={movie.year} director={movie.director}/>
                        <Movie.Rating rating={movie.rating}/>
                    </Movie.Root>
                ))}
            </ul>
        </div>
    )
}

export default MovieContainer