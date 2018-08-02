import React, { Component } from 'react';
// import axios from 'axios';

class GateNumber extends Component {

	render() {
		return (
			<h3>Gate: {this.props.gate_orig}</h3>
			)
	}
}

export default GateNumber;