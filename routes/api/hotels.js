const express = require('express');
const router = express.Router();
const Axios = require('axios');


router.get('/', (req, res, next) => {
    res.json({ 'status': 'success' });
});

router.get('/hotels', (req, res, next) => {
    res.json({
        'status': 'error',
        'message': 'Not able to get list"'
    })
})

// let location = 
// let check_in = 
// let check_out = 

router.get('/hotels', (req, res, next) => {
    const url = `https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?apikey=${process.env.AM_KEY}&location=ATL&check_in=2018-08-05&check_out=2018-08-07`
    Axios.get(url)
        .then((response) => {
        // // whole original response
        // res.json(response.data);
        // select values from response
        const data = response.data;
        res.json({
            results: [
                {
                    property_name: "Travelodge Airport South",
                    address: {
                        line1: "2471 Old National Parkway",
                        city: "College Park",
                        region: "GA",
                    },
                    min_daily_rate: {
                        amount: "39.59",
                    },
                    contacts: [
                        {
                        detail: "1-404-4771050"
                        }
                    ]
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