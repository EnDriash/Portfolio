import React from 'react';
import icons from '../../public/icons/iconslist';

import burger from '../../public/images/Project/BURGER.PNG';
import blsystem from '../../public/images/Project/BannerLinkSystem.png';
import prsgame from '../../public/images/Project/PRSgame.PNG';
import awax from '../../public/images/Project/AWAX.jpg';
import mache from '../../public/images/Project/MACHE.jpg';
import golden from '../../public/images/Project/GOLDEN.jpg';
import portfolio from '../../public/images/Project/Portfolio.JPG';

const data = {
    mainHeaderName: "My Projects",
    layout:{
        about: "About Project:",
        technologies: "Technologies:"
    },
    projects:{
    portfolio: {
        header: 'Here, where you are - ',
        title: 'My Portfolio',
        desc: <p>This portfolio has been created and designed fully by me. This innovative creation has been implemented into my Portfolio by <b>React.</b> and it has been based on game menu. This is place where you can know me better. Libraries likes <b>react-animation-on-scroll</b> for animation, <b>react-sass</b> for easiest styling components were been implemented by Node Package Manager. Deployment has been realized by <b>gh-pages</b> and form contact uses <b><a href="formspree.io">formspree.io</a> API</b>. This is why we can contact in the future!</p>,
        previewImg: portfolio,
        preview:{
            demo: 'https://endriash.github.io/Portfolio/',
            code: 'https://github.com/EnDriash/Portfolio',
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
                title: 'React.js',
                svg: icons.reacticon
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
        desc: <p>It is one of my first projects created in order to develop my skills regarding to links and banners management. In that project I had opportunity to practice: <b>appropriate structure of documents, SASS, effect SPA in vanilla JS, Responsive Web Design</b> and implements libraries from <b>NPM</b>.</p>,
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
        desc: <p>This is project of simple game in Paper, Rock and Scissors. The game opens at web browser. It has been created in <b>SASS, vanilla JS and HTML.</b> The goal of project was to learn <b>HTML DOM methods and logic with OOP in JavaScript.</b> The game allows to play with computer or other man. Statistics are generated automatically and shown after the game into modal.</p>,
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
        desc: <p>I have created Landing Page project, which was based on <b>Flexbox</b>, to practice <b>HTML5, CSS3, SASS(CSS3), navigation in JS and implementing of RWD.</b></p>,
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
        desc: <p>I have created Landing Page project, which was based on float old technology, to pratice <b>HTML5, CSS3, SASS(CSS3), navigation in JS and implementing of RWD.</b></p>,
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
        desc: <p>It is the first Landing Page project created by me. I have created it to practice <b>HTML5, CSS3, SASS(CSS3), navigation in JS and implementing of RWD.</b> This project was refactored. If you want to check older structure of code, you can check it in the history of commits on GitHub.</p>,
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
    currentwork: {
        header: 'What I actually do? - ',
        title: 'Burger Builder App',
        desc: <p>This is an application project which has been realized during course on Udemy platform made by <b>Maximilian Schwarzmüller</b>. The course is about web development in <b>React.js</b> library with the newest standards and good practices. Schedule of program includes management of lifecycle components, store state in <b>Redux</b> library in <b>Flux</b> architecture, routing besides frontend with <b>React Router</b>, create functional components in <b>React Hooks</b>. It has <b>40 hours</b> of specialistic knowledge during it I has created practical application. Course allows me rised my skills in creating web application in React.js library.</p>,
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
    }
    },
    whatElse:{
        header: 'What Else?',
        content:{
            node:{
                name: 'node',
                header: 'Node.js',
                desc: '',
                link: ''
            },
            mongo:{
                name: 'mongo',
                header: 'MongoDB',
                desc: '',
                link: ''
            },
            express:{
                name: 'express',
                header: 'Express.js',
                desc: '',
                link: ''
            },
        }
    }
}
export default data;