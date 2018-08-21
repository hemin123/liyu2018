
import { createStore,applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducer.js'

const logger = createLogger({});
const middleware =[thunk];

if (process.env.NODE_ENV !='production') {
	middleware.push(logger);
}


const store = createStore(reducer,applyMiddleware(...middleware));
// const store = createStore(reducer,applyMiddleware(thunk,logger));

export default store;