import { useState } from "react";

export default function MovieList() {
    const [movies, setMovies] = useState([
        'The Matrix',
        'Man of Steel',
        'The Case for Christ',
        'Lord of the Rings',
        'Fury',
    ]);

    const updateMoviesHandler = () => {
        setMovies(oldMovies => {
            // const newMovies = oldMovies.slice();  // New reference
            const newMovies = [...oldMovies];  // New reference

            // newMovies.push('Star Wars');

            const removedMovie = newMovies.shift();

            newMovies.push(removedMovie);

            return newMovies;
        });
    };

    return (
        <section>
            <h2>Movie List</h2>

            <ul>
                {movies.map(movie => <li key={movie}>{movie}</li>)}
            </ul>

            <button onClick={updateMoviesHandler}>Update Movies</button>
        </section>
    );
}