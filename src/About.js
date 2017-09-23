import React from 'react';
import PropTypes from 'prop-types';

const sty = {
    transformOrigin: '0 300px 300px'
};

const About = props => {
    return (
        <div className="about" style={sty}>
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
};

export default About;