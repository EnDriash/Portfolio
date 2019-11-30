import React, { Component } from 'react';
import NavElem from '../../../components/NavElem/NavElem';
import './Navigation.scss';

import ScrollAnimation from 'react-animate-on-scroll';
import Particles from 'react-particles-js';

const navigationList = [
    {
        name: 'AboutMe',
        href: 'link',
        text: 'About me'
    },
    {
        name: 'Skills',
        href: 'link',
        text: 'Skills'
    },
    {
        name: 'Projects',
        href: 'link',
        text: 'Projects'
    },
    {
        name: 'Contact',
        href: 'link',
        text: 'Contact'
    },
    
]

const particlesSettings = {
    "fps_limit": 28,
    "particles": {
      "number": {
        "value": 400,
        "density": {
          "enable": true
        }
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 2,
          "color": "#00E9FF"
        },
      },
      "line_linked": {
        "enable": true,
        "distance": 65,
        "opacity": 0.7,
        "color": "#FFFFFF"
      },
      "move": {
        "speed": 4
      },
      "opacity": {
        "anim": {
          "enable": true,
          "opacity_min": 0.05,
          "speed": 16,
          "sync": false
        },
        "value": 0.8
      }
    },
  
    "retina_detect": false,
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "bubble",
        }
      },
      "modes": {
        "bubble": {
          "size": 30,
          "distance": 110,
          "duration": 0.7,
          "opacity": 0.1,
          "speed": 12
        },
        "repulse": {
          "distance": 250,
          "duration": 0.8
        }
      }
    }
  }

class Navigation extends Component {

  changeViewHandler(nameOfNavElem) {

    const body = document.querySelector('body');

    switch(nameOfNavElem) {
      case 'AboutMe' :
          body.classList.add('AboutMeShow');
        break;
      case 'Skills' :
          body.classList.add('SkillsMeShow');
        break;
      case 'Projects' :
          body.classList.add('ProjectsMeShow');
        break;
      case 'Contact' :
          body.classList.add('ContactMeShow');
        break;
      default : 
        break;
    }
  }
  
  render(){
    return (
      <div className="Navigation">
        <Particles className="Particles" params={particlesSettings} width="100vw" />
        <ScrollAnimation animateIn='rotateIn' animateOut='rotateOut' duration={3}>
          <div className="NavigationCircle">
              {navigationList.map((elem, index) => {
                  return(
                      <NavElem click={() => this.changeViewHandler(elem.name)} className={elem.name} key={index}>
                          {elem.text}
                      </NavElem>
                  )
              })}
              <div className="language">
                  <p><span>PL</span>|<span>EN</span></p>
              </div>
          </div>
          </ScrollAnimation>
      </div>
    )
  }
}
export default Navigation;