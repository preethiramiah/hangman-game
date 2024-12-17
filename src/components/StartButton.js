import { useState } from 'react'

const StartButton = ({ startHandler }) => {
  const [isClickedOnce, setIsClickedOnce] = useState(false)

  const clickHandler = () => {
    startHandler()
    if (isClickedOnce) return
    setIsClickedOnce(true)
  }

  return (
    <button
      onClick={clickHandler}
      className='mt-4 bg-pink-600 active:bg-pink-900 hover:bg-pink-700 border-4 border-solid border-gray-600 rounded-full cursor-pointer inline-block size-20 text-white font-bold shadow-[inset_0_-2px_0_3px_#be185d,0_5px_5px_rgba(3,25,41,0.17),inset_0_15px_rgba(255,255,255,0.25)] hover:shadow-[inset_0_-2px_0_3px_#9d174d,0_5px_5px_rgba(0,0,0,0.17),inset_0_15px_rgba(255,255,255,0.32)]'
    >
      PLAY
    </button>
  )
}

export default StartButton
