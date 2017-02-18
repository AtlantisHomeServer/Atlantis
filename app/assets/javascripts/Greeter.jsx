import React from 'react';

import XMPPClient from './core/xmpp/XMPPClient'

class Greeter extends React.Component {
    constructor(state, props){
        super(state, props)
    }

    render() {
        return (
            <div>
                <p>Hello, {this.props.name}</p>
                <button>Chat</button>
            </div>
        )
    }
}

export default Greeter;