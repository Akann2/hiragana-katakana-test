import { useState } from 'react'
import Question from './components/Questions'
import Settings from './components/Settings'

import './App.scss'

function App() {
  const [currentAlphabet, setCurrentAlphabet] = useState('hiragana')
  const [totalQuestions, setTotalQuestions] = useState(10)
  const [settingsOpened, setSettingsOpened] = useState(true)
  return (
    <div>
      {settingsOpened ? <Settings totalQ={setTotalQuestions} opened={setSettingsOpened} setApl={setCurrentAlphabet} /> : null}
      {!settingsOpened ? <Question alphabet={currentAlphabet} total={totalQuestions} f={setSettingsOpened} /> : null}
    </div>
  )
}

export default App
