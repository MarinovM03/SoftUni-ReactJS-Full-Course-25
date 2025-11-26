import { Routes, Route } from 'react-router';
import './App.css'
import About from './components/About.jsx';
import Home from './components/Home.jsx';

function App() {
    return (
        <>
        <h1>React Router</h1>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
        </>
    );
}

export default App
