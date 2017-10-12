import React from 'react';
import PropTypes from 'prop-types';

const NavMenu = props => {
    return (
        <div className="navigation">
            <button 
                className="button-about btn-navigation" 
                onClick={() => {props.handleTurn(props.currentPage, "home")}}>
                Home
            </button>
            <button 
                className="button-about btn-navigation" 
                onClick={() => {props.handleTurn(props.currentPage, "about")}}>
                About Me
            </button>
            <button 
                className="button-skill btn-navigation" 
                onClick={() => {props.handleTurn(props.currentPage, "skill")}}>
                Skillset
            </button>
            <button 
                className="button-link btn-navigation" 
                onClick={() => {props.handleTurn(props.currentPage, "link")}}>
                Contact
            </button>
        </div>
    );
};

NavMenu.ProtoTypes = {
    handleTurn: PropTypes.func.isRequired,
    currentPage: PropTypes.string.isRequired
};

export default NavMenu;