import axios from 'axios';
import firebase from 'firebase';

export const getHeroes = () => async(dispatch) => {
  const heroes = await firebase.database().ref('/heroes').once('value')
  dispatch({ type: 'FETCH_HEROES_FULFILLED', payload: heroes.val()})
}

export const getUser = (id) => async(dispatch) => {
  const hero = await firebase.database().ref(`/heroes/${id}`).once('value')
  dispatch({ type: 'FETCH_HERO_FULFILLED', payload: hero.val()})
}

function updateHero(hero,id){
  return axios.post(`http://localhost/api/heroes/update`,hero)
}

export const updateHeroAndNotify = (hero, id) => async(dispatch) =>{
  await firebase.database().ref(`/heroes/${id}`).update(hero)
  dispatch({type: "SHOW_NOTIFICATION", payload: { message: "Hero Updated", type: "success" } });
}

function saveHero(hero){
  return axios.post('http://localhost/api/heroes/save',hero)
}

export const saveHeroAndNotify = (values) => async(dispatch) => {
  await firebase.database().ref('/heroes/').push(values)
  dispatch({type: "SHOW_NOTIFICATION", payload: { message: "Hero Added", type: "success" } })
}

function deteleHero(id){
  return axios.delete(`http://localhost/api/heroes/${id}`)
}
export function deleteHeroAndRefresh(id){
  return function (dispatch){
    return deteleHero(id).then(() =>{
      dispatch(getHeroes());
      dispatch({type: "SHOW_NOTIFICATION", payload: { message: "Hero Deleted", type: "warning" } });
    })
  }
}
