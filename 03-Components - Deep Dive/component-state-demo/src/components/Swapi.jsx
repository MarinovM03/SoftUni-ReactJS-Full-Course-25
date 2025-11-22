import { useEffect } from "react";

export default function Swapi() {
    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.error(err.message);
            })
    }, []);

    return (
        <section>
            <h2>Star Wars Characters</h2>

            <ul>
                <li></li>
            </ul>
        </section>
    );
}