const generator = require("../utils/generator");

const rooms = {}; // Локальное хранилище комнат

// Функция для создания комнаты
module.exports.CreateRoom = (socket) => {
  socket.on("createRoom", () => {
    const roomCode = generator();
    rooms[roomCode] = { users: [] };
    socket.join(roomCode);
    rooms[roomCode].users.push(socket.id);
    console.log(`Room created code: ${roomCode}`);
    socket.emit("roomCreated", roomCode);
  });

  socket.on("disconnect", () => {
    for (const roomCode in rooms) {
      rooms[roomCode].users = rooms[roomCode].users.filter(
        (id) => id !== socket.id
      );
      if (rooms[roomCode].users.length === 0) {
        delete rooms[roomCode];
        console.log(`Комната ${roomCode} удалена (пустая).`);
      }
    }
    console.log(`Пользователь отключился: ${socket.id}`);
  });
};

// Функция для подключения к комнате
module.exports.JoinRoom = (socket) => {
  socket.on("joinRoom", (roomCode) => {
    if (rooms[roomCode]) {
      socket.join(roomCode);
      rooms[roomCode].users.push(socket.id);
      console.log(`${socket.id} присоединился к комнате ${roomCode}`);
      socket
        .to(roomCode)
        .emit("message", `${socket.id} присоединился к комнате.`);
      socket.emit("roomJoined", roomCode);
    } else {
      socket.emit("error", "Комната с таким кодом не существует.");
    }
  });

  socket.on("disconnect", () => {
    for (const roomCode in rooms) {
      rooms[roomCode].users = rooms[roomCode].users.filter(
        (id) => id !== socket.id
      );
      if (rooms[roomCode].users.length === 0) {
        delete rooms[roomCode];
        console.log(`Комната ${roomCode} удалена (пустая).`);
      }
    }
    console.log(`Пользователь отключился: ${socket.id}`);
  });
};
