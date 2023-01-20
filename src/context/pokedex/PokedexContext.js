import { createContext, useState } from 'react'

const PokedexContext = createContext()

const POKEAPI_URL = process.env.REACT_APP_POKEAPI_URL

export const PokedexProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchPokemons = async () => {
    const response = await fetch(`${POKEAPI_URL}/pokemon`)
    const data = await response.json()

    fetchPokemonDetails(data.results)
    setLoading(false)
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
    setPokemons(details)
  }

  return (
    <PokedexContext.Provider
      value={{ pokemons, loading, fetchPokemons, fetchPokemonDetails }}
    >
      {children}
    </PokedexContext.Provider>
  )
}

export default PokedexContext
