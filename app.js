require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();


const api = require("./api");

app.use(express.json());
app.use(cors());


//test route
app.get('/', (req, res) => {
    return res.json({ success: "Hello World" })
});

app.use("/api/v1", api);

module.exports = app;