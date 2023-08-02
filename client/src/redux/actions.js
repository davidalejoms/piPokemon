export const LOAD_API = "LOAD_API" // carga todo desde el api al reducer en showInFront
export const LOAD_FRONT = "LOAD_FRONT" // carga todo desde el api al reducer en showInFront
export const LOAD_DATABASE = "LOAD_DATABASE" // desde el api en el enponit base de datos al reducer en databasePokemons
export const LOAD_DATABASE_TO_CACHE = "LOAD_DATABASE_TO_CACHE" // desde el api en el enponit base de datos al reducer en databasePokemons
export const LOAD_API_TO_CACHE = "LOAD_API_TO_CACHE" // desde el api en el enponit base de datos al reducer en databasePokemons
export const LOAD_TYPES = "LOAD_TYPES" // desde el api en el enponit types al reducer en typesOfPokemons
export const FILTER_TYPES = "FILTER_TYPES" // desde reducer DEVOLVER POR TIPO
export const RESET_CACHE = "RESET_CACHE" // desde reducer DEVOLVER POR TIPO
export const ORDER_A_Z = "ORDER_A_Z" // ordena el reducer en showInFront de la A a la Z
export const ORDER_Z_A = "ORDER_Z_A" // ordena el reducer en showInFront de la Z a la A
export const ORDER_BY_POWER_ASC = "ORDER_BY_POWER_ASC" //ordena el reducer en showInFront por poder de la menor a la mayor
export const ORDER_BY_POWER_DESC = "ORDER_BY_POWER_DESC" //ordena el reducer en showInFront por poder de la mayor a la menor
export const FILTER_BY_TYPE = "FILTER_BY_TYPE" //filtra el reducer en showInFront por tipo de pokemon

export const loadApi = (data) => {
  return {
    type: LOAD_API,
    payload: data,
  }
}

export const loadFront = (page) => {
  return { type: LOAD_FRONT, payload: page }
}
export const loadTypes = (types) => {
  return { type: LOAD_TYPES, payload: types }
}
export const filterTypes = (type) => {
  return { type: FILTER_TYPES, payload: type }
}
export const resetCache = () => {
  return { type: RESET_CACHE, payload: null }
}
export const orderAZ = (type) => {
  return { type: ORDER_A_Z, payload: type }
}
export const orderZA = (type) => {
  return { type: ORDER_Z_A, payload: type }
}
export const orderByPowerAsc = (type) => {
  return { type: ORDER_BY_POWER_ASC, payload: type }
}
export const orderByPowerDesc = (type) => {
  return { type: ORDER_BY_POWER_DESC, payload: type }
}
export const loadDataBase = (pokemons) => {
  return { type: LOAD_DATABASE, payload: pokemons }
}
export const loadDataBaseToCache = (pokemons) => {
  return { type: LOAD_DATABASE_TO_CACHE, payload: pokemons }
}
export const loadAPITocache = () => {
  return { type: LOAD_API_TO_CACHE, payload: null }
}
