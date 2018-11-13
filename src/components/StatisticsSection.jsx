import React, { Component } from 'react';
import {Button} from './Button';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/statistics-section.scss'
import { StatisticsCircle } from './StatisticsCircle';
import ScrollAnimation from 'react-animate-on-scroll';

export class StatisticsSection extends Component {
	render() {
		return (
			<div className="row statistics-section">
                <div className="title col-12">
                    <h1>STATYSTYKI</h1>
                </div>
                
				<StatisticsCircle
                    value="1000"
                    name="LINIJEK KODU"/>
				<StatisticsCircle
                    value="3"
                    name="PROJEKTY"
                    large="true"/>
				<StatisticsCircle
                    value="5"
                    name="PROGRAMISTÓW"/>
			</div>
		);
	}
}

export default StatisticsSection;
