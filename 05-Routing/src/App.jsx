import { Routes, Route } from 'react-router';
import './App.css'
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import NotFound from './components/NotFound.jsx';
import City from './components/City.jsx';
import Redirect from './components/Redirect.jsx';

function App() {
    return (
        <>
            <h1>React Router</h1>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/cities/:city' element={<City />} />
                <Route path='/redirect' element={<Redirect />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App
