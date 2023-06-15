import styles from './End.module.scss'

function End(props) {
    let arr = props.answers
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
                <ul className={styles.answers}>
                    {arr.map((obj) => (
                        <li key={obj.indexOf} style={obj.check ? {backgroundColor: '#93DB8C'} : {backgroundColor: '#DB8C8C'}}>
                            {obj.word}<span style={{fontSize:'0.7rem'}}>{arr.indexOf(obj)+1}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.button}>
                <button onClick={() => props.f(true)}>End</button>
            </div>
        </div>
    )
}
export default End