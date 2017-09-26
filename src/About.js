import React from 'react';
import PropTypes from 'prop-types';
import NavMenu from './NavMenu';


const About = React.createClass({

    protoTypes : {
        handleTurn: PropTypes.func.isRequired,
        styleContent: PropTypes.object.isRequired
    },

    render: function(){
        return (
            <div className="about" style={this.props.styleContent} ref={ (div) => this.div = div} >
                <h2>My past and future</h2>
                <video autoPlay muted loop><source src="./backgroundVideoMinified.mp4" /></video>
                <div className="video-layer"></div>
                <div className="about-me-wrap">
                    <div className="about-me-box">
                        <img src="./images/bio.jpg" alt="my-picture" />
                        <p>
                            After 8 years' work as an aircraft maintenance engineer, I moved to Australia and started new life here. Computer science and information technology have always been my interest, so I decided to follow my heart and change career to be a software developer. I am familiar with HTML, CSS, Javascript, React.js, Node.js, Ruby, Rails etc. I am good at learning and really enjoy it, which I think is a core ability to a developer.
                        </p>
                    </div>
                </div>
                <NavMenu handleTurn={this.props.handleTurn} currentPage="about"/>
            </div>
        );
    }
});




export default About;