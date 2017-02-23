/**
 * Created by ktz on 17. 2. 18.
 */

import * as XMPPClientInfoReducers from './xmpp/XMPPClientInfoReducers'
import { combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux'

const XMPPClientInfoStore = combineReducers(XMPPClientInfoReducers);

const AtlantisStore = combineReducers({
    XMPPInfoStore: XMPPClientInfoStore,
    routing: routerReducer
})

export default AtlantisStore