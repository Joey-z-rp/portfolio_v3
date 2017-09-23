import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import HomePage from './HomePage';
import About from './About';
import Skill from './Skill';
import Link from './Link';

class App extends Component {
  state = {
    displayHome: true,
    displayAbout: true,
    displaySkill: false,
    displayLink: false,
    styleContent: {
      transformOrigin: '0 300px 300px'
    },
    calculate: true
  };

  turnToAbout = e => {
    this.setState({
      displayAbout: true,
      displayHome: false
    });
  };

  turnToSkill = e => {
    this.setState({
      displayAbout: false,
      displaySkill: true
    });
  };

  turnToLink = e => {
    this.setState({
      displayLink: true,
      displaySkill: false
    });
  };

  turnToHome = e => {
    this.setState({
      displayLink: false,
      displayHome: true
    });
  };

  countHeight = (height, componentName) => {
    // console.log(componentName + height);
    switch(componentName){
      case "about":
        this.setState({
          about: height
        });
        break;
    }

  }

  componentDidMount = function(){

    this.setState({
      displayAbout: false,
      calculate: false
    });
  }
  

  render() {
    return (
      <div className="App">
        <ReactCSSTransitionGroup 
          component="div" 
          transitionName="rotate" 
          transitionEnterTimeout={1000} 
          transitionLeaveTimeout={1000}>

          {this.state.displayHome ? <HomePage 
            handleTurn={this.turnToAbout} 
            styleContent={this.state.styleContent}/> : null }
          {this.state.displayAbout ? <About 
            handleTurn={this.turnToSkill} 
            styleContent={this.state.styleContent} 
            initialCalculate={this.state.calculate} 
            calculateHeight={this.countHeight}/> : null }
          {this.state.displaySkill ? <Skill 
            handleTurn={this.turnToLink} 
            styleContent={this.state.styleContent}/> : null }
          {this.state.displayLink ? <Link 
            handleTurn={this.turnToHome} 
            styleContent={this.state.styleContent}/> : null }

        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
