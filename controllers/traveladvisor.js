const express = require("express");
const axios = require("axios").default;

const router = express.Router();
const error = new Error();

router.get("/", (req, res) => {
    res.json({success: "Welcome to Travel Advisor Endpoint"});
});

router.get("/place/", async (req, res, next) => {
    const listOption = req.query.list_option;
    const bl_latitude = Number(req.query.bl_latitude);
    const bl_longitude = Number(req.query.bl_longitude);
    const tr_latitude = Number(req.query.tr_latitude);
    const tr_longitude = Number(req.query.tr_longitude);

    try{
        const response = await axios.get(`https://travel-advisor.p.rapidapi.com/${listOption}/list-in-boundary`, {
            params: {
              bl_latitude: bl_latitude,
              tr_latitude: tr_latitude,
              bl_longitude: bl_longitude,
              tr_longitude: tr_longitude
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': process.env.RAPID_API_KEY
            }
        });

        return res.json(response.data.data);
    } catch(err) {
        error.message = 'Unable to get requested data. Please try again.';
        error.status = 400;
        next(error);
    }
});


module.exports = router;