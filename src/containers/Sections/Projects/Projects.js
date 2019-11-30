import React, {Component} from 'react';
import './Projects.scss';

import Project from './Project/Project';
import ScrollAnimation from 'react-animate-on-scroll';

import icons from '../../../public/icons/iconslist';
import burger from '../../../public/images/Project/BURGER.PNG';
import blsystem from '../../../public/images/Project/BannerLinkSystem.png';
import prsgame from '../../../public/images/Project/PRSgame.PNG';
import awax from '../../../public/images/Project/AWAX.jpg';
import mache from '../../../public/images/Project/MACHE.jpg';
import golden from '../../../public/images/Project/GOLDEN.jpg';
import portfolio from '../../../public/images/Project/Portfolio.JPG';

const data = {
    currentwork: {
        header: 'What I actually do? - ',
        title: 'Burger Builder App',
        desc: <p>Jest to projekt aplikacji realizowanej wg. programu kursu na <b>Udemy</b> stworzonego przez <i>Maximilian'a a Schwarzmüller'a</i>. Kurs porusza tworzenie stron w bibliotece <b>React.js</b> z najnowszymi standardami i dobrymi praktykami. Poruszane są tematy takie jak zarządzanie stanem komponentu w <b>Redux</b> w architekturze Flux, routing po stronie frontendu czyli biblioteka <b>React Router</b>, tworzenie inteligentynych komponentów w <b>React Hooks</b>. Łącznie <b>40h</b> specjalistycznej wiedzy popartej praktyką.</p>,
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
    portfolio: {
        header: 'Here, where you are - ',
        title: 'My Portfolio',
        desc: <p>Portfolio które właśnie przeglądasz zostało napisane w <b>React.js</b>. Zaimplementowana zostały paczki z <b>Node Package Menagar</b>biblioteka odpowiedzialna za animacje tj. <b>react-animation-on-scroll</b>. Całośc została rozbita na reużywalne komponenty które są automatycznie renderowane. Została wykorzystana paczka <b>react-sass</b> i zaimplementowana do webpacka stworzonego przez <b>react-creat-app</b>. Deployment strony jest realizowany za pomoca paczki <b>gh-pages</b>, a sam formularz kontaktowy został podpięty do <a href="formspree.io">formspree.io</a> abyśmy mogli się skontaktować. </p>,
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
        desc: <p>Jeden z pierwszych moich projektów stworzony z myślą o zarządzaniu linkami oraz banerami. W tym projekcie chciałem przećwiczyć: poprawną strukturę dokumentów, używanie preprocessora <b>SASS</b>, efekt <b>SPA w vanilla JS</b>, <b>Responisve Web Design</b> aby strona otwierała się na każdym typie urządzenia oraz stosowanie dodatkowych bibliotek wraz ze skrytpami w <b>NPM</b>.</p>,
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
        desc: <p>Jest to projekt gry Papier, Kamień i Nożyce w przeglądarce napisanej za pomocą SASS, vanilla JS oraz HTML. Celem było zapoznanie sie z metodami <b>HTML DOM</b> i przećwiczenie pisania logiki w <b>JavaScript</b>. Gra umożliwia granie z komputerem oraz osobnym graczem, a nastepnie generuje tabele ze statystykami.</p>,
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
        desc: <p>Projekt Landing Page'a opartego na <b>Flexbox'ie</b> służył do przećwiczenia składni <b>HTML5, CSS3, SASS(CSS3), nawigacji w JS oraz zaimplementowania RWD.</b></p>,
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
        desc: <p>Projekt Landing Page'a oparty na starej technologi pozycjonowania elementów jaką są floaty służył do przećwiczenia składni HTML5, CSS3, SASS(CSS3), nawigacji w JS oraz zaimplementowania RWD.</p>,
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
        desc: <p>Jeden z pierwszych projektów typu Landing Page. Służył do przećwiczenia składni HTML5, CSS3, SASS(CSS3), nawigacji w JS zaimplementowania RWD. Landing Page przeszedl refactoring. Starszą struktóre kodu można odczytać cofając się w historii commitów na GitHub.</p>,
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
        
    }
}

class Projects extends Component {
    render() {
        return (
        <div className="Projects" id="div-scroll">

            <ScrollAnimation animateIn='zoomInDown' animateOut='zoomOutDown' scrollableParentSelector='#div-scroll' offset={0} duration={1}>
                <h1>My Projects</h1>
            </ScrollAnimation>
            
            {Object.values(data).map((elem, index) => {
                if(index%2 === 0){
                    
                    return(
                        <ScrollAnimation key={index} animateIn='bounceInLeft' animateOut='bounceOutRight' scrollableParentSelector='#div-scroll' offset={400} duration={2}>
                            <Project data={elem} key={index} />
                        </ScrollAnimation>
                    )   
                } else {
                    return(
                        <ScrollAnimation key={index} animateIn='bounceInRight' animateOut='bounceOutLeft' scrollableParentSelector='#div-scroll' offset={400} duration={2}>
                            <Project data={elem} key={index} />
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