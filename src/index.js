const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

require('./routes/index')(app);

app.listen(3001, () => {
    console.log("O Servidor está rodando na porta 3001: http://localhost:3001");
});