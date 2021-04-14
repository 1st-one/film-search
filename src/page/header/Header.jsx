import React from 'react';
import { Link } from 'react-router-dom';

const Header = (handlerHomeClick) => {
    return (
        <div className="header">
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                <span onClick={handlerHomeClick}>
                    filmix
                </span>
            </Link>
        </div>
    );
};

export default Header;