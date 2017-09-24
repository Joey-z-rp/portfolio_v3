import React from 'react';
import PropTypes from 'prop-types';
import ParticleImage from './ParticleImage';

const Link = props => {
    return (
        <div className="link" style={props.styleContent}>
            <h2>Contact</h2>
            <div className="links-wrap">
                <div className="links-description">
                    Check out my github, linkedin, codepen and mobile phone product page demo here
                </div>
                <div className="links-box">
                    <a href="https://github.com/Joey-z-rp" target="_blank">
                        <ParticleImage width={200} height={200} url="./images/github.png" />
                    </a>
                    <a href="https://www.linkedin.com/in/joey-zheng-13227214a/" target="_blank">
                        <ParticleImage width={200} height={200} url="./images/linkedin.png" />
                    </a>
                    <a href="https://codepen.io/Joey-z-rp/" target="_blank">
                        <ParticleImage width={200} height={200} url="./images/codepen.png" />
                    </a>
                </div>
                <div className="links-box">
                    <a href="product page/index.html" target="_blank">
                        <ParticleImage width={200} height={200} url="./images/phone.png" />
                    </a>
                    <a href="#" target="_blank">
                        <ParticleImage width={200} height={200} url="./images/facebook.png" />
                    </a>
                </div>
            </div>
            <button onClick={props.handleTurn}>Turn</button>

        </div>
    );
};

Link.ProtoTypes = {
    handleTurn: PropTypes.func.isRequired,
    styleContent: PropTypes.object.isRequired
};

export default Link;