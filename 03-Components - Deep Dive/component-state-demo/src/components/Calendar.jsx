import { useState } from "react";

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

export default function Calendar() {
    const [day, setDay] = useState(0);

    const nextDayClickHandler = () => {
        setDay(prevState => prevState + 1);
    }

    const resetDayClickHandler = () => {
        setDay(0);
    }

    if (day > 6) {
        return  (
            <section>
                <h2>Calendar</h2>

                <p><strong>Invalid Day</strong></p>

                <button onClick={resetDayClickHandler}>Reset Days</button>
            </section>
        );
    }

    const isWorkedDay = day < 5;

    return (
        <section>
            <h2>Calendar</h2>

            <h3>
                {isWorkedDay 
                    ? <span>Workday</span> 
                    : <span>Weekend</span>
                }
            </h3>
            <div>Current Day: <strong>{days[day]}</strong></div>

            <button onClick={nextDayClickHandler}>Next Day</button>
        </section>
    );
}