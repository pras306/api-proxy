const express = require("express");
const axios = require("axios").default;

const router = express.Router();
const error = new Error();

const config = {
    headers: {
        'Authorization': `Key ${process.env.CLARIFAI_API_KEY}`,
        'Content-Type': 'application/json'
    }
};

router.get("/", (req,res) => {
    res.json({ success: "Welcome to Face Detector Endpoint" });
});

router.post("/face", async (req, res, next) => {
    const term = req.body.term;    

    const faceUrl = "https://api.clarifai.com/v2/models/f76196b43bbd45c99b4f3cd8e8b40a8a/outputs";
    const data = {
        user_app_id: {
            user_id: process.env.CLARIFAI_USER_ID,
            app_id: process.env.CLARIFAI_APP_ID
        },
        inputs: [
            {
            data: {
                image: {
                    url: term
                }
            }
            }
        ]
    };

    try {
        const response = await axios.post(faceUrl, data, config );
        return res.json(response.data.outputs[0].data.regions[0].region_info.bounding_box);
    } catch(err) {
        error.message = 'Unable to get requested data. Please try again.';
        error.status = 400;
        next(error);
    }
});

router.post("/celebrity", async (req, res, next) => {
    const term = req.body.term;

    const celebrityUrl = "https://api.clarifai.com/v2/models/cfbb105cb8f54907bb8d553d68d9fe20/outputs";
    const data = {
        user_app_id: {
            user_id: process.env.CLARIFAI_USER_ID,
            app_id: process.env.CLARIFAI_APP_ID
        },
        inputs: [
            {
            data: {
                image: {
                    url: term
                }
            }
            }
        ]
    };

    try {
        const response = await axios.post(celebrityUrl, data, config);
        return res.json(response.data.outputs[0].data.concepts);

    } catch (err) {
        error.message = 'Unable to get requested data. Please try again.';
        error.status = 400;
        next(error);
    }
});


module.exports = router;