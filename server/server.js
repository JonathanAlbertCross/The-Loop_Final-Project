const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
const axios = require("axios");

// add your endpoints here

app.get("/", (_, response) => response.json("Root route for The Loop App."));

app.get("/translate", async (request, response) => {
  const { word, from, to } = request.query;
  const API = `https://www.eventbriteapi.com/v3/users/me/?token=KOPS6OWTRFTOGU4A3MVA``https://api.mymemory.translated.net/get?q=${word}&langpair=${from}|${to}`;
  const res = await axios.get(API);
  const wrangledData = {
    translation: res.data.responseData.translatedText,
    match: res.data.responseData.match,
  };
  response.json(wrangledData);
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
