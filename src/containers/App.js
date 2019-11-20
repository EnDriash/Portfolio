import React, { Component } from 'react';

import styles from './App.scss';
import variables from '../sass/variables.scss';
import grid from '../sass/grid.scss'

import Navigation from './Navigation/Navigation';
import ContentLayout from './ContentLayout/ContentLayout';
import AboutMeMain from './AboutMeMain/AboutMeMain';
import Contact from './Contact/Contact';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';


class App extends Component {

  render() {

    return (
      <div className="App" >
          <Navigation />
        
        <ContentLayout name="AboutMe">
            <AboutMeMain />
        </ContentLayout>
        <ContentLayout name="Contact">
            <Contact />
        </ContentLayout>
        <ContentLayout name="Skills">
            <Skills />
        </ContentLayout>
        <ContentLayout name="Projects">
            <Projects />
        </ContentLayout>
      </div>
    )
  }
}

export default App;
