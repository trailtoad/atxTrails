import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
//Allows Dispatch to manually send the action to all the different reducers in the store, causing them to instantly recalculate the app state whenever we want.
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import App from './routes/App';
import * as serviceWorker from './serviceWorker';

//Development only
import axios from 'axios';
window.axios = axios;

//Redux Dev Tools Cannot be passesd as an additional argument to the store so it must be handled like this.
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Creates a Redux store for storing state
const store = createStore(
    reducers, 
    {}, 
    composeEnhancer(applyMiddleware(reduxThunk)),
)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);

serviceWorker.unregister();
