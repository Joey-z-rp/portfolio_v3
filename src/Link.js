import React from 'react';
import PropTypes from 'prop-types';
import ParticleImage from './ParticleImage';
import NavMenu from './NavMenu';

let mouseHandler = null;
const Link = React.createClass({
    
        protoTypes : {
            handleTurn: PropTypes.func.isRequired,
            styleContent: PropTypes.object.isRequired
        },

        getInitialState: function(){
            return {
                display: 'none',
                h3Content: 'Check out my links',
                pContent: 'Hover on the icons to find out more.'
            };
        },
    
        componentDidMount(){
            window.addEventListener('mousemove', mouseHandler =  checkMouse.bind(this));
        },
    
        componentWillUnmount(){
            window.removeEventListener('mousemove', mouseHandler);
        },
    
        render: function(){
            return (
                <div className="link" style={this.props.styleContent}>
                    <div className="link-background"></div>
                    <h2>Contact</h2>
                    <div className="links-wrap row">
                        <div className="links-box col-6">
                            <div className="prompt-box">
                                <h4>{this.state.h3Content}</h4>
                                <p>{this.state.pContent}</p>
                            </div>
                            <div className="email-box">
                                <h4>Contact me:</h4>
                                <a href="mailto:joey.z.rp@gmail.com">joey.z.rp@gmail.com</a>
                            </div>
                            <div className="map-box">
                                <h4>Find me:</h4>
                                <div dangerouslySetInnerHTML={ {__html: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14148.82906159585!2d153.09385676954184!3d-27.556077250754907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915b50ac447a1f%3A0x502a35af3de9e30!2zV2lzaGFydCDmmIblo6vlhbDlt54gNDEyMg!5e0!3m2!1szh-CN!2sau!4v1506920802858' frameborder='0' style='border:0' allowfullscreen></iframe>"} }>
                            
                                </div>
                            </div>
                        </div>
                        <div className="links-box col-6">
                            <div className="row">
                                <a className="col-6" href="https://github.com/Joey-z-rp" target="_blank">
                                    <div className="links-icon github">
                                        <img src="./images/github.png" />
                                        {this.state.display === 'github' ? 
                                            <ParticleImage width={200} height={200} url="./images/github.png" /> : null }
                                    </div>
                                </a>
                                <a className="col-6" href="https://www.linkedin.com/in/joey-yu-zheng/" target="_blank">
                                    <div className="links-icon linkedin">
                                        <img src="./images/linkedin.png" />
                                        {this.state.display === 'linkedin' ? 
                                        <ParticleImage width={200} height={200} url="./images/linkedin.png" /> : null }
                                    </div>
                                </a>
                            </div>
                            <div className="row">
                                <a className="col-6" href="https://codepen.io/Joey-z-rp/" target="_blank">
                                    <div className="links-icon codepen">
                                        <img src="./images/codepen.png" />
                                        {this.state.display === 'codepen' ? 
                                        <ParticleImage width={200} height={200} url="./images/codepen.png" /> : null }
                                    </div>
                                </a>
                                <a className="col-6" href="product page/index.html" target="_blank">
                                    <div className="links-icon phone-demo">
                                        <img src="./images/phone.png" />
                                        {this.state.display === 'phone' ? 
                                        <ParticleImage width={200} height={200} url="./images/phone.png" /> : null }
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <NavMenu handleTurn={this.props.handleTurn} currentPage="link"/>
                </div>
            );
        }
    });

function checkMouse(event){
    const mousePos = getMousePos(event);
    if(isMouseOn(mousePos, '.github')){
        this.setState({
            display: "github",
            h3Content: 'My Github page',
            pContent: 'Commits show my commitment.'
        });
    }
    if(isMouseOn(mousePos, '.linkedin')){
        this.setState({
            display: "linkedin",
            h3Content: 'My Linkedin profile',
            pContent: 'Make new connection now.'
        });
    }
    if(isMouseOn(mousePos, '.codepen')){
        this.setState({
            display: "codepen",
            h3Content: 'My Codepen page',
            pContent: 'Fun and fancy animations here.'
        });
    }
    if(isMouseOn(mousePos, '.phone-demo')){
        this.setState({
            display: "phone",
            h3Content: 'Product demo page',
            pContent: 'A demo page made using HTML, CSS and plain Javascript.'
        });
    }

    if(!isMouseOn(mousePos, '.github') && 
        !isMouseOn(mousePos, '.linkedin') && 
        !isMouseOn(mousePos, '.codepen') && 
        !isMouseOn(mousePos, '.phone-demo')){
        this.setState({
            display: "none",
            h3Content: 'Check out my links',
            pContent: 'Hover on the icons to find out more.'
        });
    }
}

function isMouseOn(mousePos, className){
    const x = mousePos.x;
    const y = mousePos.y;
    const top = getElementPos(className).top;
    const bottom = getElementPos(className).bottom;
    const left = getElementPos(className).left;
    const right = getElementPos(className).right;
    if(x > left && x < right && y > top && y < bottom){
        return true;
    }else{
        return false;
    }
}

function getElementPos(className){
    const element = document.querySelector(className);
    return element.getBoundingClientRect();
}

function getMousePos(e){
    let posx = 0;
    let posy = 0;
    if (!e) {let e = window.event};
    if (e.pageX || e.pageY) 	{
        posx = e.pageX;
        posy = e.pageY;
    }
    else if (e.clientX || e.clientY) 	{
        posx = e.clientX + document.body.scrollLeft
            + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop
            + document.documentElement.scrollTop;
    }
    return {
        x : posx,
        y : posy
    };
}



export default Link;