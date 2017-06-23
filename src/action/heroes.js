import firebase from 'firebase';

export const getHeroes = () => async(dispatch) => {
  dispatch({ type: 'LOADING', payload: true})
  firebase.database().ref('/heroes').on('value', (snapshot) => {
    dispatch({ type: 'FETCH_HEROES_FULFILLED', payload: snapshot.val()})
    dispatch({ type: 'LOADING', payload: false})
  })
}

export const getHero = (id) => async(dispatch) => {
  dispatch({ type: 'LOADING', payload: true})
  const hero = await firebase.database().ref(`/heroes/${id}`).once('value')
  dispatch({ type: 'FETCH_HERO_FULFILLED', payload: hero.val()})
  dispatch({ type: 'LOADING', payload: false})
}

export const updateHeroAndNotify = (hero, id) => async(dispatch) =>{
  await firebase.database().ref(`/heroes/${id}`).update(hero)
  dispatch({type: "SHOW_NOTIFICATION", payload: { message: "Hero Updated", type: "success" } });
}


export const saveHeroAndNotify = (values) => async(dispatch) => {
  await firebase.database().ref('/heroes/').push(values)
  dispatch({type: "SHOW_NOTIFICATION", payload: { message: "Hero Added", type: "success" } })
}

export const deleteHeroAndRefresh = (id) => async(dispatch) => {
  await firebase.database().ref(`/heroes/${id}`).remove();
  dispatch({type: "SHOW_NOTIFICATION", payload: { message: "Hero Deleted", type: "warning" } });
}
