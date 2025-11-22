import { useEffect, useState } from "react";

export default function Swapi() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
            })
            .catch(err => {
                console.error(err.message);
            })
    }, []);

    return (
        <section>
            <h2>Star Wars Characters</h2>

            <ul>
                {characters.map(character => <li key={character.name}>{character.name}</li>)}
            </ul>
        </section>
    );
}