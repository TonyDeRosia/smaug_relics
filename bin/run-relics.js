#!/usr/bin/env node
// Node CLI for Relics
// Licensed under GPL-2.0
const { startTelnet, startWebSocket } = require('../src/server');
startTelnet();
startWebSocket();
