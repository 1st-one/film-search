import React, { useEffect, useState } from 'react';
import Header from './page/header/Header';
import Search from './page/search/Search';
import Table from './page/table/Table';

const baseUrl = 'https://www.omdbapi.com/?s=evil&apikey=4a3b711b';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(res => setData(res.Search))
  }, [])

  const handler = value => {
    fetch(`https://www.omdbapi.com/?s=${value}&apikey=4a3b711b`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        console.error('Error')
      })
      .then(res => setData(res.Search))
  };

  return (
    <div className="container">
      <Header />
      <Search handler={handler} />
      <Table data={data} /> 
    </div>
  );
};

export default App;