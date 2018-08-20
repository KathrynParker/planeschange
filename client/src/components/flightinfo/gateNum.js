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
				<div><h4 className="gateNum">Gate:</h4></div>
				<div><h3 className="gateNum">{this.state.gate_orig}</h3></div>
			</div>

			)
	}
}

export default GateNumber;