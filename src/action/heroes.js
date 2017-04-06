import axios from 'axios';
import { BrowserHistory } from 'react-router'


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

export function updateHero(hero){
  return {
    type: "UPDATE_HERO",
    payload: axios.post(`http://localhost/api/heroes/update`,hero)
  }
}

export function saveHero(hero){
  return {
    type: "SAVE_HERO",
    payload: axios.post('http://localhost/api/heroes/save',hero)
  }
}

function deteleHero(id){
  return axios.delete(`http://localhost/api/heroes/${id}`)
}

export function deleteHeroAndRefresh(id){
  return function (dispatch){
    return deteleHero(id).then(() =>{
      console.log(BrowserHistory);
      dispatch(getHeroes());
      dispatch({type: "SHOW_NOTIFICATION", payload: { message: "Hero Deleted", type: "warning" } });
      //dispatch(routerActions.push("/heroes/add"));
    })
  }
}
