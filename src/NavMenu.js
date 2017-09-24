import React from 'react';
import PropTypes from 'prop-types';

const NavMenu = props => {
    return (
        <div className="nav">

        </div>
    );
};

NavMenu.ProtoTypes = {
    handleTurn: PropTypes.func.isRequired,
    currentPage: PropTypes.string.isRequired
};

export default NavMenu;