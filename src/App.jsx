import { useState } from 'react'
import Question from './components/Questions'
import Settings from './components/Settings'

import './App.scss'

function App() {
  const [currentAlphabet, setCurrentAlphabet] = useState('Hiragana')
  const [totalQuestions, setTotalQuestions] = useState(10)
  const [settingsOpened, setSettingsOpened] = useState(true)
  return (
    <div className='container'>
      <div className="content">
        {settingsOpened ? <Settings totalQ={setTotalQuestions} opened={setSettingsOpened} setApl={setCurrentAlphabet} apl={currentAlphabet} totalQuestions={totalQuestions} /> : null}
        {!settingsOpened ? <Question alphabet={currentAlphabet} total={totalQuestions} f={setSettingsOpened} /> : null}
      </div>
    </div>
  )
}

export default App
