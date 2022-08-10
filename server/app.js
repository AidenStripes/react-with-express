const express = require('express')
const axios = require('axios');
const cors = require('cors');
const app = express()
const port = 3001
require('dotenv').config()

const options = {
  method: 'GET',
  url: 'https://covid-193.p.rapidapi.com/statistics?country=poland',
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
  }
};


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/stats', (req, res, next) => {
  axios.request(options).then(function (response) {
    console.log(response.data);
    return res.json(response.data);
  }).catch(function (error) {
    console.error(error);
  });
})



app.listen(port, () => console.log(`App listening on port ${port}!`))
