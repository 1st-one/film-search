import React from 'react';

const Table = ({ data }) => {

    return (
        <div className="table">
            <span className="table__label">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
            <div className="table__list">
                {data.map(item => {
                    return (<div key={item.imdbID} className="table__list-item">
                        <span className="name">{item.Title}</span>
                        <img src={item.Poster} alt="" />
                        <span className="year">{item.Year}</span>
                    </div>)
                })}
            </div>
        </div>
    );
};

export default Table;