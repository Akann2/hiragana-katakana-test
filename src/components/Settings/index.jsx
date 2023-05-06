import styles from './Settings.module.scss'
import { useState } from 'react'
function Setting(props) {

    const [items, setItems] = useState([
        { name: 10, key: 1},
        { name: 15, key: 2},
        { name: 20, key: 3},
        { name: 30, key: 4},
        { name: 40, key: 5}
    ]);
    return (

        <div className={styles.settingsBlock}>
            <div className={styles.block}>
                <h1>Alphabet</h1>
                <ul>
                    <li onClick={() => props.setApl('hiragana')}>Hiragana</li>
                    <li onClick={() => props.setApl('katakana')}>Katakana</li>
                </ul>
            </div>
            <div className={styles.block}>
                <h1>Total questions</h1>
                <ul >
                    {items.map((obj) => (
                        <li
                            key={obj.key}
                            onClick={() => (props.totalQ(obj.name))}>
                            {obj.name}
                        </li>
                    ))}
                </ul>

            </div>
            <button onClick={() => props.opened(false)}>START</button>
        </div>
    )
}

export default Setting