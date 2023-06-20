const express = require('express');
const axios = require('axios').default;

const router = express.Router();
const error = new Error();

router.get('/', (req, res) => {
    res.send({ success: 'Welcome to Cars API endpoint' })
});

router.get('/find', async(req, res , next) => {
    const manufacturer = req.query.manufacturer;
    const model = req.query.model;
    const year = req.query.year;
    const fuel = req.query.fuel;
    const limit = req.query.limit;

    try {
        const response = await axios.get('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
            params: {
                make: manufacturer,
                model: model,
                year: year,
                fuel_type: fuel,
                limit: limit
            },
            headers: {
                'X-RapidAPI-Key': process.env.RAPID_API_KEY,
                'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
            }
        });

        return res.json(response.data);

    } catch (err) {
        error.message = 'Unable to get requested data. Please try again.';
        error.status = 400;
        next(error);
    }
});


module.exports = router;