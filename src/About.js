import React from 'react';
import PropTypes from 'prop-types';


const About = React.createClass({

    protoTypes : {
        handleTurn: PropTypes.func.isRequired,
        styleContent: PropTypes.object.isRequired
    },

    // componentDidMount: function(){
    //     if(this.props.initialCalculate){
    //         const height = this.div.clientHeight;
    //         this.props.calculateHeight(height,"about");
    //     }
    // },

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