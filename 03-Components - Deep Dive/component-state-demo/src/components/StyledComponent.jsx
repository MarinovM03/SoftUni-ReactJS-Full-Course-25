import styles from './StyledComponent.module.css';

export default function StyledComponent() {
    return (
        <section>
            <h2>Styled Component</h2>

            <p className={styles['fancy-text']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem reprehenderit beatae impedit ad consectetur distinctio laudantium voluptas quo nisi!</p>
        </section>
    );
}