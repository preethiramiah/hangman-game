const wordLengths = [4, 5, 6, 7, 8]

const getWordsByLength = async url => {
  const response = await fetch(url)
  const data = await response.json()
  if (!data?.length) return []
  return data.map(wordObject => wordObject.word)
}

export const fetchWords = async () => {
  try {
    const response = await Promise.all(
      wordLengths.map(length => getWordsByLength(`https://api.datamuse.com/words?sp=${'?'.repeat(length)}&max=50`))
    )
    console.log('Words fetched successfully')
    if (!response?.length) return []
    return response.flat()
  } catch (error) {
    console.error('Error when fetching words: ', error.message)
    return []
  }
}