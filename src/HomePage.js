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

    componentDidMount() {

    },

    render: function(){
        return (
            <div className="home" style={this.props.styleContent} ref={ (div) => this.div = div}>
                <Typist 
                    className="typing-animation-1"
                    startDelay={2000} 
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
                    Hello there!
                    <br />
                    Welcome to my space.
                </Typist>
                <Typist 
                    className="typing-animation-2"
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
                    My name is Joey,
                    <br />
                    an enthusiastic web developer.
                </Typist>
                <HomePageBackground width={this.props.width} height={this.props.height}/>
                <button onClick={this.props.handleTurn}>Turn</button>
            </div>
        );
    }
});




export default HomePage;