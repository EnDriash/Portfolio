import React, {Component} from 'react';
import './Projects.scss';
import {Animated} from "react-animated-css";

import Project from './Project/Project';
import ScrollAnimation from 'react-animate-on-scroll';
import WhatElse from './WhatElse/WhatElse';

import dataENG from '../../../language/eng/projects';
import dataPL from '../../../language/pl/projects';


class Projects extends Component {
    render() {
        let data;

        if(this.props.lang !== 'ENG'){
          data = dataENG;
        } else {
          data = dataPL;
        }
        
        return (
        <div className="Projects" id="div-scroll">

            <ScrollAnimation animateIn='zoomInDown' animateOut='zoomOutDown' scrollableParentSelector='#div-scroll' offset={0} duration={1}>
                <h1>{data.mainHeaderName}</h1>
            </ScrollAnimation>
            <ScrollAnimation animateOut='fadeOut' scrollableParentSelector='#div-scroll' offset={900}  animateOnce={true} initiallyVisible={true} duration={0.5}>
                <Animated className="infinite scroll-incentive" animationIn="pulse"   isVisible={true}>
                    <div><p>SCROLL</p></div>
                    <div className="scroll-incentive">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>

                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>

                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                    </div> 
                </Animated>
            </ScrollAnimation>
            {Object.values(data.projects).map((elem, index) => {
                if(index%2 === 0){
                    
                    return(
                        <ScrollAnimation key={index} animateIn='bounceInLeft' animateOut='bounceOutRight' 
                        scrollableParentSelector='#div-scroll' offset={400} duration={1}>
                            <Project layout={data.layout} data={elem} key={index} />
                        </ScrollAnimation>
                    )   
                } else {
                    return(
                        <ScrollAnimation key={index} animateIn='bounceInRight' animateOut='bounceOutLeft' 
                        scrollableParentSelector='#div-scroll' offset={400} duration={1}>
                            <Project layout={data.layout} data={elem} key={index} />
                        </ScrollAnimation>
                    )
                }
                
            })}
            <ScrollAnimation animateIn='bounceInUp' animateOut='bounceOutDown'
             scrollableParentSelector='#div-scroll' offset={200} duration={1}>
                <WhatElse></WhatElse>
            </ScrollAnimation>

            {this.props.children}
        </div>
        )
    }
}
export default Projects;