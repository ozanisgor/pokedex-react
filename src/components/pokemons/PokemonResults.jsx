import { useEffect, useState } from 'react'

import LoadingBall from '../layout/LoadingBall'
import PokemonItem from './PokemonItem'

function PokemonResults() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPokemons()
  }, [])

  const fetchPokemons = async () => {
    const response = await fetch(`${process.env.REACT_APP_POKEAPI_URL}/pokemon`)
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

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {pokemons.map(pokemon => (
          <PokemonItem
            key={pokemon.url}
            pokemon={pokemon}
          >
            {pokemon.name}
          </PokemonItem>
        ))}
      </div>
    )
  } else {
    return <LoadingBall />
  }
}
export default PokemonResults
