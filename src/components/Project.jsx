import React, { Component } from 'react';
import {Button} from './Button';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/project.scss'

export class Project extends Component {
	render() {
        let imageClass = "image image-left";
        let textClass = "text text-left";
        if(this.props.imgRight == "true")
        {
            imageClass = "image image-right";
            textClass = "text text-right";
        }

		return (
            <div className="col-10 offset-1 project">
                <div className={imageClass}>
                    <img src="../imgs/annakrajda.png" alt=""/>
                </div>
                <div className="content">
                    <div className={textClass}>
                        <h1>Lorem Ipsum</h1>
                        <p className="d-block">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus mollis nibh, quis dictum neque pulvinar at. Morbi tincidunt massa mi, sed consectetur odio varius vitae. Quisque ac odio in ligula posuere mattis. Aliquam efficitur libero velit, at molestie ligula dictum at. Mauris gravida fermentum ligula sed congue. Suspendisse potenti. Nunc mollis eleifend eros, a varius quam. Nullam semper gravida eros eget auctor. Aenean commodo leo et augue auctor ultricies. Vivamus blandit augue sit amet nunc luctus congue. Curabitur et pellentesque velit, id tincidunt enim.<br/><br/>

Curabitur blandit est id magna gravida dictum. Proin nec aliquam metus. Cras nec porttitor neque. In vel orci vel lorem ornare feugiat. Nunc tempor mi sit amet pretium porta. Vivamus mi neque, blandit ut velit id, ultrices vehicula lacus. Sed congue facilisis nisl, sit amet commodo massa luctus vel. Phasellus velit nulla, blandit vitae turpis vitae, pharetra pretium erat. Quisque non ipsum id nibh aliquet sodales. Donec tincidunt feugiat lacus sed egestas. Suspendisse sollicitudin tortor sapien, nec rutrum ligula cursus a. Proin a tellus mauris. Sed vel egestas sapien. Pellentesque eros quam, egestas quis mollis eu, lacinia nec augue.
                        </p>
                    </div>
                </div>
            </div>
		);
	}
}

export default Project;
