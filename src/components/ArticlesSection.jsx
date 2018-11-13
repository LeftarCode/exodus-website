import React, { Component } from 'react';
import {Button} from './Button';
import {SectionHeader} from './SectionHeader';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/articles-section.scss'
import {Article} from './Article';
import ScrollAnimation from 'react-animate-on-scroll';

export class ArticlesSection extends Component {
	render() {
		return (
			<div className="row articles-section">
                <SectionHeader
                    header="ARTYKUŁY"
                    textAccent="NASZA WIEDZA NA PAPIERZE" />

				<ScrollAnimation animateIn="fadeInDown">
					<Article/>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInUp">
					<Article/>
				</ScrollAnimation>

				<div className="col-12 text-center">
					<Button 
						href="#blog"
						text="BLOG"/>
				</div>
			</div>
		);
	}
}

export default ArticlesSection;
