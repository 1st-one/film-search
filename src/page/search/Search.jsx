import React, { useState } from 'react';

const Search = ({handler}) => {
    const [value, setValue] = useState('');

    const onValueHandle = event => {
        setValue(event.target.value)
    };

    const onClick = () => {
        if(value === '') return;
        handler(value);
        setValue('');
    };

    const onKeyPressHandler = e => {
        if(e.charCode === 13) {
            onClick()
        };

        return;
    };

    return(
        <div className="search">
            <input value={value} onKeyPress={(e) => onKeyPressHandler(e)} onChange={(e) => onValueHandle(e)} type="text" className="search__input" placeholder="Enter the title of the movie"/>
            <button className="search__btn" onClick={onClick}>search</button>
        </div>
    );
};

export default Search;