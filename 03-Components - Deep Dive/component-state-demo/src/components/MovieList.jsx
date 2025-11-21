import { useState } from "react";

export default function MovieList() {
    const [movies, setMovies] = useState([
        'The Matrix',
        'Man of Steel',
        'The Case for Christ',
        'Lord of the Rings',
        'Fury',
    ]);

    return (
        <section>
            <h2>Movie List</h2>

            <ul>
                {movies.map(movie => <li>{movie}</li>)}
            </ul>
        </section>
    );
}