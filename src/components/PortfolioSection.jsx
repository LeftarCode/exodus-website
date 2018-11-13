import React, { Component } from 'react';
import {Button} from './Button';
import {SectionHeader} from './SectionHeader';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/portfolio-section.scss'
import {Project} from './Project';
import ScrollAnimation from 'react-animate-on-scroll';

export class PortfolioSection extends Component {
	render() {
		return (
			<div className="row portfolio-section">
                <SectionHeader
                    header="PORTFOLIO"
                    textAccent="NASZA MOCNA STRONA" />

				<ScrollAnimation animateIn="fadeInDown">
					<Project/>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInUp">
					<Project imgRight="true"/>
				</ScrollAnimation>
				<div className="col-12 text-center">
					<Button 
						href="#readmoreproject"
						text="Zobacz więcej"/>
				</div>
			</div>
		);
	}
}

export default PortfolioSection;
