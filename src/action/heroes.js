import axios from 'axios'

export function getHeroes(){
  return {
    type: "FETCH_HEROES",
    payload: axios.get('http://localhost/api/heroes')
  }
}

export function getUser(id){
  return {
    type: "FETCH_HERO",
    payload: axios.get(`http://localhost/api/heroes/${id}`)
  }
}
