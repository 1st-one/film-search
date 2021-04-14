import React, { useEffect, useState } from 'react';
import { fetchGet } from './gateway';
import Header from './page/header/Header';
import Search from './page/search/Search';
import Table from './page/table/Table';
import { connect } from 'react-redux';
import * as searchAction from './store';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import FilmPage from './page/film/FilmPage';

const url = 'https://www.youtube.com/results?search_query='

const App = ({ search, req, suc, fail }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetchGet()
      .then(res => {
        suc(res.Search)
      })
  }, [suc])

  const handler = value => {
    fetchGet(value)
      .then(res => {
        if (res.Response === 'True') {
          suc(res.Search)
          req(value)
        } else fail();
      })
  };

  const posterHandler = id => {
    const dataMovie = search.data.filter(item => item.imdbID === id);
    // const api_key = 'AIzaSyCBFtDjKegL9nuvU1BxTH0t1YERDEm5mtw';
    // const idVideo = '8ugaeA-nMTc';

    // `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${idVideo}&key=${api_key}`

    // fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${idVideo}&key=${api_key}`)
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res)
    //   })

    const title = [dataMovie[0].Title, dataMovie[0].Type, dataMovie[0].Year]
    const variableString = title.join('+').toLowerCase();

    setTitle(`${url}${variableString.split(' ').join('+')}`);
  };

  const { data, value, isLoading } = search;

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path='/'>
            <Header />
            <Search handler={handler} />
            <Table posterHandler={posterHandler} data={data} value={value} isLoading={isLoading} />
          </Route>
          <Route path='/film/:filmId/:filmTitle'>
            <Header />
            <FilmPage title={title} />
          </Route>
          <Redirect to='/'></Redirect>
        </Switch>
      </div>
    </Router>
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