import React, { Component } from 'react';
// import axios from 'axios';

class FlightList extends Component {

	render() {
		return (
			<div>
                <div className='listDiv'>
                    <h5>Departs at: 5:30 PM</h5>
                    <h5>Arrives at: 8:30 PM</h5>
                    <h5>$500</h5>
                    <div>
                        <h5>DL</h5>
                    </div>
                </div>
            </div>
			)
	}
}

export default FlightList;