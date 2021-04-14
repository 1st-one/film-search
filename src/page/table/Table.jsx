import React from 'react';
import TableList from './TableList';

const Table = ({ value, posterHandler }) => {
    return (
        <div className="table">
            <span className="table__label">
                {value ? `Вот информация по вашему запросу '${value}'` : null}
            </span>
            <TableList posterHandler={posterHandler}/>
        </div>
    );
};

export default Table;