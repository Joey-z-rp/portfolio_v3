import React from 'react';
import PropTypes from 'prop-types';

const sty = {
    transformOrigin: '0 300px 300px'
};

const HomePage = props => {
    return (
        <div className="home" style={sty}>
            <h1 >This is home page.</h1>
            <h1 >This is home page.</h1>
            <h1 >This is home page.</h1>
            <h1 >This is home page.</h1>
            <h1 >This is home page.</h1>
            <h1 >This is home page.</h1>
            <h1 >This is home page.</h1>
            <button onClick={props.handleTurn}>Turn</button>
        </div>
    );
};

HomePage.ProtoTypes = {
    handleTurn: PropTypes.func.isRequired,
};


export default HomePage;