const express = require("express");
const axios = require("axios").default;

const router = express.Router();

const config = {
    headers: {
        'Authorization': `Key ${process.env.CLARIFAI_API_KEY}`,
        'Content-Type': 'application/json'
    }
};

const detectFace = async (term) => {
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
        return response.data.outputs[0].data.regions[0].region_info.bounding_box;
    } catch(err) {
        return { Error: err.stack }
    }
};

const detectCelebrity = async (term) => {
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
        return response.data.outputs[0].data.concepts;

    } catch (err) {
        return { Error: err.stack }
    }
};

router.get("/", (req,res) => {
    res.json({ success: "Hello Face Detector API" });
});

router.post("/face", async (req, res) => {
    const term = req.body.term;
    const data = await detectFace(term);
    res.json(data);
});

router.post("/celebrity", async (req, res) => {
    const term = req.body.term;
    const data = await detectCelebrity(term);
    res.json(data);
});


module.exports = router;