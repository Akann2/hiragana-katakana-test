import React, { useState } from "react";
import styles from './Questions.module.scss'
function Question(props) {
    const Array = [
        { "hiragana": "あ", "katakana": 'ア', value: "a" },
        { "hiragana": "い", "katakana": 'イ', value: "i" },
        { "hiragana": "う", "katakana": 'ウ', value: "u" },
        { "hiragana": "え", "katakana": 'エ', value: "e" },
        { "hiragana": "お", "katakana": 'オ', value: "o" },
        { "hiragana": "か", "katakana": 'カ', value: "ka" },
        { "hiragana": "き", "katakana": 'キ', value: "ki" },
        { "hiragana": "く", "katakana": 'ク', value: "ku" },
        { "hiragana": "け", "katakana": 'ケ', value: "ke" },
        { "hiragana": "こ", "katakana": 'コ', value: "ko" },
        { "hiragana": "さ", "katakana": 'サ', value: "sa" },
        { "hiragana": "し", "katakana": 'シ', value: "shi" },
        { "hiragana": "す", "katakana": 'ス', value: "su" },
        { "hiragana": "せ", "katakana": 'セ', value: "se" },
        { "hiragana": "そ", "katakana": 'ソ', value: "so" },
        { "hiragana": "た", "katakana": 'タ', value: "ta" },
        { "hiragana": "ち", "katakana": 'チ', value: "chi" },
        { "hiragana": "つ", "katakana": 'ツ', value: "tsu" },
        { "hiragana": "て", "katakana": 'テ', value: "te" },
        { "hiragana": "と", "katakana": 'ト', value: "to" },
        { "hiragana": "な", "katakana": 'ナ', value: "na" },
        { "hiragana": "に", "katakana": 'ニ', value: "ni" },
        { "hiragana": "ぬ", "katakana": 'ヌ', value: "nu" },
        { "hiragana": "ね", "katakana": 'ネ', value: "ne" },
        { "hiragana": "の", "katakana": 'ノ', value: "no" },
        { "hiragana": "は", "katakana": 'ハ', value: "ha" },
        { "hiragana": "ひ", "katakana": 'ヒ', value: "hi" },
        { "hiragana": "ふ", "katakana": 'フ', value: "fu" },
        { "hiragana": "へ", "katakana": 'ヘ', value: "he" },
        { "hiragana": "ほ", "katakana": 'ホ', value: "ho" },
        { "hiragana": "ま", "katakana": 'マ', value: "ma" },
        { "hiragana": "み", "katakana": 'ミ', value: "mi" },
        { "hiragana": "む", "katakana": 'ム', value: "mu" },
        { "hiragana": "め", "katakana": 'メ', value: "me" },
        { "hiragana": "も", "katakana": 'モ', value: "mo" },
        { "hiragana": "や", "katakana": 'ヤ', value: "ya" },
        { "hiragana": "ゆ", "katakana": 'ユ', value: "yu" },
        { "hiragana": "よ", "katakana": 'ヨ', value: "yo" },
        { "hiragana": "ら", "katakana": 'ラ', value: "ra" },
        { "hiragana": "り", "katakana": 'リ', value: "ri" },
        { "hiragana": "る", "katakana": 'ル', value: "ru" },
        { "hiragana": "れ", "katakana": 'レ', value: "re" },
        { "hiragana": "ろ", "katakana": 'ロ', value: "ro" },
        { "hiragana": "わ", "katakana": 'ワ', value: "wa" },
        { "hiragana": "を", "katakana": 'ヲ', value: "wo" },
        { "hiragana": "ん", "katakana": "ン", value: "n" },
    ];
    const hiraganaArray = [...Array];

    const [hiraganaArr, setHiraganaArr] = useState(hiraganaArray);

    const [currentHiragana, setCurrentHiragana] = useState(
        hiraganaArr[Math.floor(Math.random() * hiraganaArr.length)]
    );

    const [wrongAnswer, setWrongAnswer] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [totalQ, setTotalQ] = useState(0)

    console.log(props)
    let answerArray = [];
    for (let i = 0; answerArray.length < 4; i++) {
        if (answerArray.indexOf(currentHiragana.value) === -1) {
            answerArray.push(currentHiragana.value);
        }
        answerArray.push(
            hiraganaArr[Math.floor(Math.random() * hiraganaArr.length)].value
        );
        answerArray = [...new Set(answerArray)];
    }
    console.log(currentHiragana.hiragana)
    console.log(currentHiragana[props.alp])
    answerArray.sort(() => Math.random() - 0.5);
    if (totalQ >= props.total) {
        return (
            <div className={styles.result}>
                <h1>Результат</h1>
                <p>Всего вопросов: {totalQ}</p>
                <p>Верно: {correctAnswer}</p>
                <p>Ошибок: {wrongAnswer}</p>

                <button onClick={() => props.f(true)}>Вернуться</button>
            </div>
        )
    }
    return (
            <div className={styles.questionWindow}>
                <h2 className={styles.question}>{currentHiragana[props.alphabet]}</h2>
                <p>{totalQ}</p>
                <ul className={styles.answerWindow}>
                    {answerArray.map((obj) => (
                        <li
                            key={obj}
                            className={styles.answers}
                            onClick={() =>
                                currentHiragana.value === obj
                                    ? (setHiraganaArr(
                                        hiraganaArr.filter((item) => item.value !== obj)
                                    ),
                                        setCurrentHiragana(
                                            hiraganaArr[Math.floor(Math.random() * hiraganaArr.length)]
                                        ),
                                        setCorrectAnswer(correctAnswer + 1),
                                        setTotalQ(totalQ + 1))
                                    : (setWrongAnswer(wrongAnswer + 1),
                                        setCurrentHiragana(
                                            hiraganaArr[Math.floor(Math.random() * hiraganaArr.length)]
                                        ), setTotalQ(totalQ + 1))
                            }
                        >
                            {obj}
                        </li>
                    ))}
                </ul>
            </div>
    );
}

export default Question;
