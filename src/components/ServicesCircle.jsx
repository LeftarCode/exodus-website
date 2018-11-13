import React, { Component } from 'react';
import {Button} from './Button';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/services-circle.scss'

export class ServicesCircle extends Component {
	render() {
        let circleClass = "circle circle-sm";
        if(this.props.large == "true")
        {
            circleClass = "circle circle-lg";
        }
		return (
            <div className="col circle-col">
                <div className="circle-outter-wrapper">
                    <div className="circle-inner-wrapper">
                        <div className={circleClass}>
                            <img src={this.props.img} alt=""/>
                        </div>
                        <h3>{this.props.name}</h3>
                    </div>
                </div>
            </div>
		);
	}
}

export default ServicesCircle;
