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
					<div><i className="col-2 float-right fas fa-door-open faIconRight pt-0"></i></div>
					<h5 className="text-right">GATE NUMBER:</h5>
					<h3 className="text-right">{this.state.gate_orig}</h3>
				</div>
			</div>
			)
	}
}

export default GateNumber;