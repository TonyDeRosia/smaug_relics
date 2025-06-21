#!/usr/bin/env node
// Node monitor to restart the server
// Licensed under GPL-2.0
const { spawn } = require('child_process');
const path = require('path');

const cmd = path.join(__dirname, 'run-relics.js');

function start() {
  const proc = spawn('node', [cmd], { stdio: 'inherit' });
  proc.on('exit', code => {
    console.log(`Server exited with code ${code}. Restarting...`);
    setTimeout(start, 1000);
  });
}

start();
