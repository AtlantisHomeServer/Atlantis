/**
 * Created by ktz on 17. 2. 18.
 */
import React from 'react';

import { render } from 'react-dom';
import { createStore } from 'redux';
import AtlantisStore from './atlantisredux'
import { Provider } from 'react-redux';
import App from './App.jsx'

let atlantisStore = createStore(AtlantisStore)

let appElement = document.getElementById('app')

render((
    <Provider store={atlantisStore}>
        <App />
    </Provider>
), appElement)