import Typer from "./Typer.jsx";

export default function TyperSection() {

    const pauseHandler = () => {

    };

    return (
        <section>
            <h2>Typer</h2>

            <Typer />

            <button onClick={pauseHandler}>Pause Key Press</button>
        </section>
    );
}