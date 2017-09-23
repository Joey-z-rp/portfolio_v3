import React from 'react';
import PropTypes from 'prop-types';


const About = React.createClass({

    protoTypes : {
        handleTurn: PropTypes.func.isRequired,
        styleContent: PropTypes.object.isRequired
    },

    getInitialState: function(){
        return {
            height: 0,
        };
    },

    componentDidMount: function(){
        if(this.props.counter){
            const height = this.div.clientHeight;
            console.log("11" + height);
            this.props.handleCount(height);
        }
    },

    render: function(){
        return (
            <div className="about" style={this.props.styleContent} ref={ (div) => this.div = div} >
                <h1>This is about page.</h1>
                <h1>This is about page.</h1>
                <h1>This is about page.</h1>
                <h1>This is about page.</h1>
                <h1>This is about page.</h1>
                <h1>This is about page.</h1>
                <h1>This is about page.</h1>
                <h1>This is about page.</h1>
                <h1>This is about page.</h1>
                <h1>This is about page.</h1>
                <button onClick={this.props.handleTurn}>Turn</button>
            </div>
        );
    }
});




export default About;