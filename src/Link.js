import React from 'react';
import PropTypes from 'prop-types';
import ParticleImage from './ParticleImage';
import NavMenu from './NavMenu';

const Link = props => {
    return (
        <div className="link" style={props.styleContent}>
            <h2>Contact</h2>
            <div className="links-wrap row">
                <div className="links-box col-6">
                    <a href="https://github.com/Joey-z-rp" target="_blank">
                        <div className="links-icon">
                            <img src="./images/github.png" />
                            <ParticleImage width={200} height={200} url="./images/github.png" />
                        </div>
                    </a>
                    {/* <a href="https://www.linkedin.com/in/joey-zheng-13227214a/" target="_blank">
                        <ParticleImage width={200} height={200} url="./images/linkedin.png" />
                    </a>
                    <a href="https://codepen.io/Joey-z-rp/" target="_blank">
                        <ParticleImage width={200} height={200} url="./images/codepen.png" />
                    </a> */}
                </div>
                <div className="links-box col-6">
                    {/* <a href="product page/index.html" target="_blank">
                        <ParticleImage width={200} height={200} url="./images/phone.png" />
                    </a>
                    <a href="#" target="_blank">
                        <ParticleImage width={200} height={200} url="./images/facebook.png" />
                    </a> */}
                </div>
            </div>
            <NavMenu handleTurn={props.handleTurn} currentPage="link"/>
        </div>
    );
};

Link.ProtoTypes = {
    handleTurn: PropTypes.func.isRequired,
    styleContent: PropTypes.object.isRequired
};

export default Link;