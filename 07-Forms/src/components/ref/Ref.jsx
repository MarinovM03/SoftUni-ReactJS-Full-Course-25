import { useRef } from "react";

export default function Ref() {
    const formRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        console.log('submit');
    }


    return (
        <>
            <h1 className="text-2x1 font-semibold mb-4">Use Ref Hook</h1>

            <form onSubmit={submitHandler} ref={formRef}>
                <input type="text" className="border border-gray-300 rounded-lg p-2 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" />
            </form>

            <Submit formRef={formRef} />
        </>
    );
}


function Submit({
    formRef,
}) {
    const clickHandler = () => {
        formRef.current.submit();
    }

    return (
        <input type="submit" onClick={clickHandler} value="Create" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition" />
    );
}