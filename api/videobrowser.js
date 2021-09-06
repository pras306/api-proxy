const express = require("express");
const axios = require("axios").default;

const router = express.Router();

const getVideos = async (term) => {
    const url = "https://www.googleapis.com/youtube/v3/search";
    const config = {
        params: {
            part: "snippet",
            type: "video",
            maxResults: 15,
            key: process.env.YOUTUBE_API_KEY,
            q: term
        }
    };

    try {
        const response = await axios.get(url, config);
        return response.data.items;

    } catch (err) {
        return { Error: err.stack }
    }
}


router.get("/", (req, res) => {
    res.json({ success: "Hello Video Browser App "});
});

router.get("/:term", async (req, res) => {
    const term = req.params.term;
    const data = await getVideos(term);
    res.json(data);
});


module.exports = router;