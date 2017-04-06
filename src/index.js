import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './components/App';
import Home from './components/Home'
import HeroList from './containers/HeroList';
import HeroEdit from './containers/HeroEdit'
import HeroesStore from './store.js';
import HeroAdd from './containers/HeroAdd';
import Notification from './containers/Notification';

render(
  <Provider store={HeroesStore}>
    <Router>
        <App>
          <Notification/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/heroes" component={HeroList} />
            <Route path="/hero/:id" component={HeroEdit} />
            <Route exact path="/heroes/add" component={HeroAdd} />
          </Switch>
        </App>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
