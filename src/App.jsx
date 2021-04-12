import React, { useEffect } from 'react';
import { fetchGet } from './gateway';
import Header from './page/header/Header';
import Search from './page/search/Search';
import Table from './page/table/Table';
import { connect } from 'react-redux';
import * as searchAction from './store';

const App = ({ search, req, suc, fail }) => {

  useEffect(() => {
    fetchGet()
      .then(res => {
          suc(res.Search)
      })
  }, [])

  const handler = value => {
    fetchGet(value)
      .then(res => {
        if(res.Response === 'True') {
          suc(res.Search)
          req(value)
        } else fail();
      })
  };

  const {data, value, isLoading} = search;

  return (
    <div className="container">
      <Header />
      <Search handler={handler} />
      <Table data={data} value={value} isLoading={isLoading}/> 
    </div>
  );
};

const mapState = state => {
  return {
    search: state
  };
};

const mapDispatch = (dispatch) => {
  return {
    req: (value) => dispatch(searchAction.request(value)),
    suc: (data) => dispatch(searchAction.success(data)),
    fail: () => dispatch(searchAction.failed())
  };
}

export default connect(mapState, mapDispatch)(App);