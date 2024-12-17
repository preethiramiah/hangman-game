import { createContext, useContext, useEffect, useReducer } from "react"
import { fetchWords } from "./api"

const SET_ALL_WORDS = 'set_all_words'
const SET_CURRENT_WORD = 'set_current_word'

const Context = createContext()

const initialState = {
  words: [],
  currentWord: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_ALL_WORDS:
      return {
        ...state,
        words: action.words
      }
    case SET_CURRENT_WORD:
      return {
        ...state,
        currentWord: action.currentWord
      }
    default: return { ...state }
  }
}

export default function ContextProvider ({ children, providedState }) {
  const [state, dispatch] = useReducer(reducer, providedState || initialState)

  const getAllWords = async () => {
    const words = await fetchWords()
    if (!words?.length) return
    dispatch({ type: SET_ALL_WORDS, words })
  }

  useEffect(() => {
    if (state.words?.length) return
    getAllWords()
  }, [state.words])

  const setCurrentWord = () => {
    if (!state.words?.length) return
    const randomIndex = Math.floor(Math.random() * (state.words.length - 1))
    const currentWord = state.words[randomIndex]
    if (!currentWord) return
    dispatch({ type: SET_CURRENT_WORD, currentWord })
  }

  const actions = {
    getAllWords,
    setCurrentWord
  }

  return (
    <Context.Provider value={{ state, actions }}>
      {children}
    </Context.Provider>
  )
}

export function useWordsContext () {
  return useContext(Context).state
}

export function useActions () {
  return useContext(Context).actions
}