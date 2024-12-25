import { useEffect, useState } from "react"
import Keyboard from "./Keyboard"

const Word = ({ word, setInCorrectCount, letters, setLetters, isSuccess, isFailure }) => {
  const [userLetter, setUserLetter] = useState(null)

  useEffect(() => {
    setUserLetter(null)
  }, [word])

  useEffect(() => {
    if (!userLetter) return

    const updatedLetters = letters.map((letter, index) => {
      if (word?.[index]?.toLowerCase() === userLetter.toLowerCase()) return userLetter.toUpperCase()
      return letter
    })
    setLetters(updatedLetters)

    if (updatedLetters.join('').trim().toLowerCase() === word.trim().toLowerCase()) return setInCorrectCount(0)

    if (word.toLowerCase().includes(userLetter.toLowerCase())) return
    setInCorrectCount(count => ++count)

    // eslint-disable-next-line
  }, [userLetter])

  if (!letters?.length) return

  return (
    <>
      {!isFailure && <div className='flex justify-center gap-2 flex-wrap'>
        {
          letters.map((letter, index) => {
            return (
              <div className='w-[52px] h-[60px] bg-blue-600 rounded-2xl flex items-center justify-center' key={`letter${index}`}>
                <span className='font-winterMinie text-3xl text-white text-center'>{letter}</span>
              </div>
            )
          })
        }
      </div>}
      {!isSuccess && !isFailure && <Keyboard setUserLetter={setUserLetter} />}
    </>
  )
}

export default Word
