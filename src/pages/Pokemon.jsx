import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PokedexContext from '../context/pokedex/PokedexContext'

function Pokemon() {
  const { pokemon, getPokemon } = useContext(PokedexContext)

  const params = useParams()

  useEffect(() => {
    getPokemon(params.name)
  }, [])

  {
    console.log(pokemon)
  }
  return <div>{pokemon.name}</div>
}
export default Pokemon
