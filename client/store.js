import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers';

import comments from './data/comments';
import posts from './data/posts';

const defaultStore = {
  posts,
  comments
};

const store = createStore(
  rootReducer,
  defaultStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
