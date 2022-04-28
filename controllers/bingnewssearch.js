const express = require('express');
const axios = require('axios').default;

const router = express.Router();
const error = new Error();

router.get('/', (req, res) => {
    res.json({ success: 'Welcome to Bing News Search Endpoint' });
});

router.get('/news/search/', async (req, res, next) => {
    const searchTerm = req.query.q;
    const count = req.query.count;

    try{
        const response = await axios.get('https://bing-news-search1.p.rapidapi.com/news/search', {
            params: {
                q: searchTerm,
                count: count,
                freshness: 'Day',
                textFormat: 'Raw',
                safeSearch: 'Off'
            },
            headers: {
                'X-BingApis-SDK': 'true',
                'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.RAPID_API_KEY
            }
        });

        return res.json(response.data);
    } catch(err) {
        error.message = 'Unable to get requested data. Please try again.';
        error.status = 400;
        next(error);
    }
})


module.exports = router;