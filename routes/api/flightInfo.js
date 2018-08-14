const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:flight', (req, res, next) => {
   
    // Url for the Flight Aware API
    let faURL = 'https://flightxml.flightaware.com/json/FlightXML2/';
    let userInput = req.params.flight
    let getURL = faURL + 'FlightInfoEx' + '?howmany=1&ident=' + userInput;

    // Url for the Flight Status API
    let fullFlightNum = req.params.flight.split(/(\d+)/);
	let carrier = fullFlightNum[0];
	let flightnum = fullFlightNum[1];
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
	let date = today.getDate();
	let fsURL = 'https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/';
    let getStatusURL = fsURL + carrier + '/' + flightnum + '/arr/' + year + '/' + month + '/' + date + `?appId=${process.env.FLIGHTSTATS_ID}&appKey=${process.env.FLIGHTSTATS_KEY}&utc=false`;

    console.log('bananapancake');
    console.log(getStatusURL);

    let flightPromise = axios.get(getURL, {
        auth: {
            username: process.env.FA_USERNAME,
            password: process.env.FA_PASSWORD,
        },
    });
    
    let statusPromise = axios.get(getStatusURL);

    Promise.all( [flightPromise, statusPromise ]).then( responses => {
        let flight = responses[0].data.FlightInfoExResult.flights[0];
        let status = responses[1].data.flightStatuses;

        res.json({
            filed_departuretime: flight.filed_departuretime,
            estimatedarrivaltime: flight.estimatedarrivaltime,
            faFlightID: flight.faFlightID,
            originCity: flight.originCity,
            destinationCity: flight.destinationCity,
            ident: flight.ident,
            status: status[0].status
        })
} ).catch((err)=> {
    console.log(err);
    res.json({
        'status': 'error',
        'message': 'Failed to reach Flight Aware'
    })
    });

})


module.exports = router;