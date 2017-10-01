import React from 'react';
import PropTypes from 'prop-types';
import LoadingCircle from './LoadingCircle';
import NavMenu from './NavMenu';
import SwitchingHeader from './SwitchingHeader';


const Skill = React.createClass({
    
        protoTypes : {
            handleTurn: PropTypes.func.isRequired,
            styleContent: PropTypes.object.isRequired
        },

        getInitialState: function(){
            return {
                display: 'random',
            };
        },
    
        componentDidMount(){
    
        },
    
        componentWillUnmount(){

        },

        displayRating: function(skill) {
            this.setState({display: skill});
        },
    
        render: function(){
            return (
                <div className="skill" style={this.props.styleContent}>
                    <h2>My skill set</h2>
                    <div className="skill-set-wrap row">
                        <div className="skill-set-left col-6">
                            <div className="html5 skill-pic" onClick={() => this.displayRating('html') } >
                                <img src="./html.png" />
                            </div>
                            <div className="css3 skill-pic" onClick={() => this.displayRating('css') } >
                                <img src="./css.png" />
                            </div>
                            <div className="javascript skill-pic" onClick={() => this.displayRating('js') } >
                                <img src="./javascript.png" />
                            </div>
                            <div className="react skill-pic">
                                <img src="./react.png" />
                            </div>
                            <div className="node skill-pic">
                                <img src="./node.png" />
                            </div>
                            <div className="asp-net skill-pic">
                                <img src="./asp-net.png" />
                            </div>
                            <div className="c-sharp skill-pic">
                                <img src="./c-sharp.png" />
                            </div>
                            <div className="ruby skill-pic">
                                <img src="./ruby.png" />
                            </div>
                            <div className="bootstrap skill-pic">
                                <img src="./bootstrap.png" />
                            </div>
                            <div className="jquery skill-pic">
                                <img src="./jquery.png" />
                            </div>
                            <div className="wordpress skill-pic">
                                <img src="./wordpress.png" />
                            </div>
                            <div className="rails skill-pic">
                                <img src="./rails.png" />
                            </div>
                            <div className="sass skill-pic">
                                <img src="./sass.png" />
                            </div>
                            <div className="git skill-pic">
                                <img src="./git.png" />
                            </div>
                        </div>
                        <div className="skill-set-right col-6">    
                                {
                                    (() => {
                                        switch(this.state.display){
                                            case 'random':
                                                return (
                                                    <div className="loadingCircle">
                                                        <SwitchingHeader />
                                                        <LoadingCircle number={70} width={310} height={310} infinite={true} />
                                                    </div>
                                                );
                                                break;
                                            case 'html':
                                                return (
                                                    <div className="loadingCircle">
                                                        <p>HTML</p>
                                                        <LoadingCircle number={70} width={310} height={310} />
                                                    </div>
                                                );
                                                break;
                                            case 'css':
                                                return (
                                                    <div className="loadingCircle">
                                                        <p>CSS</p>
                                                        <LoadingCircle number={70} width={310} height={310} />
                                                    </div>
                                                );
                                                break;
                                            case 'js':
                                                return (
                                                    <div className="loadingCircle">
                                                        <p>Javascript</p>
                                                        <LoadingCircle number={60} width={310} height={310} />
                                                    </div>
                                                );
                                                break;
                                            case 'react':
                                                return (
                                                    <div className="loadingCircle">
                                                        <p>React</p>
                                                        <LoadingCircle number={50} width={310} height={310} />
                                                    </div>
                                                );
                                                break;
                                            case 'node':
                                                return (
                                                    <div className="loadingCircle">
                                                        <p>Node.js</p>
                                                        <LoadingCircle number={40} width={310} height={310} />
                                                    </div>
                                                );
                                                break;
                                            case 'asp':
                                                return (
                                                    <div className="loadingCircle">
                                                        <p>ASP.NET</p>
                                                        <LoadingCircle number={30} width={310} height={310} />
                                                    </div>
                                                );
                                                break;
                                            case 'bootstrap':
                                                return (
                                                    <div className="loadingCircle">
                                                        <p>Bootstrap</p>
                                                        <LoadingCircle number={50} width={310} height={310} />
                                                    </div>
                                                );
                                                break;
                                            case 'jquery':
                                                return (
                                                    <div className="loadingCircle">
                                                        <p>jQuery</p>
                                                        <LoadingCircle number={50} width={310} height={310} />
                                                    </div>
                                                );
                                                break;
                                            case 'ruby':
                                                return (
                                                    <div className="loadingCircle">
                                                        <p>Ruby</p>
                                                        <LoadingCircle number={50} width={310} height={310} />
                                                    </div>
                                                );
                                                break;
                                            case 'rails':
                                                return (
                                                    <div className="loadingCircle">
                                                        <p>Rails</p>
                                                        <LoadingCircle number={40} width={310} height={310} />
                                                    </div>
                                                );
                                                break;
                                            case 'sass':
                                                return (
                                                    <div className="loadingCircle">
                                                        <p>Sass</p>
                                                        <LoadingCircle number={50} width={310} height={310} />
                                                    </div>
                                                );
                                                break;
                                            case 'git':
                                                return (
                                                    <div className="loadingCircle">
                                                        <p>Git</p>
                                                        <LoadingCircle number={60} width={310} height={310} />
                                                    </div>
                                                );
                                                break;
                                            case 'cSharp':
                                                return (
                                                    <div className="loadingCircle">
                                                        <p>C#</p>
                                                        <LoadingCircle number={40} width={310} height={310} />
                                                    </div>
                                                );
                                                break;
                                            case 'wordpress':
                                                return (
                                                    <div className="loadingCircle">
                                                        <p>Wordpress</p>
                                                        <LoadingCircle number={30} width={310} height={310} />
                                                    </div>
                                                );
                                                break;
                                        } 
                                    })()
                                }   
                        </div>
                    </div>
                    <NavMenu handleTurn={this.props.handleTurn} currentPage="skill"/>
                </div>
            );
        }
    });


export default Skill;