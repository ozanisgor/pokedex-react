import { createContext, useReducer } from 'react'
import pokedexReducer from './PokedexReducer'

const PokedexContext = createContext()

const POKEAPI_URL = process.env.REACT_APP_POKEAPI_URL

export const PokedexProvider = ({ children }) => {
  const initialState = {
    pokemons: [],
    loading: false
  }

  const [state, dispatch] = useReducer(pokedexReducer, initialState)

  // Get initial pokemons (testing purposes)
  const fetchPokemons = async () => {
    setLoading()

    const response = await fetch(`${POKEAPI_URL}/pokemon`)
    const data = await response.json()

    fetchPokemonDetails(data.results)
  }

  // another fetch for get single pokemon details
  const fetchPokemonDetails = async data => {
    const details = await Promise.all(
      data.map(async p => {
        const response = await fetch(
          `${process.env.REACT_APP_POKEAPI_URL}/pokemon/${p.name}`
        )
        const data = await response.json()
        return data
      })
    )

    dispatch({
      type: 'GET_POKEMONS',
      payload: details
    })
  }

  const setLoading = () =>
    dispatch({
      type: 'SET_LOADING'
    })

  return (
    <PokedexContext.Provider
      value={{
        pokemons: state.pokemons,
        loading: state.loading,
        fetchPokemons,
        fetchPokemonDetails
      }}
    >
      {children}
    </PokedexContext.Provider>
  )
}

export default PokedexContext
