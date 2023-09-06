import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Filters from './components/Filters';
import List from './components/List';
import { find } from './services/giphServices';

function App() {
  const [search, setSearch] = useState('');
  const [giphList, setGiphList] = useState([]);
  const requestFind = async () => {
    try {
      const { data: results } = await find(search);
      setGiphList(results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    requestFind();
  }, [search]);

  return (
    <main className="App">
      <Header></Header>
      <Body>
        <>
          <section className="filster-section">
            <Filters value={search} setValue={setSearch}></Filters>
          </section>
          <section>
            <List list={giphList}></List>
          </section>
        </>
      </Body>
    </main>
  );
}

export default App;
