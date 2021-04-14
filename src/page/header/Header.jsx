import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <Link to='/'>
            <div className="header">filmix</div>        
        </Link>
    );
};

export default Header;