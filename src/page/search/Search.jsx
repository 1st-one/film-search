import React, { useState } from 'react';

const Search = () => {
    const [value, setValue] = useState('');

    const onValueHandle = event => {
        setValue(event.target.value)
    };

    return(
        <div className="search">
            <input value={value} onChange={(e) => onValueHandle(e)} type="text" className="search__input" placeholder="Enter the title of the movie"/>
            <button className="search__btn">search</button>
        </div>
    );
};

export default Search;