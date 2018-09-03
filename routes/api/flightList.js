const express = require('express');
const router = express.Router();
const Axios = require('axios');


router.post('/availFlights/', (req, res, next) => {
    if (!req.body.origin) {
        return res.json({'error': 'no origin given'});
    }
    let origin = req.body.origin.slice(1);

    let destination = req.body.destination.slice(1);
    	
	let today = new Date();
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth()+1)).slice(-2);
	let date = ('0' + (today.getDate()+1)).slice(-2);

    let baseURL = `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=${process.env.AM_KEY}&origin=`;

    let fullURL = baseURL + origin + '&destination=' + destination + '&departure_date=' + year + '-' + month + '-' + date;

    Axios.get(fullURL)
    .then((response) => {
        let results = [];
        response.data.results.forEach(result => {
            result.itineraries.forEach(itinerary => {
                itinerary.outbound.flights.forEach(flight => {
                    results.push({
                        departs_at: flight.departs_at,
                        arrives_at: flight.arrives_at,
                        airline: flight.operating_airline,
                        price: result.fare.total_price,
                    })
                })
            })
        });
        res.json(results);
    })
    .catch((err)=> {
        console.log('BEGIN ERROR:', err, 'END ERROR');
        res.json({
            'status': 'error',
            'message': 'Failed to reach Amadeus.'
        })
    });
})

module.exports = router;