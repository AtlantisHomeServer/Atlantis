/**
 * Created by ktz on 17. 2. 18.
 */
import React from 'react';

import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import AtlantisStore from './atlantisredux'
import { Provider } from 'react-redux';
import App from './App.jsx'
import thunk from 'redux-thunk'

let atlantisStore = createStore(
    AtlantisStore,
    compose(
        applyMiddleware(thunk)
    )
)

let appElement = document.getElementById('app')

render((
    <Provider store={atlantisStore}>
        <App />
    </Provider>
), appElement)