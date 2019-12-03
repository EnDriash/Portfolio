import React, { Component } from 'react';
import NavElem from '../../../components/NavElem/NavElem';
import './Navigation.scss';
import navDataEng from '../../../language/eng/navigation.json'
import navDataPL from '../../../language/pl/navigation.json'

import ScrollAnimation from 'react-animate-on-scroll';
import Particles from 'react-particles-js';



class Navigation extends Component {
  state = {
    particlesSettings: {
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
  }
  changeViewHandler(nameOfNavElem) {
    const app = document.querySelector('.App');

    switch(nameOfNavElem) {
      case 'AboutMe' :
          app.classList.add('AboutMeShow');
        break;
      case 'Skills' :
          app.classList.add('SkillsMeShow');
        break;
      case 'Projects' :
          app.classList.add('ProjectsMeShow');
        break;
      case 'Contact' :
          app.classList.add('ContactMeShow');
        break;
      default : 
        break;
    }
  }
  
  render(){
    let navigationList;

    if(this.props.lang !== 'ENG'){
      navigationList = navDataEng;
    } else {
      navigationList = navDataPL;
    }

    return (
      <div className="Navigation">
        <Particles className="Particles" params={this.state.particlesSettings} width="100vw" />
        <ScrollAnimation animateIn='rotateIn' animateOut='rotateOut' duration={3}>
          <div className="NavigationCircle">
              {navigationList.map((elem, index) => {
                  return(
                      <NavElem click={() => this.changeViewHandler(elem.name)} className={elem.name} key={index}>
                          {elem.text}
                      </NavElem>
                  )
              })}
              <div className="language" onClick={this.props.click}>
                  <p>{this.props.lang}</p>
              </div>
          </div>
          </ScrollAnimation>
          <div className="copyright">
            <p>© Copyright by Jędrzej Siewierski-Krawczyk</p>
          </div>
      </div>
    )
  }
}
export default Navigation;