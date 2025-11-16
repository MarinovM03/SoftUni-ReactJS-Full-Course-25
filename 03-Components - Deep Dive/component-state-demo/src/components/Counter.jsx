import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementClickHandler = () => {
        setCount(count + 1);  // Not recommended way
    }

    return (
        <section>
            <h2>Counter</h2>

            <div>Count: {count}</div>

            <button onClick={incrementClickHandler}>+</button>
        </section>
    );
}