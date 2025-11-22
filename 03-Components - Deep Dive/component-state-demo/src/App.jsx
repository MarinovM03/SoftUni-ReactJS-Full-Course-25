import './App.css'
import Calendar from './components/Calendar.jsx'
import Counter from './components/Counter.jsx'
import MovieList from './components/MovieList.jsx'
import Timer from './components/Timer.jsx'
import Typer from './components/Typer.jsx'

function App() {
    return (
        <div>
            <h1>Components Deep Dive</h1>

            <Timer />

            <Counter />

            <Calendar />

            <MovieList />

            <Typer />
        </div>
    )
}

export default App