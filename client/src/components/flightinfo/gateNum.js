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
			<div className="col">
				<div>
					<div><i className="col-2 float-left fas fa-door-open faIconLeft pt-0"></i></div>
					<h5 className="text-left">GATE NUMBER:</h5>
					<h3 className="text-left">{this.state.gate_orig}</h3>
				</div>
			</div>
			)
	}
}

export default GateNumber;