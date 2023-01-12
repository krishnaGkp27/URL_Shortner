const express = require("express");
const router = express.Router();
const Url = require("../models/urlModel");
const createDB = require("../config/db");
//const  { nanoid } = require("nanoid");

const baseUrl = "http://localhost:1337/urlapi";

//connecting database
createDB.sync().then(() => console.log("now can we store the data"));

router.post("/", async (req, res) => {
    try {
        const { longUrl } = req.body;
        const shortUrl = baseUrl + Math.random(2);

        //store short and long URL in DB
        const storeUrl = await Url.create({
            longUrl: longUrl,
            shortUrl: shortUrl
        })

        return res.status(200).json({
            status: "ok",
            shortUrl: shortUrl
        });
    } catch (err) {
        console.log(err);
        res.send(err.message);
    }

});

module.exports = router;

