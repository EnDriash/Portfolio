import React, { Component } from 'react';
import styles from './App.scss';
import variables from '../sass/variables.scss';

import Navigation from './Navigation/Navigation';
import ContentLayout from './ContentLayout/ContentLayout';
import AboutMeMain from './AboutMeMain/AboutMeMain';
import grid from '../sass/grid.scss'

class App extends Component {

  render() {

    return (
      <div className="App" >
          <Navigation />
        
        <ContentLayout name="AboutMe">
            <AboutMeMain />
        </ContentLayout>
      </div>
    )
  }
}

export default App;
