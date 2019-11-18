import React, {Component} from 'react';
import styles from './App.scss';
import variables from '../sass/variables.scss';
import Particles from 'react-particles-js';

import Navigation from './Navigation/Navigation';

const particlesSettings = {
  "fps_limit": 28,
  "particles": {
      "number": {
          "value": 500,
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
          "onclick":{
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

class App extends Component {

  render() {

    return(
      <div className="App" >
        <Navigation />
        <Particles className="Particles" params={particlesSettings} />
      </div>
    )
  }
}

export default App;
