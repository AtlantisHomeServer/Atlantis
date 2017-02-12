/**
 * Created by ktz on 17. 2. 12.
 */

import XMPP from 'stanza.io'

export default class XMPPClient {
    constructor(jid, pass) {
        this.client = XMPP.createClient({
            jid: jid,
            password: pass,

            // If you have a .well-known/host-meta.json file for your
            // domain, the connection transport config can be skipped.

            transport: 'websocket',
            wsURL: 'ws://localhost:5280/websocket'
            // (or `boshURL` if using 'bosh' as the transport)
        });
        this.client.on('session:started', function () {
            this.client.getRoster();
            this.client.sendPresence();
        }.bind(this));

        this.client.on('chat', function (msg) {
            this.client.sendMessage({
                to: msg.from,
                body: 'You sent: ' + msg.body
            });
        }.bind(this));
    }

    connect() {
        this.client.connect()
    }

    sendMessage(to, body) {
        this.client.sendMessage({
            to: to,
            body: body
        })
    }
}