import styles from './End.module.scss'

function End(props) {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Results</h1>
                <p>{props.alp}</p>
                <p className={styles.bold}>Question {props.totalQ}</p>
            </div>
            <div className={styles.result}>
                {props.correctAnswer}/{props.totalQ}
            </div>
            <div className={styles.details}>
                <h1>Details</h1>
                COMING SOON
            </div>
            <div className={styles.button}>
                <button onClick={() => props.f(true)}>End</button>
            </div>
        </div>
    )
}
export default End