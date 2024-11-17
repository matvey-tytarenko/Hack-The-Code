module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`User is connected!`);
        
    })
}