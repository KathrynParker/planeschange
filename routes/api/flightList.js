const express = require('express');
const router = express.Router();
const Axios = require('axios');


router.post('/availFlights/', (req, res, next) => {
    let origin1 = req.body.origin;
    let origin = origin1.slice(1);
    
    let destination1 = req.body.destination; 
    let destination = destination1.slice(1);
    	
	let today = new Date();
    let year = today.getFullYear();
    let month = '08';
    // let month = today.getMonth() + 1;
	let date = today.getDate() + 1;


    let baseURL = `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=${process.env.AM_KEY}&origin=`;

    let fullURL = baseURL + origin + '&destination=' + destination + '&departure_date=' + year + '-' + month + '-' + date;


    Axios.get(fullURL)
    .then((response) => {
        console.log('Hey', response);
        let results = [];
        response.data.results.forEach(result => {
            let flights = [];
            result.itineraries.forEach(itinerary => {
                flights.push({
                    departs_at: itinerary.departs_at,
                    arrives_at: itinerary.arrives_at,
                    airline: itinerary.operating_airline,
                })
            })
            response.push({
                flights: flights, 
                price: result.fare.total_price,
            });
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