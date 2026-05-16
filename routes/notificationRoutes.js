const express = require("express");

const router = express.Router();

router.get("/notifications", (req, res) => {

    const notifications = [
        {
            id: 1,
            type: "Placement",
            message: "TCS Hiring",
            priority: 3
        },
        {
            id: 2,
            type: "Result",
            message: "Mid Exam Results",
            priority: 2
        }
    ];

    res.json({
        success: true,
        notifications
    });

});

module.exports = router;