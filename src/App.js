import { useState } from 'react';
import './App.css';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import AppSearch from './components/AppSearch';
import CactusItem from './components/CactusItem';
import CactusPost from './components/CactusPost';
import cactuss from './data/cactuss';


function App() {
  const [selected, setSelected] = useState(null);
  const [searchText, setSearchText] = useState('');

  function onCactusOpenClick(theCactus) {
    setSelected(theCactus);
  }

  function onCactusCloseClick() {
    setSelected(null)
  }

  const cactusElements = cactuss.filter((cactus) => {
    return cactus.sciName.includes(searchText);
  }).map((cactus, index) => {
    return <CactusItem key={index} cactus={cactus} onCactusClick={onCactusOpenClick} />;
  })

  let cactusPost = null;
  if (!!selected) {
    cactusPost = <CactusPost cactus={selected} onBgClick={onCactusCloseClick} />
  }

  return (
    <div className="App">

      <AppHeader />

      <section className="app-section">
        <div className="app-container" >
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">
            {cactusElements}
          </div>
        </div>
      </section>
      <AppFooter />
      {cactusPost}
      
    </div>
  );
}

export default App;


