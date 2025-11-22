import styles from './TodoItem.module.css';

export default function TodoItem({
    title,
    completed,
    _id
}) {
    return (
        <li className={completed && styles['todo-completed']}>{title}</li>
    );
}