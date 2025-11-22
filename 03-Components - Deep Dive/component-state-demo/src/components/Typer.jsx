import { useEffect, useState } from "react";

export default function Typer() {
    const [key, setKey] = useState('Press any key to start!');

    useEffect(() => {
        window.addEventListener('keypress', (event) => {
            console.log(event.key);
            
            setKey(event.key);
        });
    }, []);

    useEffect(() => {
        console.log('Mount');
    }, []);

    useEffect(() => {
        console.log('Update Key');
    }, [key]);

    useEffect(() => {
        return () => {
            console.log('Unmount');
        }
    }, []);


    return (
        <div>
            <p>Pressed Key</p>
            <strong>{key}</strong>
        </div>
    );
}