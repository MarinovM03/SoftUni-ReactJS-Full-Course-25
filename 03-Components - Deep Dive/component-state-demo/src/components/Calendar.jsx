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

                <strong>Invalid Day</strong>

                <button onClick={resetDayClickHandler}>Reset Days</button>
            </section>
        );
    }

    return (
        <section>
            <h2>Calendar</h2>

            <div>Current Day: {days[day]}</div>

            <button onClick={nextDayClickHandler}>Next Day</button>
        </section>
    );
}