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

    const isWorkday = day < 5;

    return (
        <section>
            <h2>Calendar</h2>

            <div>Current Day: <strong>{days[day]}</strong></div>

            <h3>
                {isWorkday 
                    ? <span>Workday</span> 
                    : <span>Weekend</span>
                }
            </h3>

            {isWorkday && (
                <div>
                    <h3>Work Schedule</h3>

                    <ul>
                        <li>First</li>
                        <li>Second</li>
                        <li>Third</li>
                    </ul>
                </div>
            )}

            <button onClick={nextDayClickHandler}>Next Day</button>
        </section>
    );
}