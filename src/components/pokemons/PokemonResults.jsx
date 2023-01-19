import { useEffect, useState } from 'react'

import LoadingBall from '../layout/LoadingBall'

function PokemonResults() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPokemons()
  }, [])

  const fetchPokemons = async () => {
    const response = await fetch(`${process.env.REACT_APP_POKEAPI_URL}/pokemon`)
    const data = await response.json()
    const pokeData = await data.results

    setPokemons(pokeData)
    setLoading(false)
  }

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {pokemons.map(pokemon => (
          <h3 key={pokemon.url}>{pokemon.name}</h3>
        ))}
      </div>
    )
  } else {
    return <LoadingBall />
  }
}
export default PokemonResults
