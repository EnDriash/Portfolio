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
        desc: <p>This portfolio has been created and designed fully by me. This innovative creation has been implemented into my Portfolio by <b>React.js</b> and it has been based on game menu. This is place where you can know me better. Libraries likes <b>react-animation-on-scroll</b> for animation, <b>react-sass</b> for easiest styling components were been implemented by <b>Node Package Manager</b>. Deployment has been realized by <b>gh-pages</b> and form contact uses <b><a href="formspree.io">formspree.io</a> API</b>. This is why we can contact in the future!</p>,
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
                header: 'Node.js - Exercises ',
                icon: {
                    title: 'Node.js',
                    svg: icons.nodeicon
                },
                desc: <p><b>Node.js</b>  is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. <br /><br /> Few exercises has been wrote to acquaint with Node.js environment and <b>Chrome V8 Engine</b> .<br /> Exercises refer modules like: <b>fs(filesystem), os(operationsystem), http</b>. <br />Project was made like <b>toDoList, Image Loader.</b></p>,
                link: 'https://github.com/EnDriash/JSlearning/tree/master/Node.js'
            },
            mongo:{
                name: 'mongo',
                header: 'MongoDB - ToDo List',
                icon: {
                    title: 'MongoDB',
                    svg: icons.mongodbicon
                },
                desc: <p><b>MongoDB</b>  is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema. 
                Purpose of this application has been practiced work with not relational database in <b>CRUD </b>methodology. Has been made <b>ToDo List </b>application which allows organization of daily tasks. Comunication with App is possible by console in <b>Node.js</b> environment.</p>,
                
                link: 'https://github.com/EnDriash/JSlearning/tree/master/MongoDB'
            },
            express:{
                name: 'express',
                header: 'Express.js - Quiz App ',
                icon: {
                    title: 'Express.js',
                    svg: icons.expressicon
                },
                desc: <p><b>Express.js</b>, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js. <br /><br /> 
                Purpose of this application was acquaintance with functions and methods share by Framework. </p>
                ,
                link: 'https://github.com/EnDriash/JSlearning/tree/master/Express.js/Quiz'
            },
            rnative:{
                name: 'reactNative',
                header: 'React Native - Comics Api ',
                icon: {
                    title: 'React Native',
                    svg: icons.reacticon
                },
                desc: <p><b>React Native </b> is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS, Web and UWP by enabling developers to use React along with native platform capabilities. .<br /><br />  Application has been created to fetching newest funny comics shared by <a href="https://xkcd.com">xkcd.com</a> API. To create this app was used new syntax <b>React Hooks</b>, <b>native elements</b> shared by React Native, <b>react-navigation</b> module to serve view for client. .</p>,
                link: 'hhttps://github.com/EnDriash/xkcd-App---First-React-Native-App'
            },
            grouptask:{
                name: 'grouptask',
                header: 'Furniture Shop - Group Task ',
                icon: {
                    title: 'Jira',
                    svg: icons.jiraicon
                },
                desc: <p>This section refer take part in a group project. During it has been created the furniture shop web page. I had responsibility for created New Furniture section. It should had implemented functionality like: filter of load data, section should be scalable carousel to width device, switching between categories. All has been wrote in vanilla.js and by <b>mustache.js</b> module in that has been possible to create forms for each furniture data and serve it automation.  Files which I created: <br /><br /><b>- newFurniture.js <br />-product_data.js <br />-post_data.js <br />-templateGenerator.js <br />-swiper.js </b> <br /><br /> Project members consisted : 4 Junior Developers, 1 Senior Developer, 1 Project Manager. Project has been supervision by Kanban methodology in Jira and Github. Project was simulation of daily developer work. During the project we applied Code Reviews, pull requests, managing of respository in github.</p> ,
                link: 'https://github.com/EnDriash/wdp-1907-05/tree/master/src/scripts'
            },
            codingbat:{
                name: 'codingbat',
                header: 'Logic Tasks - CodingBat ',
                icon: {
                    title: 'Java',
                    svg: icons.javaicon
                },
                desc: <p>Below we can see solved more than 200 logic problems in Java programming language from <a href="https://codingbat.com">codingbat.com</a>.<br /> page. <br /> I’ve choosen Java for my first programming language therefore I get more easiest feeling to learn new thinks and concepts in JavaScript. For example TypeScript or OOP. </p>,
                link: 'https://github.com/EnDriash/CodingBat/tree/master/CodingBat%20-%20Java%20Practice'
            },
        }
    }
}
export default data;