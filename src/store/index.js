// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';

import rootReducer from '../reducers/index';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
