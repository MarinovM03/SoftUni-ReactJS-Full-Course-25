import { Routes, Route, Link, NavLink } from 'react-router';
import './App.css'
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import NotFound from './components/NotFound.jsx';
import City from './components/City.jsx';
import Redirect from './components/Redirect.jsx';
import Dashboard from './components/Dashboard.jsx';
import AdminUsers from './components/AdminUsers.jsx';
import AdminPosts from './components/AdminPosts.jsx';
import styles from './App.module.css';

function App() {
    return (
        <>
            <h1>React Router</h1>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/cities:plovdiv">City</Link>
            </nav>

            {/* <nav>
                <NavLink style={({isActive}) => isActive ? {textDecoration: 'underline'} : {}} to="/">Home</NavLink>
                <NavLink style={({isActive}) => isActive ? {textDecoration: 'underline'} : {}} to="/about">About</NavLink>
                <NavLink style={({isActive}) => isActive ? {textDecoration: 'underline'} : {}} to="/cities:plovdiv">City</NavLink>
            </nav> */}

            {/* <nav>
                <NavLink className={(isActive) => isActive ? styles['selected-link'] : ''} to="/">Home</NavLink>
                <NavLink className={(isActive) => styles['selected-link']} to="/about">About</NavLink>
                <NavLink className={(isActive) => styles['selected-link']} to="/cities:plovdiv">City</NavLink>
            </nav> */}

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/cities/:city' element={<City />} />
                <Route path='/redirect' element={<Redirect />} />

                <Route path='/admin'>
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='users' element={<AdminUsers />} />
                    <Route path='posts' element={<AdminPosts />} />
                </Route>

                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App
