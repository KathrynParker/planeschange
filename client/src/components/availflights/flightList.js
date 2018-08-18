import React, { Component } from 'react';
import './flightList.css';


class FlightList extends Component {

	render() {
		return (
            <div className="container roundedCard mb-3">
                <div className="row" >
                    <div className="col">
                        <h5>Departs at: {this.props.departs_at}</h5>
                        <h5>Arrives at: {this.props.arrives_at}</h5>
                        <h5>Price: {this.props.total_price}</h5>
                        <div className='airlineDiv'>
                            <h5>Airline: {this.props.airline}</h5>
                        </div>
                    </div>
                </div>
            </div>
			)
	}
}

export default FlightList;