import firebase from 'firebase'

export const getCategories = () => async(dispatch) => {
  firebase.database().ref('/categories').on('value', (snapshot) => {
    console.log(snapshot.val());
    dispatch({ type: 'FETCH_CATEGORIES_FULFILLED', payload: snapshot.val()})
    dispatch({ type: 'LOADING', payload: false})
  })
}
