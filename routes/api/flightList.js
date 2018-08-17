const express = require('express');
const router = express.Router();
const Axios = require('axios');


router.get('/availFlights/:item', (req, res, next) => {
    let origin = this.props.originCity;
	let destination = this.props.destinationCity;
	
	let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
	let date = today.getDate() + 1;


    let baseURL = `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=${process.env.AM_KEY}&origin=`;

    let fullURL = baseURL + origin + '&destination=' + destination + '&departure_date=' + year + '-' + month + '-' + date;

    console.log('Hey', fullURL);
    
    Axios.get(fullURL)
        .then((response) => {

        const data = response[0].data.outbound;
        res.json({
        	departs_at: data.flights.departs_at,
        	arrives_at: data.flights.arrives_at,
        	airline: data.flights.operating_airline,
        	total_price: data.fare.total_price
            
        });
    })
    .catch((err)=> {
        console.log(err);
        res.json({
            'status': 'error',
            'message': 'Failed to reach Amadeus.'
        })
    });
})

module.exports = router;