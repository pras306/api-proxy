const express = require('express');
const axios = require('axios').default;

const router = express.Router();
const error = new Error();

router.get('/', (req, res) => {
    res.send({ success: 'Welcome to Coinranking endpoint' })
});

router.get('/coins/', async (req, res, next) => {
    const limit = req.query.limit;

    try{
        const response = await axios.get('https://coinranking1.p.rapidapi.com/coins', {
            params: {
                limit: limit
            },
            headers: {
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.RAPID_API_KEY
            }
        });
        return res.json(response.data);

    } catch(err) {
        error.message = 'Unable to get requested data. Please try again.';
        error.status = 400;
        next(error);
    }
});

router.get('/coin/:coinId', async (req, res, next) => {
    const coinId = req.params.coinId;

    try{
        const response = await axios.get(`https://coinranking1.p.rapidapi.com/coin/${coinId}`, {
            headers: {
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.RAPID_API_KEY
            }
        });

        return res.json(response.data);

    } catch(err) {

        error.message = 'Unable to get requested data. Please try again.';
        error.status = 400;
        next(error);
    }
});

router.get('/coin/:coinId/history', async (req, res, next) => {
    const coinId = req.params.coinId;
    const timePeriod = req.query.timePeriod;

    try{
        const response = await axios.get(`https://coinranking1.p.rapidapi.com/coin/${coinId}/history`, {
            params: {
                timePeriod: timePeriod
            },
            headers: {
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.RAPID_API_KEY
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