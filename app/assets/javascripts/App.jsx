import React, {Component} from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import Greeter from './Greeter.jsx';
import * as XMPPClientInfoActions from './atlantisredux/xmpp/XMPPClientInfoActions'
import '../stylesheets/style.scss'

class App extends Component {
    render() {
        this.props.XMPPClientInfoActions.createXMPPClient('admin@localhost', '123');
        return (
            <div>
                <h1>Playframework, React JS, ES 6 and webpack</h1>
                <Greeter name="Ninja" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        XMPPInfoStore: state.XMPPInfoStore
    };
};

const mapDispatchToProps = (dispatch) =>  {
    return {
        dispatch: dispatch,
        XMPPClientInfoActions: bindActionCreators(XMPPClientInfoActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);