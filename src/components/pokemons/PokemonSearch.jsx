import { useState, useContext, useEffect } from 'react'
import PokedexContext from '../../context/pokedex/PokedexContext'
import AlertContext from '../../context/alert/AlertContext'

import PokemonItem from './PokemonItem'
import LoadingBall from '../layout/LoadingBall'

function PokemonSearch() {
  useEffect(() => {
    fetchPokemons()
  }, [])

  const [filter, setFilter] = useState('')

  const { pokemons, fetchPokemons, loading, searchPokemons, clearPokemons } =
    useContext(PokedexContext)
  const { setAlert } = useContext(AlertContext)

  const filterPokemon = (pokemons, filter) => {
    const filtered = pokemons.filter(pokemon => {
      return pokemon.name.includes(filter)
    })
    searchPokemons(filtered)
  }

  const handleChange = e => {
    setFilter(e.target.value)

    if (filter === '') {
      setAlert('Please enter something', 'error')
    } else {
      filterPokemon(pokemons, filter)
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
          <form action="">
            <div className="form-control">
              <div className="relative">
                <input
                  type="text"
                  className="w-full pr-40 bg-gray-200 input input-lg text-black"
                  placeholder="Search"
                  value={filter}
                  onChange={handleChange}
                />
                <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
        {pokemons.length > 0 && (
          <div>
            <button
              onClick={clearPokemons}
              className="btn btn-ghost btn-lg"
            >
              Clear
            </button>
          </div>
        )}
      </div>
      {!loading ? (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {pokemons.map(pokemon => (
            <PokemonItem
              key={pokemons.indexOf(pokemon)}
              pokemon={pokemon}
            >
              {pokemon.name}
            </PokemonItem>
          ))}
        </div>
      ) : (
        <LoadingBall />
      )}
    </>
  )
}
export default PokemonSearch
