const express = require('express');
const router = express.Router();
const Axios = require('axios');


router.post('/availFlights/', (req, res, next) => {
    let origin1 = req.body.originCity;
    let origin = origin1.slice(1);
    
    let destination1 = req.body.destinationCity; 
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
        const data1 = response.data.results.itineraries.outbound.flights;
        const data2 = response.results.itineraries.fare;
        res.json({
        	departs_at: data1.departs_at,
        	arrives_at: data1.arrives_at,
        	airline: data1.operating_airline,
        	total_price: data2.total_price
        });
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