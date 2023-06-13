const express = require("express");

const router = express.Router();

const imagebrowser = require("./controllers/imagebrowser");
const videobrowser = require("./controllers/videobrowser");
const imagedetector = require("./controllers/imagedetector");
const movieFinder = require("./controllers/movieFinder");
const traveladvisor = require("./controllers/traveladvisor");
const openweather = require("./controllers/openweather");
const coinranking = require("./controllers/coinranking");
const bingnewssearch = require("./controllers/bingnewssearch");
const stripePayments = require("./controllers/stripe");
const spotify = require('./controllers/spotify');

router.get("/", (req, res) => {
    res.json({ success: "Welcome to Proxy Server API Home" });
});

router.use("/images/search", imagebrowser);
router.use("/videos/search", videobrowser);
router.use("/images/detect", imagedetector);
router.use("/movies", movieFinder);
router.use('/traveladvisor', traveladvisor);
router.use('/openweather', openweather);
router.use('/coinranking', coinranking);
router.use('/bingnewssearch', bingnewssearch);
router.use('/stripe', stripePayments);
router.use('/spotify', spotify);

module.exports = router;

