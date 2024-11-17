const {v4: uuidv4} = require('uuid')

const generateRoomCode = () => {
    let code = uuidv4().split("-")[0].toUpperCase();
    return code;
}

module.exports = generateRoomCode();