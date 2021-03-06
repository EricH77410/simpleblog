import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import promise from 'redux-promise'

import PostIndex from './components/PostIndex';
import reducers from './reducers';
import PostNew from './components/PostNew';
import PostShow from './components/PostShow';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
    <Switch>
      <Route path="/post/new" component={PostNew}/>
      <Route path="/post/:id" component={PostShow}/>
      <Route path="/" component={PostIndex}/>
    </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
