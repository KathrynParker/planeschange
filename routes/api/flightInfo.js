const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:flight', (req, res, next) => {
    
    let baseURL = 'https://flightxml.flightaware.com/json/FlightXML2/';
    let userInput = req.params.flight
    let getURL = baseURL + 'FlightInfoEx' + '?howmany=1&ident=' + userInput;

    axios.get(getURL, {
        auth: {
            username: process.env.FA_USERNAME,
            password: process.env.FA_PASSWORD,
        },
    }).then((response) => {
        // console.log(response.data.FlightInfoExResult.flights);
        // // whole original response
        // res.json(response.data);
        // select values from response
        const data = response.data.FlightInfoExResult.flights[0];
        res.json(
            {
                filed_departuretime: data.filed_departuretime,
                estimatedarrivaltime: data.estimatedarrivaltime,
                faFlightID: data.faFlightID,
                originCity: data.originCity,
                destinationCity: data.destinationCity
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