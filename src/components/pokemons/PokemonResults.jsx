import { useContext } from 'react'
import PokedexContext from '../../context/pokedex/PokedexContext'

import LoadingBall from '../layout/LoadingBall'
import PokemonItem from './PokemonItem'

function PokemonResults() {
  const { pokemons, loading } = useContext(PokedexContext)

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
