# Hack The Code
# What is this?
````yaml
 it's a game for 2 players or more
 each player in turn makes up a code of 4 digits, then the opponent says the
 sequence of digits, if he named a digit in the right place, the player says that there is one or more digits in the right place.
````
___
# Backend
````javascript
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
````

# FrontEnd
## TypeScript + React + Vite + Tailwind

# How To run server?

```shell
 cd server
 npm i
 npm run dev
```
# How To Run FrontEnd?
```shell
 cd front 
 npm i
 npm run dev
```
___
# &copy;MATVII TYTARENKO