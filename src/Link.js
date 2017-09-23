import React from 'react';
import PropTypes from 'prop-types';

const Link = props => {
    return (
        <div className="link" style={props.styleContent}>
            <h1>This is link page.</h1>
            <h1>This is link page.</h1>
            <h1>This is link page.</h1>
            <h1>This is link page.</h1>
            <h1>This is link page.</h1>
            <h1>This is link page.</h1>
            <h1>This is link page.</h1>
            <h1>This is link page.</h1>
            <button onClick={props.handleTurn}>Turn</button>

        </div>
    );
};

Link.ProtoTypes = {
    handleTurn: PropTypes.func.isRequired,
    styleContent: PropTypes.object.isRequired
};

export default Link;