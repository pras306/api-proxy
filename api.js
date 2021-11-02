const express = require("express");

const router = express.Router();

const imagebrowser = require("./controllers/imagebrowser");
const videobrowser = require("./controllers/videobrowser");
const imagedetector = require("./controllers/imagedetector");
const movieFinder = require("./controllers/movieFinder");

router.get("/", (req, res) => {
    res.json({ success: "Welcome to Proxy Server API Home" });
});

router.use("/images/search", imagebrowser);
router.use("/videos/search", videobrowser);
router.use("/images/detect", imagedetector);
router.use("/movies", movieFinder);

module.exports = router;

