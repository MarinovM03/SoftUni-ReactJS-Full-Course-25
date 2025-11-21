import './App.css'
import Calendar from './components/Calendar.jsx'
import Counter from './components/Counter.jsx'
import MovieList from './components/MovieList.jsx'
import Timer from './components/Timer.jsx'

function App() {
    return (
        <div>
            <h1>Component Deep Dive</h1>

            <Timer />

            <Counter />

            <Calendar />

            <MovieList />

        </div>
    )
}

export default App