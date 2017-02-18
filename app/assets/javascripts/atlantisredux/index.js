/**
 * Created by ktz on 17. 2. 18.
 */

import { XMPPInfo } from './xmpp/XMPPClientInfoReducers'
import { combineReducers } from 'redux'

const AtlantisStore = combineReducers({
    XMPPInfo
})

export default AtlantisStore