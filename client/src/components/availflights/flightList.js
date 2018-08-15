import React, { Component } from 'react';


class FlightList extends Component {

	render() {
		return (
			<div>
                <div className='listDiv'>
                    <h5>Departs at: {this.props.departs_at}</h5>
                    <h5>Arrives at: {this.props.arrives_at}</h5>
                    <h5>Price: {this.props.total_price}</h5>
                    <div className='airlineDiv'>
                        <h5>Airline: {this.props.airline}</h5>
                    </div>
                </div>
            </div>
			)
	}
}

export default FlightList;