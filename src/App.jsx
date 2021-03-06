import React, { useEffect } from 'react';
import { fetchGet } from './gateway';
import Header from './page/header/Header';
import Search from './page/search/Search';
import Table from './page/table/Table';
import { connect } from 'react-redux';
import * as searchAction from './store';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import FilmPage from './page/film/FilmPage';
import { local } from './gateway';

const url = 'https://www.youtube.com/results?search_query='

export const classElem = (className) => {
  const result = local.get('theme') === 'dark' ? `${className} dark` : `${className}`;
  return result;
};

const App = ({ search, req, suc, fail, ttl, thm }) => {

  useEffect(() => {
    if (local.get('theme') === null) {
      local.set('theme', 'light');
    };
    fetchGet()
      .then(res => {
        suc(res.Search)
      })
    thm(local.get('theme'));
  }, [suc, thm])


  const onThemeHandler = (e) => {
    const el = e.target.classList.value;
    thm(local.set('theme', el));
  };

  const handlerHomeClick = () => {
    fetchGet()
      .then(res => {
        suc(res.Search)
        req('')
      })
  };

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
    const title = [dataMovie[0].Title, dataMovie[0].Type, dataMovie[0].Year]
    const variableString = title.join('+').toLowerCase();
    ttl(`${url}${variableString.split(' ').join('+')}`);
  };

  const { data, value, isLoading } = search;

  return (
    <Router>
      <div className={classElem('container')}>
        <Switch>
          <Route exact path='/'>
            <Header
              classElem={classElem}
              handlerHomeClick={handlerHomeClick} 
              onThemeHandler={onThemeHandler} 
            />
            <Search handler={handler} />
            <Table 
              classElem={classElem}
              posterHandler={posterHandler} 
              data={data} 
              value={value} 
              isLoading={isLoading} 
            />
          </Route>
          <Route path='/film/:filmId/:filmTitle'>
            <Header 
              classElem={classElem}
              handlerHomeClick={handlerHomeClick} 
              onThemeHandler={onThemeHandler} 
            />
            <FilmPage 
              posterHandler={posterHandler} 
            />
          </Route>
          <Redirect to='/'></Redirect>
        </Switch>
      </div>
    </Router>
  );
};

const mapState = state => {
  return {
    search: state.reducerSearch,
    title: state.reducerTitle,
    theme: state.reducerTheme,
  };
};

const mapDispatch = (dispatch) => {
  return {
    req: (value) => dispatch(searchAction.request(value)),
    suc: (data) => dispatch(searchAction.success(data)),
    fail: () => dispatch(searchAction.failed()),
    ttl: (title) => dispatch(searchAction.setTitle(title)),
    thm: (theme) => dispatch(searchAction.setTheme(theme))
  };
};

export default connect(mapState, mapDispatch)(App);