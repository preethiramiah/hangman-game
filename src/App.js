import { useActions, useWordsContext } from './Context'
import HangmanImage from './components/HangmanImage'
import { useEffect, useState } from 'react'
import Word from './components/Word'
import StartButton from './components/StartButton'

function App() {
  const { currentWord, words } = useWordsContext()
  const { setCurrentWord } = useActions()
  const [inCorrectCount, setInCorrectCount] = useState(false)
  const [letters, setLetters] = useState([])
  const isFailure = inCorrectCount >= 7
  const isSuccess = letters?.join('')?.trim()?.toLowerCase() === currentWord?.trim()?.toLowerCase()

  const startNewGame = () => {
    setCurrentWord()
    setInCorrectCount(0)
  }

  useEffect(() => {
    if (!currentWord) return
    setLetters(Array(currentWord.length).fill(''))
  }, [currentWord])

  if (!words?.length) return <div>Loading</div>

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col items-center gap-10 p-10 w-svw h-dvh bg-gradient-to-b from-slate-500 via-zinc-400  to-stone-500'>
        <StartButton startHandler={startNewGame} />
        {
          currentWord && (
            <>
              <HangmanImage
                inCorrectCount={inCorrectCount}
                isSuccess={isSuccess}
                isFailure={isFailure}
                currentWord={currentWord}
              />
              <Word
                word={currentWord}
                setInCorrectCount={setInCorrectCount}
                letters={letters}
                setLetters={setLetters}
                isSuccess={isSuccess}
                isFailure={isFailure}
              />
            </>
          )
        }
      </div>
    </div>
  );
}

export default App;
