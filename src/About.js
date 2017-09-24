import React from 'react';
import PropTypes from 'prop-types';


const About = React.createClass({

    protoTypes : {
        handleTurn: PropTypes.func.isRequired,
        styleContent: PropTypes.object.isRequired
    },

    render: function(){
        return (
            <div className="about" style={this.props.styleContent} ref={ (div) => this.div = div} >
                <h2>About me</h2>
                <div className="about-me-wrap">
                    <img src="./images/bio.jpg" alt="my-picture" />
                    <p>
                        After 8 years' work as an aircraft maintenance engineer, I moved to Australia and started new life here. Computer science and information technology have always been my interest since I was a child, so I decided to follow my heart and change career to be a software developer. I am studying HTML, CSS, Javascript, React.js, Node.js, Ruby, Rails etc. I am good at learning and really enjoy it, which I think is a core ability to a developer.
                    </p>
                </div>
                <button onClick={this.props.handleTurn}>Turn</button>
            </div>
        );
    }
});




export default About;