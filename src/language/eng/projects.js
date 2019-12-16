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
        header: 'Co jeszcze?',
        content:{
            node:{
                name: 'node',
                header: 'Node.js - Ćwiczenia ',
                icon: {
                    title: 'Node.js',
                    svg: icons.nodeicon
                },
                desc: <p><b>Node.js</b> – wieloplatformowe środowisko uruchomieniowe o otwartym kodzie do tworzenia aplikacji typu server-side napisanych w języku JavaScript.<br /><br /> Aby zapoznać się z środowiskiem Node.js i silnikiem <b>Chrome V8</b> zostało wykonane kilkanaście ćwiczeń w modułach takich jak: <b>fileSystem, operationSystem, HTTP</b>. Powstały projekty takie jak <b>ToDoList, Image Loader</b>.</p>,
                link: 'https://github.com/EnDriash/JSlearning/tree/master/Node.js'
            },
            mongo:{
                name: 'mongo',
                header: 'MongoDB - ToDo List',
                icon: {
                    title: 'MongoDB',
                    svg: icons.mongodbicon
                },
                desc: <p><b>MongoDB</b> – otwarty, nierelacyjny system zarządzania bazą danych napisany w języku C++. Charakteryzuje się dużą skalowalnością, wydajnością oraz brakiem ściśle zdefiniowanej struktury obsługiwanych baz danych. <br /><br />Celem tej aplikacji było przećwiczenie pracy z nierelacyjną bazą danych za pomocą 4 głównych funkcjonalności <b>Create, React, Update, Delete</b> w skórcie <b>CURD</b>. Dzięki temu powstała aplikacja do organizacji zadań tak zwana <b>ToDo List</b>. Komunikacja odbywa się za pomocą konsoli w środowisku <b>Node.js</b></p>,
                link: 'https://github.com/EnDriash/JSlearning/tree/master/MongoDB'
            },
            express:{
                name: 'express',
                header: 'Express.js - Quiz App ',
                icon: {
                    title: 'Express.js',
                    svg: icons.expressicon
                },
                desc: <p>Express.js to minimalistyczny oraz elastyczny framework Node.js, która zapewnia solidny zestaw funkcji dla pracy z aplikacjami internetowymi i mobilnymi.<br /><br /> Celem tej aplikacji było przećwiczenie komunikacji między widokiem a kontrolerem oraz zapoznanie się z metodami serwowanymi przez framework.</p>,
                link: 'https://github.com/EnDriash/JSlearning/tree/master/Express.js/Quiz'
            },
            rnative:{
                name: 'reactNative',
                header: 'React Native - Comics Api ',
                icon: {
                    title: 'React Native',
                    svg: icons.reacticon
                },
                desc: <p><b>React Native</b> to framework który umożliwia budowanie interfejsów użytkownika dla urządzeń mobilnych za pomocą React.js.<br /><br /> Aplikacja powstała z myślą o pobieraniu z udostępnionego API <a href="https://xkcd.com">xkcd.com</a> najnowszych zabawnych komiksów. W kodzie można zobaczyć nową składnią <b>React Hooks</b>, elementy natywne udostępnione dzięki React Native oraz użycie biblioteki <b>react-navigation</b> do serwowania widoków dla klienta.</p>,
                link: 'hhttps://github.com/EnDriash/xkcd-App---First-React-Native-App'
            },
            grouptask:{
                name: 'grouptask',
                header: 'Furniture Shop - Group Task ',
                icon: {
                    title: 'Jira',
                    svg: icons.jiraicon
                },
                desc: <p>Udział w projekcie zespołowym. Zrealizowanie sklepu internetowego meblowego. Byłem odpowiedzialny za stworzenie sekcji Nowe meble. Sekcja miała mieć zaimplementowane takie funkcjonalności jak przełączanie miedzy kategoriami, filtrowanie listy produktów pobranych jako obiekty, wyświetlanie sekcji jako karuzeli scalowalnej  szerokosci urzadzenia. Całość została napisana w vanillia.js oraz przy pomocy zaimplementowanego modułu <b>mustache.js</b> aby uzyskać dynamiczne dodawanie komponentów. Pliki za które byłem odpowiedzialny to: <br /><br /><b>- newFurniture.js <br />-product_data.js <br />-post_data.js <br />-templateGenerator.js <br />-swiper.js (kod zapożyczony i zaimplementowany do karuzeli)</b> <br /><br /> W projekcie brało udział 4 Junior Developerów, 1 Senior Developer, 1 Project Menager. Całość była nadzorowana za pomocą metodyki <b>Kanban w Jira oraz Github</b>. Projekt miał symulować prace zespołu developerskiego: obowiązkowe <b>code review, pull requests, rebase itd</b>.</p> ,
                link: 'https://github.com/EnDriash/wdp-1907-05/tree/master/src/scripts'
            },
            codingbat:{
                name: 'codingbat',
                header: 'Logic Tasks - CodingBat ',
                icon: {
                    title: 'Java',
                    svg: icons.javaicon
                },
                desc: <p>Rozwiązanie ponad 200 logiczynych zagadek w języku Java ze strony <a href="https://codingbat.com">codingbat.com</a>.<br /> Wybranie języka Java na samym początku nauki programowania umożliwiło zrozumienie wielu konceptów w językach jeszcze wyższego poziomu. Przykładem może być TypeScript w JS lub OOP. </p>,
                link: 'https://github.com/EnDriash/CodingBat/tree/master/CodingBat%20-%20Java%20Practice'
            },
        }
    }
}
export default data;