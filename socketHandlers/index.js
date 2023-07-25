// anochat-server/socketHandlers/index.js
module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('New client connected');
    
        socket.on('connect_error', (err) => {
            console.log('Error connecting to server:', err);
        });
    });
};
