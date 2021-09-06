const express = require("express");
const axios = require("axios").default;

const router = express.Router();

const getImages = async (term) => {
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
        return response.data.results;

    } catch (err) {
        return { Error: err.stack }
    }
}

router.get("/", (req, res) => {
    res.json({success: "Hello Image Search API"});
});

router.get("/:term", async (req, res) => {
    const term = req.params.term;
    const data = await getImages(term);
    res.json(data);
});


module.exports = router;