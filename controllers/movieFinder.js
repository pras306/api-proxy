const express = require("express");
const axios = require("axios").default;

const router = express.Router();
const error = new Error();


router.get("/", (req, res) => {
    res.json({ success: "Welcome to Movies Browser Endpoint "});
});


router.get("/:request", async(req, res, next) => {
    const fetchParam = req.params.request;
    
    const baseURL = 'https://api.themoviedb.org/3';
    let url = "";

    switch(fetchParam) {
        case "fetchTrending":
            url = `/trending/all/week?api_key=${process.env.TMDB_API_KEY}&language=en-US`;
            break;
        case "fetchNetflixOriginals":
            url = `/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_networks=213`;
            break;
        case "fetchTopRated":
            url = `/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US`;
            break;
        case "fetchActionMovies":
            url = `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=28`;
            break;
        case "fetchComedyMovies":
            url = `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=35`;
            break;
        case "fetchHorrorMovies":
            url = `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=27`;
            break;
        case "fetchRomanceMovies":
            url = `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=10749`;
            break;
        case "fetchDocumentaries":
            url = `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=99`;
            break;
        default:
            break;
    }

    try {
        const response = await axios.get(baseURL + url);
        return res.json(response.data.results);
    } catch(err) {
        error.message = 'Unable to get requested data. Please try again.';
        error.status = 400;
        next(error);
    }
});


module.exports = router;