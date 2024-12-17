import { useCallback, useEffect } from "react"

const keyboardRow1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
const keyboardRow2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
const keyboardRow3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

const Row = ({ keys, rowIndex, letterClickHandler }) => {
  if (!keys?.length) return null

  return (
    <div className={`flex justify-center gap-2`}>
      {
        keys.map((letter, index) => {
          return (
            <span
              className="size-7 pt-1 font-grandRainbow cursor-pointer rounded text-center text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800"
              key={`letter${rowIndex}${index}`}
              onClick={() => letterClickHandler(letter)}
            >{letter}</span>
          )
        })
      }
    </div>
  )
}

const Keyboard = ({ setUserLetter }) => {
  const letterClickHandler = letter => {
    setUserLetter(letter)
  }

  const keyDownHandler = useCallback(event => {
    if (event.keyCode < 65 || event.keyCode > 90) return
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
      <Row keys={keyboardRow1} letterClickHandler={letterClickHandler} rowIndex="0" />
      <Row keys={keyboardRow2} letterClickHandler={letterClickHandler} rowIndex="1" />
      <Row keys={keyboardRow3} letterClickHandler={letterClickHandler} rowIndex="2" />
    </div>
  )
}

export default Keyboard
