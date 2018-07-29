const express = require('express');
const router = express.Router();
const Axios = require('axios');


router.get('/', (req, res, next) => {
    res.json({ 'status': 'success' });
});

router.get('/flightList', (req, res, next) => {
    res.json({
        'status': 'error',
        'message': 'Not able to get list"'
    })
})

// let origin = 
// let destination = 
// let departure_date = 

router.get('/flightList', (req, res, next) => {
    const url = `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=${process.env.AM_KEY}&origin=BOS&destination=LON&departure_date=2018-08-05`
    Axios.get(url)
        .then((response) => {
        // // whole original response
        // res.json(response.data);
        // select values from response
        const data = response.data;
        res.json({
            itineraries: [{
                outbound: {
                    flights: [{
                            departs_at: "2015-10-15T06:15",
                            arrives_at: "2015-10-15T08:55",
                            operating_airline: "AF",
                            }]
                    },
                fare: {
                    total_price: "528.30"
                    }
            }]
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