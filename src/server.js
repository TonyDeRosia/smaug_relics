#!/usr/bin/env node
// Node rewrite of SMAUG core
// Licensed under GPL-2.0
const net = require('net');
const WebSocket = require('ws');

const TELNET_PORT = process.env.TELNET_PORT || 4000;
const WS_PORT = process.env.WS_PORT || 8080;

function startTelnet() {
  const server = net.createServer(socket => {
    socket.write('Welcome to Relics MUD (Node edition)\n');
    socket.on('data', data => {
      socket.write(`You said: ${data}`);
    });
  });
  server.listen(TELNET_PORT, () => {
    console.log(`Telnet server listening on port ${TELNET_PORT}`);
  });
}

function startWebSocket() {
  const wss = new WebSocket.Server({ port: WS_PORT });
  wss.on('connection', ws => {
    ws.send('Welcome to Relics MUD (WS)');
    ws.on('message', msg => {
      ws.send(`You said: ${msg}`);
    });
  });
  console.log(`WebSocket server listening on port ${WS_PORT}`);
}

module.exports = { startTelnet, startWebSocket };

if (require.main === module) {
  startTelnet();
  startWebSocket();
}
