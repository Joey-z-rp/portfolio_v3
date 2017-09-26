import React, { Component } from 'react';
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
      transformOrigin: `${window.innerWidth / 2 - 10}px 0 ${window.innerWidth / 2 - 10}px`
    },
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  };

  turnTo = (currentPage, nextPage) => {
    switch(currentPage){
      case "home":
        this.setState({displayHome: false});
        break;
      case "about":
        this.setState({displayAbout: false});
        break;
      case "skill":
        this.setState({displaySkill: false});
        break;
      case "link":
        this.setState({displayLink: false});
        break;
    };
    switch(nextPage){
      case "home":
        this.setState({displayHome: true});
        break;
      case "about":
        this.setState({displayAbout: true});
        break;
      case "skill":
        this.setState({displaySkill: true});
        break;
      case "link":
        this.setState({displayLink: true});
        break;
    };
  };

  componentDidMount = function(){
    window.onresize = function(){
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        styleContent: {
          transformOrigin: `${window.innerWidth / 2 - 10}px 0 ${window.innerWidth / 2 - 10}px`
        }
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
            handleTurn={this.turnTo} 
            styleContent={this.state.styleContent}  
            width={this.state.windowWidth} 
            height={this.state.windowHeight} /> : null }
          {this.state.displayAbout ? <About 
            handleTurn={this.turnTo} 
            styleContent={this.state.styleContent} /> : null }
          {this.state.displaySkill ? <Skill 
            handleTurn={this.turnTo} 
            styleContent={this.state.styleContent}/> : null }
          {this.state.displayLink ? <Link 
            handleTurn={this.turnTo} 
            styleContent={this.state.styleContent}/> : null }

        </ReactCSSTransitionGroup>
      </div>
    );
  }
}


export default App;
