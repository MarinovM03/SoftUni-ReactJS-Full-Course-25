export default function Typer() {

    const keyDownHandler = (event) => {
        console.log(event.key);
        
    };

    return (
        <section tabIndex={0} onKeyDown={keyDownHandler}>
            <h2>Typer</h2>

            <p>Pressed Key</p>
            <strong>A</strong>
        </section>
    );
}