const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:flight', (req, res, next) => {
    let baseURL = 'https://flightxml.flightaware.com/json/FlightXML2/';
    let faFlightID = req.params.flight;
    let getURL = baseURL + 'AirlineFlightInfo' + '?faFlightID=' + faFlightID;

    axios.get(getURL, {
        auth: {
            username: process.env.FA_USERNAME,
            password: process.env.FA_PASSWORD,
        },
    }).then((response) => {
        const data = response.data.AirlineFlightInfoResult;
        res.json(
            data
        );
    })
    .catch((err)=> {
    console.log(err);
    res.json({
        'status': 'error',
        'message': err
    })
    });

})

module.exports = router;