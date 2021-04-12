import React from 'react';
import icon from '../../imgs/defaultIcon.png';

const Table = ({ data, value, isLoading }) => {
    debugger
    return (
        <div className="table">
            <span className="table__label">
                {value ? `Вот информация по вашему запросу '${value}'` : null}
            </span>
            <div className="table__list">
                {isLoading 
                ? data.map(item => {
                    return (<div key={item.imdbID} className="table__list-item">
                        <span className="name">{item.Title}</span>
                        <img src={item.Poster !== 'N/A' ? item.Poster : icon} alt="" />
                        <span className="year">{item.Year}</span>
                    </div>)
                })
                : <h1 className='eps'>Films not found</h1>
            }
            </div>
        </div>
    );
};

export default Table;