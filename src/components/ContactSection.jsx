import React, { Component } from 'react';
import {Button} from './Button';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/contact-section.scss'

export class ContactSection extends Component {
	render() {
		return (
			<div className="row contact-section">
                <div className="title">
                    <h1>KONTAKT</h1>
                </div>
				
				<div className="contact mx-auto">
                    <i className="fas fa-phone"></i> 577139440 <i className="fas fa-envelope"></i> kontakt@exodus.edu.pl
                </div>
			</div>
		);
	}
}

export default ContactSection;
