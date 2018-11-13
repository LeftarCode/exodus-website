import React, { Component } from 'react';
import {Button} from './Button';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/logo-section.scss'

export class LogoSection extends Component {
	render() {
		return (
			<div className="row logo-section">
				<div className="col-12">
					<img src="../imgs/logo.png" alt="" className="logo"/>
					<Button text="STWÓRZMY COŚ RAZEM" href="#create"/>
				</div>
			</div>
		);
	}
}

export default LogoSection;
