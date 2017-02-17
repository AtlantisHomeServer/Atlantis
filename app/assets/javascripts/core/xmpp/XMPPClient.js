/**
 * Created by ktz on 17. 2. 12.
 */

import XMPP from 'stanza.io'

class XMPPClient {
    createClient(jid, password) {
        var client = XMPP.createClient({
            jid: jid,
            password: password,

            transport: 'websocket',
            wsURL: 'ws://localhost:5280/websocket'
        });

        this.client.on('session:started', () => {
            this.client.getRoster();
            this.client.sendPresence();
        });

        this.client.on('chat', (msg) => {
            console.log(msg)
        });

        return client
    }

    connect(xmppClient) {
        xmppClient.connect()
    }

    sendMessage(to, body) {
        this.client.sendMessage({
            to: to.id,
            body: body
        })
    }

    extractXMPPClient(xmppClientInfo) {
        return xmppClientInfo.get('xmppClient')
    }
}

export default XMPPClient = new XMPPClient()