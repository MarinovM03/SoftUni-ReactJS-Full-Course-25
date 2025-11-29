import { Routes, Route, useNavigate } from "react-router";
import { useState } from "react";

import Home from "./components/Home";
import Login from "./components/Login";
import Header from "./components/Header";

function App() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const loginSubmitHandler = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const { email, password } = Object.fromEntries(formData);

        if (email === 'ivo@abv.bg' && password === 'asdasd') {
            setUser({ email });
            return navigate('/');
        }
    };

    return (
        <div className="bg-white">
            <Header />

            <Routes>
                <Route index element={<Home />} />
                    <Route path="/login" element={<Login onSubmit={loginSubmitHandler} />} />
            </Routes>
        </div>
    );
}

export default App
