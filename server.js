const express = require("express");
const cors = require("cors");

const logger = require("./middleware/logger");

const app = express();

app.use(cors());
app.use(express.json());

app.use(logger);

app.get("/", (req, res) => {

    res.json({
        message: "Affordmed Notification System Running"
    });

});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});