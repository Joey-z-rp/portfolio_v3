import React from 'react';
import ReactDOM from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import HomePageBackground from './HomePageBackground';


const HomePage = React.createClass({

    protoTypes : {
        handleTurn: PropTypes.func.isRequired,
        styleContent: PropTypes.object.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired
    },

    getInitialState: function(){
        return {
          typing1: true,
          typing2: false,
          typing3: false,
        };
    },

    onAnimationFinish: function(index){
        switch(index){
            case 1:
                this.setState({
                    typing1: false,
                    typing2: true
                });
                break;
            case 2:
                this.setState({
                    typing2: false,
                    typing3: true
                });
                break;
        }
    },

    componentDidMount() {

    },

    render: function(){
        return (
            <div className="home" style={this.props.styleContent} ref={ (div) => this.div = div}>
                { this.state.typing1 ? <Typist 
                    className="typing-animation-1"
                    startDelay={2000} 
                    avgTypingDelay={50} 
                    stdTypingDelay={60} 
                    cursor={{
                        show: true,
                        blink: true,
                        element: '▌',
                        hideWhenDone: false,
                        hideWhenDoneDelay: 1000,
                    }} 
                    delayGenerator={
                        function(mean, std, {line, lineIdx, charIdx, defDelayGenerator}) {
                        if (lineIdx === 0 && charIdx === line.length - 1) {
                            return 1000;
                        }
                        if (lineIdx === 1 && charIdx === line.length - 1) {
                            return 1000;
                        }
                        if (lineIdx === 2 && charIdx === line.length - 1) {
                            return 1000;
                        }
                        if (lineIdx === 3 && charIdx === line.length - 1) {
                            return 1000;
                        }
                        if (lineIdx === 4 && charIdx === line.length - 1) {
                            return 1000;
                        }
                        return defDelayGenerator();
                        }
                    } 
                    onTypingDone={function(){ this.onAnimationFinish(1) }.bind(this)} >
                    Hello there!
                    <br />
                    Welcome to my space.
                    <br />
                    How are you going today?
                    <br />
                    Nice weather, isn't it?
                    <br/>
                    Alright, alright, done with chitchat.
                </Typist> : null }

                { this.state.typing2 ? <Typist 
                    className="typing-animation-2"
                    startDelay={1000} 
                    avgTypingDelay={50} 
                    stdTypingDelay={60} 
                    cursor={{
                        show: true,
                        blink: true,
                        element: '▌',
                        hideWhenDone: false,
                        hideWhenDoneDelay: 1000,
                    }} 
                    delayGenerator={
                        function(mean, std, {line, lineIdx, charIdx, defDelayGenerator}) {
                        if (lineIdx === 0 && charIdx === line.length - 1) {
                            return 1000;
                        }
                        return defDelayGenerator();
                        }
                    } 
                    onTypingDone={function(){ this.onAnimationFinish(2) }.bind(this)} >
                    My name is Joey,
                    <br />
                    an enthusiastic web developer.
                </Typist> : null }

                { this.state.typing3 ? <Typist 
                    className="typing-animation-3"
                    startDelay={1000} 
                    avgTypingDelay={150} 
                    stdTypingDelay={60} 
                    cursor={{
                        show: true,
                        blink: true,
                        element: '▌',
                        hideWhenDone: false,
                        hideWhenDoneDelay: 1000,
                    }} 
                    delayGenerator={
                        function(mean, std, {line, lineIdx, charIdx, defDelayGenerator}) {
                        if (lineIdx === 0 && charIdx === line.length - 1) {
                            return 2000;
                        }
                        return defDelayGenerator();
                        }
                    } >
                    Would you like to know more about me?
                </Typist> : null }

                <HomePageBackground width={this.props.width} height={this.props.height}/>
                <button onClick={this.props.handleTurn}>Turn</button>
            </div>
        );
    }
});




export default HomePage;