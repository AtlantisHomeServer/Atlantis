/**
 * Created by ktz on 17. 2. 13.
 */
import assert from 'assert'
import XMPP from 'stanza.io'


describe('XMPPClient', function () {
    describe('stanza.io Test', function () {
        it('login well', function () {
            var client = XMPP.createClient({
                jid: 'admin@localhost',
                password: '123',

                // If you have a .well-known/host-meta.json file for your
                // domain, the connection transport config can be skipped.

                transport: 'websocket',
                wsURL: 'ws://localhost:5280/websocket'
                // (or `boshURL` if using 'bosh' as the transport)
            });
            client.on('session:started', function () {
                client.getRoster();
                client.sendPresence();
            });

            client.on('chat', function (msg) {
                client.sendMessage({
                    to: msg.from,
                    body: 'You sent: ' + msg.body
                });
            });

            client.connect();
            // var i = 0
            // while(true){
            //     i += 1
            // }
        })
    })
})