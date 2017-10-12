import React from 'react';
import PropTypes from 'prop-types';

const NavMenu = props => {
    return (
        <div className="navigation">
            <button 
                className={`${props.currentPage === "home" ? "btn-active" : null} button-about btn-navigation` }
                onClick={() => {props.handleTurn(props.currentPage, "home")}}>
                Home
            </button>
            <button 
                className={`${props.currentPage === "about" ? "btn-active" : null} button-about btn-navigation` }
                onClick={() => {props.handleTurn(props.currentPage, "about")}}>
                About Me
            </button>
            <button 
                className={`${props.currentPage === "skill" ? "btn-active" : null} button-about btn-navigation` }
                onClick={() => {props.handleTurn(props.currentPage, "skill")}}>
                Skillset
            </button>
            <button 
                className={`${props.currentPage === "link" ? "btn-active" : null} button-about btn-navigation` } 
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