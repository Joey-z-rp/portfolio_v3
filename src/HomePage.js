import React from 'react';
import PropTypes from 'prop-types';


const HomePage = React.createClass({

    protoTypes : {
        handleTurn: PropTypes.func.isRequired,
        styleContent: PropTypes.object.isRequired
    },


    render: function(){
        return (
            <div className="home" style={this.props.styleContent} ref={ (div) => this.div = div}>
                <h1 >This is home page.</h1>
                <h1 >This is home page.</h1>
                <h1 >This is home page.</h1>
                <h1 >This is home page.</h1>
                <h1 >This is home page.</h1>
                <h1 >This is home page.</h1>
                <h1 >This is home page.</h1>
                <button onClick={this.props.handleTurn}>Turn</button>
            </div>
        );
    }
});




export default HomePage;