import { Routes, Route, Link, NavLink } from 'react-router';
import { useState } from 'react';
import './App.css'
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import NotFound from './components/NotFound.jsx';
import City from './components/City.jsx';
import Redirect from './components/Redirect.jsx';
import Dashboard from './components/Dashboard.jsx';
import AdminUsers from './components/AdminUsers.jsx';
import AdminPosts from './components/AdminPosts.jsx';
import Admin from './components/Admin.jsx';
import Layout from './components/Layout.jsx';
import RouteGuard from './components/RouteGuard.jsx';
import Profile from './components/Profile.jsx';
import Login from './components/Login.jsx';
import styles from './App.module.css';
import CodeSplitting from './components/CodeSplitting.jsx';

function App() {
    const [user, setUser] = useState({
        username: 'Peter',
        role: 'admin',
    }); 

    return (
        <>
            <h1>React Router</h1>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/cities:plovdiv">City</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/admin">Admin</Link>
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
                <Route path='/about/*' element={<About />} />
                <Route path='/cities/:city?' element={<City />} />
                <Route path='/redirect' element={<Redirect />} />
                <Route path='/login' element={<Login />} />
                <Route path='/code-splitting' element={<CodeSplitting />} />

                <Route path='/admin' element={<Admin />}>
                    <Route index element={<Dashboard />} />
                    <Route path='users' element={<AdminUsers />} />
                    <Route path='posts' element={<AdminPosts />} />
                </Route>

                <Route element={<Layout />}>
                    <Route path='/layout-demo' element={<h3>Inside layout</h3>} />
                    <Route path='/layout-demo2' element={<h3>Inside layout 2</h3>} />
                </Route>

                <Route element={<RouteGuard user={user} />}>
                    <Route path='/profile' element={<Profile user={user} />} />
                </Route>

                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App
