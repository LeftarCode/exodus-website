import React, { Component } from 'react';
import {Button} from './Button';
import {Employee} from './Employee';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/recommendations-section.scss'
import {Recommendation} from './Recommendation';
import ScrollAnimation from 'react-animate-on-scroll';

export class RecommendationsSection extends Component {
	render() {
		return (
            <div className="recommendations-section">
                <ScrollAnimation animateIn="slideInLeft">
                    <div className="row">
                        <div className="col"></div>
                        <Recommendation 
                            image="../imgs/download10.png"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et euismod odio, id aliquam magna. Maecenas dictum dui libero, sed lacinia erat cursus lacinia. Proin aliquet tortor et libero pulvinar, pellentesque laoreet leo posuere. Curabitur imperdiet mi eu ante tristique."
                            authorName="Lorem Ipsum"
                            authorOffice="CEO"
                            authorComapny="Lorem Ipsum"/>
                        <div className="col"></div>
                        <Recommendation 
                            image="../imgs/download11.png"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et euismod odio, id aliquam magna. Maecenas dictum dui libero, sed lacinia erat cursus lacinia. Proin aliquet tortor et libero pulvinar, pellentesque laoreet leo posuere. Curabitur imperdiet mi eu ante tristique."
                            authorName="Lorem Ipsum"
                            authorOffice="CEO"
                            authorComapny="Lorem Ipsum"/>
                        <div className="col"></div>
                        <Recommendation 
                            image="../imgs/download12.png"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et euismod odio, id aliquam magna. Maecenas dictum dui libero, sed lacinia erat cursus lacinia. Proin aliquet tortor et libero pulvinar, pellentesque laoreet leo posuere. Curabitur imperdiet mi eu ante tristique."
                            authorName="Lorem Ipsum"
                            authorOffice="CEO"
                            authorComapny="Lorem Ipsum"/>
                        <div className="col"></div>
                    </div>
                </ScrollAnimation>
            </div>
		);
	}
}

export default RecommendationsSection;
