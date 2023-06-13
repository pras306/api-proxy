const express = require('express');
const axios = require('axios').default;

const router = express.Router();
const error = new Error();

router.get('/', (req, res) => {
    res.send({ success: 'Welcome to Spotify data endpoint' })
});

router.get('/top_200_tracks/:date', async (req, res, next) => {
    const date = req.params.date;

    try{
        const response = await axios.get('https://spotify81.p.rapidapi.com/top_200_tracks', {
            params: {
                date: date
            },
            headers: {
                'X-RapidAPI-Host': 'spotify81.p.rapidapi.com',
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

router.get('/top_20_by_monthly_listeners', async (req, res, next) => {
    try {
        const response = await axios.get('https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners', {
            headers: {
                'X-RapidAPI-Host': 'spotify81.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.RAPID_API_KEY
            }
        });

        return res.json(response.data);
    } catch (error) {
        error.message = 'Unable to get requested data. Please try again.';
        error.status = 400;
        next(error);
    }
});

router.get('/top_20_by_followers', async (req, res, next) => {
    try {
        const response = await axios.get('https://spotify81.p.rapidapi.com/top_20_by_followers', {
            headers: {
                'X-RapidAPI-Host': 'spotify81.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.RAPID_API_KEY
            }
        });

        return res.json(response.data);
    } catch (error) {
        error.message = 'Unable to get requested data. Please try again.';
        error.status = 400;
        next(error);
    }
});

router.get('/tracks/:songId', async (req, res, next) => {
    const songId = req.params.songId;

    try {
        const response = await axios.get('https://spotify81.p.rapidapi.com/tracks', {
            params: {
                ids: songId
            },
            headers: {
                'X-RapidAPI-Host': 'spotify81.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.RAPID_API_KEY
            }
        });

        return res.json(response.data);
    } catch (error) {
        error.message = 'Unable to get requested data. Please try again.';
        error.status = 400;
        next(error);
    }
});

router.get('/track_lyrics/:songId', async (req, res, next) => {
    const songId = req.params.songId;

    try {
        const response = await axios.get('https://spotify81.p.rapidapi.com/track_lyrics', {
            params: {
                id: songId
            },
            headers: {
                'X-RapidAPI-Host': 'spotify81.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.RAPID_API_KEY
            }
        });

        return res.json(response.data);
    } catch (error) {
        error.message = 'Unable to get requested data. Please try again.';
        error.status = 400;
        next(error);
    }
});

router.get('/artist_overview/:artistId', async (req, res, next) => {
    const artistId = req.params.artistId;

    try {
        const response = await axios.get('https://spotify23.p.rapidapi.com/artist_overview/', {
            params: {
                id: artistId
            },
            headers: {
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.RAPID_API_KEY
            }
        });

        return res.json(response.data);
    } catch (error) {
        error.message = 'Unable to get requested data. Please try again.';
        error.status = 400;
        next(error);
    }
});

router.get('/chart/tracks/top', async (req, res, next) => {
    try {
        const response = await axios.get('https://spotify-scraper.p.rapidapi.com/v1/chart/tracks/top', {
            headers: {
                'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.RAPID_API_KEY
            }
        });

        return res.json(response.data);
    } catch (error) {
        error.message = 'Unable to get requested data. Please try again.';
        error.status = 400;
        next(error);
    }
});

router.get('/chart/artists/top', async (req, res, next) => {
    try {
        const response = await axios.get('https://spotify-scraper.p.rapidapi.com/v1/chart/artists/top', {
            headers: {
                'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.RAPID_API_KEY
            }
        });

        return res.json(response.data);
    } catch (error) {
        error.message = 'Unable to get requested data. Please try again.';
        error.status = 400;
        next(error);
    }
});


module.exports = router;