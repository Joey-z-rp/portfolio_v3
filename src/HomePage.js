import React from 'react';
import PropTypes from 'prop-types';


const HomePage = props => {
    return (
        <div className="home" style={props.styleContent}>
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
    styleContent: PropTypes.object.isRequired
};


export default HomePage;