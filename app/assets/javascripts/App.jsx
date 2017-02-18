import React, {Component} from 'react';
import { render } from 'react-dom';
import Greeter from './Greeter.jsx';
import '../stylesheets/style.scss'

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