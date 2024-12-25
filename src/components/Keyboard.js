import { useCallback, useEffect, useState } from 'react'

const keyboardRow1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
const keyboardRow2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
const keyboardRow3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

const Row = ({ keys, rowIndex, letterClickHandler, selectedLetters }) => {
  if (!keys?.length) return null

  return (
    <div className={`flex justify-center gap-1 sm:gap-2`}>
      {
        keys.map((letter, index) => {
          const isSelected = selectedLetters.includes(letter.toLowerCase())
          const keyClass = `text-lg sm:text-xl font-mouseMemoirs rounded text-center text-blue-950
              size-6 sm:size-8 pt-[2px] focus:outline-none bg-gradient-to-b from-white via-slate-100 to-slate-300
              ${isSelected ? 'opacity-25' : 'hover:bg-gradient-to-t hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 hover:text-white cursor-pointer'}`
          return (
            <span
              className={keyClass}
              key={`letter${rowIndex}${index}`}
              onClick={() => {
                if (isSelected) return
                letterClickHandler(letter)
              }}
            >{letter}</span>
          )
        })
      }
    </div>
  )
}

const Keyboard = ({ setUserLetter }) => {
  const [selectedLetters, setSelectedLetters] = useState([])

  const letterClickHandler = letter => {
    setSelectedLetters(prev => [...prev, letter.toLowerCase()])
    setUserLetter(letter)
  }

  const keyDownHandler = useCallback(event => {
    if (event.keyCode < 65 || event.keyCode > 90) return
    setSelectedLetters(prev => [...prev, event.key.toLowerCase()])
    setUserLetter(event.key)
  }, [setUserLetter])

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [keyDownHandler])

  return (
    <div className="flex flex-col items-center gap-3">
      <Row keys={keyboardRow1} letterClickHandler={letterClickHandler} rowIndex="0" selectedLetters={selectedLetters} />
      <Row keys={keyboardRow2} letterClickHandler={letterClickHandler} rowIndex="1" selectedLetters={selectedLetters} />
      <Row keys={keyboardRow3} letterClickHandler={letterClickHandler} rowIndex="2" selectedLetters={selectedLetters} />
    </div>
  )
}

export default Keyboard
