const pokedexReducer = (state, action) => {
  switch (action.type) {
    case 'GET_POKEMONS':
      return {
        ...state,
        pokemons: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default pokedexReducer
