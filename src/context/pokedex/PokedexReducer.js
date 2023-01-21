const pokedexReducer = (state, action) => {
  switch (action.type) {
    case 'GET_POKEMONS':
      return {
        ...state,
        pokemons: action.payload,
        loading: false
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      }
    case 'CLEAR_POKEMONS':
      return {
        ...state,
        pokemons: []
      }
    default:
      return state
  }
}

export default pokedexReducer
