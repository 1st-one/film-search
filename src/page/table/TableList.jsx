import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../imgs/defaultIcon.png';
import { connect } from 'react-redux';

const TableList = ({ search }) => {

    const {data, isLoading} = search;

    return (
        <div className="table__list">
        {isLoading 
            ? data.map(item => {
                return (
                    <Link to={`/film/${item.imdbID}/${item.Title}`} style={{ textDecoration: 'none', color: 'black' }}  key={item.imdbID}>
                        <div className="table__list-item">
                            <span className="name">{item.Title}</span>
                            <img src={item.Poster !== 'N/A' ? item.Poster : icon} alt="" />
                            <span className="year">{item.Year}</span>
                        </div>
                    </Link>
                    )})
            : <h1 className='eps'>Films not found</h1>
        } 
    </div>         
    );
};

const mapState = state => {
    return {
        search: state.reducerSearch,
    };
};

export default connect(mapState)(TableList);