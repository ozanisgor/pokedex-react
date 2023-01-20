import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function PokemonItem({ pokemon: { name, id } }) {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
                alt="Profile"
              />
            </div>
          </div>
        </div>
        <h2 className="card-title">{name}</h2>
        <Link
          className="text=base-content text-opacity-40"
          to={`/pokemon/${name}`}
        >
          Visit Pokemon
        </Link>
      </div>
    </div>
  )
}

PokemonItem.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default PokemonItem
