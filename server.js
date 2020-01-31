const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

// Configuration
app.use(cors());

// Routes
app.get("/hello", (req, res) => {
    return res.send("Hello World.");
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
