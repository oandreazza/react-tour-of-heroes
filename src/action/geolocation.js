import axios from 'axios'
import qs from 'qs'

const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?'
const GEO_KEY = 'AIzaSyDJAtCWwojtjK2crpKGZ6KxWWsG_oLAk_c'

const DEFAULT_PARAM = {
  key: GEO_KEY
}
export const getAddress = (address) => async(dispatch) => {
  const paramQuery = qs.stringify({...DEFAULT_PARAM, address:address})
  const geoURL = `${BASE_URL}${paramQuery}`
  const {data:{results}} = await axios.get(geoURL)

  dispatch({type:'ADDRESS_FULFILLED', payload:results[0]})
}
