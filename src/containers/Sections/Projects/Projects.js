import React, {Component} from 'react';
import personalImg from '../../../public/images/personalImg.jpg'
import styles from './Projects.scss';
import animate from "animate.css/animate.css";
import icons from '../../../public/icons/iconslist';
import Project from './Project/Project';

import {Animated} from "react-animated-css";

import burger from '../../../public/images/Project/BURGER.PNG'
import blsystem from '../../../public/images/Project/BannerLinkSystem.png'
import prsgame from '../../../public/images/Project/PRSgame.PNG'
import awax from '../../../public/images/Project/AWAX.jpg'
import mache from '../../../public/images/Project/MACHE.jpg'
import golden from '../../../public/images/Project/GOLDEN.jpg'


const data = {
    currentwork: {
        header: 'What I actually do? - ',
        title: 'Burger Builder App',
        desc: 'Lorem Ipsum amnet',
        previewImg: burger,
        preview:{
            demo: 'https://endriash.github.io/BurgerApp-ReactLearning/',
            code: 'https://github.com/EnDriash/BurgerApp-ReactLearning',
        },
        icons: [
            {
                title: 'HTML5',
                svg: icons.html5icon
            },
            {
                title: 'CSS3',
                svg: icons.cssicon
            },
            {
                title: 'JavaScript',
                svg: icons.jsicon
            },
            {
                title: 'React.js',
                svg: icons.reacticon
            },
            {
                title: 'Redux',
                svg: icons.reduxicon
            },
            {
                title: 'Node Package Module',
                svg: icons.npmicon
            },
        ]
    },
    bannerlinksystem: {
        header: 'Project - ',
        title: 'Banner Link System',
        desc: 'Lorem Ipsum amnet',
        previewImg: blsystem,
        preview:{
            demo: 'https://endriash.github.io/BannerLinkSystem/.',
            code: 'https://github.com/EnDriash/BannerLinkSystem',
        },
        icons: [
            {
                title: 'HTML5',
                svg: icons.html5icon
            },
            {
                title: 'CSS3',
                svg: icons.cssicon
            },
            {
                title: 'SASS',
                svg: icons.sassicon
            },
            {
                title: 'JavaScript',
                svg: icons.jsicon
            },
            {
                title: 'Node Package Module',
                svg: icons.npmicon
            },
        ]
    },
    paperrockscissors: {
        header: 'Game Project - ',
        title: 'Paper, Rock, Scissors',
        desc: 'Lorem Ipsum amnet',
        previewImg: prsgame,
        preview:{
            demo: 'https://endriash.github.io/Projects/PaperRockScissors/PaperRockScissors.html',
            code: 'https://github.com/EnDriash/Projects/tree/master/PaperRockScissors',
        },
        icons: [
            {
                title: 'HTML5',
                svg: icons.html5icon
            },
            {
                title: 'CSS3',
                svg: icons.cssicon
            },
            {
                title: 'SASS',
                svg: icons.sassicon
            },
            {
                title: 'JavaScript',
                svg: icons.jsicon
            },
            {
                title: 'Node Package Module',
                svg: icons.npmicon
            },
        ]
    },
    awax: {
        header: 'Landing Page Project - ',
        title: 'Awax',
        desc: 'Lorem Ipsum amnet',
        previewImg: awax,
        preview:{
            demo: 'https://endriash.github.io/Projects/SimplePage4/index.html',
            code: 'https://github.com/EnDriash/Projects/tree/master/SimplePage4',
        },
        icons: [
            {
                title: 'HTML5',
                svg: icons.html5icon
            },
            {
                title: 'CSS3',
                svg: icons.cssicon
            },
            {
                title: 'SASS',
                svg: icons.sassicon
            },
            {
                title: 'JavaScript',
                svg: icons.jsicon
            },
            {
                title: 'Node Package Module',
                svg: icons.npmicon
            },
        ]
    },
    golden: {
        header: 'Landing Page Project - ',
        title: 'Golden',
        desc: 'Lorem Ipsum amnet',
        previewImg: golden,
        preview:{
            demo: 'https://endriash.github.io/Projects/SimplePage3/SimplePage3.html',
            code: 'https://github.com/EnDriash/Projects/tree/master/SimplePage3',
        },
        icons: [
            {
                title: 'HTML5',
                svg: icons.html5icon
            },
            {
                title: 'CSS3',
                svg: icons.cssicon
            },
            {
                title: 'SASS',
                svg: icons.sassicon
            },
            {
                title: 'JavaScript',
                svg: icons.jsicon
            },
            {
                title: 'Node Package Module',
                svg: icons.npmicon
            },
        ]
    },
    mache: {
        header: 'Landing Page Project - ',
        title: 'Mache',
        desc: 'Lorem Ipsum amnet',
        previewImg: mache,
        preview:{
            demo: 'https://endriash.github.io/Projects/SimplePage2/index.html',
            code: 'https://github.com/EnDriash/Projects/tree/master/SimplePage2',
        },
        icons: [
            {
                title: 'HTML5',
                svg: icons.html5icon
            },
            {
                title: 'CSS3',
                svg: icons.cssicon
            },
            {
                title: 'SASS',
                svg: icons.sassicon
            },
            {
                title: 'JavaScript',
                svg: icons.jsicon
            },
            {
                title: 'Node Package Module',
                svg: icons.npmicon
            },
        ]
    },
    bannerlinksystem: {
        header: 'Project - ',
        title: 'Banner Link System',
        desc: 'Lorem Ipsum amnet',
        previewImg: blsystem,
        preview:{
            demo: 'https://endriash.github.io/BannerLinkSystem/.',
            code: 'https://github.com/EnDriash/BannerLinkSystem',
        },
        icons: [
            {
                title: 'HTML5',
                svg: icons.html5icon
            },
            {
                title: 'CSS3',
                svg: icons.cssicon
            },
            {
                title: 'SASS',
                svg: icons.sassicon
            },
            {
                title: 'JavaScript',
                svg: icons.jsicon
            },
            {
                title: 'Node Package Module',
                svg: icons.npmicon
            },
        ]
    }
}


class Projects extends Component {
    render() {
        return (
        <div className="Projects">
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <h1>My Projects</h1>
            </Animated>
            
            {Object.values(data).map((elem, index) => {
                if(index%2 === 0){
                    
                    return(
                        <Animated animationIn="bounceInRight"  animationOut="fadeOut" isVisible={true}>
                            <Project data={elem} key={index} />
                        </Animated>
                    )   
                } else {
                    return(
                        <Animated animationIn="bounceInLeft"  animationOut="fadeOut" isVisible={true}>
                            <Project data={elem} key={index} />
                        </Animated>
                    )
                }
                
            })}
            {this.props.children}
        </div>
        )
    }
}
export default Projects;