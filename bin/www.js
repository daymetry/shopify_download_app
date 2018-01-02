#!/usr/bin/env node
require('dotenv').config();
const chalk = require('chalk');
const http = require('http');
const https = require('https');
const app = require('../server');
const fs = require('fs');
const port = process.env.SHOPIFY_APP_PORT || '3000';
app.set('port', port);

// This line is from the Node.js HTTPS documentation.
const options = {
    key: fs.readFileSync('client-key.pem'),
    cert: fs.readFileSync('client-cert.pem')
};
const server = https.createServer(options, app);

server.listen(port, err => {
  if (err) {
    return console.log('😫', chalk.red(err));
  }
  console.log(`🚀 Now listening on port ${chalk.green(port)}`);
});
