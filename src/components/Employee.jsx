import React, { Component } from 'react';
import {Button} from './Button';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/team-section.scss'

export class Employee extends Component {
	render() {
		return (
            <div className="col employee">
                <img src={this.props.avatar} alt=""/>
                <div className="overlay">
                    <div className="content">
                        <p><span className="name">{this.props.name}</span><br/><span className="accent">{this.props.office}</span></p>
                    </div>
                </div>
            </div>
		);
	}
}

export default Employee;
