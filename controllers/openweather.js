const express = require("express");
const axios = require("axios").default;

const router = express.Router();
const error = new Error();

router.get("/", (req, res) => {
    res.json({success: "Welcome to Open Weather Map Endpoint"});
});

router.get("/find/", async (req, res, next) => {
    const lng = Number(req.query.lng);
    const lat = Number(req.query.lat);

    try{
        const response = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
        params: {
            lon: lng,
            lat: lat
        },
        headers: {
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': process.env.RAPID_API_KEY
        }
        });

        return res.json(response.data);
    } catch(err) {
        error.message = 'Unable to get requested data. Please try again.';
        error.status = 400;
        next(error);
    }
});


module.exports = router;