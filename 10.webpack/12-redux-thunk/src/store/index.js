/*
* @Author: TomChen
* @Date:   2018-08-20 09:14:30
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-20 17:05:30
*/
import { createStore,applyMiddleware } from 'redux'
import createlogger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducer.js'

const logger = createlogger({});
const middleware =[thunk]
if (process.env.NODE_ENV =='production') {
	middleware.push(logger);
}


const store = createStore(reducer,applyMiddleware(...middleware));
// const store = createStore(reducer,applyMiddleware(thunk,logger));

export default store;