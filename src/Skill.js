import React from 'react';
import PropTypes from 'prop-types';


const Skill = props => {
    return (
        <div className="skill" style={props.styleContent}>
            <h1>This is skill page.</h1>
            <h1>This is skill page.</h1>
            <h1>This is skill page.</h1>
            <h1>This is skill page.</h1>
            <h1>This is skill page.</h1>
            <h1>This is skill page.</h1>
            <h1>This is skill page.</h1>
            <button onClick={props.handleTurn}>Turn</button>
        </div>
    );
};

Skill.ProtoTypes = {
    handleTurn: PropTypes.func.isRequired,
    styleContent: PropTypes.object.isRequired
};

export default Skill;