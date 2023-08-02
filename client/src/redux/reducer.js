import {
  LOAD_API,
  LOAD_FRONT,
  LOAD_DATABASE,
  LOAD_DATABASE_TO_CACHE,
  LOAD_API_TO_CACHE,
  LOAD_TYPES,
  FILTER_TYPES,
  RESET_CACHE,
  ORDER_A_Z,
  ORDER_Z_A,
  ORDER_BY_POWER_ASC,
  ORDER_BY_POWER_DESC,
  FILTER_BY_TYPE,
} from "../redux/actions" // las acctions se importan en el reducer
const initialState = {
  typesOfPokemons: [], // aqui se guardan los tipos de pokemones en la carga inicial
  allPokemons: [], // carga inicial se guarda aqui
  cache: [], // todo antes de mostrarse se guarda aqui
  shownInFront: [], // aqui se guarda la pagina actual que se muestra en la app
  databasePokemons: [], // aqui se guardan los pokemones de la base de datos
}

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_API: {
      return {
        ...state,
        allPokemons: payload,
        cache: payload,
      }
    }
    case LOAD_FRONT: {
      const start = (payload - 1) * 12
      const end = payload * 12
      return { ...state, shownInFront: state.cache.slice(start, end) }
    }
    case LOAD_DATABASE: {
      return { ...state, databasePokemons: payload }
    }
    case LOAD_DATABASE_TO_CACHE: {
      return { ...state, cache: state.databasePokemons }
    }

    case LOAD_API_TO_CACHE: {
      return { ...state, cache: state.allPokemons }
    }

    case LOAD_TYPES: {
      return {
        ...state,
        typesOfPokemons: payload,
      }
    }

    case FILTER_TYPES: {
      const byType = []
      state.allPokemons.forEach((filtrado) => {
        filtrado.Types.forEach((tipo) => {
          if (tipo.tipo === payload) {
            byType.push(filtrado)
          }
        })
      })
      // console.log("file: reducer.js:50  payload:", payload)
      // console.log("file: reducer.js:54  state.allPokemons:", state.allPokemons)
      // console.log("file: reducer.js:55  byType:", byType)
      return { ...state, cache: byType }
    }
    case RESET_CACHE: {
      return { ...state, cache: state.allPokemons }
    }
    case ORDER_A_Z: {
      const orderAZArr = state.cache.sort((a, b) => {
        if (a.Nombre > b.Nombre) {
          return 1
        }
        if (a.Nombre < b.Nombre) {
          return -1
        }
        return 0
      })

      return { ...state, cache: orderAZArr }
    }
    case ORDER_Z_A: {
      const orderAZArr = state.cache.sort((a, b) => {
        if (a.Nombre < b.Nombre) {
          return 1
        }
        if (a.Nombre > b.Nombre) {
          return -1
        }
        return 0
      })

      return { ...state, cache: orderAZArr }
    }
    case ORDER_BY_POWER_ASC: {
      const orderHPAsc = state.cache.sort((a, b) => {
        if (a.Ataque > b.Ataque) {
          return 1
        }
        if (a.Ataque < b.Ataque) {
          return -1
        }
        return 0
      })

      return { ...state, cache: orderHPAsc }
    }
    case ORDER_BY_POWER_DESC: {
      const orderHPDesc = state.cache.sort((a, b) => {
        if (a.Ataque < b.Ataque) {
          return 1
        }
        if (a.Ataque > b.Ataque) {
          return -1
        }
        return 0
      })

      return { ...state, cache: orderHPDesc }
    }

    case FILTER_BY_TYPE: {
      return { ...state }
    }
    default:
      return { ...state }
  }
}

export default rootReducer
