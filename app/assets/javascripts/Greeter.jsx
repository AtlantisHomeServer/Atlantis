import React from 'react';

import XMPPClient from './core/xmpp/XMPPClient'

class Greeter extends React.Component {
    constructor(state, props){
        super(state, props)
        this.hello = 'hello'
        this.client = new XMPPClient('admin@localhost', '123')
        this.client.connect()
    }

    sendMessage() {
        this.client.sendMessage({id: 'admin'}, 'Hello World!')
    }

    render() {
        // console.log(this.hello)
        return (
            <div>
                <p>Hello, {this.props.name}</p>
                <button onClick={this.sendMessage.bind(this)}>Chat</button>
            </div>
        )
    }
}

export default Greeter;