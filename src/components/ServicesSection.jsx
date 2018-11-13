import React, { Component } from 'react';
import {Button} from './Button';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/services-section.scss'
import { ServicesCircle } from './ServicesCircle';

export class ServicesSection extends Component {
	render() {
		return (
			<div className="row services-section">
                <div className="title">
                    <h1>USŁUGI</h1>
                </div>
				<ServicesCircle
                    img="../imgs/saas.png"
                    name="SaaS"
                    large="true"/>
				<ServicesCircle
                    img="../imgs/web.png"
                    name="Web Apps"
                    large="true"/>
				<ServicesCircle
                    img="../imgs/native.png"
                    name="Native Apps"
                    large="true"/>
                <Button
                    href="#services"
                    text="PEŁNA OFERTA"/>
			</div>
		);
	}
}

export default ServicesSection;
