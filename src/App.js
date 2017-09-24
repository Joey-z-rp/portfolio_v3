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
    displayAbout: false,
    displaySkill: false,
    displayLink: false,
    styleContent: {
      transformOrigin: '400px 0 400px'
    },
    calculate: true,
    windowWidth: 0
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

  componentDidMount = function(){
    window.onresize = function(){
      console.log(window.innerWidth);
      this.setState({
        windowWidth: window.innerWidth
      });
    }.bind(this);
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
            styleContent={this.state.styleContent} 
            initialCalculate={this.state.calculate} 
            calculateHeight={this.countHeight}/> : null }
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
