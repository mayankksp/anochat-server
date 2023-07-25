// anochat-server/config/socket-io.js
const http = require('http');
const socketIo = require('socket.io');

module.exports = (server, corsOptions) => {
    const io = socketIo(server, { cors: corsOptions });
    return io;
};