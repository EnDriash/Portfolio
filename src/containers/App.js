import React, { Component } from 'react';

import  './App.scss';
import  '../sass/variables.scss';
import  '../sass/grid.scss'

import Navigation from './Sections/Navigation/Navigation';
import ContentLayout from './Layout/ContentLayout/ContentLayout';
import Frame from './Layout/Frame/Frame';
import AboutMe from './Sections/AboutMe/AboutMe';
import Contact from './Sections/Contact/Contact';
import Skills from './Sections/Skills/Skills';
import Projects from './Sections/Projects/Projects';
import Becker from '../components/Becker/Becker';

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
            <Becker name="down"/>
        </ContentLayout>

        <ContentLayout name="Projects">
          <Projects>
          </Projects>
          <Becker name="up"/>
        </ContentLayout>

      </div>
    )
  }
  
}

export default App;
