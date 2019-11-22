import React, { Component } from 'react';

import styles from './App.scss';
import variables from '../sass/variables.scss';
import grid from '../sass/grid.scss'

import Navigation from './Sections/Navigation/Navigation';
import ContentLayout from './Layout/ContentLayout/ContentLayout';
import Frame from './Layout/Frame/Frame';
import AboutMe from './Sections/AboutMe/AboutMe';
import Contact from './Sections/Contact/Contact';
import Skills from './Sections/Skills/Skills';
import Projects from './Sections/Projects/Projects';


class App extends Component {

  render() {

    return (
      <div className="App" >
        <Navigation />
        
        <ContentLayout name="AboutMe">
          <Frame>
            <AboutMe />
          </Frame>
        </ContentLayout>

        <ContentLayout name="Contact">
          <Frame>
             <Contact />
          </Frame>
        </ContentLayout>

        <ContentLayout name="Skills">
            <Skills />
        </ContentLayout>

        <ContentLayout name="Projects">
          <Frame>
            <Projects />
          </Frame>
        </ContentLayout>
      </div>
    )
  }
}

export default App;
