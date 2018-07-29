const express = require('express');
const router = express.Router();
const Axios = require('axios');


router.get('/', (req, res, next) => {
    res.json({ 'status': 'success' });
});

router.get('/flightInfo', (req, res, next) => {
    res.json({
        'status': 'error',
        'message': 'Provide flight number like "DL1234"'
    })
})



let baseURL = 'https://flightxml.flightaware.com/json/FlightXML2/';
let userInput = 'DAL1552'; //get from user input field, e.g. $('.search-bar').val();
let getURL = baseURL + 'FlightInfoEx' + '?ident=' + userInput + '&howmany=1';

Axios.get(getURL, {
	auth: {
		username: process.env.FA_USERNAME,
		password: process.env.FA_PASSWORD,
	},
}).then((response) => {
	console.log(response.data);
}).then((response) => {
    // // whole original response
    // res.json(response.data);
    // select values from response
    const data = response.data;
    res.json({
        flights: {
            actualdeparturetime: data.actualdeparturetime,
            actualarrivaltime: data.actualarrivaltime,
            estimatedarrivaltime: data.estimatedarrivaltime,
            faFlightID: data.faFlightID,
            originCity: data.originCity,
            destinationCity: data.destinationCity
        }
        });
    })
    .catch((err)=> {
    console.log(err);
    res.json({
        'status': 'error',
        'message': 'Failed to reach Flight Aware'
    })
    });

module.exports = router;