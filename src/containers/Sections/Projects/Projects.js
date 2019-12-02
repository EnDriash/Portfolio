import React, {Component} from 'react';
import './Projects.scss';

import Project from './Project/Project';
import ScrollAnimation from 'react-animate-on-scroll';

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
            
            {Object.values(data.projects).map((elem, index) => {
                if(index%2 === 0){
                    
                    return(
                        <ScrollAnimation key={index} animateIn='bounceInLeft' animateOut='bounceOutRight' scrollableParentSelector='#div-scroll' offset={400} duration={2}>
                            <Project layout={data.layout} data={elem} key={index} />
                        </ScrollAnimation>
                    )   
                } else {
                    return(
                        <ScrollAnimation key={index} animateIn='bounceInRight' animateOut='bounceOutLeft' scrollableParentSelector='#div-scroll' offset={400} duration={2}>
                            <Project layout={data.layout} data={elem} key={index} />
                        </ScrollAnimation>
                    )
                }
                
            })}
            {this.props.children}
        </div>
        )
    }
}
export default Projects;