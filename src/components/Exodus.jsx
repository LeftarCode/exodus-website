import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { LogoSection } from './LogoSection';
import { AboutUsSection } from './AboutUsSection';
import { StatisticsSection } from './StatisticsSection';
import { TeamSection } from './TeamSection';
import { RecommendationsSection } from './RecommendationsSection';
import { PortfolioSection } from './PortfolioSection';
import { ServicesSection } from './ServicesSection';
import { ArticlesSection } from './ArticlesSection';
import { YouTubeSection } from './YouTubeSection';
import { IncubatorSection } from './IncubatorSection';
import { ContactSection } from './ContactSection';
import { LoadingScreen } from 'react-loading-screen';

export class Exodus extends Component {
	render() {
		return (
			<div className="container-fluid">
				<LogoSection/>
				<AboutUsSection/>
				<StatisticsSection/>
				<TeamSection/>
				<RecommendationsSection/>
				<PortfolioSection/>
				<ServicesSection/>
				<ArticlesSection/>
				<YouTubeSection/>
				<IncubatorSection/>
				<ContactSection/>
			</div>
		);
	}
}

export default Exodus;
