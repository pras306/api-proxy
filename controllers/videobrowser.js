const express = require("express");
const axios = require("axios").default;

const router = express.Router();
const error = new Error();


router.get("/", (req, res) => {
    res.json({ success: "Welcome to Video Browser Endpoint"});
});

router.get("/:term", async (req, res, next) => {
    const term = req.params.term;

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
        return res.json(response.data.items);

    } catch (err) {
        error.message = 'Unable to get requested data. Please try again.';
        error.status = 400;
        next(error);
    }
});


module.exports = router;