import React from 'react';
import PropTypes from 'prop-types';

const NavMenu = props => {
    return (
        <div className="nav">
            { props.currentPage === "about" ? null : <button 
                className="btn-about" 
                onClick={() => {props.handleTurn(props.currentPage, "about")}}>
                About Me
            </button> }
            { props.currentPage === "skill" ? null : <button 
                className="btn-skill" 
                onClick={() => {props.handleTurn(props.currentPage, "skill")}}>
                Skillset
            </button> }
            { props.currentPage === "link" ? null : <button 
                className="btn-link" 
                onClick={() => {props.handleTurn(props.currentPage, "link")}}>
                Contact
            </button> }
        </div>
    );
};

NavMenu.ProtoTypes = {
    handleTurn: PropTypes.func.isRequired,
    currentPage: PropTypes.string.isRequired
};

export default NavMenu;