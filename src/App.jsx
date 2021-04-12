import React, { useEffect, useState } from 'react';
import { fetchGet } from './gateway';
import Header from './page/header/Header';
import Search from './page/search/Search';
import Table from './page/table/Table';

const baseUrl = 'https://www.omdbapi.com/?s=evil&apikey=4a3b711b';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [value, setValue] = useState('');

  useEffect(() => {
    fetchGet()
      .then(res => {
          setData(res.Search);
          setLoading(true);
      })
  }, [])

  const handler = value => {
    setValue(value);

    fetchGet(value)
      .then(res => {
        if(res.Response === 'True') {
          setData(res.Search);
          setLoading(true);
        } else setLoading(false);
      })
  };

  return (
    <div className="container">
      <Header />
      <Search handler={handler} />
      <Table data={data} value={value} isLoading={isLoading}/> 
    </div>
  );
};

export default App;