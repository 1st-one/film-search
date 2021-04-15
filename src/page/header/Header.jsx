import React from 'react';
import { Link } from 'react-router-dom';
import { local } from '../../gateway';

const Header = ({ handlerHomeClick, onThemeHandler }) => {

    return (
        <div className="header" style={local.get('theme') === 'light' 
            ? {background: '#2C2E37', color: "black"} 
            : {background: '#fff', color: "#000"}}>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                <span className="header__title" onClick={handlerHomeClick} style={local.get('theme') === 'light' 
                    ? {color: '#fff'} 
                    : {color: '#000'}}>
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