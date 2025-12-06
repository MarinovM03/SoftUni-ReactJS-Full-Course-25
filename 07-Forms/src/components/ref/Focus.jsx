import { useEffect, useRef } from "react";

export default function Focus() {
    const myRef = useRef();

    const focusHandler = () => {
        myRef.current.focus();
    };

    useEffect(() => {
        myRef.current.focus();
    }, []);

    return (
        <>
            <h1 className="text-2x1 font-semibold mb-4">Use Ref Hook</h1>

            <input type="text" ref={myRef} className="border border-gray-300 rounded-lg p-2 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" />
            
            <button onClick={focusHandler} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Focus</button>
        </>
    );
}