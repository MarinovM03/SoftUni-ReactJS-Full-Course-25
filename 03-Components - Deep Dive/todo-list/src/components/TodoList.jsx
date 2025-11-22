import { useState } from "react";
import { useEffect } from "react";
import TodoItem from "./TodoItem.jsx";

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(response => response.json())
            .then(data => {
                setTodos(Object.values(data));
            })
            .catch(err => alert(err.message));
    }, []);

    return (
        <ul>
            {todos.map(todo => 
                <TodoItem 
                    key={todo._id}
                    title={todo.title} 
                    completed={todo.completed} 
                    _id={todo._id}
                />
            )}
        </ul>
    );
}