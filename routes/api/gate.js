const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
    
    let baseURL = 'https://flightxml.flightaware.com/json/FlightXML2/';
    let faFlightID = data.faFlightID;
    let getURL = baseURL + 'AirlineFlightInfo' + faFlightID;


    axios.get(getURL, {
        auth: {
            username: process.env.FA_USERNAME,
            password: process.env.FA_PASSWORD,
        },
    }).then((response) => {
        const data = response.data.AirlineFlightInfo;
        console.log(data);
        res.json(
            {
                gate_orig: data.gate_orig,
            }
        );
    })
    .catch((err)=> {
    console.log(err);
    res.json({
        'status': 'error',
        'message': 'Failed to reach Flight Aware'
    })
    });

})

module.exports = router;