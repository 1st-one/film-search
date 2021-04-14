import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchGet } from '../../gateway';
import icon from '../../imgs/defaultIcon.png';
import TableList from '../table/TableList';
import * as searchAction from '../../store';

const FilmPage = ({ search, titleObj, match, posterHandler, suc }) => {

    const { data } = search;
    const { title } = titleObj;

    useEffect(() => {
        fetchGet(match.params.filmTitle)
            .then(res => suc(res.Search))
    }, [suc, match.params.filmTitle]);

    return (
        <div className="film">
            {data.filter(item => item.imdbID === match.params.filmId)
                .map(item => {
                    return (
                        <div key={item.imdbID} className="table">
                            <div className="description">
                                <span>
                                    Lorem, ipsum dolor sit amet 
                                    consectetur adipisicing elit. 
                                    Tenetur fugit atque, dolorem architecto 
                                    quasi exercitationem eos nam reiciendis 
                                    non veniam deleniti reprehenderit fugiat 
                                    laudantium ut saepe amet id dignissimos aspernatur.
                                </span>
                            </div>
                            <div className="table__list">
                                <div className="table__list-item">
                                    <span className="name">{item.Title}</span>
                                    <a href={title} target="_blank" rel="noreferrer">
                                        <img 
                                        src={item.Poster === 'N/A' ? icon : item.Poster} 
                                        onClick={() => posterHandler(item.imdbID)} 
                                        alt="" 
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            <div className="film__similar">
                <span>Similar Films</span>
                <TableList data={data} />
            </div>

        </div>
    );
};

const mapState = state => {
    return {
        search: state.reducerSearch,
        titleObj: state.reducerTitle
    };
};

const mapDispatch = dispatch => {
    return {
        suc: (data) => dispatch(searchAction.success(data))
    };
};

export default compose(
    withRouter,
    connect(mapState, mapDispatch)
)(FilmPage);