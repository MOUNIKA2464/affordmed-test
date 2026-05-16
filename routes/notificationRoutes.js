const express = require("express");

const router = express.Router();

router.get("/notifications", (req, res) => {

    res.json({
        success: true,
        message: "Notifications fetched successfully"
    });

});

module.exports = router;