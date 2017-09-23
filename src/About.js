import React from 'react';
import PropTypes from 'prop-types';


const About = props => {
    return (
        <div className="about" style={props.styleContent}>
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
            <button onClick={props.handleTurn}>Turn</button>
        </div>
    );
};

About.ProtoTypes = {
    handleTurn: PropTypes.func.isRequired,
    styleContent: PropTypes.object.isRequired
};

export default About;