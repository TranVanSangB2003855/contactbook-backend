const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (res,req) => {
    req.json({ message: "Welcome to contact book application." });
})

module.exports = app;