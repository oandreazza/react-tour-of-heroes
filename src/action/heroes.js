import axios from 'axios';


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

function updateHero(hero){
  return axios.post(`http://localhost/api/heroes/update`,hero)
}

export function updateHeroAndNotify(hero){
  return function (dispatch){
    return updateHero(hero).then(() => {
      dispatch(getHeroes());
      dispatch({type: "SHOW_NOTIFICATION", payload: { message: "Hero Updated", type: "success" } });
    })
  }
}

function saveHero(hero){
  return axios.post('http://localhost/api/heroes/save',hero)
}

export function saveHeroAndNotify(values){
  return function (dispatch){
    return saveHero(values).then(() => {
      dispatch(getHeroes());
      dispatch({type: "SHOW_NOTIFICATION", payload: { message: "Hero Added", type: "success" } });
    })
  }
}

function deteleHero(id){
  return axios.delete(`http://localhost/api/heroes/${id}`)
}
export function deleteHeroAndRefresh(id){
  return function (dispatch){
    return deteleHero(id).then(() =>{
      dispatch(getHeroes());
      dispatch({type: "SHOW_NOTIFICATION", payload: { message: "Hero Deleted", type: "warning" } });
      //dispatch(routerActions.push("/heroes/add"));
    })
  }
}
