import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { fetchGet } from '../../gateway';

const FilmPage = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchGet(props.match.params.filmTitle)
            .then(res => setData(res.Search))
    }, [props.match.params.filmTitle])

    return (
        <div className="film">
            {data.filter(item => item.imdbID === props.match.params.filmId)
                .map(item => {
                    return (
                        <div key={item.imdbID} className="table">
                            <a href={props.title} target="_blank" rel="noreferrer">
                                <img src={item.Poster} alt=""/>
                            </a>
                        </div>
                    )
                })}
        </div>
    );
};

export default withRouter(FilmPage);