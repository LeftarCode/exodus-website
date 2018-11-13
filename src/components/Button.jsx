import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/Button.scss'

export class Button extends Component {
	render() {
		return (
            <div className="button-wrapper">
                <MediaQuery query="(max-device-width: 1224px)">
                    <a href={this.props.href} className="btn-lg ex-btn">
                        {this.props.text}
                    </a>
                </MediaQuery>
                <MediaQuery query="(min-device-width: 1224px)">
                    <a href={this.props.href} className="btn-sm ex-btn">
                        {this.props.text}
                    </a>
                </MediaQuery>
            </div>
            
		);
	}
}

export default Button;
