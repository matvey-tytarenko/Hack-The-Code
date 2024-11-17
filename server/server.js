const http = require('http')
const app = require('./index')
const {Server} = require('socket.io');
require('dotenv').config()

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
const io = new Server(server);

server.listen(PORT, () => {
    try {
        console.log(`Server has been started on: http://localhost:${PORT}`);
    } catch (error) {
        console.error(`Server Error: ${error.message}`);
    }
})

module.exports = {io, socket}