import React, {Component} from 'react';
import { render } from 'react-dom';
import Greeter from './Greeter.jsx';
import { createStore } from 'redux';
import AtlantisStore from './redux'
import '../stylesheets/style.scss'

let atlantisStore = createStore(AtlantisStore)



export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Playframework, React JS, ES 6 and webpack</h1>
                <Greeter name="Ninja" />
            </div>
        )
    }
}