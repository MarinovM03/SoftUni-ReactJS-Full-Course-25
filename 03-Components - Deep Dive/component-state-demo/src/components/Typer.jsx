import { useEffect, useState } from "react";

export default function Typer() {
    const [key, setKey] = useState('Press any key to start!');

    useEffect(() => {
        window.addEventListener('keypress', (event) => {
            setKey(event.key);
        });
    }, []);

    return (
        <div>
            <p>Pressed Key</p>
            <strong>{key}</strong>
        </div>
    );
}