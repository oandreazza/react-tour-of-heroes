import React, {Component} from 'react';
import firebase from 'firebase'
import Header from '../containers/Header'

class App extends Component {

  componentWillMount = () => {
    const config = {
      apiKey: "AIzaSyDVxkGi3VdfuxHxXbNMjqW3M9fPrASmSZY",
      authDomain: "tour-of-heroes-reactjs.firebaseapp.com",
      databaseURL: "https://tour-of-heroes-reactjs.firebaseio.com",
      projectId: "tour-of-heroes-reactjs",
      storageBucket: "tour-of-heroes-reactjs.appspot.com",
      messagingSenderId: "1039432694027"
    }
    firebase.initializeApp(config);

  }
  render(){
    return (
        <div>
          <Header/>
          <div className="container">
            {this.props.children}
          </div>
        </div>
      )
  }

}

export default App;
