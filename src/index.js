import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { HashRouter, Route, Switch} from 'react-router-dom';
import App from './components/App';
import Home from './components/Home'
import Heroes from './containers/heroes';
import HeroEdit from './containers/HeroEdit'
import HeroesStore from './store.js';
import HeroAdd from './containers/HeroAdd';

render(
  <Provider store={HeroesStore}>
    <HashRouter>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/heroes" component={Heroes} />
            <Route path="/hero/:id" component={HeroEdit} />
            <Route exact path="/heroes/add" component={HeroAdd} />
          </Switch>
        </App>
    </HashRouter>
  </Provider>
  ,
  document.getElementById('root')
);
