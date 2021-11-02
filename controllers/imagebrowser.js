const express = require("express");
const axios = require("axios").default;

const router = express.Router();
const error = new Error();

router.get("/", (req, res) => {
    res.json({success: "Welcome to Image Search Endpoint"});
});

router.get("/:term", async (req, res, next) => {
    const term = req.params.term;

    const url = "https://api.unsplash.com/search/photos";
    const config = {
        headers: { Authorization : `Client-ID ${process.env.UNSPLASH_API_KEY}` },
        params: {
            query: term,
            per_page: 30
        },
        timeout: 1000
    };

    try {
        const response = await axios.get(url, config);        
        return res.json(response.data.results);

    } catch (err) {
        error.message = 'Unable to get requested data. Please try again.';
        error.status = 400;
        next(error);
    }
});


module.exports = router;