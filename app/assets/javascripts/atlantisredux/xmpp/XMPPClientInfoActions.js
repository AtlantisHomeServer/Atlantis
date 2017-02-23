/**
 * Created by ktz on 17. 2. 18.
 */

import {createAction} from 'redux-actions'
import * as XMPPClientInfoActionTypes from './XMPPClientInfoActionTypes'

export function createXMPPClient(jid, password) {
    return (dispatch, getState) => {
        dispatch(createAction(XMPPClientInfoActionTypes.CREATE_XMPP_CLIENT)({jid: jid, password: password}));
    }
}