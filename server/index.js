const express = require("express");
const cors = require("cors");
const router = require('./Routes/UserRoutes')

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/rooms', router)

module.exports = app;