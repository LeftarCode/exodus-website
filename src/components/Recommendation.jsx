import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/recommendation.scss'

export class Recommendation extends Component {
	render() {
		return (
            <div className="col-3 text-center recommendation">
                <img src={this.props.image} alt=""/>
                <div className="content mx-auto">
                    <p className="text">
                        {this.props.text}
                    </p>
                    <div className="author">
                        <div className="name">
                            {this.props.authorName}
                        </div> 
                        <span className="office">{this.props.authorOffice}</span> at <span className="comapny">{this.props.authorComapny}</span>
                    </div>
                </div>
            </div>
		);
	}
}

export default Recommendation;
