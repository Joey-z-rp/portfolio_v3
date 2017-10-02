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
                    <h2>Contact</h2>
                    <div className="links-wrap row">
                        <div className="links-box col-6">
                            

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
        this.setState({display: "github"});
    }
    if(isMouseOn(mousePos, '.linkedin')){
        this.setState({display: "linkedin"});
    }
    if(isMouseOn(mousePos, '.codepen')){
        this.setState({display: "codepen"});
    }
    if(isMouseOn(mousePos, '.phone-demo')){
        this.setState({display: "phone"});
    }

    if(!isMouseOn(mousePos, '.github') && 
        !isMouseOn(mousePos, '.linkedin') && 
        !isMouseOn(mousePos, '.codepen') && 
        !isMouseOn(mousePos, '.phone-demo')){
        this.setState({display: "none"});
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