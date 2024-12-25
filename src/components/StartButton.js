import { useState } from 'react'

const StartButton = ({ startHandler }) => {
  const [isClickedOnce, setIsClickedOnce] = useState(false)

  const clickHandler = () => {
    startHandler()
    if (isClickedOnce) return
    setIsClickedOnce(true)
  }

  return (
    <div className='bg-gradient-to-b from-[#344ABA] from-[0%] to-[rgba(0,20,121,0.83)] to-[100%]
      shadow-inner shadow-blue-400 w-[275px] h-[200px] md:w-[300px] rounded-[72px]
      flex flex-col items-center justify-center p-0 m-0'>
      <p
        className='absolute font-mouseMemoirs text-6xl font-extrabold top-[5px]
        bg-gradient-to-b from-[#67B6FF] to-[#FFFFFF] text-transparent bg-clip-text drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]'
      >
        Hangman
      </p>
      <button
        onClick={clickHandler}
        className='mt-4 rounded-full cursor-pointer bg-play bg-center bg-no-repeat bg-cover w-20 h-20 hover:bg-play-hover'
      />
    </div>
  )
}

export default StartButton
