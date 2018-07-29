const express = require('express');
const router = express.Router();
const Axios = require('axios');


router.get('/', (req, res, next) => {
    res.json({ 'status': 'success' });
});

router.get('/rentals', (req, res, next) => {
    res.json({
        'status': 'error',
        'message': 'Not able to get list"'
    })
})

// let location = 
// let pick_up = 
// let drop_off = 

router.get('/rentals', (req, res, next) => {
    const url = `https://api.sandbox.amadeus.com/v1.2/cars/search-airport?apikey=${process.env.AM_KEY}&location=ATL&pick_up=2018-08-05&drop_off=2018-08-07`
    Axios.get(url)
        .then((response) => {
        // // whole original response
        // res.json(response.data);
        // select values from response
        const data = response.data;
        res.json({
            results: [
                {
                provider: {
                    company_name: "SIXT"
                },
                airport: "ATL",
                address: {
                    line1: "2200 RENTAL CAR CENTER PARKWAY",
                    city: "COLLEGE PARK",
                }
                }
            ]
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