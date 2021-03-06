const express = require("express");
const cors = require("cors");
require("dotenv").config();

const api = require('./api');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

app.use("/api/v1", api);


app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        error: {
            message: err.message
        }
    });
});


app.listen(port, () => console.log(`Listening on port: ${port}`));