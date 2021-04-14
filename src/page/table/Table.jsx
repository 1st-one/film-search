import React from 'react';
import icon from '../../imgs/defaultIcon.png';
import { Link } from 'react-router-dom';

const Table = ({ data, value, isLoading, posterHandler }) => {
    return (
        <div className="table">
            <span className="table__label">
                {value ? `Вот информация по вашему запросу '${value}'` : null}
            </span>
            <iframe 
                title="prev" width="500" height="300" src="https://www.youtube.com/embed/8ugaeA-nMTc" 
                frameBorder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
            <div className="table__list">
                {isLoading 
                    ? data.map(item => {
                        return (
                            <Link to={`/film/${item.imdbID}/${item.Title}`}>
                                <div key={item.imdbID} className="table__list-item">
                                    <span className="name">{item.Title}</span>
                                    <img src={item.Poster !== 'N/A' ? item.Poster : icon} onClick={() => posterHandler(item.imdbID)} alt="" />
                                    <span className="year">{item.Year}</span>
                                </div>
                            </Link>
                            )})
                    : <h1 className='eps'>Films not found</h1>
                } 
            </div>         
        </div>
    );
};

export default Table;