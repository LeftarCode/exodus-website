import React, { Component } from 'react';
import {Button} from './Button';
import {Employee} from './Employee';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/team-section.scss'
import {SectionHeader} from './SectionHeader';

export class TeamSection extends Component {
	render() {
		return (
			<div className="row team-section">
                <SectionHeader
                    header="ZESPÓŁ"
                    textAccent="MŁODZI, ZDOLNI I GOTOWI DO PRACY"/>
                <Employee avatar="imgs/e1.jpg" name="Mateusz Lewczak" office="CEO"/>
                <Employee avatar="imgs/e2.jpg" name="Mateusz Lewczak" office="CEO"/>
                <Employee avatar="imgs/e3.jpg" name="Mateusz Lewczak" office="CEO"/>
                <Employee avatar="imgs/e4.jpg" name="Mateusz Lewczak" office="CEO"/>
                <Employee avatar="imgs/e5.jpg" name="Mateusz Lewczak" office="CEO"/>

                <Button text="DOŁĄCZ DO NAS" href="#joinus"/>
			</div>
		);
	}
}

export default TeamSection;
