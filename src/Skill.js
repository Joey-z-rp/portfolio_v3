import React from 'react';
import PropTypes from 'prop-types';
import LoadingCircle from './LoadingCircle';
import NavMenu from './NavMenu';


const Skill = props => {
    return (
        <div className="skill" style={props.styleContent}>
            <h2>My skill set</h2>
            <div className="skill-set-wrap row">
                <div className="skill-set-left col-6">
                    <div className="html5 skill-pic">
                        <img src="./html.png" />
                    </div>
                </div>
                <div className="skill-set-right col-6">
                    <p>HTML</p>
                    <LoadingCircle number={70} width={200} height={200} infinite={true} />
                </div>

                {/* <div className="skill-set-upper-row">
                    <div>
                        <p>HTML</p>
                        <LoadingCircle number={70} width={200} height={200} infinite={true} />
                    </div>
                    <div>
                        <p>CSS</p>
                        <LoadingCircle number={70} width={200} height={200} />
                    </div>
                    <div>
                        <p>Javascript</p>
                        <LoadingCircle number={60} width={200} height={200} />
                    </div>
                </div>
                <div className="skill-set-lower-row">
                    <div>
                        <p>React</p>
                        <LoadingCircle number={50} width={200} height={200} />
                    </div>
                    <div>
                        <p>Node.js</p>
                        <LoadingCircle number={40} width={200} height={200} />
                    </div>
                    <div>
                        <p>ASP.NET</p>
                        <LoadingCircle number={40} width={200} height={200} />
                    </div>
                </div> */}
            </div>
            <NavMenu handleTurn={props.handleTurn} currentPage="skill"/>
        </div>
    );
};

Skill.ProtoTypes = {
    handleTurn: PropTypes.func.isRequired,
    styleContent: PropTypes.object.isRequired
};

export default Skill;