import React, { Component } from 'react';
import { Button } from './Button';
import { SectionHeader } from './SectionHeader';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/about-us-section.scss'

export class IncubatorSection extends Component {
	render() {
		return (
			<div className="row about-us-section">
				<div className="col-12">
					<SectionHeader
						header="INKUBATOR EXODUS"
						textAccent="PROGRAM SZKOLENIA UCZNIÓW SZKÓŁ ŚREDNICH"
						textBlack="Z WYKORZYSTANIEM AUTORSKIEGO SYSTEMU NAUCZENIA Z WYKORZYSTANIEM NOWOCZESNEJ PLATFORMY"
					/>
					<div className="content"> 
                        <p className="mx-auto">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur.</p>
                    </div>
                    <Button text="CZYTAJ DALEJ" href="#aboutus"/>
                </div>
			</div>
		);
	}
}

export default IncubatorSection;
