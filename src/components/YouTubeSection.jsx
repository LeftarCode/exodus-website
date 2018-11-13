import React, { Component } from 'react';
import {Button} from './Button';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/youtube-section.scss'

export class YouTubeSection extends Component {
	render() {
		return (
			<div className="row youtube-section">
                <div className="title">
                    <h1>YOUTUBE</h1>
                </div>
				<div className="embed-responsive embed-responsive-21by9 mx-auto">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                </div>
                <Button
                    href="https://www.youtube.com/channel/UCczdBO1oPq6Vd4H6vZ1d_1g"
                    text="NASZ KANAŁ"/>
			</div>
		);
	}
}

export default YouTubeSection;
