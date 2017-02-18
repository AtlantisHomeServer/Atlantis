/**
 * Created by ktz on 17. 2. 18.
 */
import {Map} from 'immutable'
import * as type from './XMPPClientInfoActionTypes'
import XMPPClient from '../../core/xmpp/XMPPClient'

const initialInfo = Map({ xmppClient: undefined })
export function XMPPInfo(state = initialInfo, action) {
    switch (action.type) {
        case type.CREATE_XMPP_CLIENT:
            return state.set('xmppClient', (oldXmppClient) => {
                return XMPPClient.createClient(action.payload.jid, action.payload.password)
            })
        default:
            return state
    }
}