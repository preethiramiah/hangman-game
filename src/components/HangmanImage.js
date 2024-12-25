import Image1 from '../assets/images/hangman-1.svg'
import Image2 from '../assets/images/hangman-2.svg'
import Image3 from '../assets/images/hangman-3.svg'
import Image4 from '../assets/images/hangman-4.svg'
import Image5 from '../assets/images/hangman-5.svg'
import Image6 from '../assets/images/hangman-6.svg'
import Image7 from '../assets/images/hangman-7.svg'
import Success from '../assets/images/success.png'

const imageMap = {
  1: Image1,
  2: Image2,
  3: Image3,
  4: Image4,
  5: Image5,
  6: Image6,
  7: Image7
}

const HangmanImage = ({ inCorrectCount, isSuccess, isFailure, currentWord }) => {
  if (isSuccess) {
    return (
      <>
        <p className='font-grandRainbow text-3xl font-extrabold text-white'>WELL DONE!</p>
        <img src={Success} alt='Success' className='size-64' />
      </>
    )
  }

  if (!inCorrectCount) {
    return (
      <p className='h-52 font-grandRainbow text-3xl text-white pt-16'>Let's see how this goes!!!</p>
    )
  }

  return (
    <>
      <img
        src={imageMap[inCorrectCount]}
        alt={`Incorrect attempt: ${inCorrectCount}`}
        className='h-52'
      />
      {isFailure && (
        <p className='bg-gradient-to-b from-[#344ABA] from-[0%] to-[rgba(0,20,121,0.83)] to-[100%] p-5
          rounded-3xl font-grandRainbow text-4xl font-extrabold text-white'>
          {currentWord.toUpperCase()}
        </p>
      )}
    </>
  )
}

export default HangmanImage
