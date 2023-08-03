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
  SET_GLOBAL_ORIGIN,
  SET_GLOBAL_LOADER,
} from "../redux/actions" // las acctions se importan en el reducer
const initialState = {
  allPokemons: [], // carga inicial se guarda aqui
  typesOfPokemons: [], // aqui se guardan los tipos de pokemones en la carga inicial
  cache: [], // todo antes de mostrarse se guarda aqui
  shownInFront: [], // aqui se guarda la pagina actual que se muestra en la app
  databasePokemons: [], // aqui se guardan los pokemones de la base de datos
  auxGlobalStates: { origin: "API", loader: true }, // aqui se guarda el origen de la data que se muestra en la app
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
      //TODO: segun el origen de la data filtrar por tipo, esta action recibira el origen de la data y el tipo para filtrar asi nunca se pierde la data original y rellena cache sin problemas.
      let iterator = []
      payload.origin === "API" && (iterator = state.allPokemons)
      payload.origin === "Database" && (iterator = state.databasePokemons)
      const byType = []
      iterator.forEach((filtrado) => {
        filtrado.Types.forEach((tipo) => {
          if (tipo.tipo === payload.type) {
            byType.push(filtrado)
          }
        })
      })

      return { ...state, cache: byType }
    }
    case RESET_CACHE:
      {
        if (payload === "API") {
          return { ...state, cache: state.allPokemons }
        }
        if (payload === "Database") {
          return { ...state, cache: state.databasePokemons }
        }
      }
      break
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

    case SET_GLOBAL_ORIGIN: {
      return { ...state, auxGlobalStates: { ...state.auxGlobalStates, origin: payload } }
    }
    case SET_GLOBAL_LOADER: {
      return { ...state, auxGlobalStates: { ...state.auxGlobalStates, loader: payload } }
    }
    case FILTER_BY_TYPE: {
      return { ...state }
    }
    default:
      return { ...state }
  }
}

export default rootReducer
