import React, { Component } from 'react';
import Axios from '../../../../node_modules/axios';


class GateNumber extends Component {
	
	constructor() {
        super();
        this.state = {
            gate_orig: '',
        }
    }   
	
	
	componentWillMount() {
		Axios.get(`/api/gate/${this.props.faFlightID}`)
		.then((response) => {
			this.setState({
				gate_orig: response.data.gate_orig
			});
		})
	}

	render() {
		return (
			<h3>Gate: {this.state.gate_orig}</h3>
			)
	}
}

export default GateNumber;