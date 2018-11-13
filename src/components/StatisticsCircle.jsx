import React, { Component } from 'react';
import {Button} from './Button';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/statistics-circle.scss'

export class StatisticsCircle extends Component {
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
                            <h1>{this.props.value}</h1>
                        </div>
                        <h3>{this.props.name}</h3>
                    </div>
                </div>
            </div>
		);
	}
}

export default StatisticsCircle;
