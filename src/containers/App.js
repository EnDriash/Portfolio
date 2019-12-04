import React, { Component } from 'react';
import Swipe from 'react-easy-swipe';

import  './App.scss';
import  '../sass/variables.scss';
import  '../sass/grid.scss';
import 'animate.css/animate.min.css';

import Navigation from './Sections/Navigation/Navigation';
import ContentLayout from './Layout/ContentLayout/ContentLayout';
import Frame from './Layout/Frame/Frame';
import AboutMe from './Sections/AboutMe/AboutMe';
import Contact from './Sections/Contact/Contact';
import Skills from './Sections/Skills/Skills';
import Projects from './Sections/Projects/Projects';
import Becker from '../components/Becker/Becker';

class App extends Component {
 state ={
   showContent: false,
   lang: 'PL'
 }

 componentDidMount() {
   this.setState({showContent: true})
 }

 changeLangHandler() {
    if(this.state.lang === 'PL') {
      this.setState({lang: 'ENG'});
    } else {
      this.setState({lang: 'PL'});
    }
 }

 backHandler(position, event) {
  const app = document.querySelector('.App');
  app.classList.remove(app.classList.item(1));
}

  render() {
    
    return (
      <div className="App" >
        <Navigation lang={this.state.lang} click={() => this.changeLangHandler()} />
        {
          this.state.showContent ? 
          <div>
          
            <ContentLayout name="AboutMe">
              <Frame>
                <Swipe onSwipeLeft={this.backHandler}>
                  <AboutMe lang={this.state.lang} />
                </Swipe>
              </Frame>
            </ContentLayout>
          
            <ContentLayout name="Contact">
              <Frame>
                <Swipe onSwipeRight={this.backHandler}>
                  <Contact lang={this.state.lang} />
                </Swipe>
              </Frame>
            </ContentLayout>

            <ContentLayout name="Skills">
                <Skills lang={this.state.lang} />
                <Becker name="down"/>
            </ContentLayout>

            <ContentLayout name="Projects">
              <Projects lang={this.state.lang}>
              </Projects>
              <Becker name="up"/>
            </ContentLayout>
            
          </div> : null
        }
      </div>
    )
  }
  
}

export default App;
