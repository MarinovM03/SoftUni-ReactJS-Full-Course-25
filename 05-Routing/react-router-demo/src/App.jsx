import { Routes, Route } from "react-router";

import Home from "./components/Home";
import Login from "./components/Login";
import Header from "./components/Header";

function App() {
    return (
        <div className="bg-white">
            <Header />

            <Routes>
                <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App
