import React from 'react';
import Header from './page/header/Header';
import Search from './page/search/Search';
import Table from './page/table/Table';

const App = () => {
  return(
    <div className="container">
      <Header />
      <Search />
      <Table />
    </div>
  );
};

export default App;