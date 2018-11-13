import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/section-header.scss'
import ScrollAnimation from 'react-animate-on-scroll';

export class SectionHeader extends Component {
	render() {
		return (
            <div className="section-header col-12">
                <ScrollAnimation animateIn="fadeIn">
                    <h1 className="header">{this.props.header}</h1>
                </ScrollAnimation>
                <h4><span className="accent">{this.props.textAccent}</span><br/>{this.props.textBlack}</h4>
            </div>
		);
	}
}

export default SectionHeader;
