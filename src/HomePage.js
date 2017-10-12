import React from 'react';
import ReactDOM from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import HomePageBackground from './HomePageBackground';
import NavMenu from './NavMenu';    


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
          typing4: false,
          showButton: false,
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

    goodbye: function(){
        this.setState({
            typing3: false,
            showButton: false,
            typing4: true
        });
    },

    componentDidMount() {

    },

    render: function(){
        return (
            <div className="home" style={this.props.styleContent} ref={ (div) => this.div = div}>
                <Typist 
                    className="typing-animation-1 typing-animation"
                    startDelay={500} 
                    avgTypingDelay={30} 
                    stdTypingDelay={50} 
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
                            return 200;
                        }
                        if (lineIdx === 1 && charIdx === line.length - 1) {
                            return 200;
                        }
                        if (lineIdx === 2 && charIdx === line.length - 1) {
                            return 200;
                        }
                        return defDelayGenerator();
                        }
                    } 
                    onTypingDone={function(){ this.onAnimationFinish(1) }.bind(this)} >
                    Hello there!
                    <br />
                    My name is Joey, an enthusiastic web developer.
                    <br />
                    I am a fast learner and am looking for an opportunity to prove myself.
                </Typist>

                <HomePageBackground width={this.props.width} height={this.props.height}/>
                <NavMenu handleTurn={this.props.handleTurn} currentPage="home"/>
            </div>
        );
    }
});




export default HomePage;