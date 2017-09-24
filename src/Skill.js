import React from 'react';
import PropTypes from 'prop-types';
import LoadingCircle from './LoadingCircle';


const Skill = props => {
    return (
        <div className="skill" style={props.styleContent}>
            <h2>My skill set</h2>
            <div className="skill-set-wrap">
                <div className="skill-set-upper-row">
                    <div>
                        <p>HTML</p>
                        <LoadingCircle number={70} width={200} height={200} />
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
                </div>
            </div>
            <button onClick={props.handleTurn}>Turn</button>
        </div>
    );
};

Skill.ProtoTypes = {
    handleTurn: PropTypes.func.isRequired,
    styleContent: PropTypes.object.isRequired
};

export default Skill;