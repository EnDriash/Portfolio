import React, {Component} from 'react';
import personalImg from '../../../public/images/personalImg.jpg';
import './AboutMe.scss';
import {Animated} from "react-animated-css";

import projectsDataPL from '../../../language/pl/about.json';
import projectsDataEng from '../../../language/eng/about.json';

let videoElem = document.querySelector('.AboutMe .contentCol .intrest-col iframe');
console.log("TCL: videoElem", videoElem)

class AboutMe extends Component {
    
    render() {
        let data;

        if(this.props.lang !== 'ENG'){
        data = projectsDataEng;
        } else {
        data = projectsDataPL;
        }
        
        return (
            <div className="AboutMe">
                
                <h1>{data.header}</h1>
                <div className="row">
                    <div className=" imageCol col-xl-3 col-sm-12">
                        <div className="img personalImg">
                            <img src={personalImg} alt="My Personal IMG"></img>
                        </div>
                        <div>
                           <p></p> 
                        </div>
                    </div>
                    <div className="contentCol col-xl-9 col-sm-12">
                        <div className="row">
                            <div className="presentation-col col-xl-6 col-sm-12">
                            <h3>{data.content.presentation.header}</h3>
                                <p>{data.content.presentation.content}</p>
                            </div>
                            <div className="intrest-col col-xl-6 col-sm-12">
                            <h3>{data.content.intresting.header}</h3>
                                <p>{data.content.intresting.content}</p>
                                <iframe width="1519" height="554" 
                                    title="The Golden Mean" src="https://www.youtube.com/embed/7z6AA5jTKsg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                                </iframe>
                                <Animated className="infinite" animationInDuration={2000} animationIn="bounce" isVisible={true}>
                                    <p className="video-incentive">SHOW VIDEO!!</p> 
                                </Animated>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination">
                    {/* <PaginationList /> */}
                </div>
                
            </div>
        )
    }
    
}
export default AboutMe;