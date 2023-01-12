const express = require("express");
const app = express();
const homeUrl = require("./routes/home");
const shortUrl = require("./routes/shortUrl");
const PORT = 1337;

//middlewares
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

//routes
//app.use("/urlapi", shortUrl)
app.use("/", homeUrl)

app.listen(PORT, () => {
    console.log("App is running on the port " + PORT);   
})