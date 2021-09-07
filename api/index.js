const express = require("express");
const router = express.Router();

const imagebrowser = require("./imagebrowser");
const videobrowser = require("./videobrowser");
const imagedetector = require("./imagedetector");

router.get("/", (req, res) => {
    res.json({success: "Hello API PROXY"});
});

router.use("/images/search", imagebrowser);
router.use("/videos/search", videobrowser);
router.use("/images/detect", imagedetector);

module.exports = router;