import React from 'react';
import { Link } from 'react-router-dom';
import { local } from '../../gateway';

const Header = ({ handlerHomeClick, onThemeHandler, classElem }) => {
    return (
        <div className={classElem('header')}>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                <span className={classElem('header__title')} onClick={handlerHomeClick}>
                    filmix
                </span>
            </Link>
            <div className="theme">
                {local.get('theme') === 'dark' 
                    ? <div className="light" onClick={(e) => onThemeHandler(e)}>light</div>
                    : <div className="dark" onClick={(e) => onThemeHandler(e)}>dark</div>}                
            </div>
        </div>
    );
};

export default Header;